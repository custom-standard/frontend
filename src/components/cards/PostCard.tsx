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
    <Card>
      <CardHeader>
        <img src={post.thumbnail ? post.thumbnail : logo} alt="thumbnail" />
      </CardHeader>
      <CardContent>
        <div className="flex gap-2 mb-2">
          <CategoryBadge category={post.category} />
          <CardTitle className="text-md">{post.title}</CardTitle>
        </div>
        <Profile size="sm" user={post.writer} />
      </CardContent>
    </Card>
  );
}
