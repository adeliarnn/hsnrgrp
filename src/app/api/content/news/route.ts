import { NextRequest, NextResponse } from 'next/server';
import { getServerSession } from 'next-auth/next';
import { authOptions } from '@/lib/auth';
import { connectDB } from '@/lib/mongodb';
import { News } from '@/models/News';

// GET - Fetch all news
export async function GET() {
  try {
    await connectDB();
    const news = await News.find().sort({ createdAt: -1 });
    return NextResponse.json(news);
  } catch (error: any) {
    return NextResponse.json(
      { error: error.message },
      { status: 500 }
    );
  }
}

// POST - Create new news
export async function POST(request: NextRequest) {
  try {
    const session = await getServerSession(authOptions);
    if (!session) {
      return NextResponse.json(
        { error: 'Unauthorized' },
        { status: 401 }
      );
    }

    await connectDB();
    const data = await request.json();

    const news = await News.create({
      title: data.title,
      content: data.content,
      excerpt: data.excerpt,
      featuredImage: data.featuredImage,
      category: data.category || 'Berita',
      author: data.author || 'Admin',
      isPublished: data.isPublished || false,
    });

    return NextResponse.json(news, { status: 201 });
  } catch (error: any) {
    return NextResponse.json(
      { error: error.message },
      { status: 500 }
    );
  }
}
