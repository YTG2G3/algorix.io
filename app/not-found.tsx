'use client';

import { Button } from '@/components/ui/button';
import { useRouter } from 'next/navigation';

export default function FourOFour() {
  const router = useRouter();
  return (
    <div className="flex h-full w-full items-center justify-center">
      <div className="flex flex-col items-center gap-4">
        <span
          className={`font-wanted text-9xl font-black opacity-40 select-none`}
        >
          404
        </span>
        <span>The requested page could not be found.</span>
        <Button onClick={() => router.back()}>Go back</Button>
      </div>
    </div>
  );
}
