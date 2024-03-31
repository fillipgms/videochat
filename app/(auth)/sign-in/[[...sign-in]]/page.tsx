import { SignIn } from "@clerk/nextjs";
import React from "react";

const SignInPage = () => {
    return (
        <main className="bg-clear-2 h-screen w-full items-center justify-center flex">
            <SignIn />
        </main>
    );
};

export default SignInPage;
