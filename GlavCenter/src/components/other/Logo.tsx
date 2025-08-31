import React from 'react';
import styled from "styled-components";
import Image from "next/image";
import Link from "next/link";
import {headingColor} from "@/styles/colors";

const LogoWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 12px;
    h2{
        font-weight: 900;
        font-size: 28px;
        color: ${headingColor};
    }
    @media (max-width: 560px) {
        gap: 6px;
        h2{
            font-size: 22px;
        }
        img{
            width: 26px;
            height: 26px;
        }
    }
`

const Logo = () => {
    return (
        <Link href={'/'}>
            <LogoWrapper>
                <Image
                    src="/logo.svg"
                    width={36}
                    height={36}
                    alt={`Logo`}
                    style={{ height: "auto" }}
                />
                <h2>ГЛАВЦЕНТЕР</h2>
            </LogoWrapper>
        </Link>
    );
};

export default Logo;