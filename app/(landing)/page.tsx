'use client';

import {
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle
} from '@/components/ui/navigation-menu';
import { NavigationMenu } from '@radix-ui/react-navigation-menu';
import Link from 'next/link';

export default function Landing() {
  return (
    <div className="flex items-center text-center flex-col justify-around h-screen w-screen">
      <span className="font-grotesque text-9xl font-bold">
        Trust Your Uniqueness
      </span>

      <NavigationMenu className="gap-8">
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
      </NavigationMenu>

      <span className="font-suit">
        <span className="font-black">algorix </span>
        <span>corporation</span>
      </span>
    </div>
  );
}
