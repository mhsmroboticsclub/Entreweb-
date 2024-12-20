export interface User {
  id: string;
  email: string;
  username: string;
  avatar_url?: string;
}

export interface Post {
  id: string;
  user_id: string;
  content: string;
  created_at: string;
  user: User;
  likes: number;
}

export interface Comment {
  id: string;
  post_id: string;
  user_id: string;
  content: string;
  created_at: string;
  user: User;
}