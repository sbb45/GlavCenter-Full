'use client'

import {FormEvent, useEffect, useState} from 'react';
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
    BackButton, BlogContact
} from './page.styled';
import StyledInput from "@/components/other/StyledInput";
import SubmitBtn from "@/components/other/SubmitBtn";

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

    const [name, setName] = useState("");
    const [phone, setPhone] = useState("");
    const [windowWidth, setWindowWidth] = useState(0);

    useEffect(() => {
        const handleResize = () => setWindowWidth(window.innerWidth);
        handleResize(); // Set initial width
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);


    // Отправка данных
    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault();

        const res = await fetch('/api/clients/create-client', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                name: name,
                phone: phone,
            })
        })
        console.log(res)
        setName('')
        setPhone('')
    }

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
                <BlogDescription>Спишем ваши долги законно с гарантией под ключ</BlogDescription>
            </BlogHeader>

            <BlogContact onSubmit={handleSubmit}>
                <h4>Запишитесь на бесплатную консультацию</h4>
                <div>
                    <StyledInput
                        width={windowWidth > 768 ? 300 : undefined}
                        placeholder={'Имя'}
                        value={name}
                        onChange={(e)=>setName(e.target.value)}
                    />
                    <StyledInput
                        width={windowWidth > 768 ? 300 : undefined}
                        placeholder={'Номер телефона'}
                        inputType={'phone'}
                        value={phone}
                        onPhoneChange={setPhone}
                    />
                    <SubmitBtn value={'Записаться'} />
                </div>
            </BlogContact>

            <BlogContent>
                {post.content?.document && (
                    <RichTextRenderer document={post.content.document} />
                )}
            </BlogContent>
        </BlogContainer>
    );
}
