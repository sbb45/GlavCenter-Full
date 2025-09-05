import { gql, request } from 'graphql-request';
import {NextResponse, NextRequest} from "next/server";

export async function GET(req: NextRequest) {
    try {
        const id = req.nextUrl.searchParams.get('id');
        if (!id) return NextResponse.json({ error: 'Id is required' }, { status: 400 });

        const endpoint = 'http://localhost:4000/admin/api/graphql';

        // 1. Получаем пост
        const getPostQuery = gql`
      query GetPost($id: ID!) {
        post(where: { id: $id }) {
          id
          title
          description
          image { id url }
          content { document }
          author { image { url } name }
          views
          categories
          createdAt
        }
      }
    `;
        const { post } = await request(endpoint, getPostQuery, { id }) as any;
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
        await request(endpoint, updateViewsMutation, { id, views: newViews });

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
