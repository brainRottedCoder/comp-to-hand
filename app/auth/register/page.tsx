"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { PenTool, Check } from "lucide-react";

export default function RegisterPage() {
    const router = useRouter();
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        password: "",
        confirmPassword: "",
    });

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        // Simulate registration - replace with actual auth logic
        router.push("/dashboard");
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData({ ...formData, [e.target.id]: e.target.value });
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-background via-secondary/20 to-background py-12 px-4 sm:px-6 lg:px-8">
            <div className="w-full max-w-5xl grid grid-cols-1 lg:grid-cols-2 gap-8 items-center animate-scale-in">
                {/* Left side - Benefits */}
                <div className="hidden lg:block space-y-6">
                    <div>
                        <Link href="/" className="flex items-center gap-2 mb-8 group">
                            <div className="rounded-lg bg-gradient-to-r from-primary to-purple-600 p-2 transition-transform group-hover:scale-110">
                                <PenTool className="h-6 w-6 text-white" />
                            </div>
                            <span className="text-2xl font-bold bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent">
                                HandwriteAI
                            </span>
                        </Link>
                        <h2 className="text-3xl font-bold mb-4">
                            Start creating authentic handwritten documents today
                        </h2>
                        <p className="text-muted-foreground mb-8">
                            Join thousands of users transforming their digital text into realistic handwriting
                        </p>
                    </div>

                    <div className="space-y-4">
                        {benefits.map((benefit, index) => (
                            <div key={index} className="flex items-start gap-3">
                                <div className="flex-shrink-0 w-6 h-6 rounded-full bg-green-500/10 flex items-center justify-center mt-0.5">
                                    <Check className="h-4 w-4 text-green-500" />
                                </div>
                                <div>
                                    <h3 className="font-medium mb-1">{benefit.title}</h3>
                                    <p className="text-sm text-muted-foreground">{benefit.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Right side - Form */}
                <Card>
                    <CardHeader className="space-y-1">
                        <CardTitle className="text-2xl">Create an account</CardTitle>
                        <CardDescription>
                            Enter your information to get started with HandwriteAI
                        </CardDescription>
                    </CardHeader>
                    <CardContent>
                        <form onSubmit={handleSubmit} className="space-y-4">
                            <div className="space-y-2">
                                <label htmlFor="name" className="text-sm font-medium">
                                    Full Name
                                </label>
                                <Input
                                    id="name"
                                    type="text"
                                    placeholder="John Doe"
                                    value={formData.name}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                            <div className="space-y-2">
                                <label htmlFor="email" className="text-sm font-medium">
                                    Email
                                </label>
                                <Input
                                    id="email"
                                    type="email"
                                    placeholder="name@example.com"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                            <div className="space-y-2">
                                <label htmlFor="password" className="text-sm font-medium">
                                    Password
                                </label>
                                <Input
                                    id="password"
                                    type="password"
                                    placeholder="••••••••"
                                    value={formData.password}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                            <div className="space-y-2">
                                <label htmlFor="confirmPassword" className="text-sm font-medium">
                                    Confirm Password
                                </label>
                                <Input
                                    id="confirmPassword"
                                    type="password"
                                    placeholder="••••••••"
                                    value={formData.confirmPassword}
                                    onChange={handleChange}
                                    required
                                />
                            </div>

                            <div className="text-xs text-muted-foreground">
                                By creating an account, you agree to our{" "}
                                <Link href="/terms" className="text-primary hover:underline">
                                    Terms of Service
                                </Link>{" "}
                                and{" "}
                                <Link href="/privacy" className="text-primary hover:underline">
                                    Privacy Policy
                                </Link>
                            </div>

                            <Button type="submit" className="w-full">
                                Create Account
                            </Button>
                        </form>

                        <div className="mt-6 text-center text-sm">
                            <span className="text-muted-foreground">Already have an account? </span>
                            <Link href="/auth/login" className="text-primary hover:underline font-medium">
                                Sign in
                            </Link>
                        </div>
                    </CardContent>
                </Card>
            </div>
        </div>
    );
}

const benefits = [
    {
        title: "AI-Powered Learning",
        description: "Advanced AI that learns your unique handwriting style from just a few samples",
    },
    {
        title: "Natural Variability",
        description: "Every character is unique, with subtle variations that mimic real handwriting",
    },
    {
        title: "Fast & Secure",
        description: "Generate documents in minutes with enterprise-grade security and privacy",
    },
    {
        title: "Free to Start",
        description: "Try our service with 10 free generations per month—no credit card required",
    },
];
