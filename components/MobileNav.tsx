"use client";
import React from "react";
import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetClose,
    SheetTrigger,
} from "@/components/ui/sheet";
import { FiMenu } from "react-icons/fi";
import Link from "next/link";
import { sidebarLinks } from "@/constants";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

const MobileNav = () => {
    const pathName = usePathname();

    return (
        <section className="w-full max-w-[264px]">
            <Sheet>
                <SheetTrigger asChild>
                    <FiMenu size={24} className="sm:hidden" />
                </SheetTrigger>
                <SheetContent className="border-none bg-clear-1">
                    <div className="flex flex-col justify-between h-[calc(100vh-72px)] overflow-y-auto">
                        <SheetClose asChild>
                            <ul className="flex h-full flex-col gap-6 pt-16">
                                {sidebarLinks.map((link) => {
                                    const isActive = pathName === link.route;

                                    return (
                                        <li key={link.label}>
                                            <SheetClose asChild>
                                                <Link
                                                    href={link.route}
                                                    className={cn(
                                                        "flex gap-4 text-[#040d2f]  items-center p-4 rounded-r-lg w-full max-w-60",
                                                        {
                                                            "bg-main-3/25":
                                                                isActive,
                                                        }
                                                    )}
                                                >
                                                    <span
                                                        className={cn(
                                                            "capitalize font-medium",
                                                            {
                                                                "text-main-1":
                                                                    isActive,
                                                                "font-semibold":
                                                                    isActive,
                                                            }
                                                        )}
                                                    >
                                                        {link.label}
                                                    </span>
                                                </Link>
                                            </SheetClose>
                                        </li>
                                    );
                                })}
                            </ul>
                        </SheetClose>
                    </div>
                </SheetContent>
            </Sheet>
        </section>
    );
};

export default MobileNav;
