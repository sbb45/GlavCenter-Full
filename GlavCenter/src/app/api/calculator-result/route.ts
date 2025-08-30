import { NextRequest, NextResponse } from 'next/server';
import { gql, request } from 'graphql-request';

export async function POST(req: NextRequest) {
    try {
        const { name, phone, overdue, debt, payment, whoOwes } = await req.json();

        // GraphQL мутация для Keystone
        const mutation = gql`
      mutation CreateClient(
        $name: String!
        $phone: String!
        $overdue: String
        $debt: Int
        $payment: Int
        $whoOwes: JSON
      ) {
        createClient(
          data: {
            name: $name
            phone: $phone
            overdue: $overdue
            debt: $debt
            payment: $payment
            whoOwes: $whoOwes
          }
        ) {
          id
          name
          phone
          overdue
          debt
          payment
          whoOwes
        }
      }
    `;

        const endpoint = 'http://localhost:4000/api/graphql';

        const data: any = await request(endpoint, mutation, {
            name,
            phone,
            overdue,
            debt,
            payment,
            whoOwes,
        });

        return NextResponse.json({ client: data.createClient });
    } catch (err: any) {
        return NextResponse.json(
            { error: err.message || 'Something went wrong' },
            { status: 500 }
        );
    }
}
