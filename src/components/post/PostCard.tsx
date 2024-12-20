import React from 'react';
import { Post } from '../../types';
import { PostHeader } from './PostHeader';
import { PostActions } from './PostActions';

interface PostCardProps {
  post: Post;
}

export function PostCard({ post }: PostCardProps) {
  return (
    <div className="bg-white p-4 rounded-lg shadow">
      <PostHeader user={post.user} createdAt={post.created_at} />
      <p className="text-gray-800">{post.content}</p>
      <PostActions likes={post.likes} />
    </div>
  );
}