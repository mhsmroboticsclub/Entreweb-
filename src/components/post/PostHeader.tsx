import React from 'react';
import { formatDistanceToNow } from 'date-fns';
import { User } from '../../types';

interface PostHeaderProps {
  user: User;
  createdAt: string;
}

export function PostHeader({ user, createdAt }: PostHeaderProps) {
  return (
    <div className="flex items-center mb-2">
      <div className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center">
        {user?.avatar_url ? (
          <img
            src={user.avatar_url}
            alt={user.username}
            className="w-full h-full rounded-full"
          />
        ) : (
          <span className="text-xl">{user?.username?.[0]?.toUpperCase()}</span>
        )}
      </div>
      <div className="ml-3">
        <p className="font-semibold">{user?.username}</p>
        <p className="text-sm text-gray-500">
          {formatDistanceToNow(new Date(createdAt), { addSuffix: true })}
        </p>
      </div>
    </div>
  );
}