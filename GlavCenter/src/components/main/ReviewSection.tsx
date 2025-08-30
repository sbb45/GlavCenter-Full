import React from 'react';
import styled from "styled-components";
import Image from "next/image";
import {ContentLeft, ImageRight, Section} from "@/app/page.styled";
import {headingColor} from "@/styles/colors";


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
    img{
        border-radius: 50%;
    }
    p{
        font-size: 22px;
    }
    @media (max-width: 700px) {
        img{
            width: 64px;
            height: 64px;
        }
    }
`

const ReviewSection = () => {

    const reviews = [
        {
            image: '/images/review.jpg',
            text: 'Только что подписала договор и уже хочу поделиться первыми впечатлениями. С самого первого звонка почувствовала, что попала к настоящим профессионалам. Дмитрий подробно объяснил все этапы, ничего не скрывал и не давал пустых обещаний. А когда пришла в офис, окончательно убедилась – здесь работают люди, которые знают, как помочь. Если через пару месяцев всё пройдет так же гладко, как началось – обязательно напишу второй восторженный отзыв.'
        },
        {
            image: '/images/review.jpg',
            text: 'В долгах как в шелках. Дмитрий с Анной взялись за дело без лишних слов. Процесс пошел, работают четко. Пока все нормально, не кинули - уже хорошо.'
        },
        {
            image: '/images/review.jpg',
            text: 'Посоветовали знакомые. Боялись начинать процедуру Банкротства вдруг не получится. Но все успешно прошло. Имущество сохранили, долги списали. Рекомендую. Там работают только профессионалы 👍'
        },
        {
            image: '/images/review.jpg',
            text: 'Добрый день! Хочу поблагодарить Дмитрия и Анну, за прекрасное отношение и отзывчивость. Очень грамотные, знающие своё дело юристы! Только обратилась и стало чувство, "как за каменной стеной". Спасибо вам за помощь и хорошую работу. Буду вас рекомендовать знакомым и близким.'
        },
    ]


    return (
        <Section>
            <ContentLeft>
                <ReviewsSection>
                    <SectionTitle>Что о нас говорят</SectionTitle>
                    <ReviewsContainer>
                        <div>
                            {reviews.filter((_, i) => i % 2 === 0).map((review, index) => (
                                <Review key={`left-${index}`}>
                                    <Image
                                        src={review.image}
                                        alt="Avatar"
                                        width={100}
                                        height={100}
                                    />
                                    <p>{review.text}</p>
                                </Review>
                            ))}
                        </div>
                        <div>
                            {reviews.filter((_, i) => i % 2 !== 0).map((review, index) => (
                                <Review key={`right-${index}`}>
                                    <Image
                                        src={review.image}
                                        alt="Avatar"
                                        width={100}
                                        height={100}
                                    />
                                    <p>{review.text}</p>
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