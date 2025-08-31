import StartSection from "@/components/main/StartSection";
import AboutSection from "@/components/main/AboutSection";
import ReviewSection from "@/components/main/ReviewSection";
import { IndexWrapper } from "@/app/page.styled";

// Универсальная функция запроса GraphQL
async function fetchGraphQL(query: string, variables?: any) {
    const res = await fetch("http://localhost:4000/admin/api/graphql", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ query, variables }),
    });

    if (!res.ok) {
        const text = await res.text();
        throw new Error(`GraphQL request failed: ${res.status} ${res.statusText}\n${text}`);
    }

    const { data } = await res.json();
    return data;
}

// Получение данных страницы
async function getPage() {
    const query = `
    query HomePage {
      component(where: { slug: "home" }) {
        content
      }
    }
  `;
    const data = await fetchGraphQL(query);
    return data.component;
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
    const data = await fetchGraphQL(query);
    return data.reviews;
}

// Получение услуг
async function getServices() {
    const query = `
    query Advantage {
      advantages {
        id
        title
        content { document }
      }
    }
  `;
    const data = await fetchGraphQL(query);
    return data.advantages;
}

// Главная страница
export default async function Home() {
    const [componentData, reviews, services] = await Promise.all([
        getPage(),
        getReviews(),
        getServices(),
    ]);
    console.log(services)

    return (
        <IndexWrapper>
            <StartSection content={componentData.content.start} services={services} />
            <AboutSection content={componentData.content.about} />
            <ReviewSection reviews={reviews} />
        </IndexWrapper>
    );
}
