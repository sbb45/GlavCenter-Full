'use client'

import { useEffect, useState } from 'react';
import Image from 'next/image';
import { useParams, useRouter } from 'next/navigation';
import RichTextRenderer from '@/components/RichTextRenderer';
import {
  BlogContainer,
  BlogHeader,
  BlogTitle,
  BlogDescription,
  BlogImage,
  BlogContent,
  LoadingContainer,
  ErrorContainer,
  BackButton
} from './page.styled';

interface PostType {
    id: string;
    title: string;
    description: string;
    image?: { id: string; url: string };
    content?: { document: any };
}

export default function PostPage() {
    const [post, setPost] = useState<PostType | null>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);
    const params = useParams();
    const router = useRouter();
    const id = params?.slug;

    useEffect(() => {
        const fetchPost = async () => {
            try {
                setLoading(true);
                setError(null);
                
                const res = await fetch(`/api/posts/get-one?id=${id}`);
                if (!res.ok) {
                    throw new Error('Failed to fetch post');
                }
                
                const data = await res.json();
                setPost(data.post);
            } catch (err) {
                console.error('Error fetching post:', err);
                setError('Ошибка при загрузке статьи');
            } finally {
                setLoading(false);
            }
        };

        if (id) {
            fetchPost();
        }
    }, [id]);

    const handleBack = () => {
        router.push('/blog');
    };

    if (loading) {
        return (
            <BlogContainer>
                <LoadingContainer>
                    Загрузка статьи...
                </LoadingContainer>
            </BlogContainer>
        );
    }

    if (error || !post) {
        return (
            <BlogContainer>
                <ErrorContainer>
                    <h2>Ошибка</h2>
                    <p>{error || 'Статья не найдена'}</p>
                    <BackButton onClick={handleBack}>
                        Вернуться к блогу
                    </BackButton>
                </ErrorContainer>
            </BlogContainer>
        );
    }

    return (
        <BlogContainer>
            <BackButton onClick={handleBack}>
                ← Вернуться к блогу
            </BackButton>
            
            <BlogHeader>
                <BlogTitle>{post.title}</BlogTitle>
                <BlogDescription>{post.description}</BlogDescription>
            </BlogHeader>

            {post.image && (
                <BlogImage>
                    <Image
                        src={`http://localhost:4000${post.image.url}`}
                        alt={post.title}
                        width={1200}
                        height={600}
                        priority
                        style={{
                            width: '100%',
                            height: 'auto',
                        }}
                    />
                </BlogImage>
            )}

            <BlogContent>
                {post.content?.document && (
                    <RichTextRenderer document={post.content.document} />
                )}
            </BlogContent>
        </BlogContainer>
    );
}
