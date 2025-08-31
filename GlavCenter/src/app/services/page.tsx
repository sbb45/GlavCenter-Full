import { IndexWrapper } from "@/app/page.styled";
import { ServicesContent, ServiceWrapper } from "@/app/services/page.styled";
import RichTextRenderer from "@/components/RichTextRenderer";

interface Service {
    id: string;
    title: string;
    content: {
        document: any;
    };
}

async function getServices(): Promise<Service[]> {
    const query = `
    query Services {
      services {
        id
        title
        content { document }
      }
    }
  `;
    const res = await fetch("http://localhost:4000/admin/api/graphql", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ query }),
        cache: "no-store", // чтобы каждый раз получать актуальные данные
    });

    if (!res.ok) {
        const text = await res.text();
        throw new Error(`GraphQL request failed: ${res.status} ${res.statusText}\n${text}`);
    }

    const { data } = await res.json();
    return data.services;
}

export default async function Services() {
    const services = await getServices();

    return (
        <IndexWrapper>
            <ServicesContent>
                <h2>Услуги</h2>
                {services.map((service, index) => (
                    <ServiceWrapper key={service.id}>
                        <div className="title">
                            <h5>{String(index + 1).padStart(2, "0")}</h5>
                            <h3>{service.title}</h3>
                        </div>
                        <div>
                            <RichTextRenderer document={service.content.document} />
                        </div>
                    </ServiceWrapper>
                ))}
            </ServicesContent>
        </IndexWrapper>
    );
}
