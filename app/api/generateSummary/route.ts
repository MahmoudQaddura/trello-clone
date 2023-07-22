import openai from "@/openai";
import { NextResponse } from "next/server";
export async function POST(request: Request) {
  const { todos } = await request.json();

  const response = await openai.createChatCompletion({
    model: "gpt-3.5-turbo",
    temperature: 0.8,
    n: 1,
    stream: false,
    messages: [
      {
        role: "system",
        content:
          "When responding, welcome the user as Mr.User and say welcome to Mahmoud's Trello CLone! Limit the response to 200 characters",
      },
      {
        role: "user",
        content: `Provide a summary of the following todos. count how many todos there are in each category such as to do and in progress and done. then tell the user whatever you feel like saying at the moment. Here's the data:${JSON.stringify(
          todos
        )} `,
      },
    ],
  });

  const { data } = response;
  return NextResponse.json(data.choices[0].message);
}
