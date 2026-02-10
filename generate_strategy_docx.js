const { 
    Document, Packer, Paragraph, TextRun, Table, TableRow, TableCell, 
    AlignmentType, HeadingLevel, LevelFormat, BorderStyle, WidthType, 
    ShadingType, PageBreak, Header, Footer, PageNumber, UnderlineType
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
              run: { size: 40, bold: true, color: "D97706", font: "Arial" }, // Amber-600 color
              paragraph: { spacing: { before: 400, after: 240 }, outlineLevel: 0 } },
            { id: "Heading2", name: "Heading 2", basedOn: "Normal", next: "Normal", quickFormat: true,
              run: { size: 32, bold: true, color: "111827", font: "Arial" },
              paragraph: { spacing: { before: 300, after: 180 }, outlineLevel: 1 } },
        ]
    },
    numbering: {
        config: [
            { reference: "bullet-list",
              levels: [{ level: 0, format: LevelFormat.BULLET, text: "•", alignment: AlignmentType.LEFT,
                style: { paragraph: { indent: { left: 720, hanging: 360 } } } }] },
            { reference: "numbered-list",
              levels: [{ level: 0, format: LevelFormat.DECIMAL, text: "%1.", alignment: AlignmentType.LEFT,
                style: { paragraph: { indent: { left: 720, hanging: 360 } } } }] }
        ]
    },
    sections: [{
        properties: { page: { margin: { top: 1440, right: 1440, bottom: 1440, left: 1440 } } },
        headers: {
            default: new Header({
                children: [
                    new Paragraph({
                        alignment: AlignmentType.RIGHT,
                        children: [new TextRun({ text: "LAST CALL COLLECTIVE | STRATEGIC GROWTH BLUEPRINT", size: 16, color: "666666" })]
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
            new Paragraph({ heading: HeadingLevel.TITLE, children: [new TextRun("LAST CALL COLLECTIVE")] }),
            new Paragraph({ alignment: AlignmentType.CENTER, children: [new TextRun({ text: "THE BAR & RESTAURANT GROWTH BLUEPRINT", bold: true, size: 28 })] }),
            new Paragraph({ spacing: { before: 200, after: 400 }, alignment: AlignmentType.CENTER, children: [new TextRun({ text: "Making your bar the top recommendation, every time.", italics: true, color: "666666" })] }),

            new Paragraph({ heading: HeadingLevel.HEADING_1, children: [new TextRun("CORE MISSION")] }),
            new Paragraph({ children: [new TextRun("To transform local bars and restaurants from invisible digital entities into dominant top recommendations across search and AI platforms (AEO/SEO/GEO). We solve the hospitality friction problem by providing a high-performance digital foundation and activating automated revenue engines.")] }),

            new Paragraph({ heading: HeadingLevel.HEADING_1, children: [new TextRun("PHASE 1: THE FOUNDATION")] }),

            new Paragraph({ heading: HeadingLevel.HEADING_2, children: [new TextRun("01. AEO/SEO OPTIMIZED WEBSITE (THE ENTITY HUB)")] }),
            new Paragraph({ children: [new TextRun({ text: "What it is: ", bold: true }), new TextRun("A custom-built, high-conversion web property designed for the Answer Engine era.")] }),
            new Paragraph({ children: [new TextRun({ text: "The Value: ", bold: true }), new TextRun("Traditional websites are digital brochures; this is a data hub. It ensures that when a guest asks Siri or ChatGPT for a 'bar with great mezcal,' your venue is the definitive answer returned.")] }),
            new Paragraph({ children: [new TextRun({ text: "The Mechanics: ", bold: true }), new TextRun("We use advanced Schema.org (JSON-LD) markup to define your menu, location, and ambiance in a language AI models natively understand. This reduces 'Zero-Click' friction by feeding data directly into the search results page.")] }),

            new Paragraph({ heading: HeadingLevel.HEADING_2, children: [new TextRun("02. 2-HOUR CONTENT STUDIO")] }),
            new Paragraph({ children: [new TextRun({ text: "What it is: ", bold: true }), new TextRun("A professional, high-impact on-site production session focused on visual storytelling.")] }),
            new Paragraph({ children: [new TextRun({ text: "The Value: ", bold: true }), new TextRun("In a visual industry, your cocktails are your currency. High-production assets justify premium pricing and force the 'Vibe Check' conversion before the guest arrives.")] }),
            new Paragraph({ children: [new TextRun({ text: "The Mechanics: ", bold: true }), new TextRun("Delivery of 50 edited assets + 5 high-impact reels. These assets are metadata-tagged with geocoordinates to boost local search relevance.")] }),

            new Paragraph({ heading: HeadingLevel.HEADING_2, children: [new TextRun("03. DIGITAL INFRASTRUCTURE")] }),
            new Paragraph({ children: [new TextRun({ text: "What it is: ", bold: true }), new TextRun("Universal synchronization of location data across 20+ global directories.")] }),
            new Paragraph({ children: [new TextRun({ text: "The Value: ", bold: true }), new TextRun("Inconsistency kills ranking. If your hours are wrong in even one place, the algorithm loses trust and moves you down the list.")] }),
            new Paragraph({ children: [new TextRun({ text: "The Mechanics: ", bold: true }), new TextRun("Automated API sync ensures a 100% accurate signal for hours, menu, and contact info, eliminating client friction and bad data reviews.")] }),

            new Paragraph({ children: [new PageBreak()] }),

            new Paragraph({ heading: HeadingLevel.HEADING_2, children: [new TextRun("04. THE EQUITY VAULT (DATA OWNERSHIP)")] }),
            new Paragraph({ children: [new TextRun({ text: "What it is: ", bold: true }), new TextRun("A proprietary first-party database of guest emails and phone numbers.")] }),
            new Paragraph({ children: [new TextRun({ text: "The Value: ", bold: true }), new TextRun("You cannot scale a business on 'rented' audiences (social media). The Equity Vault gives you a 'Fill The Seats' button you can press without paying for ads. $1 invested in owned lists yields $36+ in ROI.")] }),
            new Paragraph({ children: [new TextRun({ text: "The Mechanics: ", bold: true }), new TextRun("Custom landing pages and lead-capture systems (QR/WiFi/Contests) that funnel guest data into a CRM you own 100%.")] }),

            new Paragraph({ heading: HeadingLevel.HEADING_2, children: [new TextRun("05. CUSTOM ASSET DESIGN")] }),
            new Paragraph({ children: [new TextRun({ text: "What it is: ", bold: true }), new TextRun("High-res, on-brand QR collateral (Table tents, stickers, signage).")] }),
            new Paragraph({ children: [new TextRun({ text: "The Value: ", bold: true }), new TextRun("Makes data capture frictionless and automatic. Your staff focuses on hospitality while the physical assets focus on building your digital empire.")] }),
            new Paragraph({ children: [new TextRun({ text: "The Mechanics: ", bold: true }), new TextRun("Strategic placement design to maximize opt-in rates and bridge the physical-to-digital gap.")] }),

            new Paragraph({ heading: HeadingLevel.HEADING_2, children: [new TextRun("06. AUTOMATED MISSED CALL TEXT-BACK")] }),
            new Paragraph({ children: [new TextRun({ text: "What it is: ", bold: true }), new TextRun("An AI-driven safety net for hospitality phones.")] }),
            new Paragraph({ children: [new TextRun({ text: "The Value: ", bold: true }), new TextRun("Every unanswered call is a lost reservation or walk-in. The system immediately engages the guest via text, securing the booking before they call a competitor.")] }),
            new Paragraph({ children: [new TextRun({ text: "The Mechanics: ", bold: true }), new TextRun("Instant SMS trigger upon missed call detection with links to bookings or tonight's specials.")] }),

            new Paragraph({ heading: HeadingLevel.HEADING_1, children: [new TextRun("PHASE 2: REVENUE ENGINES")] }),

            new Paragraph({ heading: HeadingLevel.HEADING_2, children: [new TextRun("THE WELL ($449/mo)")] }),
            new Paragraph({ children: [new TextRun({ text: "Reputation Defense: ", bold: true }), new TextRun("Ensures your hard-earned reputation is protected. It signals 'Evidence of Life' to AI through professional responses to all guest feedback.")] }),
            new Paragraph({ children: [new TextRun({ text: "The Active Signal: ", bold: true }), new TextRun("Weekly updates that tell Google and AI that you are active, open, and thriving.")] }),

            new Paragraph({ heading: HeadingLevel.HEADING_2, children: [new TextRun("THE CALL ($1,149/mo) - THE GROWTH ENGINE")] }),
            new Paragraph({ children: [new TextRun({ text: "The Liquid Asset System: ", bold: true }), new TextRun("Systematic 'Pours' (SMS blasts) for specific events, slow nights, or spirit releases.")] }),
            new Paragraph({ children: [new TextRun({ text: "Group Revenue Engine: ", bold: true }), new TextRun("Automated targeting of birthdays and anniversaries to secure high-margin large group bookings.")] }),

            new Paragraph({ heading: HeadingLevel.HEADING_2, children: [new TextRun("TOP SHELF ($2,449/mo) - MARKET DOMINANCE")] }),
            new Paragraph({ children: [new TextRun("Total market saturation. For venues that want to be the undisputed #1 choice in their city. Includes monthly content studio refreshes and priority VIP agency access.")] }),

            new Paragraph({ spacing: { before: 800 }, children: [new TextRun({ text: "Generated by Last Call Collective | The House Standard", italics: true, color: "999999" })] })
        ]
    }]
});

Packer.toBuffer(doc).then(buffer => {
    fs.writeFileSync("/Users/ryanstevens/antigravity/projects/last_call_ink/docs/plans/LCC_Growth_Blueprint.docx", buffer);
    console.log("Document created successfully!");
});
