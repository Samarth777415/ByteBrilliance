import { connectToDb } from "@/lib/connectToDb";
import { Post } from "@/lib/models";

export const GET = async (request) => {
    try {
        connectToDb();
        const posts = await Post.find();
        return NextResponse.json(posts);

    } catch (error) {
        res.status(500).json({ error: error.message });
    }
    }