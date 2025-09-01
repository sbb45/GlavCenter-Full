import { IndexWrapper } from "@/app/page.styled";
import { ServicesContent, ServiceWrapper } from "@/app/services/page.styled";
import RichTextRenderer from "@/components/RichTextRenderer";
import { fetchKeystoneSafe } from "@/lib/keystone";
import { DEFAULT_SERVICES } from "@/lib/defaultData";

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

    const result = await fetchKeystoneSafe(
        query,
        { services: DEFAULT_SERVICES },
        undefined,
        { cache: "no-store" }
    );

    return result.services;
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
