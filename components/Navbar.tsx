import Link from "next/link";
import React from "react";
import MobileNav from "./MobileNav";
import { SignedIn, SignedOut, UserButton } from "@clerk/nextjs";

const Navbar = () => {
    return (
        <nav className="fixed top-0 flex justify-between z-50 w-full bg-clear-1 px-6 py-4 lg:px-10">
            <Link href="/" className="font-bold capitalize">
                Lipe.
            </Link>

            <div className="flex justify-between gap-5">
                <SignedIn>
                    <UserButton />
                </SignedIn>

                <MobileNav />
            </div>
        </nav>
    );
};

export default Navbar;
