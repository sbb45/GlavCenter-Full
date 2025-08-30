'use client'

import { useEffect, useState } from 'react';
import Image from 'next/image';
import { useParams } from 'next/navigation';

interface PostType {
    id: string;
    title: string;
    description: string;
    image?: { id: string; url: string };
    content?: { document: any };
}


export default function PostPage() {
    const [post, setPost] = useState<PostType | null>(null);
    const params = useParams();
    const id = params?.slug;

    useEffect(() => {
        const fetchPost = async () => {
            console.log(id)
            const res = await fetch(`/api/posts/get-one?id=${id}`);
            const data = await res.json();
            setPost(data.post);
            console.log(data)
        };
        fetchPost();
    }, [id]);

    if (!post) return <div>Loading...</div>;

    return (
        <div>
            <h1>{post.title}</h1>
            <p>{post.description}</p>
            {post.image && (
                <Image
                    src={`http://localhost:4000${post.image.url}`}
                    alt={post.title}
                    width={800}
                    height={400}
                    layout="responsive"
                />
            )}
            {/* Вывод контента поста */}
        </div>
    );
}
