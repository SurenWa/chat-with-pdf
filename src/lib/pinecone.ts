import { Pinecone } from '@pinecone-database/pinecone'

export const getPineconeClient = async () => {

    return new Pinecone({
        environment: "us-west4-gcp-free",
        apiKey: process.env.PINECONE_API_KEY!,
    });
    // const client = new Pinecone()

    // await client.init({
    //     apiKey: process.env.PINECONE_API_KEY!,
    //     environment: "us-west4-gcp-free",
    // })

    // return client
}


