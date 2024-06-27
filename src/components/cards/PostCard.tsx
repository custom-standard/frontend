import React from "react";
import { Post } from "../../types/Post";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import CategoryBadge from "../post/CategoryBadge";
import Profile from "../user/Profile";
import logo from "../../assets/image/logo.png";

interface Props {
  post: Post;
}

export default function PostCard({ post }: Props) {
  return (
    <Card className="h-[260px] flex flex-col">
      <CardHeader className="flex-grow p-3 overflow-hidden">
        <img
          className="w-full h-full object-cover"
          src={post.thumbnail ? post.thumbnail : logo}
          alt="thumbnail"
        />
      </CardHeader>
      <CardContent className="px-3 pt-2 pb-4">
        <div className="flex gap-2 mb-2">
          <CategoryBadge category={post.category} />
          <CardTitle className="text-md">{post.title}</CardTitle>
        </div>
        <Profile size="sm" user={post.writer} link={true} />
      </CardContent>
    </Card>
  );
}
