import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();

    if (!body.query) {
      return NextResponse.json({ error: "Query is required" }, { status: 400 });
    }

    const response = await fetch("https://api.openai.com/v1/chat/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${process.env.OPENAI_API_KEY}`,
      },
      body: JSON.stringify({
        model: "gpt-3.5-turbo",
        messages: [
          {
            role: "system",
            content:
              " You are a book-finding assistant who only answers questions related to books. Give me one list that consists of 18 books that are similar to the book provided in terms of plot, main idea, or the author's style, and provide a short overview of each.",
          },
          { role: "user", content: body.query },
        ],
      }),
    });

    if (!response.ok) {
      return NextResponse.json(
        { error: "Failed to fetch GPT response" },
        { status: response.status }
      );
    }

    const data = await response.json();
    return NextResponse.json({ response: data.choices[0].message.content });
  } catch (error) {
    console.error("Error in POST handler:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
