import { NextResponse, NextRequest } from "next/server";
import { OpenAI } from "openai";

export async function GET(req) {
	console.log("inside get");
	return NextResponse.json(
		{ error: "Method not allowed" },
		{
			status: 405,
		}
	);
}

export async function POST(req, res) {
	try {
		const apiKey = process.env.OPENAI_API_KEY;
		const openai = new OpenAI({ apiKey });
		const { workOutPlan } = await req.json();
		const chatCompletion = await openai.chat.completions.create({
			messages: [
				{
					role: "user",
					content: workOutPlan,
				},
			],
			model: "gpt-3.5-turbo",
		});
		return NextResponse.json(chatCompletion.choices[0].message.content, {
			status: 200,
		});
	} catch (error) {
		console.log("error", error);
		return NextResponse.json(
			{ error: "Failed to get data" },
			{
				status: 500,
			}
		);
	}
}
