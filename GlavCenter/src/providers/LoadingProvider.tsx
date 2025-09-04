'use client'
import Loading from "@/components/other/Loading";
import {useEffect, useState} from "react";


export default function StartupLoading() {
    const [visible, setVisible] = useState(true);

    useEffect(() => {
        document.body.style.overflowY = "none";
        const t = setTimeout(()=> setVisible(false), 1000);
        return () => clearTimeout(t);
    }, []);

    if(!visible) return null;

    return <Loading />
}