import { gql, request } from 'graphql-request';
import {NextResponse, NextRequest} from "next/server";

export async function GET(req: NextRequest) {
    try {
        const id = req.nextUrl.searchParams.get('id');
        if (!id) return NextResponse.json({ error: 'Id is required' }, { status: 400 });

        const query = gql`
          query GetPost($id: ID!) {
            post(where: { id: $id }) {
              id
              title
              description
              image { id url }
              content { document }
            }
          }
        `;

        const endpoint = 'http://localhost:4000/admin/api/graphql';
        const data: any = await request(endpoint,query, {id})
        return NextResponse.json({post:data.post})
    } catch (err: any) {
        console.error("GraphQL error:", JSON.stringify(err, null, 2));
        return NextResponse.json(
            { error: err.response?.errors || err.message || 'Something went wrong' },
            { status: 500 }
        );
    }
}