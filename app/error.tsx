'use client';

import { Button } from '@/components/ui/button';

export default function Error({
  error,
  reset
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <div className="flex h-full w-full items-center justify-center">
      <div className="flex flex-col items-center gap-4">
        <span
          className={`font-grotesque text-9xl font-black opacity-40 select-none`}
        >
          Error
        </span>
        <span>An error has occured.</span>
        <span className="text-sm text-muted-foreground select-none">
          {error.message}
        </span>
        <Button onClick={() => reset()}>Retry</Button>
      </div>
    </div>
  );
}
