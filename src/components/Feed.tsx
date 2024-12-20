import React, { useEffect, useState } from 'react';
import { Post } from '../types';
import { supabase } from '../lib/supabase';
import { CreatePost } from './CreatePost';
import { PostCard } from './post/PostCard';

export function Feed() {
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState(true);

  const fetchPosts = async () => {
    try {
      const { data, error } = await supabase
        .from('posts')
        .select(`
          *,
          user:user_id (
            id,
            email,
            username,
            avatar_url
          )
        `)
        .order('created_at', { ascending: false });

      if (error) throw error;
      setPosts(data || []);
    } catch (error) {
      console.error('Error fetching posts:', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  if (loading) {
    return <div className="text-center py-4">Loading posts...</div>;
  }

  return (
    <div className="space-y-4">
      <CreatePost onPostCreated={fetchPosts} />
      {posts.map((post) => (
        <PostCard key={post.id} post={post} />
      ))}
    </div>
  );
}