import React, { useEffect, useState } from 'react';
import { Auth } from './components/Auth';
import { Feed } from './components/Feed';
import { Header } from './components/layout/Header';
import { supabase } from './lib/supabase';
import { User } from './types';

function App() {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      setUser(session?.user ?? null);
      setLoading(false);
    });

    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_event, session) => {
      setUser(session?.user ?? null);
    });

    return () => subscription.unsubscribe();
  }, []);

  if (loading) {
    return <div className="flex items-center justify-center min-h-screen">Loading...</div>;
  }

  return (
    <div className="min-h-screen bg-gray-100">
      {!user ? (
        <div className="flex items-center justify-center min-h-screen p-4">
          <Auth onAuth={() => {}} />
        </div>
      ) : (
        <div className="max-w-2xl mx-auto py-8 px-4">
          <Header />
          <main>
            <Feed />
          </main>
        </div>
      )}
    </div>
  );
}