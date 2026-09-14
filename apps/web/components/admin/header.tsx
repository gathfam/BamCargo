"use client";

import {
  Sheet,
  SheetContent,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@bamcargo/ui/sheet";
import { Button } from "@bamcargo/ui/button";
import {
  Menu,
  LayoutDashboard,
  FileText,
  Image as ImageIcon,
  GalleryHorizontal,
  Briefcase,
  Receipt,
  LucideIcon,
} from "lucide-react";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@bamcargo/ui/navigation-menu";
import Image from "next/image";
import Link from "next/link";
import clsx from "clsx";
import { usePathname } from "next/navigation";
import { signOut } from "next-auth/react";
import React, { useState } from "react";
import { cn } from "@bamcargo/core/lib/utils";
import { ThemeToggle } from "@/components/theme-toggle";

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
      {
        title: "Dashboard",
        href: "/admin/dashboard",
        icon: LayoutDashboard,
        isDisable: false,
      },
    ],
  },
  {
    label: "Resource",
    items: [
      {
        title: "Artikel",
        href: "/admin/artikel",
        icon: FileText,
        isDisable: false,
      },
      {
        title: "Banner",
        href: "/admin/banner",
        icon: ImageIcon,
        isDisable: false,
      },
      {
        title: "Galeri",
        href: "/admin/gallery",
        icon: GalleryHorizontal,
        isDisable: false,
      },
    ],
  },
  {
    label: "Segera Hadir",
    items: [
      {
        title: "Karir",
        href: "/admin/karir",
        icon: Briefcase,
        isDisable: true,
      },
      {
        title: "Resi",
        href: "/admin/resi",
        icon: Receipt,
        isDisable: true,
      },
    ],
  },
];

export function HeaderAdmin() {
  const sectionLabelStyle =
    "text-xs font-semibold text-zinc-500 uppercase tracking-wider mb-2 mt-4 px-3";
  const iconSize = 14;
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  const handleLogout = async () => {
    await signOut({ callbackUrl: "/admin/login" });
  };

  if (pathname === "/admin/login") {
    return null;
  }

  const isActive = (href: string) => {
    if (href === "/admin/dashboard") {
      return pathname === "/admin/dashboard" || pathname === "/admin";
    }
    return pathname.startsWith(href);
  };

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 dark:border-neutral-800 bg-white/90 dark:bg-background/90 backdrop-blur-md">
      {/* Desktop */}
      <div className="max-w-7xl mx-auto hidden h-16 md:flex items-center px-6 justify-between">
        <div className="md:flex items-center space-x-4">
          <Link href="/admin/dashboard" className="flex items-center gap-3">
            <Image
              width={80}
              height={40}
              alt="logo_bamcargo"
              src="/logo-Bam-Cargo-100.png"
              className="object-contain"
              priority
            />
            <h1 className="font-bold whitespace-nowrap">
              <span className="text-orange-600">ADMIN</span> DASHBOARD
            </h1>
          </Link>

          <NavigationMenu className="hidden lg:flex items-center">
            {sections.map((section) =>
              section.label === "Menu" ? (
                <ul
                  key={section.label}
                  className="grid gap-3 mr-4 py-4 lg:grid-cols-1"
                >
                  {section.items.map((item) => (
                    <ListItem
                      key={item.href}
                      title={item.title}
                      href={item.href}
                      icon={item.icon}
                      active={isActive(item.href)}
                      className="rounded-md! h-9! py-2.5! w-fit"
                    />
                  ))}
                </ul>
              ) : (
                <NavigationMenuList key={section.label}>
                  <NavigationMenuItem>
                    <NavigationMenuTrigger className="bg-transparent mr-4">
                      {section.label}
                    </NavigationMenuTrigger>
                    <NavigationMenuContent>
                      <ul className="grid w-[300px] gap-3 p-4 md:w-[400px] lg:w-[400px] lg:grid-cols-2">
                        {section.items.map((item) => (
                          <ListItem
                            key={item.href}
                            title={item.title}
                            href={item.isDisable ? "#" : item.href}
                            icon={item.icon}
                            active={isActive(item.href)}
                            disabled={item.isDisable}
                            className="rounded-md! h-9! py-2.5!"
                          />
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
          <Button onClick={handleLogout} variant="destructive">
            Logout
          </Button>
        </div>
      </div>

      {/* Mobile */}
      <div className="flex md:hidden mx-auto h-16 items-center px-6 justify-between">
        <Link href="/admin/dashboard" className="flex items-center gap-2">
          <Image
            width={70}
            height={40}
            alt="logo_bamcargo"
            src="/logo-Bam-Cargo-100.png"
            className="object-contain"
            priority
          />
        </Link>
        <div className="space-x-5 flex-row w-fit flex items-center">
          <ThemeToggle />
          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild>
              <Button variant="secondary" size="icon-lg">
                <Menu size={16} />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="p-0">
              <SheetHeader className="p-6 border-b flex items-center justify-center">
                <SheetTitle>
                  <Image
                    width={140}
                    height={40}
                    alt="logo_bamcargo"
                    src="/logo-Bam-Cargo-100.png"
                    className="object-contain"
                    priority
                  />
                </SheetTitle>
              </SheetHeader>

              <div className="flex flex-col gap-1 px-4">
                {sections.map((section) => (
                  <div key={section.label} className="flex flex-col gap-1">
                    <p className={sectionLabelStyle}>{section.label}</p>
                    {section.items.map((item) => {
                      const active = isActive(item.href);
                      const baseClass =
                        "flex items-center gap-3 px-3 py-2.5 rounded-md text-sm font-medium transition-colors";

                      if (item.isDisable) {
                        return (
                          <div
                            key={item.href}
                            className={clsx(
                              baseClass,
                              "text-zinc-400 cursor-not-allowed",
                            )}
                          >
                            <item.icon size={iconSize} />
                            {item.title}
                            <span className="ml-auto text-[10px] uppercase tracking-wider">
                              Soon
                            </span>
                          </div>
                        );
                      }

                      return (
                        <Link
                          key={item.href}
                          href={item.href}
                          className={clsx(
                            baseClass,
                            active
                              ? "bg-orange-600/80 text-white! font-bold"
                              : "hover:bg-zinc-100 dark:hover:bg-neutral-800 text-zinc-700 dark:text-white",
                          )}
                          onClick={() => setOpen(false)}
                        >
                          <item.icon size={iconSize} />
                          {item.title}
                        </Link>
                      );
                    })}
                  </div>
                ))}
              </div>

              <SheetFooter>
                <Button
                  onClick={handleLogout}
                  variant="destructive"
                  className="h-12"
                >
                  Logout
                </Button>
              </SheetFooter>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a"> & {
    icon: LucideIcon;
    active?: boolean;
    disabled?: boolean;
  }
>(({ className, title, icon: Icon, active, disabled, href, ...props }, ref) => {
  if (disabled) {
    return (
      <li>
        <div
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none text-zinc-400 cursor-not-allowed",
            className,
          )}
        >
          <div className="flex items-center gap-2 text-sm font-medium leading-none">
            <Icon className="h-4 w-4" />
            <span>{title}</span>
            <span className="ml-auto text-[10px] uppercase tracking-wider">
              Soon
            </span>
          </div>
        </div>
      </li>
    );
  }

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
