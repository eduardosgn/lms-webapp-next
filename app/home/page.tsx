"use client";

import { useRouter } from "next/navigation";

export default async function Homepage() {
    const router = useRouter();

    const signInButton = () => {
        router.push("/");
    };

    return (
        <div onClick={signInButton}>
            <h1>Unprotected homepage</h1>
        </div>
    );
}
