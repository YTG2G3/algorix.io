'use client';

import Link from 'next/link';

// Imported the menu and viewport separately due to a bug with centering (left-0)
import {
  NavigationMenu,
  NavigationMenuViewport
} from '@radix-ui/react-navigation-menu';

import {
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle
} from '@/components/ui/navigation-menu';
import Image from 'next/image';
import { usePathname } from 'next/navigation';

export default function Nav() {
  const pathname = usePathname();

  if (pathname === '/') return null;

  return (
    <nav
      className="grid w-screen bg-opacity-80 px-7 py-4 fixed z-20"
      style={{
        gridTemplateColumns: '1fr 1fr',
        background: 'hsl(var(--background))'
      }}
    >
      <Link href="/" className="flex items-center">
        <Image
          src="/algorix_logo.svg"
          alt="Algorix Logo"
          width={100}
          height={30}
          className="cursor-pointer"
        />
      </Link>

      <NavigationMenu className="max-w-screen relative z-10 flex flex-1 items-center justify-end">
        <NavigationMenuList>
          <NavigationMenuItem>
            <Link href="/about" legacyBehavior passHref>
              <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                About Us
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>

          <NavigationMenuItem>
            <Link href="/careers" legacyBehavior passHref>
              <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                Careers
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>

          <NavigationMenuItem>
            <Link href="/contact" legacyBehavior passHref>
              <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                Contact Us
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
        </NavigationMenuList>

        <div className="absolute top-full flex justify-center">
          <NavigationMenuViewport className="origin-top-center relative mt-1.5 h-[var(--radix-navigation-menu-viewport-height)] w-full overflow-hidden rounded-md border bg-popover text-popover-foreground shadow-lg data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-90 md:w-[var(--radix-navigation-menu-viewport-width)]" />
        </div>
      </NavigationMenu>
    </nav>
  );
}
