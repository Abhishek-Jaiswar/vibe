
import React, { Suspense } from 'react'
import { getQueryClient, trpc } from '@/trpc/server'
import { dehydrate, HydrationBoundary } from '@tanstack/react-query';
import { Client } from './client';


const Page = async () => {
  const queryClient = getQueryClient();
  void queryClient.prefetchQuery(trpc.createAi.queryOptions({ text: "Abhishek @@PREFETCHED" }))
  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <Suspense fallback={<p>Loading.....</p>}>
        <Client />
      </Suspense>
    </HydrationBoundary>
  )
}

export default Page 