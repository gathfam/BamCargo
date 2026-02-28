"use client";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Button } from "../ui/button";
import {
  Menu,
  Home,
  Info,
  Snowflake,
  Rss,
  Image as ImageIcon,
  MessageSquare,
  Users,
  PhoneCall,
  LucideIcon,
} from "lucide-react";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import Image from "next/image";
import Link from "next/link";
import clsx from "clsx";
import { usePathname } from "next/navigation";
import React, { useState } from "react";
import { cn } from "@/lib/utils";
import { ThemeToggle } from "../theme-toggle";

type SectionItem = {
  title: string;
  href: string;
  icon: LucideIcon;
  isDisable: boolean;
};

type Section = {
  label: string;
  items: SectionItem[];
};

const sections: Section[] = [
  {
    label: "Menu",
    items: [
      { title: "Halaman Utama", href: "/", icon: Home, isDisable: false },
      {
        title: "Tentang Kami",
        href: "/tentang-kami",
        icon: Info,
        isDisable: false,
      },
    ],
  },
  {
    label: "Layanan",
    items: [
      {
        title: "Frozen Cargo",
        href: "/layanan/frozen-cargo",
        icon: Snowflake,
        isDisable: true,
      },
    ],
  },
  {
    label: "Lainnya",
    items: [
      { title: "Blog", href: "/blog", icon: Rss, isDisable: true },
      { title: "Galeri", href: "/galeri", icon: ImageIcon, isDisable: true },
      {
        title: "Testimonial",
        href: "/testimonial",
        icon: MessageSquare,
        isDisable: true,
      },
      { title: "Karir", href: "/karir", icon: Users, isDisable: true },
      {
        title: "Hubungi Kami",
        href: "/hubungi-kami",
        icon: PhoneCall,
        isDisable: true,
      },
    ],
  },
];

export function HeaderHome() {
  const sectionLabelStyle =
    "text-xs font-semibold text-zinc-500 uppercase tracking-wider mb-2 mt-4 px-3";
  const navLinkStyle =
    "flex items-center gap-3 px-2 py-2 rounded-md text-sm font-medium transition-colors hover:bg-zinc-100 text-zinc-700";
  const activeLinkStyle =
    "flex items-center gap-3 px-2 py-2 rounded-md text-sm font-bold bg-zinc-100 text-zinc-900";
  const iconSize = 14;

  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 dark:border-neutral-800 bg-white/90  dark:bg-background/90 backdrop-blur-md">
      <div className="max-w-7xl mx-auto hidden h-16 md:flex items-center px-6 justify-between">
        <div className="md:flex items-center space-x-4">
          <Image
            width="80"
            height="40"
            alt="logo_bamcargo"
            src="/logo-Bam-Cargo-100.png"
            className="object-contain"
          />
          <NavigationMenu className="hidden lg:flex items-center">
            {sections.map((section) =>
              section.label == "Menu" ? (
                <ul
                  key={section.label}
                  className="grid gap-3 py-4  lg:grid-cols-2 "
                >
                  {section.items.map((item) => (
                    <ListItem
                      key={item.href}
                      title={item.title}
                      href={item.href}
                      icon={item.icon}
                      active={pathname === item.href}
                      className="rounded-md! h-9! py-2.5! w-fit"
                    ></ListItem>
                  ))}
                </ul>
              ) : (
                <NavigationMenuList key={section.label}>
                  <NavigationMenuItem key={section.label}>
                    <NavigationMenuTrigger className="bg-transparent mr-4">
                      {section.label}
                    </NavigationMenuTrigger>
                    <NavigationMenuContent>
                      <ul className="grid w-[300px] gap-3 p-4 md:w-[400px] lg:w-[500px] lg:grid-cols-2">
                        {section.items.map((item) => (
                          <ListItem
                            key={item.href}
                            title={item.title}
                            href={item.href}
                            icon={item.icon}
                            active={pathname === item.href}
                            className="rounded-md! h-9! py-2.5!"
                          ></ListItem>
                        ))}
                      </ul>
                    </NavigationMenuContent>
                  </NavigationMenuItem>
                </NavigationMenuList>
              ),
            )}
          </NavigationMenu>
        </div>
        <div className="flex space-x-4">
          <ThemeToggle />
          <Button asChild>
            <Link href={"/admin/login"}>Login</Link>
          </Button>
        </div>
      </div>
      <div className="flex md:hidden mx-auto h-16 items-center px-6">
        <Sheet open={open} onOpenChange={setOpen}>
          <SheetTrigger asChild>
            <Button variant="secondary" size="icon-lg">
              <Menu size="16" />
            </Button>
          </SheetTrigger>
          <SheetContent side="left" className="p-0">
            <SheetHeader className="p-6 border-b flex items-center justify-center">
              <SheetTitle>
                <Image
                  width="140"
                  height="40"
                  alt="logo_bamcargo"
                  src="/logo-Bam-Cargo-100.png"
                  className="object-contain"
                />
              </SheetTitle>
            </SheetHeader>

            <div className="flex flex-col gap-1 px-4">
              {sections.map((section) => (
                <div key={section.label} className="flex flex-col gap-1">
                  <p className={sectionLabelStyle}>{section.label}</p>
                  {section.items.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      className={clsx(
                        "flex items-center gap-3 px-3 py-2.5 rounded-md text-sm font-medium transition-colors hover:bg-zinc-100 text-zinc-700",
                        {
                          "flex items-center gap-3 px-3 py-2.5 rounded-md text-sm font-bold bg-zinc-100 text-zinc-900":
                            pathname === item.href,
                        },
                      )}
                      onClick={() => setOpen(false)}
                    >
                      <item.icon size={iconSize} />
                      {item.title}
                    </Link>
                  ))}
                </div>
              ))}
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a"> & {
    icon: LucideIcon;
    active?: boolean;
  }
>(({ className, title, icon: Icon, active, href, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <Link
          ref={ref}
          href={href!}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            active && "bg-accent/50 text-accent-foreground font-medium",
            className,
          )}
          {...props}
        >
          <div className="flex items-center gap-2 text-sm font-medium leading-none">
            <Icon className="h-4 w-4" />
            <span>{title}</span>
          </div>
        </Link>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";
