import { SignUp } from "@clerk/nextjs";
import React from "react";

const SignUpPage = () => {
    return (
        <main className="bg-clear-2 h-screen w-full items-center justify-center flex">
            <SignUp />
        </main>
    );
};

export default SignUpPage;
