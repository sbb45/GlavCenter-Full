'use client'
import React from 'react';
import styled from 'styled-components';

interface RichTextNode {
  type: string;
  children?: RichTextNode[];
  text?: string;
  level?: number;
  textAlign?: string;
  bold?: boolean;
  italic?: boolean;
  underline?: boolean;
  href?: string;
  [key: string]: any;
}

interface RichTextRendererProps {
  document: RichTextNode[];
}

const RichTextContainer = styled.div`
  .rich-text-content {
    h1, h2, h3, h4, h5, h6 {
      margin-top: 2rem;
      margin-bottom: 1rem;
      color: #1f2937;
      font-weight: 600;
    }
    
    h1 {
      font-size: 2.5rem;
      border-bottom: 3px solid #3b82f6;
      padding-bottom: 0.5rem;
    }
    
    h2 {
      font-size: 2rem;
      border-bottom: 2px solid #e5e7eb;
      padding-bottom: 0.5rem;
    }
    
    h3 {
      font-size: 1.5rem;
    }
    
    h4 {
      font-size: 1.25rem;
    }
    
    p {
      margin-bottom: .3rem;
      color: #374151;
      font-size: 1.1rem;
      line-height: 1.8;
    }
    
    blockquote {
      border-left: 4px solid #3b82f6;
      padding-left: 1.5rem;
      margin: 2rem 0;
      background: #f8fafc;
      padding: 1.5rem;
      border-radius: 0 8px 8px 0;
      font-style: italic;
      color: #4b5563;
    }
    
    ul, ol {
      margin: 1.5rem 0;
      padding-left: 2rem;
      
      li {
        margin-bottom: 0.5rem;
        color: #374151;
      }
    }
    
    ul {
      list-style-type: disc;
    }
    
    ol {
      list-style-type: decimal;
    }
    
    a {
      color: #3b82f6;
      text-decoration: underline;
      transition: color 0.2s;
      
      &:hover {
        color: #2563eb;
      }
    }
    
    strong, b {
      font-weight: 700;
    }
    
    em, i {
      font-style: italic;
    }
    
    u {
      text-decoration: underline;
    }
  }
`;

const StyledParagraph = styled.p<{ textAlign?: string }>`
  margin-bottom: 1.5rem;
  color: #374151;
  font-size: 1.1rem;
  line-height: 1.8;
  text-align: ${props => props.textAlign || 'left'};
`;

const StyledHeading1 = styled.h1<{ textAlign?: string }>`
  margin-top: 2rem;
  margin-bottom: 1rem;
  color: #1f2937;
  font-weight: 600;
  font-size: 2.5rem;
  border-bottom: 3px solid #3b82f6;
  padding-bottom: 0.5rem;
  text-align: ${props => props.textAlign || 'left'};
`;

const StyledHeading2 = styled.h2<{ textAlign?: string }>`
  margin-top: 2rem;
  margin-bottom: 1rem;
  color: #1f2937;
  font-weight: 600;
  font-size: 2rem;
  border-bottom: 2px solid #e5e7eb;
  padding-bottom: 0.5rem;
  text-align: ${props => props.textAlign || 'left'};
`;

const StyledHeading3 = styled.h3<{ textAlign?: string }>`
  margin-top: 2rem;
  margin-bottom: 1rem;
  color: #1f2937;
  font-weight: 600;
  font-size: 1.5rem;
  text-align: ${props => props.textAlign || 'left'};
`;

const StyledHeading4 = styled.h4<{ textAlign?: string }>`
  margin-top: 2rem;
  margin-bottom: 1rem;
  color: #1f2937;
  font-weight: 600;
  font-size: 1.25rem;
  text-align: ${props => props.textAlign || 'left'};
`;

const StyledHeading5 = styled.h5<{ textAlign?: string }>`
  margin-top: 2rem;
  margin-bottom: 1rem;
  color: #1f2937;
  font-weight: 600;
  font-size: 1.125rem;
  text-align: ${props => props.textAlign || 'left'};
`;

const StyledHeading6 = styled.h6<{ textAlign?: string }>`
  margin-top: 2rem;
  margin-bottom: 1rem;
  color: #1f2937;
  font-weight: 600;
  font-size: 1rem;
  text-align: ${props => props.textAlign || 'left'};
`;

