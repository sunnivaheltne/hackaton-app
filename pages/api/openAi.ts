import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
) {
    // const { query } = req;
    // const { text } = query;
    // const response = await fetch(
    //     "https://api.openai.com/v1/engines/davinci/completions",
    //     {
    //         method: "POST",
    //         headers: {
    //             "Content-Type": "application/json",
    //             Authorization: `Bearer ${process.env.OPENAI_API_KEY}`,
    //         },
    //         body: JSON.stringify({
    //             prompt: text,
    //             max_tokens: 100,
    //             temperature: 0.9,
    //             top_p: 1,
    //             n: 1,
    //             stream: false,
    //             logprobs: null,
    //             stop: ["\n"],
    //         }),
    //     }
    // );
    // const data = await response.json();
    // res.status(200).json(data);
}