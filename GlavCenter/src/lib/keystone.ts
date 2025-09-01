// Утилита для работы с Keystone GraphQL API
import { GraphQLResponse } from '@/types/keystone';

const KEYSTONE_URL = process.env.KEYSTONE_URL || "http://localhost:4000/admin/api/graphql";

/**
 * Универсальная функция для выполнения GraphQL запросов к Keystone
 */
export async function fetchKeystone<T = any>(
    query: string,
    variables?: any,
    options: {
        cache?: RequestCache;
        revalidate?: number;
    } = {}
): Promise<T> {
    const { cache = "no-store", revalidate } = options;

    try {
        const res = await fetch(KEYSTONE_URL, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ query, variables }),
            cache,
            ...(revalidate && { next: { revalidate } }),
        });

        if (!res.ok) {
            const text = await res.text();
            throw new Error(`GraphQL request failed: ${res.status} ${res.statusText}\n${text}`);
        }

        const result: GraphQLResponse<T> = await res.json();

        if (result.errors) {
            console.error("GraphQL errors:", result.errors);
            throw new Error(`GraphQL errors: ${result.errors.map(e => e.message).join(", ")}`);
        }

        if (!result.data) {
            throw new Error("No data received from GraphQL");
        }

        return result.data;
    } catch (error) {
        console.error("Keystone fetch error:", error);
        throw error;
    }
}

/**
 * Безопасная функция для получения данных с fallback
 */
export async function fetchKeystoneSafe<T = any>(
    query: string,
    fallback: T,
    variables?: any,
    options?: {
        cache?: RequestCache;
        revalidate?: number;
    }
): Promise<T> {
    try {
        return await fetchKeystone<T>(query, variables, options);
    } catch (error) {
        console.warn("Using fallback data due to error:", error);
        return fallback;
    }
}

/**
 * Функция для проверки доступности Keystone
 */
export async function isKeystoneAvailable(): Promise<boolean> {
    try {
        const res = await fetch(KEYSTONE_URL, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ query: "{ __typename }" }),
            cache: "no-store",
        });
        return res.ok;
    } catch {
        return false;
    }
}
