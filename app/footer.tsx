'use client';

import { usePathname } from 'next/navigation';

export default function Footer() {
  const pathname = usePathname();

  if (pathname === '/') return null;

  return (
    <footer className="px-32 py-8 bg-black w-full">
      <span className="font-suit font-black">algorix </span>
      <span className="font-suit">corporation</span>
      <br />
      <span className="text-muted-foreground">
        447 Broadway, 2F #1159, New York, New York 10013, United States
      </span>
    </footer>
  );
}