const StyledBlockquote = styled.blockquote`
  border-left: 4px solid #3b82f6;
  padding-left: 1.5rem;
  margin: 2rem 0;
  background: #f8fafc;
  padding: 1.5rem;
  border-radius: 0 8px 8px 0;
  font-style: italic;
  color: #4b5563;
`;

const StyledList = styled.ul`
  margin: 1.5rem 0;
  padding-left: 2rem;
  list-style-type: disc;
  
  li {
    margin-bottom: 0.5rem;
    color: #374151;
  }
`;

const StyledOrderedList = styled.ol`
  margin: 1.5rem 0;
  padding-left: 2rem;
  list-style-type: decimal;
  
  li {
    margin-bottom: 0.5rem;
    color: #374151;
  }
`;

const RichTextRenderer: React.FC<RichTextRendererProps> = ({ document }) => {
  const renderNode = (node: RichTextNode, index: number): React.ReactNode => {
    // Обработка текстовых узлов с форматированием
    if (node.text) {
      let text: React.ReactNode = node.text;
      
      // Применяем форматирование
      if (node.bold) {
        text = <strong key={index}>{text}</strong>;
      }
      if (node.italic) {
        text = <em key={index}>{text}</em>;
      }
      if (node.underline) {
        text = <u key={index}>{text}</u>;
      }
      if (node.href) {
        // Проверяем, является ли ссылка относительной и добавляем протокол если нужно
        let href = node.href;
        if (href && !href.startsWith('http://') && !href.startsWith('https://')) {
          href = 'https://' + href;
        }
        text = <a key={index} href={href} target="_blank" rel="noopener noreferrer">{text}</a>;
      }
      
      return text;
    }

    if (!node.children) {
      return null;
    }

    const children = node.children.map((child, childIndex) => 
      renderNode(child, childIndex)
    );

    switch (node.type) {
      case 'paragraph':
        return (
          <StyledParagraph 
            key={index}
            textAlign={node.textAlign}
          >
            {children}
          </StyledParagraph>
        );
      
      case 'heading':
        const level = node.level || 1;
        const textAlign = node.textAlign;
        
        switch (level) {
          case 1:
            return <StyledHeading1 key={index} textAlign={textAlign}>{children}</StyledHeading1>;
          case 2:
            return <StyledHeading2 key={index} textAlign={textAlign}>{children}</StyledHeading2>;
          case 3:
            return <StyledHeading3 key={index} textAlign={textAlign}>{children}</StyledHeading3>;
          case 4:
            return <StyledHeading4 key={index} textAlign={textAlign}>{children}</StyledHeading4>;
          case 5:
            return <StyledHeading5 key={index} textAlign={textAlign}>{children}</StyledHeading5>;
          case 6:
            return <StyledHeading6 key={index} textAlign={textAlign}>{children}</StyledHeading6>;
          default:
            return <StyledHeading1 key={index} textAlign={textAlign}>{children}</StyledHeading1>;
        }
      
      case 'blockquote':
        return (
          <StyledBlockquote key={index}>
            {children}
          </StyledBlockquote>
        );
      
      case 'unordered-list':
        return (
          <StyledList key={index}>
            {children}
          </StyledList>
        );
      
      case 'ordered-list':
        return (
          <StyledOrderedList key={index}>
            {children}
          </StyledOrderedList>
        );
      
      case 'list-item':
        return (
          <li key={index} style={{ marginBottom: '0.5rem' }}>
            {children}
          </li>
        );
      
      case 'list-item-content':
        return <span key={index}>{children}</span>;
      
      // Обработка форматирования текста
      case 'bold':
        return <strong key={index}>{children}</strong>;
      
      case 'italic':
        return <em key={index}>{children}</em>;
      
      case 'underline':
        return <u key={index}>{children}</u>;
      
      case 'link':
        // Проверяем, является ли ссылка относительной и добавляем протокол если нужно
        let href = node.href;
        if (href && !href.startsWith('http://') && !href.startsWith('https://')) {
          href = 'https://' + href;
        }
        return (
          <a 
            key={index} 
            href={href} 
            target="_blank" 
            rel="noopener noreferrer"
          >
            {children}
          </a>
        );
      
      default:
        return <div key={index}>{children}</div>;
    }
  };

  return (
    <RichTextContainer>
      <div className="rich-text-content">
        {document.map((node, index) => renderNode(node, index))}
      </div>
    </RichTextContainer>
  );
};

export default RichTextRenderer;
