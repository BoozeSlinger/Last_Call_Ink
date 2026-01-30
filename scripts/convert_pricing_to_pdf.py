import re
import os
from reportlab.lib.pagesizes import letter
from reportlab.platypus import SimpleDocTemplate, Paragraph, Spacer, ListFlowable, ListItem
from reportlab.lib.styles import getSampleStyleSheet, ParagraphStyle
from reportlab.lib.enums import TA_LEFT

def parse_markdown_to_pdf(input_file, output_file):
    doc = SimpleDocTemplate(output_file, pagesize=letter,
                            rightMargin=72, leftMargin=72,
                            topMargin=72, bottomMargin=72)
    
    styles = getSampleStyleSheet()
    styles.add(ParagraphStyle(name='LCC_Title', parent=styles['Title'], fontSize=24, spaceAfter=20, alignment=TA_LEFT))
    styles.add(ParagraphStyle(name='LCC_H1', parent=styles['Heading1'], fontSize=18, spaceAfter=12, color='black'))
    styles.add(ParagraphStyle(name='LCC_H2', parent=styles['Heading2'], fontSize=14, spaceAfter=10, spaceBefore=10, color='black'))
    styles.add(ParagraphStyle(name='LCC_H3', parent=styles['Heading3'], fontSize=12, spaceAfter=8, spaceBefore=8, color='black'))
    styles.add(ParagraphStyle(name='LCC_Normal', parent=styles['Normal'], fontSize=11, spaceAfter=6, leading=14))
    styles.add(ParagraphStyle(name='LCC_Bullet', parent=styles['Normal'], fontSize=11, spaceAfter=6, leading=14, leftIndent=20))

    story = []
    
    with open(input_file, 'r') as f:
        lines = f.readlines()

    def format_text(text):
        # Bold
        text = re.sub(r'\*\*(.*?)\*\*', r'<b>\1</b>', text)
        # Italics (check for * not followed by space at start)
        text = re.sub(r'(?<!^)\*(.*?)\*', r'<i>\1</i>', text) # Simple *italic* in text
        # Strikethrough
        text = re.sub(r'~~(.*?)~~', r'<strike>\1</strike>', text)
        return text

    current_list_items = []

    for line in lines:
        line = line.strip()
        if not line:
            if current_list_items:
                story.append(ListFlowable(current_list_items, bulletType='bullet', start='circle', leftIndent=20))
                current_list_items = []
            story.append(Spacer(1, 6))
            continue
            
        formatted_line = format_text(line)

        # Headers
        if line.startswith('# '):
            if current_list_items:
                story.append(ListFlowable(current_list_items, bulletType='bullet', start='circle', leftIndent=20))
                current_list_items = []
            story.append(Paragraph(formatted_line[2:], styles['LCC_Title']))
            story.append(Spacer(1, 12))
        elif line.startswith('## '):
            if current_list_items:
                story.append(ListFlowable(current_list_items, bulletType='bullet', start='circle', leftIndent=20))
                current_list_items = []
            story.append(Paragraph(formatted_line[3:], styles['LCC_H1']))
            story.append(Spacer(1, 6))
        elif line.startswith('### '):
            if current_list_items:
                story.append(ListFlowable(current_list_items, bulletType='bullet', start='circle', leftIndent=20))
                current_list_items = []
            story.append(Paragraph(formatted_line[4:], styles['LCC_H2']))
        # List items
        elif line.startswith('* ') or line.startswith('- ') or (len(line) > 2 and line[0].isdigit() and line[1] == '.'):
            # Clean content
            if line.startswith('* '): content = formatted_line[2:]
            elif line.startswith('- '): content = formatted_line[2:]
            else: content = formatted_line.split('.', 1)[1].strip() # Numbered list treated as bullet for simplicity or managed
            
            p = Paragraph(content, styles['LCC_Normal'])
            current_list_items.append(ListItem(p))
        
        # Horizontal Rule (---)
        elif line == '---':
             if current_list_items:
                story.append(ListFlowable(current_list_items, bulletType='bullet', start='circle', leftIndent=20))
                current_list_items = []
             story.append(Spacer(1, 12))
             # Could add a line graphic but Spacer is fine for visual separation
        
        # Normal Text
        else:
            if current_list_items:
                story.append(ListFlowable(current_list_items, bulletType='bullet', start='circle', leftIndent=20))
                current_list_items = []
            story.append(Paragraph(formatted_line, styles['LCC_Normal']))
            
    # Flush remaining list
    if current_list_items:
        story.append(ListFlowable(current_list_items, bulletType='bullet', start='circle', leftIndent=20))

    try:
        doc.build(story)
        print(f"Successfully created PDF: {output_file}")
    except Exception as e:
        print(f"Error creating PDF: {e}")

if __name__ == "__main__":
    input_md = "/Users/ryanstevens/antigravity/projects/last-call-collective/docs/plans/Last_Call_Collective_Revamped_Pricing.md"
    output_pdf = "/Users/ryanstevens/antigravity/projects/last-call-collective/docs/plans/Last_Call_Collective_Official_Pricing.pdf"
    
    # Ensure directory exists
    os.makedirs(os.path.dirname(output_pdf), exist_ok=True)
    
    parse_markdown_to_pdf(input_md, output_pdf)
