'use client'
import React from 'react';
import styled from "styled-components";
import Image from "next/image";
import {ContentLeft, ImageRight, Section} from "@/app/page.styled";
import {headingColor} from "@/styles/colors";
import RichTextRenderer from "@/components/RichTextRenderer";


interface ReviewItem {
    id: string;
    image: { id: string; url: string };
    content: { document: any };
}

interface ReviewsProps {
    reviews: ReviewItem[];
}

const ReviewsSection = styled.div`
    display: flex;
    justify-content: start;
    align-items: start;
    flex-direction: column;
    gap: 80px;
    margin: 100px 0;
`
const SectionTitle = styled.h2`
    color: ${headingColor};
    font-size: 70px;
    font-weight: 900;
    line-height: 1;
`
const ReviewsContainer = styled.div`
    display: flex;
    gap: 120px;

    & > div {
        flex: 1;
        display: flex;
        flex-direction: column;
        gap: 40px; 
    }
    @media (max-width: 950px) {
        flex-direction: column;
        gap: 40px;
    }
`;

const Review = styled.div`
    display: flex;
    justify-content: start;
    align-items: start;
    gap: 24px;
    height: max-content;

    .avatar {
        width: 100px;       
        height: 100px;     
        border-radius: 50%;
        overflow: hidden;
        flex-shrink: 0;     
        display: flex;
        align-items: center;
        justify-content: center;

        img {
            object-fit: cover; 
            width: 100%;
            height: 100%;
        }
    }

    p {
        font-size: 22px;
    }

    @media (max-width: 700px) {
        .avatar {
            width: 64px;
            height: 64px;
        }
    }
`

const ReviewSection: React.FC<ReviewsProps> = ({ reviews }) => {
    return (
        <Section>
            <ContentLeft>
                <ReviewsSection>
                    <SectionTitle>Что о нас говорят</SectionTitle>
                    <ReviewsContainer>
                        <div>
                            {reviews.filter((_, i) => i % 2 === 0).map((review) => (
                                <Review key={`left-${review.id}`}>
                                    <div className="avatar">
                                        <Image
                                            src={`http://localhost:4000${review.image.url}`}
                                            alt="Avatar"
                                            width={100}
                                            height={100}
                                        />
                                    </div>
                                    <RichTextRenderer document={review.content.document} />
                                </Review>
                            ))}
                        </div>
                        <div>
                            {reviews.filter((_, i) => i % 2 !== 0).map((review) => (
                                <Review key={`left-${review.id}`}>
                                    <div className="avatar">
                                        <Image
                                            src={`http://localhost:4000${review.image.url}`}
                                            alt="Avatar"
                                            width={100}
                                            height={100}
                                        />
                                    </div>
                                    <RichTextRenderer document={review.content.document} />
                                </Review>
                            ))}
                        </div>
                    </ReviewsContainer>
                </ReviewsSection>
            </ContentLeft>
            <ImageRight $num={2} />
        </Section>
    );
};

export default ReviewSection;