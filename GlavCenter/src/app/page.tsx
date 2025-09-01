import StartSection from "@/components/main/StartSection";
import AboutSection from "@/components/main/AboutSection";
import ReviewSection from "@/components/main/ReviewSection";
import { IndexWrapper } from "@/app/page.styled";
import { fetchKeystoneSafe } from "@/lib/keystone";
import {
    DEFAULT_HOME_CONTENT,
    DEFAULT_REVIEWS,
    DEFAULT_ADVANTAGES
} from "@/lib/defaultData";
import Calculator from "@/components/main/calculator/Calculator";
import CalculatorSection from "@/components/main/CalculatorSection";

// Получение данных страницы
async function getPage() {
    const query = `
    query HomePage {
      component(where: { slug: "home" }) {
        content
      }
    }
  `;

    return await fetchKeystoneSafe(
        query,
        { component: { content: DEFAULT_HOME_CONTENT } },
        undefined,
        { cache: "no-store" }
    );
}

// Получение отзывов
async function getReviews() {
    const query = `
    query Reviews {
      reviews {
        id
        image { id url }
        content { document }
      }
    }
  `;

    return await fetchKeystoneSafe(
        query,
        { reviews: DEFAULT_REVIEWS },
        undefined,
        { cache: "no-store" }
    );
}

// Получение преимуществ
async function getAdvantages() {
    const query = `
    query Advantages {
      advantages {
        id
        title
        content { document }
      }
    }
  `;

    return await fetchKeystoneSafe(
        query,
        { advantages: DEFAULT_ADVANTAGES },
        undefined,
        { cache: "no-store" }
    );
}

// Главная страница
export default async function Home() {
    const [componentData, reviewsData, advantagesData] = await Promise.all([
        getPage(),
        getReviews(),
        getAdvantages(),
    ]);

    return (
        <IndexWrapper>
            <StartSection
                content={componentData.component?.content?.start}
                services={advantagesData.advantages}
            />
            <AboutSection content={componentData.component?.content?.about} />
            <ReviewSection reviews={reviewsData.reviews} />
        </IndexWrapper>
    );
}
