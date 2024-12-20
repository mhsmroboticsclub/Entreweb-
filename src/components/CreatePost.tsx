import React, { useState } from 'react';
import { supabase } from '../lib/supabase';

interface CreatePostProps {
  onPostCreated: () => void;
}

export function CreatePost({ onPostCreated }: CreatePostProps) {
  const [content, setContent] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!content.trim()) return;

    setIsLoading(true);
    try {
      const { error } = await supabase
        .from('posts')
        .insert([{ content }]);
      
      if (error) throw error;
      
      setContent('');
      onPostCreated();
    } catch (error) {
      console.error('Error creating post:', error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="mb-6 bg-white p-4 rounded-lg shadow">
      <textarea
        value={content}
        onChange={(e) => setContent(e.target.value)}
        placeholder="What's on your mind?"
        className="w-full p-2 border rounded-lg resize-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
        rows={3}
      />
      <div className="mt-2 flex justify-end">
        <button
          type="submit"
          disabled={isLoading || !content.trim()}
          className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:opacity-50"
        >
          {isLoading ? 'Posting...' : 'Post'}
        </button>
      </div>
    </form>
  );
}