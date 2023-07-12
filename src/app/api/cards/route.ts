import { NextResponse } from "next/server";

const DATA_SOURCE_URL = "https://mocki.io/v1/47ed69ba-ce12-4a2a-8853-c5d49ad6a821";

export async function GET() {
  try {
    const response = await fetch(DATA_SOURCE_URL);
    const cards: Card[] = await response.json();

    const ITEMS_PER_PAGE = 12;

    return NextResponse.json({
      success: true,
      totalCount: cards.length,
      pageCount: Math.ceil(cards.length / ITEMS_PER_PAGE),
      perPage: ITEMS_PER_PAGE,
      cards: cards,
    });
  } catch (error) {
    return NextResponse.json({
      success: false,
      error: error.message,
    });
  }
}
