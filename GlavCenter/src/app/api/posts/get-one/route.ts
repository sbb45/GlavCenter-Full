import { gql, request } from 'graphql-request';
import {NextResponse, NextRequest} from "next/server";

export async function GET(req: NextRequest) {
    try {
        const slug = req.nextUrl.searchParams.get('slug');
        if (!slug) return NextResponse.json({ error: 'Slug is required' }, { status: 400 });

        const endpoint = 'http://localhost:4000/admin/api/graphql';

        // 1. Получаем пост по слагу
        const getPostQuery = gql`
      query GetPost($slug: String!) {
        post(where: { slug: $slug }) {
          id
          slug
          title
          description
          image { id url }
          content { document(hydrateRelationships: true) }
          author { image { url } name }
          views
          categories
          createdAt
        }
      }
    `;
        const { post } = await request(endpoint, getPostQuery, { slug }) as any;
        console.log(post);

        if (!post) {
            return NextResponse.json({ error: "Post not found" }, { status: 404 });
        }

        // 2. Увеличиваем просмотры
        const updateViewsMutation = gql`
          mutation IncrementViews($id: ID!, $views: Int!) {
            updatePost(where: { id: $id }, data: { views: $views }) {
              id
              views
            }
          }
        `;
        const newViews = post.views + 1;
        await request(endpoint, updateViewsMutation, { id: post.id, views: newViews });

        // 3. Возвращаем пост с обновлёнными views
        return NextResponse.json({ post: { ...post, views: newViews } });

    } catch (err: any) {
        console.error("GraphQL error:", JSON.stringify(err, null, 2));
        return NextResponse.json(
            { error: err.response?.errors || err.message || 'Something went wrong' },
            { status: 500 }
        );
    }
}
