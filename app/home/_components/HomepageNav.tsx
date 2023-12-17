"use client";

import Logo from "@/app/(dashboard)/_components/Logo";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

export default function HomepageNav() {
    const router = useRouter();

    const onClick = () => {
        router.push("/");
    };

    return (
        <div className="flex items-center justify-between p-4 border-b bg-white shadow-sm">
            <Logo />
            <Button onClick={onClick}>Sign in</Button>
        </div>
    );
}
