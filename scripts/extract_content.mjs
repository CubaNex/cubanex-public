import fs from 'fs';
import path from 'path';

const APP_DIR = './app';
const OUTPUT_FILE = './lib/knowledge-base.json';

function extractTextFromTsx(filePath) {
    const content = fs.readFileSync(filePath, 'utf-8');

    // Extract strings from JSX/TSX
    // This regex looks for text between tags, but also simple strings in quotes if they look like sentences
    const tagMatches = content.match(/>([^<>{}\n\t]+)</g) || [];
    const attrMatches = content.match(/(?:title|description|label|brandText|SD|homeheroTitle|herotitleSpan)="([^"]+)"/g) || [];
    const textNodes = tagMatches.map(m => m.slice(1, -1).trim()).filter(t => t.length > 5);
    const attrNodes = attrMatches.map(m => m.split('=')[1].slice(1, -1).trim());

    // Also look for hardcoded text inside constant files if possible, 
    // but for now let's focus on the page files.

    return [...new Set([...textNodes, ...attrNodes])].join(' ');
}

function walkDir(dir, callback) {
    fs.readdirSync(dir).forEach(file => {
        const fullPath = path.join(dir, file);
        if (fs.lstatSync(fullPath).isDirectory()) {
            walkDir(fullPath, callback);
        } else if (file.endsWith('page.tsx')) {
            callback(fullPath);
        }
    });
}

const knowledgeBase = [];

walkDir(APP_DIR, (filePath) => {
    console.log(`Processing ${filePath}...`);
    const text = extractTextFromTsx(filePath);
    if (text) {
        knowledgeBase.push({
            path: filePath,
            content: text,
            metadata: {
                title: path.basename(path.dirname(filePath)) || 'Home',
                url: filePath.replace('app', '').replace('\\page.tsx', '').replace('/page.tsx', '') || '/'
            }
        });
    }
});

// Add some high-level context if not found
const globalContext = {
    project: "CubaNex",
    token: "CNEX",
    blockchain: "BNB Smart Chain (BEP-20)",
    total_supply: "100,000,000,000 CNEX",
    contract: "0xf073d173Ed309f8A208e6C183eFf858DbC882DbB",
    founder: "The Alchemist (Anonymous)",
    mission: "Driving sustainable Web3 development in Cuba through blockchain solutions, AI, and community empowerment.",
    official_links: {
        twitter: "https://x.com/CubaNexOfficial",
        telegram: "https://t.me/CubaNexOfficial",
        github: "https://github.com/CubaNex"
    }
};

const finalData = {
    globalContext,
    pages: knowledgeBase
};

fs.writeFileSync(OUTPUT_FILE, JSON.stringify(finalData, null, 2));
console.log(`Done! Knowledge base saved to ${OUTPUT_FILE}`);
