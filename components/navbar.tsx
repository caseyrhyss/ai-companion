"use client";

import { cn } from "@/lib/utils";
import { UserButton } from "@clerk/nextjs";
import { Menu, Sparkles } from "lucide-react";
import { Poppins } from "next/font/google";
import Link from "next/link";
import { Button } from "./ui/button";
import { ModeToggle } from "./mode-toggle";
import { MobileSidebar } from "./mobile-sidebar";
import { useProModal } from "@/hooks/use-pro-modal";

const font = Poppins({
    weight: "600",
    subsets: ["latin"]
})

interface NavbarProps {
    isPro: boolean
}

export const Navbar = ({
    isPro
}: NavbarProps) => {
    const proModal = useProModal();

    return (
        <div className="fixed w-full z-50 flex justify-between items-center py-2 px-4 border-b border-primary/10 bg-secondary h-16 mr-12">
            <div className="flex items-center">
                <MobileSidebar />
                <Link href="/">
                    <h1 className={cn(
                        "hidden md:block text-xl md:text-3xl font-bold text-primary",
                        font.className
                    )}>
                        kuzz.ai
                    </h1>
                </Link>
                <div className="ml-16 flex w-full space-x-16 text-xs">
                    <Link href="/">
                        <h1 className={cn(
                            "hidden md:block text-primary hover:opacity-75",
                        )}>
                            HOME
                        </h1>
                    </Link>
                    <Link href="/companions-list">
                        <h1 className={cn(
                            "hidden md:block text-primary hover:opacity-75",
                        )}>
                            COMPANIONS
                        </h1>
                    </Link>
                    <Link href="/companion/new">
                        <h1 className={cn(
                            "hidden md:block text-primary hover:opacity-75",
                        )}>
                            CREATE
                        </h1>
                    </Link>
                    <Link href="/settings">
                        <h1 className={cn(
                            "hidden md:block text-primary hover:opacity-75",
                        )}>
                            SETTINGS
                        </h1>
                    </Link>
                </div>
            </div>
            <div className="flex items-center gap-x-3">
                {!isPro && (
                     <Button onClick={proModal.onOpen} variant="premium" size="sm">
                     Upgrade
                     <Sparkles className="h-4 w-4 fill-white text-white ml-2"/>
                    </Button>
                )}
                <ModeToggle />
                <UserButton afterSignOutUrl="/" />
            </div>
        </div>
    );
}
