# CubaNex AI Chatbot: Vector Store & Embeddings Guide

To make your chatbot highly professional and context-aware, we've implemented a Knowledge Base system. For a production-ready version that "dynamically explores" your content, here is the step-by-step guide to setting up a Vector Store.

## 1. Structure Your Content
The `scripts/extract_content.mjs` script I've created scrapes your `app/` directory and extracts text from your pages. It stores them in `lib/knowledge-base.json`.

**Best Practice:**
- Break large pages into small "chunks" (e.g., 500-1000 characters).
- Maintain metadata (URL, Title) for each chunk so the AI can cite sources.

## 2. Generate Embeddings with Gemini
You can use the `embedding-001` model from Google Gemini to convert text chunks into numerical vectors (embeddings).

```typescript
import { GoogleGenerativeAI } from "@google/generative-ai";

const genAI = new GoogleGenerativeAI(process.env.GOOGLE_GEMINI_API_KEY);
const model = genAI.getGenerativeModel({ model: "embedding-001" });

async function getEmbedding(text: string) {
  const result = await model.embedContent(text);
  return result.embedding.values;
}
```

## 3. Store in Vector Database (Supabase)
Since you already use Supabase, we recommend **pgvector**.

### SQL Setup (Run in Supabase SQL Editor):
```sql
-- Enable the pgvector extension
create extension if not exists vector;

-- Create a table to store your knowledge
create table documents (
  id bigserial primary key,
  content text,
  metadata jsonb,
  embedding vector(768) -- Gemini embeddings are 768 dimensions
);

-- Create a search function
create or replace function match_documents (
  query_embedding vector(768),
  match_threshold float,
  match_count int
)
returns table (
  id bigint,
  content text,
  metadata jsonb,
  similarity float
)
language plpgsql
as $$
begin
  return query
  select
    documents.id,
    documents.content,
    documents.metadata,
    1 - (documents.embedding <=> query_embedding) as similarity
  from documents
  where 1 - (documents.embedding <=> query_embedding) > match_threshold
  order by similarity desc
  limit match_count;
end;
$$;
```

## 4. Connect Vector Store with Gemini AI
Every time a user asks a question:
1. Generate an embedding for the **user's question**.
2. Query Supabase to find the **most similar** chunks.
3. Pass those chunks into Gemini's **System Prompt** as context.

## 5. Security
- **API Keys:** Never expose `GOOGLE_GEMINI_API_KEY` on the frontend. Always use a Backend API Route (`app/api/chat/route.ts`).
- **Rate Limiting:** Implement rate limiting on your API route to prevent abuse.
- **Environment Variables:** Use `.env` for all secrets and ensure it's in `.gitignore`.

---
*The current implementation in your project uses the `knowledge-base.json` directly as context for speed and ease of use, which is excellent for the current size of your website.*
