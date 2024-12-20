import React from 'react';

interface PostActionsProps {
  likes: number;
}

export function PostActions({ likes }: PostActionsProps) {
  return (
    <div className="mt-3 flex items-center space-x-4 text-gray-500">
      <button className="flex items-center space-x-1 hover:text-blue-600">
        <span>Like</span>
        <span>{likes || 0}</span>
      </button>
      <button className="hover:text-blue-600">Comment</button>
      <button className="hover:text-blue-600">Share</button>
    </div>
  );
}