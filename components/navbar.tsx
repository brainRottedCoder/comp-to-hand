"use client";

import Link from "next/link";
import { Button } from "./ui/button";
import { PenTool, Menu, X } from "lucide-react";
import { useState } from "react";
import { cn } from "@/lib/utils";

export function Navbar() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    return (
        <nav className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex h-16 items-center justify-between">
                    {/* Logo */}
                    <Link href="/" className="flex items-center gap-2 group">
                        <div className="rounded-lg bg-gradient-to-r from-primary to-purple-600 p-2 transition-transform group-hover:scale-110">
                            <PenTool className="h-5 w-5 text-white" />
                        </div>
                        <span className="text-xl font-bold bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent">
                            HandwriteAI
                        </span>
                    </Link>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex items-center gap-6">
                        <Link
                            href="/#features"
                            className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
                        >
                            Features
                        </Link>
                        <Link
                            href="/#how-it-works"
                            className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
                        >
                            How It Works
                        </Link>
                        <Link
                            href="/#pricing"
                            className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
                        >
                            Pricing
                        </Link>
                    </div>

                    {/* Desktop Auth Buttons */}
                    <div className="hidden md:flex items-center gap-4">
                        <Link href="/auth/login">
                            <Button variant="ghost">Sign In</Button>
                        </Link>
                        <Link href="/auth/register">
                            <Button>Get Started</Button>
                        </Link>
                    </div>

                    {/* Mobile menu button */}
                    <button
                        className="md:hidden p-2 rounded-lg hover:bg-accent"
                        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                    >
                        {mobileMenuOpen ? (
                            <X className="h-6 w-6" />
                        ) : (
                            <Menu className="h-6 w-6" />
                        )}
                    </button>
                </div>
            </div>

            {/* Mobile menu */}
            <div
                className={cn(
                    "md:hidden border-t overflow-hidden transition-all duration-300",
                    mobileMenuOpen ? "max-h-96" : "max-h-0"
                )}
            >
                <div className="container mx-auto px-4 py-4 space-y-4">
                    <Link
                        href="/#features"
                        className="block text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
                        onClick={() => setMobileMenuOpen(false)}
                    >
                        Features
                    </Link>
                    <Link
                        href="/#how-it-works"
                        className="block text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
                        onClick={() => setMobileMenuOpen(false)}
                    >
                        How It Works
                    </Link>
                    <Link
                        href="/#pricing"
                        className="block text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
                        onClick={() => setMobileMenuOpen(false)}
                    >
                        Pricing
                    </Link>
                    <div className="pt-4 space-y-2 border-t">
                        <Link href="/auth/login" className="block">
                            <Button variant="outline" className="w-full">
                                Sign In
                            </Button>
                        </Link>
                        <Link href="/auth/register" className="block">
                            <Button className="w-full">Get Started</Button>
                        </Link>
                    </div>
                </div>
            </div>
        </nav>
    );
}
