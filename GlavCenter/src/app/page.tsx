'use client'
import StartSection from "@/components/main/StartSection";
import {IndexWrapper} from "@/app/page.styled";
import AboutSection from "@/components/main/AboutSection";
import ReviewSection from "@/components/main/ReviewSection";



export default function Home() {

  return (
    <IndexWrapper>
        <StartSection />
        <AboutSection />
        <ReviewSection />
    </IndexWrapper>
  );
}
