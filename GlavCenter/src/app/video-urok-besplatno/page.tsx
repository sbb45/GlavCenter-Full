import { IndexWrapper } from "@/app/page.styled";
import Image from "next/image";
import {ContentWrapper, LessonBtn, LessonContent} from "@/app/video-urok-besplatno/page.styled";

export default async function Thanks() {


    return (
        <IndexWrapper>
            <LessonContent>
                <ContentWrapper>
                    <h3>Дмитрий Гвоздков</h3>
                    <h2>Бесплатный видео-урок 11 минут, о том, что делать, когда стало невозможный платить долги и кредиты. Забрать в посте:</h2>
                    <hr/>
                    <LessonBtn href={'https://t.me/glavcenter/91'}>
                        <Image
                            src={'/icons/telegram.png'}
                            alt={'present'}
                            width={36}
                            height={36}
                        />
                        СМОТРЕТЬ ПОСТ
                    </LessonBtn>
                    <p>При нажатии вы перейдёте в Telegram-канал<br/>Это бесплатно</p>
                </ContentWrapper>
                <Image className={'peopleImage'} src={'/images/people.png'} alt={'People'} width={580} height={580} />
            </LessonContent>
        </IndexWrapper>
    );
}
