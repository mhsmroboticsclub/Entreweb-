import React from 'react';
import { supabase } from '../../lib/supabase';

export function Header() {
  return (
    <header className="mb-8">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold text-gray-900">Entreweb</h1>
        <button
          onClick={() => supabase.auth.signOut()}
          className="text-gray-600 hover:text-gray-900"
        >
          Sign Out
        </button>
      </div>
    </header>
  );
}