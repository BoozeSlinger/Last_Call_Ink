const { 
    Document, Packer, Paragraph, TextRun, Table, TableRow, TableCell,
    AlignmentType, HeadingLevel, Header, Footer, PageNumber, BorderStyle, WidthType, ShadingType
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
                        children: [new TextRun({ text: "LAST CALL COLLECTIVE | THE ANTI-AGENCY BATTLECARD", size: 16, color: "666666" })]
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
            new Paragraph({ heading: HeadingLevel.TITLE, children: [new TextRun("THE ANTI-AGENCY BATTLECARD")] }),
            new Paragraph({ alignment: AlignmentType.CENTER, children: [new TextRun({ text: "Vets in the Weeds vs. Vultures in the Clouds", bold: true, size: 24 })] }),
            
            new Paragraph({ heading: HeadingLevel.HEADING_1, children: [new TextRun("THE FRONT LINE")] }),
            new Paragraph({ children: [new TextRun({ text: "We have experience behind the bar... in the weeds, not just behind a computer screen. ", bold: true }), new TextRun("99% of agencies are staffed by digital generalists who have never pulled a tap or handled a 10:00 PM Saturday rush. They deal in 'clicks' and 'impressions'—metrics that don't pay the rent. We deal in Revenue and Regulars.")] }),

            new Paragraph({ heading: HeadingLevel.HEADING_1, children: [new TextRun("01. THE LOCAL ADVANTAGE")] }),
            new Paragraph({ children: [new TextRun({ text: "The Competition: ", bold: true }), new TextRun("Remote office parks, generic 'Hospitality Templates,' and AI-slop content. They visit once every 6 months to take a bill.")] }),
            new Paragraph({ children: [new TextRun({ text: "Last Call Collective: ", bold: true }), new TextRun("We are local. We are in the market. We show up in person because that's where the work happens. If you need a pivot for a big weekend, we're a five-minute drive away, not a scheduled Zoom call months from now.")] }),

            new Paragraph({ heading: HeadingLevel.HEADING_1, children: [new TextRun("02. INDUSTRY GRIT (15 YEARS OF SERVICE)")] }),
            new Paragraph({ children: [new TextRun({ text: "The Competition: ", bold: true }), new TextRun("Digital marketers who have never worked a double. To them, your bar is just another 'Client ID'.")] }),
            new Paragraph({ children: [new TextRun({ text: "Last Call Collective: ", bold: true }), new TextRun("15 years in this specific market. We've worked the shifts, lived the droughts, and managed the rushes. We understand the industry because it's our native tongue. We don't build generic websites; we build revenue engines.")] }),

            new Paragraph({ heading: HeadingLevel.HEADING_1, children: [new TextRun("03. NO TEMPLATES. NO AI SLOP.")] }),
            new Paragraph({ children: [new TextRun({ text: "The Competition: ", bold: true }), new TextRun("Recycled junk that looks like every other bar on the internet. PDF menus that AI can't read.")] }),
            new Paragraph({ children: [new TextRun({ text: "Last Call Collective: ", bold: true }), new TextRun("Custom-built infrastructure. Mobile-first, lightning-fast, and AEO/GEO optimized. We ensure you are the #1 Recommendation when a guest asks their phone 'Where should I grab a drink?'")] }),

            new Paragraph({ heading: HeadingLevel.HEADING_1, children: [new TextRun("SUMMARY COMPARISON")] }),
            new Table({
                columnWidths: [3120, 3120, 3120],
                rows: [
                    new TableRow({
                        tableHeader: true,
                        children: [
                            new TableCell({ width: { size: 3120, type: WidthType.DXA }, shading: { fill: "F3F4F6", type: ShadingType.CLEAR }, children: [new Paragraph({ children: [new TextRun({ text: "Feature", bold: true })] })] }),
                            new TableCell({ width: { size: 3120, type: WidthType.DXA }, shading: { fill: "F3F4F6", type: ShadingType.CLEAR }, children: [new Paragraph({ children: [new TextRun({ text: "The Corporate Agency", bold: true })] })] }),
                            new TableCell({ width: { size: 3120, type: WidthType.DXA }, shading: { fill: "F3F4F6", type: ShadingType.CLEAR }, children: [new Paragraph({ children: [new TextRun({ text: "Last Call Collective", bold: true })] })] }),
                        ]
                    }),
                    new TableRow({
                        children: [
                            new TableCell({ children: [new Paragraph({ children: [new TextRun("Street Cred")] })] }),
                            new TableCell({ children: [new Paragraph({ children: [new TextRun("Screens & Templates")] })] }),
                            new TableCell({ children: [new Paragraph({ children: [new TextRun("Vets in the weeds")] })] }),
                        ]
                    }),
                    new TableRow({
                        children: [
                            new TableCell({ children: [new Paragraph({ children: [new TextRun("Expertise")] })] }),
                            new TableCell({ children: [new Paragraph({ children: [new TextRun("Generalist Marketers")] })] }),
                            new TableCell({ children: [new Paragraph({ children: [new TextRun("15 Years Industry Vets")] })] }),
                        ]
                    }),
                    new TableRow({
                        children: [
                            new TableCell({ children: [new Paragraph({ children: [new TextRun("Technology")] })] }),
                            new TableCell({ children: [new Paragraph({ children: [new TextRun("AI-Slop & PDFs")] })] }),
                            new TableCell({ children: [new Paragraph({ children: [new TextRun("AEO/GEO Engine")] })] }),
                        ]
                    })
                ]
            }),

            new Paragraph({ spacing: { before: 800 }, children: [new TextRun({ text: "Last Call Collective | The House Standard", italics: true, color: "999999" })] })
        ]
    }]
});

Packer.toBuffer(doc).then(buffer => {
    fs.writeFileSync("/Users/ryanstevens/antigravity/projects/last_call_ink/docs/plans/LCC_Agency_Battlecard.docx", buffer);
    console.log("Document created successfully!");
});
