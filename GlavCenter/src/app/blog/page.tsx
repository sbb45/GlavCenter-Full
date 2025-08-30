'use client'
import {IndexWrapper} from "@/app/page.styled";
import {BlogContent, BlogWrapper, Post} from "@/app/blog/page.styled";
import Image from "next/image";


export default function Contacts() {
    const posts = [
        {id: 1, image: 'img1.jpg', title: 'Заголовок 1', description: 'Повседневная практика показывает, что начало повседневной работы по формированию позиции способствует подготовки и реализации систем массового участия.'},
        {id: 2, image: 'img2.jpg', title: 'Заголовок 2', description: 'Повседневная практика показывает, что начало повседневной работы по формированию позиции способствует подготовки и реализации систем массового участия.'},
        {id: 3, image: 'img3.jpg', title: 'Заголовок 3', description: 'Повседневная практика показывает, что начало повседневной работы по формированию позиции способствует подготовки и реализации систем массового участия.'},
        {id: 4, image: 'img1.jpg', title: 'Заголовок 4', description: 'Повседневная практика показывает, что начало повседневной работы по формированию позиции способствует подготовки и реализации систем массового участия.'},
    ]

    return (
        <IndexWrapper>
            <BlogContent>
                <h2>Блог</h2>
                <BlogWrapper>
                    {posts.map((post, index) => (
                        <Post href={'/blog'} key={index}>
                            <Image
                                src={`/images/mainRight/${post.image}`}
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
            </BlogContent>
        </IndexWrapper>
    );
}
