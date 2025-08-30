'use client'
import {IndexWrapper} from "@/app/page.styled";
import { ChangeEvent, FormEvent, useEffect, useState } from "react";
import {ContactContent, ContactForm, ContactMap, ContactWrapper} from "@/app/contacts/page.styled";
import StyledInput from "@/components/other/StyledInput";
import SubmitBtn from "@/components/other/SubmitBtn";


export default function Contacts() {
    const [name, setName] = useState("");
    const [phone, setPhone] = useState("");
    const [question, setQuestion] = useState("");

    // Загрузка карты
    useEffect(() => {
        const script = document.createElement('script');
        script.type = 'text/javascript';
        script.src = "https://api-maps.yandex.ru/services/constructor/1.0/js/?um=constructor%3A076d5788b8226c149f62a9789ba269707f816a3e53a75bc33a30f1e3c3f08db1&amp;width=100%25&amp;height=580&amp;lang=ru_RU&amp;scroll=true";
        script.async = true;
        // @ts-ignore
        document.getElementById('map-container').appendChild(script);
    }, []);

    // Отправка данных
    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault();

        const res = await fetch('/api/create-client', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                name: name,
                phone: phone,
                question: question,
            })
        })
        const data = await res.json()
        console.log(data)
    }
    return (
        <IndexWrapper>
            <ContactContent>
                <h2>Контакты</h2>
                <ContactWrapper>
                    <ContactMap>
                        <div id="map-container" style={{width: "100%", height:"580px"}}></div>
                    </ContactMap>
                    <ContactForm onSubmit={handleSubmit}>
                        <h3>Задайте свой вопрос</h3>
                        <StyledInput
                            placeholder={'Имя'}
                            value={name}
                            onChange={(e)=>setName(e.target.value)}
                        />
                        <StyledInput
                            placeholder={'Номер телефона'}
                            value={phone}
                            onChange={(e)=>setPhone(e.target.value)}
                        />
                        <StyledInput
                            placeholder={'Ваш вопрос'}
                            inputType={'textarea'}
                            value={question}
                            onChange={(e)=>setQuestion(e.target.value)}
                        />
                        <SubmitBtn value={'Отправить вопрос'} />
                    </ContactForm>
                </ContactWrapper>

            </ContactContent>
        </IndexWrapper>
    );
}
