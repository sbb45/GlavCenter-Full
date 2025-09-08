import { gql, request } from 'graphql-request';
import {NextResponse} from "next/server";

export async function GET() {
    try {
        const query = gql`
          query GetPosts {
            posts {
              id
              slug
              title
              description
              image {
                id
                url
              }
              content {
                document 
              }
            }
          }
        `;

        const endpoint = 'http://localhost:4000/admin/api/graphql';
        const data: any = await request(endpoint,query)
        return NextResponse.json({posts:data.posts})
    } catch (err: any) {
        console.error("GraphQL error:", JSON.stringify(err, null, 2));
        return NextResponse.json(
            { error: err.response?.errors || err.message || 'Something went wrong' },
            { status: 500 }
        );
    }
}