"use client";

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import useSWR from 'swr';

// Fetcher function for SWR
const fetcher = (url) => fetch(url).then((res) => res.json());

export default function useUser({ redirectTo } = {}) {
  const { data: user, error } = useSWR('/api/me', fetcher);
  const router = useRouter();

  useEffect(() => {
    if (!redirectTo || !user) return;
    if (user && redirectTo) {
      router.push(redirectTo);
    }
  }, [user, redirectTo, router]);

  return { user, error };
}
