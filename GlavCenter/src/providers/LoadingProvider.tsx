'use client'
import Loading from "@/components/other/Loading";
import {useEffect, useState} from "react";


export default function StartupLoading() {
    const [visible, setVisible] = useState(true);

    useEffect(() => {
        const prevOverflow = document.body.style.overflow;
        document.body.style.overflow = "hidden";
        const t = setTimeout(()=> {
            setVisible(false);
            document.body.style.overflow = prevOverflow;
        }, 800);
        return () => {
            clearTimeout(t);
            document.body.style.overflow = prevOverflow;
        };
    }, []);

    if(!visible) return null;

    return <Loading />
}