"use client";
import { sidebarLinks } from "@/constants";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const Sidebar = () => {
    const pathName = usePathname();

    return (
        <aside className="flex flex-col sticky l-0 top-0 h-screen w-fit shadow-md justify-between bg-clear-1 p-6 pl-0 pt-28 text-black max-sm:hidden lg:w-[256px]">
            <div className="flex flex-1 flex-col gap-6">
                <ul>
                    {sidebarLinks.map((link) => {
                        const isActive =
                            pathName === link.route ||
                            pathName.startsWith(link.route);

                        return (
                            <li key={link.label}>
                                <Link
                                    href={link.route}
                                    className={cn(
                                        "flex gap-4 text-[#040d2f]  items-center p-4 rounded-r-lg justify-start",
                                        {
                                            "bg-main-3/25": isActive,
                                        }
                                    )}
                                >
                                    <span
                                        className={cn(
                                            "capitalize font-medium",
                                            {
                                                "text-main-1": isActive,
                                                "font-semibold": isActive,
                                            }
                                        )}
                                    >
                                        {link.label}
                                    </span>
                                </Link>
                            </li>
                        );
                    })}
                </ul>
            </div>
        </aside>
    );
};

export default Sidebar;
