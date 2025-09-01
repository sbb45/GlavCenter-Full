// Типы для работы с Keystone данными

export interface KeystoneImage {
    id: string;
    url: string;
}

export interface KeystoneDocument {
    type: string;
    children: Array<{
        type: string;
        text?: string;
        children?: any[];
        [key: string]: any;
    }>;
}

export interface KeystoneComponent {
    id: string;
    title: string;
    slug: string;
    content: any;
}

export interface KeystoneService {
    id: string;
    title: string;
    content: {
        document: KeystoneDocument;
    };
}

export interface KeystoneAdvantage {
    id: string;
    title: string;
    content: {
        document: KeystoneDocument;
    };
}

export interface KeystoneReview {
    id: string;
    image: KeystoneImage;
    content: {
        document: KeystoneDocument;
    };
}

export interface KeystoneUser {
    id: string;
    name: string;
    email: string;
    posts: KeystonePost[];
    createdAt: string;
}

export interface KeystonePost {
    id: string;
    title: string;
    description?: string;
    content: {
        document: KeystoneDocument;
    };
    image?: KeystoneImage;
    author: KeystoneUser;
    createdAt: string;
}

export interface KeystoneClient {
    id: string;
    name: string;
    phone: string;
    question?: string;
    overdue?: string;
    debt?: number;
    payment?: number;
    whoOwes?: string[];
    createdAt: string;
}

export interface KeystoneCalculator {
    id: string;
    title: string;
    isActive: 'active' | 'inactive';
    overdueTitle: string;
    debtTitle: string;
    paymentTitle: string;
    whoOwesTitle: string;
    debtMax: number;
    paymentMax: number;
    overdueOptions: string[];
    whoOwesOptions: string[];
    submitButtonText: string;
    modalTitle: string;
    modalSubtitle: string;
    modalDescription: string;
    modalInstruction: string;
    modalSubmitText: string;
    createdAt: string;
}

// Типы для GraphQL запросов
export interface GraphQLResponse<T = any> {
    data?: T;
    errors?: Array<{
        message: string;
        locations?: Array<{ line: number; column: number }>;
        path?: string[];
    }>;
}

// Типы для API ответов
export interface HomePageData {
    component: {
        content: {
            start?: any;
            about?: any;
        };
    };
}

export interface ReviewsData {
    reviews: KeystoneReview[];
}

export interface AdvantagesData {
    advantages: KeystoneAdvantage[];
}

export interface ServicesData {
    services: KeystoneService[];
}

export interface InformationData {
    component: {
        content: {
            header?: any;
            footer?: any;
        };
    };
}
