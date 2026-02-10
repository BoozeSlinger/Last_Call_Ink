const { 
    Document, Packer, Paragraph, TextRun, 
    AlignmentType, HeadingLevel, Header, Footer, PageNumber, PageBreak
} = require('docx');
const fs = require('fs');

const doc = new Document({
    styles: {
        default: { document: { run: { font: "Arial", size: 24 } } },
        paragraphStyles: [
            { id: "Title", name: "Title", basedOn: "Normal",
              run: { size: 56, bold: true, color: "000000", font: "Arial" },
              paragraph: { spacing: { before: 240, after: 120 }, alignment: AlignmentType.CENTER } },
            { id: "Heading1", name: "Heading 1", basedOn: "Normal", next: "Normal", quickFormat: true,
              run: { size: 36, bold: true, color: "D97706", font: "Arial" },
              paragraph: { spacing: { before: 400, after: 240 }, outlineLevel: 0 } },
            { id: "Heading2", name: "Heading 2", basedOn: "Normal", next: "Normal", quickFormat: true,
              run: { size: 28, bold: true, color: "111827", font: "Arial" },
              paragraph: { spacing: { before: 300, after: 180 }, outlineLevel: 1 } },
        ]
    },
    sections: [{
        properties: { page: { margin: { top: 1440, right: 1440, bottom: 1440, left: 1440 } } },
        headers: {
            default: new Header({
                children: [
                    new Paragraph({
                        alignment: AlignmentType.RIGHT,
                        children: [new TextRun({ text: "LCC TECHNICAL BIBLE | AEO, AIO, GEO", size: 16, color: "666666" })]
                    })
                ]
            })
        },
        footers: {
            default: new Footer({
                children: [
                    new Paragraph({
                        alignment: AlignmentType.CENTER,
                        children: [
                            new TextRun({ text: "Page ", size: 16, color: "666666" }),
                            new TextRun({ children: [PageNumber.CURRENT], size: 16, color: "666666" }),
                            new TextRun({ text: " of ", size: 16, color: "666666" }),
                            new TextRun({ children: [PageNumber.TOTAL_PAGES], size: 16, color: "666666" })
                        ]
                    })
                ]
            })
        },
        children: [
            new Paragraph({ heading: HeadingLevel.TITLE, children: [new TextRun("THE AEO/AIO/GEO TECHNICAL BIBLE")] }),
            new Paragraph({ alignment: AlignmentType.CENTER, children: [new TextRun({ text: "Hospitality Entity Optimization for the AI Era", bold: true, size: 24 })] }),
            
            new Paragraph({ heading: HeadingLevel.HEADING_1, children: [new TextRun("SECTION 1: THE CORE GLOSSARY")] }),
            
            new Paragraph({ heading: HeadingLevel.HEADING_2, children: [new TextRun("01. AEO (Answer Engine Optimization)")] }),
            new Paragraph({ children: [new TextRun("Optimizing content so that 'Answer Engines' serve direct answers without requiring a click. For bars, this means being the answer Siri gives for late-night food or pool table queries.")] }),

            new Paragraph({ heading: HeadingLevel.HEADING_2, children: [new TextRun("02. AIO (AI Optimization)")] }),
            new Paragraph({ children: [new TextRun("Structuring data specifically for LLMs. It's about building factual certainty in your training data relevance so AIs include you in their citations.")] }),

            new Paragraph({ heading: HeadingLevel.HEADING_2, children: [new TextRun("03. GEO (Generative Engine Optimization)")] }),
            new Paragraph({ children: [new TextRun("Focusing on the 'Trust Signals' that make a Generative Engine (like Perplexity) choose you as its recommended answer.")] }),

            new Paragraph({ heading: HeadingLevel.HEADING_2, children: [new TextRun("04. Entities vs. Keywords")] }),
            new Paragraph({ children: [new TextRun("Keywords are strings. Entities are unique objects with attributes. We move bars from being 'words on a page' to defined entries in the Global Knowledge Graph.")] }),

            new Paragraph({ heading: HeadingLevel.HEADING_2, children: [new TextRun("05. Structured Data & Schema.org")] }),
            new Paragraph({ children: [new TextRun("The JSON-LD 'code language' that tells robots exactly what they're looking at (Menu items, prices, latitudes, ingredients).")] }),

            new Paragraph({ heading: HeadingLevel.HEADING_1, children: [new TextRun("SECTION 2: BEST PRACTICES")] }),

            new Paragraph({ heading: HeadingLevel.HEADING_2, children: [new TextRun("1. Schema Implementation")] }),
            new Paragraph({ children: [new TextRun("Every hospitality site must use nested MenuItem schema. Do not hide your offerings in PDFs; define them in code.")] }),

            new Paragraph({ heading: HeadingLevel.HEADING_2, children: [new TextRun("2. Semantic Content Hierarchy")] }),
            new Paragraph({ children: [new TextRun("Use H2 headers as questions. AI search looks for direct question-answer pairings to feature as snippets.")] }),

            new Paragraph({ heading: HeadingLevel.HEADING_2, children: [new TextRun("3. Entity Cohesion")] }),
            new Paragraph({ children: [new TextRun("Ensure your Name, Address, and Phone (NAP) are identical across all 20+ local directories to build an unbreakable trust score.")] }),

            new Paragraph({ heading: HeadingLevel.HEADING_2, children: [new TextRun("4. Mobile Speed Proxy")] }),
            new Paragraph({ children: [new TextRun("AI engines prioritize low-friction answers. If your site is slow, you are considered a 'Bad Answer' and your ranking will drop.")] }),

            new Paragraph({ spacing: { before: 800 }, children: [new TextRun({ text: "Generated for Last Call Collective | The House Standard", italics: true, color: "999999" })] })
        ]
    }]
});

Packer.toBuffer(doc).then(buffer => {
    fs.writeFileSync("/Users/ryanstevens/antigravity/projects/last_call_ink/docs/plans/LCC_Technical_AEO_Bible.docx", buffer);
    console.log("Document created successfully!");
});
