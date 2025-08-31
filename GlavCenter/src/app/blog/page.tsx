'use client'
import {IndexWrapper} from "@/app/page.styled";
import {BlogContent, BlogWrapper, EmptyBlog, Post, Spinner} from "@/app/blog/page.styled";
import Image from "next/image";
import {useEffect, useState} from "react";

interface PostType {
    id: string;
    title: string;
    description: string;
    image?: {
        id: string;
        url: string;
    };
    content?: {
        document: any;
    };
}

export default function Blog() {
    const [posts, setPosts] = useState<PostType[]>([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const fetchPosts = async () =>{
            setLoading(true)
            try {
                const res = await fetch('/api/posts/get', {method: 'GET'});
                const {posts} = await res.json()
                console.log(posts)
                setPosts(posts)
            }catch (err){
                console.log(err)
            }finally {
                setLoading(false)
            }
        }
        fetchPosts()
    }, []);


    return (
        <IndexWrapper>
            <BlogContent>
                <h2>Блог</h2>
                    {loading ? (<Spinner />) : !posts  || posts.length=== 0 ? (
                        <EmptyBlog>Постов не найдено</EmptyBlog>
                    ): (
                        <BlogWrapper>
                            {posts.map((post)=>(
                                <Post href={`/blog/${post.id}`} key={post.id}>
                                    <Image
                                        src={post.image ? `http://localhost:4000${post?.image?.url}` : ''}
                                        alt={'Post Image'}
                                        width={0}
                                        height={0}
                                        layout='responsive'
                                    />
                                    <h3>{post.title}</h3>
                                    <p>{post.description}</p>
                                </Post>
                            ))}
                        </BlogWrapper>
                    )}
            </BlogContent>
        </IndexWrapper>
    );
}
