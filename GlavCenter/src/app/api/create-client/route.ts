import { gql, request } from 'graphql-request';
import {NextRequest, NextResponse} from "next/server";

export async function POST(req: NextRequest) {
    try {
        const { name, phone, question } = await req.json();

        const mutation = gql`
         mutation CreateClient(
            $name: String!
            $phone: String!
            $question: String
          ) {
            createClient(
              data: { name: $name, phone: $phone, question: $question}
            ) {
              id
              name
              phone
              question
            }
          }
        `;

        const endpoint = 'http://localhost:3000/api/graphql'
        const data: any = await request(endpoint, mutation, {name, phone, question});
        return NextResponse.json({client: data.createClient })
    }catch (err: any){
        return NextResponse.json(
            {error: err.message || 'Something went wrong'},
            {status: 500}
        )
    }
}