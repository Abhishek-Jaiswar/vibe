'use client'

import React from 'react'
import { useMutation } from '@tanstack/react-query'
import { useTRPC } from '@/trpc/client'
import { Button } from '@/components/ui/button'
import { toast } from 'sonner'

const Page = () => {
  const trpc = useTRPC()
  const invoke = useMutation(trpc.invoke.mutationOptions({
    onSuccess: () => {
      toast.success("Background job started...")
    }
  }))


  return (
    <div className='p-4 max-w-7xl mx-auto'>
      <Button disabled={invoke.isPending} onClick={() => invoke.mutate({ text: "Fizza" })}>
        Invoke background job
      </Button>
    </div>
  )
}

export default Page 