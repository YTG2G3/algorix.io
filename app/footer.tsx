'use client';

import { usePathname } from 'next/navigation';

export default function Footer() {
  const pathname = usePathname();

  if (pathname === '/') return null;

  return (
    <footer className="px-32 py-8 bg-black w-full">
      <span className="text-muted-foreground">2024 Algorix LLC.</span>
      <br />
      <span className="text-muted-foreground">
        447 Broadway, 2F #1159, New York, New York 10013, United States
      </span>
    </footer>
  );
}
