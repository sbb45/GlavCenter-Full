import styled from 'styled-components';

export const BlogContainer = styled.div`
  max-width: 1200px;
  margin: 120px auto;
  padding: 2rem;
  background: #ffffff;
  min-height: 100vh;
  border-radius: 24px;
  
  @media (max-width: 1024px) {
    margin: 80px auto;
    padding: 1.5rem;
    border-radius: 16px;
  }
  
  @media (max-width: 768px) {
    margin: 40px auto;
    padding: 1rem;
    border-radius: 12px;
    max-width: 95%;
  }
  
  @media (max-width: 480px) {
    margin: 20px auto;
    padding: 0.75rem;
    border-radius: 8px;
    max-width: 98%;
  }
`;

export const BlogHeader = styled.div`
  text-align: center;
  margin-bottom: 3rem;
  padding-bottom: 2rem;
  border-bottom: 2px solid #f3f4f6;
  
  @media (max-width: 768px) {
    margin-bottom: 2rem;
    padding-bottom: 1.5rem;
  }
  
  @media (max-width: 480px) {
    margin-bottom: 1.5rem;
    padding-bottom: 1rem;
  }
`;

export const BlogTitle = styled.h1`
  font-size: 3rem;
  font-weight: 700;
  color: #1f2937;
  margin-bottom: 1rem;
  line-height: 1.2;
  
  @media (max-width: 1024px) {
    font-size: 2.5rem;
  }
  
  @media (max-width: 768px) {
    font-size: 2rem;
  }
  
  @media (max-width: 480px) {
    font-size: 1.5rem;
    margin-bottom: 0.75rem;
  }
`;

export const BlogDescription = styled.p`
  font-size: 1.25rem;
  color: #6b7280;
  max-width: 600px;
  margin: 0 auto;
  line-height: 1.6;
  
  @media (max-width: 768px) {
    font-size: 1.1rem;
    max-width: 90%;
  }
  
  @media (max-width: 480px) {
    font-size: 1rem;
    max-width: 95%;
    line-height: 1.5;
  }
`;

export const BlogImage = styled.div`
  margin: 2rem 20%;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
  
  @media (max-width: 1024px) {
    margin: 1.5rem 10%;
  }
  
  @media (max-width: 768px) {
    margin: 1rem 5%;
    border-radius: 8px;
  }
  
  @media (max-width: 480px) {
    margin: 0.75rem 0;
    border-radius: 6px;
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
  }
  
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
  
  @media (max-width: 768px) {
    max-width: 95%;
    line-height: 1.7;
  }
  
  @media (max-width: 480px) {
    max-width: 100%;
    line-height: 1.6;
  }
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
  
  @media (max-width: 768px) {
    padding: 0.625rem 1.25rem;
    font-size: 0.9rem;
    margin-bottom: 1.5rem;
  }
  
  @media (max-width: 480px) {
    padding: 0.5rem 1rem;
    font-size: 0.8rem;
    margin-bottom: 1rem;
    width: 100%;
    text-align: center;
  }
  
  &:hover {
    background: #2563eb;
  }
  
  &:active {
    transform: translateY(1px);
  }
`;
export const BlogContact = styled.form`
    margin: 2rem auto;
    width: 70%;
    
    @media (max-width: 1024px) {
        width: 85%;
        margin: 1.5rem auto;
    }
    
    @media (max-width: 768px) {
        width: 95%;
        margin: 1.25rem auto;
    }
    
    @media (max-width: 480px) {
        width: 100%;
        margin: 1rem auto;
    }
    
    h4{
        text-align: start;
        width: 100%;
        font-size: calc(16px + .3vw);
        font-weight: 700;
        margin-bottom: 18px;
        
        @media (max-width: 768px) {
            font-size: 1.1rem;
            margin-bottom: 15px;
        }
        
        @media (max-width: 480px) {
            font-size: 1rem;
            margin-bottom: 12px;
            text-align: center;
        }
    }
    
    div{
        display: flex;
        justify-content: space-between;
        align-items: center;
        width: 100%;
        gap: 12px;
        
        @media (max-width: 768px) {
            flex-direction: column;
            gap: 15px;
            align-items: stretch;
        }
        
        @media (max-width: 480px) {
            gap: 12px;
        }
    }
`
