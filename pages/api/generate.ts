// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import { OpenAIStream, OpenAIStreamPayload } from "../../utils/OpenAIStream";

if(!process.env.OPENAI_API_KEY) {
  throw new Error('Missing env var from OpenAI')
}

export const config = {
  runtime: "experimental-edge",
};



type Data = {
  name: string
}

 type Payload = {
     model: string,
    prompt:string,
    temperature: number,
    top_p: number,
    frequency_penalty: number,
    presence_penalty: number,
    max_tokens: number,
    stream: boolean,
    n: number,
}



export default async function handler(
  req: Request
) :Promise<Response>{

  const { prompt, herb } = await req.json()


  if(!prompt) {
    return new Response("No prompt in the request", {status:400})
  }

  const generatedPrompt = `My question is: ${prompt} and i am asking in the context of this herb: ${herb}`

  const payload :OpenAIStreamPayload= {
    model: 'gpt-4',
    messages:[{role:"user", content:generatedPrompt}],
    temperature: 0.7,
    top_p: 1,
    frequency_penalty: 0,
    presence_penalty: 0,
    max_tokens: 900,
    stream: true,
    n: 1,
  }

 const stream = await OpenAIStream(payload);
  return new Response(stream);

}
