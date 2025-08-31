import styled from 'styled-components';

export const BlogContainer = styled.div`
  max-width: 1200px;
  margin: 120px auto;
  padding: 2rem;
  background: #ffffff;
  min-height: 100vh;
    border-radius: 24px;
`;

export const BlogHeader = styled.div`
  text-align: center;
  margin-bottom: 3rem;
  padding-bottom: 2rem;
  border-bottom: 2px solid #f3f4f6;
`;

export const BlogTitle = styled.h1`
  font-size: 3rem;
  font-weight: 700;
  color: #1f2937;
  margin-bottom: 1rem;
  line-height: 1.2;
  
  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

export const BlogDescription = styled.p`
  font-size: 1.25rem;
  color: #6b7280;
  max-width: 600px;
  margin: 0 auto;
  line-height: 1.6;
`;

export const BlogImage = styled.div`
  margin: 2rem 0;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
  
  img {
    width: 100%;
    height: auto;
    display: block;
  }
`;

export const BlogContent = styled.div`
  max-width: 800px;
  margin: 0 auto;
  line-height: 1.8;
`;

export const LoadingContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 400px;
  font-size: 1.2rem;
  color: #6b7280;
`;

export const ErrorContainer = styled.div`
  text-align: center;
  padding: 3rem;
  color: #dc2626;
  font-size: 1.1rem;
`;

export const BackButton = styled.button`
  background: #3b82f6;
  color: white;
  border: none;
  padding: 0.75rem 1.5rem;
  border-radius: 8px;
  font-size: 1rem;
  font-weight: 500;
  cursor: pointer;
  transition: background-color 0.2s;
  margin-bottom: 2rem;
  
  &:hover {
    background: #2563eb;
  }
  
  &:active {
    transform: translateY(1px);
  }
`;
