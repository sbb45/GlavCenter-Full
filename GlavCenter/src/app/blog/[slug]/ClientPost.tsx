'use client'

import React, {FormEvent, useEffect, useState} from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import RichTextRenderer from '@/components/RichTextRenderer';
import {
    BlogContainer,
    BlogHeader,
    BlogTitle,
    BlogDescription,
    BlogContent,
    LoadingContainer,
    ErrorContainer,
    BackButton, BlogContact, HeaderContainer, Author, InfoPost
} from './page.styled';
import StyledInput from "@/components/other/StyledInput";
import SubmitBtn from "@/components/other/SubmitBtn";
import {renderToStaticMarkup} from "react-dom/server";
import EmailTemplate from "@/components/other/EmailTemplate";

interface PostType {
    id: string;
    title: string;
    description: string;
    categories: string[];
    author: {
        image: {url: string};
        name: string;
    };
    views: number;
    createdAt: Date;
    image?: { id: string; url: string };
    content?: { document: any };
}

export default function ClientPost({ slug }: { slug: string }) {
    const [post, setPost] = useState<PostType | null>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);
    const router = useRouter();

    const [name, setName] = useState("");
    const [phone, setPhone] = useState("");
    const [windowWidth, setWindowWidth] = useState(0);

    useEffect(() => {
        const handleResize = () => setWindowWidth(window.innerWidth);
        handleResize();
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault();
        await fetch('/api/clients/create-client', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                name: name,
                phone: phone,
            })
        })
        const htmlContent = `
              <p><b>Имя:</b> ${name}</p>
              <p><b>Телефон:</b> ${phone}</p>
            `;

        const emailHtml = renderToStaticMarkup(
            <EmailTemplate title="Новая заявка с сайта" content={htmlContent} />
        );
        setName('')
        setPhone('')
        // Отправка на почту
        await fetch("/api/send-email", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                to: "glavcentrekb25@gmail.com",
                subject: "Заявка с блога",
                html: emailHtml,
            }),
        });
    }

    useEffect(() => {
        const fetchPost = async () => {
            try {
                setLoading(true);
                setError(null);
                const res = await fetch(`/api/posts/get-one?slug=${slug}`);
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

        if (slug) {
            fetchPost();
        }
    }, [slug]);

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
            <HeaderContainer>
                <BackButton onClick={handleBack}>
                    ← Вернуться к блогу
                </BackButton>
                <div>
                    {post.categories.map((category, index) => (
                        <h4 key={index}>{category}</h4>
                    ))}
                </div>
            </HeaderContainer>
            
            <BlogHeader>
                {post.author && (
                    <Author>
                        <Image
                            src={post.author.image ? `http://localhost:4000${post.author.image.url}` : '/icons/avatar.jpg'}
                            alt={'author'} width={64} height={64}
                        />
                        <p>{post.author.name}</p>
                    </Author>
                )}
                <div>
                    <BlogTitle>{post.title}</BlogTitle>
                    <BlogDescription>Спишем ваши долги законно с гарантией под ключ</BlogDescription>
                </div>
                <InfoPost>
                    <h4>{post.views} Просмотров</h4>
                    <h4>{new Date(post.createdAt).toLocaleString("ru-RU")}</h4>
                </InfoPost>
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


