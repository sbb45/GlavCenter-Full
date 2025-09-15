import { IndexWrapper } from "@/app/page.styled";
import {
    ContentWrapper,
    Description,
    ImageWrapper,
    LinkTelegram,
    ThanksContent,
    ThanksLine,
    Title
} from "@/app/thanks/page.styled";
import Image from "next/image";

export default async function Thanks() {


    return (
        <IndexWrapper>
            <ThanksContent>
                <ImageWrapper />
                <ContentWrapper>
                    <ThanksLine />
                    <Title>СПАСИБО</Title>
                    <Description>
                        <Image
                            src={'/images/present.png'}
                            alt={'present'}
                            width={200}
                            height={200}
                            style={{
                                maxWidth: '100%',
                                height: 'auto',
                                objectFit: 'contain'
                            }}
                        />
                        <div>
                            <h2>Ух ты!</h2>
                            <h2>Вам подарок от нашего директора</h2>
                            <h3>Бесплатный курс на тему:</h3>
                        </div>
                        <p>САМОСТОЯТЕЛЬНОЕ СПИСАНИЕ ДОЛГОВ ПО ЗАКОНУ 127-ФЗ</p>
                    </Description>
                    <LinkTelegram href={'https://t.me/glavcenter/91'}>
                        <Image
                            src={'/icons/telegram.png'}
                            alt={'present'}
                            width={24}
                            height={24}
                        />
                        <p>ЗАБРАТЬ В ТЕЛЕГРАММ КАНАЛЕ ДИРЕКТОРА</p>
                    </LinkTelegram>
                </ContentWrapper>
            </ThanksContent>
        </IndexWrapper>
    );
}
