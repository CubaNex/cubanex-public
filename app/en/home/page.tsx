import { textContent } from "@/constants/contents";

export default function Home() {
  const t = textContent.eng;

  return (
    <main className="pt-[100px] text-center px-5">
      <h1 className="text-4xl font-bold mb-4">{t.title}</h1>
      <p className="text-xl mb-6">{t.paragraph}</p>
      <input
        type="email"
        placeholder={t.placeholder}
        className="border border-gray-400 px-4 py-2 rounded-md mb-4"
      />
      <button
        className="px-6 py-2 rounded-full text-white font-medium"
        style={{
          background:
            "linear-gradient(90deg, #C766EF 0%, #7928D2 51%, #2B0C52 100%)",
        }}
      >
        {t.button}
      </button>

      <section className="mt-12 max-w-2xl mx-auto text-left">
        <p className="mb-4" dangerouslySetInnerHTML={{ __html: t.section }} />
        <blockquote className="italic mb-4">{t.verse}</blockquote>
        <p className="mb-4">{t.story}</p>
        <blockquote className="font-semibold">{t.quote}</blockquote>
      </section>
    </main>
  );
}
