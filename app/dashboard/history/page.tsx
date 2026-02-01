"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { FileText, Download, Search, Filter, Trash2, Eye } from "lucide-react";

export default function HistoryPage() {
    return (
        <div className="min-h-screen bg-gradient-to-br from-background via-secondary/10 to-background py-8">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
                {/* Header */}
                <div className="mb-8">
                    <Link href="/dashboard" className="text-sm text-primary hover:underline mb-4 inline-block">
                        ← Back to Dashboard
                    </Link>
                    <div className="flex items-center justify-between">
                        <div>
                            <h1 className="text-4xl font-bold mb-2">Generation History</h1>
                            <p className="text-muted-foreground">
                                View and manage all your handwritten documents
                            </p>
                        </div>
                        <div className="flex gap-2">
                            <Button variant="outline">
                                <Filter className="h-4 w-4 mr-2" />
                                Filter
                            </Button>
                        </div>
                    </div>
                </div>

                {/* Search */}
                <Card className="mb-6">
                    <CardContent className="pt-6">
                        <div className="relative">
                            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                            <Input
                                placeholder="Search your generations..."
                                className="pl-10"
                            />
                        </div>
                    </CardContent>
                </Card>

                {/* History Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {generationHistory.map((item, index) => (
                        <Card key={index} className="group hover:shadow-lg transition-shadow">
                            <CardHeader>
                                <div className="flex items-start justify-between">
                                    <div className="flex-1">
                                        <CardTitle className="text-base mb-1">{item.title}</CardTitle>
                                        <p className="text-sm text-muted-foreground">{item.date}</p>
                                    </div>
                                    <div className={`px-2 py-1 rounded text-xs font-medium ${item.status === "completed"
                                            ? "bg-green-500/10 text-green-500"
                                            : "bg-blue-500/10 text-blue-500"
                                        }`}>
                                        {item.status}
                                    </div>
                                </div>
                            </CardHeader>
                            <CardContent>
                                {/* Thumbnail */}
                                <div className="aspect-[4/3] bg-secondary rounded-lg mb-4 flex items-center justify-center">
                                    <FileText className="h-12 w-12 text-muted-foreground" />
                                </div>

                                {/* Details */}
                                <div className="space-y-2 mb-4 text-sm">
                                    <div className="flex justify-between">
                                        <span className="text-muted-foreground">Pages</span>
                                        <span className="font-medium">{item.pages}</span>
                                    </div>
                                    <div className="flex justify-between">
                                        <span className="text-muted-foreground">Style</span>
                                        <span className="font-medium">{item.style}</span>
                                    </div>
                                    <div className="flex justify-between">
                                        <span className="text-muted-foreground">Size</span>
                                        <span className="font-medium">{item.size}</span>
                                    </div>
                                </div>

                                {/* Actions */}
                                <div className="flex gap-2">
                                    <Button size="sm" className="flex-1">
                                        <Eye className="h-4 w-4 mr-1" />
                                        View
                                    </Button>
                                    <Button size="sm" variant="outline" className="flex-1">
                                        <Download className="h-4 w-4 mr-1" />
                                        Download
                                    </Button>
                                    <Button size="sm" variant="ghost">
                                        <Trash2 className="h-4 w-4" />
                                    </Button>
                                </div>
                            </CardContent>
                        </Card>
                    ))}
                </div>

                {/* Empty State - uncomment to show when no history */}
                {/* <div className="text-center py-16">
          <FileText className="h-16 w-16 mx-auto mb-4 text-muted-foreground" />
          <h3 className="text-xl font-semibold mb-2">No generations yet</h3>
          <p className="text-muted-foreground mb-6">
            Start creating handwritten documents to see them here
          </p>
          <Link href="/dashboard/generate">
            <Button>Create First Generation</Button>
          </Link>
        </div> */}
            </div>
        </div>
    );
}

const generationHistory = [
    {
        title: "Assignment Chapter 5",
        date: "2 hours ago",
        pages: 3,
        style: "Personal Style",
        size: "4.2 MB",
        status: "completed",
    },
    {
        title: "Thank You Notes",
        date: "5 hours ago",
        pages: 1,
        style: "Personal Style",
        size: "1.8 MB",
        status: "processing",
    },
    {
        title: "Study Notes",
        date: "Yesterday",
        pages: 5,
        style: "Personal Style",
        size: "7.1 MB",
        status: "completed",
    },
    {
        title: "Letter to Mom",
        date: "2 days ago",
        pages: 2,
        style: "Personal Style",
        size: "3.2 MB",
        status: "completed",
    },
    {
        title: "Project Proposal",
        date: "3 days ago",
        pages: 8,
        style: "Personal Style",
        size: "12.5 MB",
        status: "completed",
    },
    {
        title: "Practice Worksheet",
        date: "1 week ago",
        pages: 4,
        style: "Personal Style",
        size: "5.8 MB",
        status: "completed",
    },
];
