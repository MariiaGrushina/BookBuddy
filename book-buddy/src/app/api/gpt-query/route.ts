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
            content: `You are a book-finding assistant who ONLY answers with respect to the following instructions: Return a JavaScript array of books of any length between 18-25 that are similar to the book provided in terms of plot, main idea, or the author's style, and provide a short overview of each. 

Ensure that each element of the array is an array with EXACTLY four items. The first item is the book’s name, the second is the book’s author, the third is the book’s genre, and the fourth is a brief description of the book.

A template of how the output should look like when the user gives you a book is this:

“[[“Bookname1”, “Bookauthor1”, “Genre1”, “Description1”], [“Bookname2”, “Bookauthor2”, “Genre2”, “Description2”], [“Bookname3”, “Bookauthor3”, “Genre3”, “Description3”]]”

You must ALWAYS ANSWER in this format, but make sure to include between 18-25 books instead of three. If you don’t understand the prompt then just return an empty array. Do not repeat books.
`,
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
