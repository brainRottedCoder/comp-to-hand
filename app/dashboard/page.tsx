"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import {
    Upload,
    FileText,
    History,
    Settings,
    PlusCircle,
    TrendingUp,
    Clock,
    CheckCircle2,
    AlertCircle,
} from "lucide-react";

export default function DashboardPage() {
    return (
        <div className="min-h-screen bg-gradient-to-br from-background via-secondary/10 to-background">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
                {/* Header */}
                <div className="mb-8 animate-fade-in">
                    <h1 className="text-4xl font-bold mb-2">Welcome back, John! 👋</h1>
                    <p className="text-muted-foreground">
                        Here's what's happening with your handwriting projects
                    </p>
                </div>

                {/* Stats Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                    {stats.map((stat, index) => (
                        <Card
                            key={index}
                            className="hover:shadow-lg transition-shadow animate-slide-up"
                            style={{ animationDelay: `${index * 50}ms` }}
                        >
                            <CardHeader className="flex flex-row items-center justify-between pb-2">
                                <CardTitle className="text-sm font-medium text-muted-foreground">
                                    {stat.title}
                                </CardTitle>
                                <div className="h-8 w-8 rounded-lg bg-primary/10 flex items-center justify-center text-primary">
                                    {stat.icon}
                                </div>
                            </CardHeader>
                            <CardContent>
                                <div className="text-3xl font-bold">{stat.value}</div>
                                <p className="text-sm text-muted-foreground mt-1">
                                    {stat.description}
                                </p>
                            </CardContent>
                        </Card>
                    ))}
                </div>

                {/* Main Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {/* Quick Actions */}
                    <div className="lg:col-span-2 space-y-6">
                        <Card>
                            <CardHeader>
                                <CardTitle>Quick Actions</CardTitle>
                                <CardDescription>
                                    Start a new project or continue where you left off
                                </CardDescription>
                            </CardHeader>
                            <CardContent className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                <Link href="/dashboard/upload" className="block">
                                    <div className="group border rounded-lg p-6 hover:border-primary hover:bg-primary/5 transition-all cursor-pointer">
                                        <div className="h-12 w-12 rounded-lg bg-primary/10 text-primary flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                                            <Upload className="h-6 w-6" />
                                        </div>
                                        <h3 className="font-semibold mb-2">Upload Samples</h3>
                                        <p className="text-sm text-muted-foreground">
                                            Train a new handwriting style
                                        </p>
                                    </div>
                                </Link>

                                <Link href="/dashboard/generate" className="block">
                                    <div className="group border rounded-lg p-6 hover:border-primary hover:bg-primary/5 transition-all cursor-pointer">
                                        <div className="h-12 w-12 rounded-lg bg-primary/10 text-primary flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                                            <FileText className="h-6 w-6" />
                                        </div>
                                        <h3 className="font-semibold mb-2">Generate Handwriting</h3>
                                        <p className="text-sm text-muted-foreground">
                                            Convert text to handwriting
                                        </p>
                                    </div>
                                </Link>
                            </CardContent>
                        </Card>

                        {/* Recent Activity */}
                        <Card>
                            <CardHeader>
                                <div className="flex items-center justify-between">
                                    <div>
                                        <CardTitle>Recent Activity</CardTitle>
                                        <CardDescription>Your latest generations and uploads</CardDescription>
                                    </div>
                                    <Link href="/dashboard/history">
                                        <Button variant="outline" size="sm">
                                            View All
                                        </Button>
                                    </Link>
                                </div>
                            </CardHeader>
                            <CardContent>
                                <div className="space-y-4">
                                    {recentActivity.map((activity, index) => (
                                        <div
                                            key={index}
                                            className="flex items-start gap-4 p-4 rounded-lg border hover:bg-accent/50 transition-colors"
                                        >
                                            <div className={`h-10 w-10 rounded-lg flex items-center justify-center ${activity.status === "completed"
                                                    ? "bg-green-500/10 text-green-500"
                                                    : activity.status === "processing"
                                                        ? "bg-blue-500/10 text-blue-500"
                                                        : "bg-red-500/10 text-red-500"
                                                }`}>
                                                {activity.status === "completed" ? (
                                                    <CheckCircle2 className="h-5 w-5" />
                                                ) : activity.status === "processing" ? (
                                                    <Clock className="h-5 w-5" />
                                                ) : (
                                                    <AlertCircle className="h-5 w-5" />
                                                )}
                                            </div>
                                            <div className="flex-1 min-w-0">
                                                <p className="font-medium truncate">{activity.title}</p>
                                                <p className="text-sm text-muted-foreground">{activity.description}</p>
                                            </div>
                                            <span className="text-xs text-muted-foreground whitespace-nowrap">
                                                {activity.time}
                                            </span>
                                        </div>
                                    ))}
                                </div>
                            </CardContent>
                        </Card>
                    </div>

                    {/* Sidebar */}
                    <div className="space-y-6">
                        {/* Usage Card */}
                        <Card>
                            <CardHeader>
                                <CardTitle>Usage This Month</CardTitle>
                                <CardDescription>Free plan limits</CardDescription>
                            </CardHeader>
                            <CardContent className="space-y-4">
                                <div>
                                    <div className="flex justify-between text-sm mb-2">
                                        <span>Generations</span>
                                        <span className="font-medium">7 / 10</span>
                                    </div>
                                    <Progress value={70} />
                                </div>
                                <div>
                                    <div className="flex justify-between text-sm mb-2">
                                        <span>Styles Trained</span>
                                        <span className="font-medium">1 / 1</span>
                                    </div>
                                    <Progress value={100} />
                                </div>
                                <Button className="w-full" variant="outline">
                                    Upgrade to Pro
                                </Button>
                            </CardContent>
                        </Card>

                        {/* Tips Card */}
                        <Card className="bg-gradient-to-br from-primary/10 to-purple-600/10 border-primary/20">
                            <CardHeader>
                                <CardTitle className="flex items-center gap-2">
                                    <TrendingUp className="h-5 w-5 text-primary" />
                                    Pro Tip
                                </CardTitle>
                            </CardHeader>
                            <CardContent>
                                <p className="text-sm">
                                    Upload at least 15 handwriting samples for best results. Make sure they
                                    include all letters, numbers, and common punctuation!
                                </p>
                            </CardContent>
                        </Card>

                        {/* Quick Links */}
                        <Card>
                            <CardHeader>
                                <CardTitle>Quick Links</CardTitle>
                            </CardHeader>
                            <CardContent className="space-y-2">
                                <Link
                                    href="/dashboard/history"
                                    className="flex items-center gap-3 p-2 rounded-lg hover:bg-accent transition-colors"
                                >
                                    <History className="h-4 w-4 text-muted-foreground" />
                                    <span className="text-sm">View History</span>
                                </Link>
                                <Link
                                    href="/dashboard/settings"
                                    className="flex items-center gap-3 p-2 rounded-lg hover:bg-accent transition-colors"
                                >
                                    <Settings className="h-4 w-4 text-muted-foreground" />
                                    <span className="text-sm">Settings</span>
                                </Link>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </div>
        </div>
    );
}

const stats = [
    {
        title: "Total Generations",
        value: "23",
        description: "+3 from last month",
        icon: <FileText className="h-4 w-4" />,
    },
    {
        title: "Active Styles",
        value: "1",
        description: "Ready to use",
        icon: <CheckCircle2 className="h-4 w-4" />,
    },
    {
        title: "Pages Generated",
        value: "47",
        description: "+12 from last week",
        icon: <TrendingUp className="h-4 w-4" />,
    },
    {
        title: "Storage Used",
        value: "142 MB",
        description: "of 500 MB",
        icon: <Upload className="h-4 w-4" />,
    },
];

const recentActivity = [
    {
        title: "Assignment Chapter 5",
        description: "3 pages • Personal Style",
        time: "2 hours ago",
        status: "completed",
    },
    {
        title: "Thank You Notes",
        description: "1 page • Processing...",
        time: "5 hours ago",
        status: "processing",
    },
    {
        title: "Study Notes",
        description: "5 pages • Personal Style",
        time: "Yesterday",
        status: "completed",
    },
];
