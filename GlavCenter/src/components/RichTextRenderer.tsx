'use client'
import React from 'react';
import styled from 'styled-components';
import {primaryColor, primaryHoverColor} from "@/styles/colors";
import {useModal} from "@/providers/ModalProvider";
import BlogModal from "@/components/main/calculator/BlogModal";

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
  relationship?: string;
  data?: any;
  [key: string]: any;
}

interface RichTextRendererProps {
  document?: RichTextNode[];
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

const CtaButton = styled.button`
  background-color: ${primaryColor};
  color: white;
  border: none;
  border-radius: 24px;
  padding: 12px 20px;
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;
  transition: background-color .2s ease;
  &:hover { background-color: ${primaryHoverColor}; }
`;

const RichTextRenderer: React.FC<RichTextRendererProps> = ({ document }) => {
  const { openModal } = useModal();
  // Проверяем, что document существует и является массивом
  if (!document || !Array.isArray(document)) {
    return null;
  }

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

    const children = (node.children || []).map((child, childIndex) => 
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
      
      case 'relationship': {
        // Keystone document relationship node
        // For our config, relationship key is 'image' pointing to PostImage
        if (node.relationship === 'image') {
          const rel = node.data || {};
          // Support several shapes just in case
          const imageField = rel?.image || rel?.data?.image || rel?.file || rel?.data?.file;
          const rawUrl: string | undefined = imageField?.url || imageField?.publicUrl || imageField?.publicUrlTransformed;
          const isAbsolute = !!rawUrl && /^(http|https):\/\//i.test(rawUrl);
          const fileUrl = rawUrl ? (isAbsolute ? rawUrl : `http://localhost:4000${rawUrl}`) : '';
          const alt = rel?.alt || rel?.data?.alt || '';
          const caption = rel?.caption || rel?.data?.caption || '';
          if (!fileUrl) return null;
          return (
            <figure key={index} style={{ margin: '1.5rem 0', textAlign: 'center' }}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={fileUrl} alt={alt} style={{ maxWidth: '100%', height: 'auto', borderRadius: 8 }} />
              {caption && (
                <figcaption style={{ color: '#6b7280', fontSize: '0.9rem', marginTop: '0.5rem' }}>
                  {caption}
                </figcaption>
              )}
            </figure>
          );
        }
        if (node.relationship === 'cta') {
          const rel = node.data || {};
          const label = rel?.label || 'Узнать, можно ли списать долги';
          const actionKey = rel?.key || 'cta_default';
          return (
            <div key={index} style={{ display: 'flex', justifyContent: 'center', margin: '1.5rem 0' }}>
              <CtaButton
                type="button"
                data-action-key={actionKey}
                onClick={() => {
                  // Попробуем пользовательский обработчик, если есть
                  if (typeof window !== 'undefined') {
                    const anyWin: any = window as any;
                    if (typeof anyWin.handlePostAction === 'function') {
                      anyWin.handlePostAction(actionKey);
                      return;
                    }
                  }

                  openModal(
                    <div data-no-loading>
                      <BlogModal />
                    </div>
                  );
                }}
              >
                {label}
              </CtaButton>
            </div>
          );
        }
        return <div key={index}>{children}</div>;
      }

      case 'image': {
        // Basic image node support (e.g., when editor inserts plain image blocks)
        const rawUrl: string | undefined = (node as any).src || (node as any).url || (node as any).data?.src || (node as any).data?.url;
        const isAbsolute = !!rawUrl && /^(http|https):\/\//i.test(rawUrl);
        const fileUrl = rawUrl ? (isAbsolute ? rawUrl : `http://localhost:4000${rawUrl}`) : '';
        const alt = (node as any).alt || (node as any).title || '';
        const caption = (node as any).caption || (node as any).data?.caption || '';
        if (!fileUrl) return null;
        return (
          <figure key={index} style={{ margin: '1.5rem 0', textAlign: 'center' }}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={fileUrl} alt={alt} style={{ maxWidth: '100%', height: 'auto', borderRadius: 8 }} />
            {caption && (
              <figcaption style={{ color: '#6b7280', fontSize: '0.9rem', marginTop: '0.5rem' }}>
                {caption}
              </figcaption>
            )}
          </figure>
        );
      }
      
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
