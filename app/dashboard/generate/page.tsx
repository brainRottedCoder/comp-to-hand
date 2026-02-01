"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { FileText, Upload, Loader2, Settings2, Download } from "lucide-react";

export default function GeneratePage() {
    const router = useRouter();
    const [text, setText] = useState("");
    const [isGenerating, setIsGenerating] = useState(false);
    const [progress, setProgress] = useState(0);
    const [isComplete, setIsComplete] = useState(false);

    const handleGenerate = () => {
        setIsGenerating(true);
        setProgress(0);

        const interval = setInterval(() => {
            setProgress((prev) => {
                if (prev >= 100) {
                    clearInterval(interval);
                    setIsGenerating(false);
                    setIsComplete(true);
                    return 100;
                }
                return prev + 3;
            });
        }, 100);
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-background via-secondary/10 to-background py-8">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
                {/* Header */}
                <div className="mb-8">
                    <Link href="/dashboard" className="text-sm text-primary hover:underline mb-4 inline-block">
                        ← Back to Dashboard
                    </Link>
                    <h1 className="text-4xl font-bold mb-2">Generate Handwriting</h1>
                    <p className="text-muted-foreground">
                        Convert your digital text into authentic handwritten documents
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {/* Input Area */}
                    <div className="lg:col-span-2 space-y-6">
                        {!isComplete ? (
                            <>
                                <Card>
                                    <CardHeader>
                                        <div className="flex items-center justify-between">
                                            <div>
                                                <CardTitle>Input Text</CardTitle>
                                                <CardDescription>
                                                    Type or paste the text you want to convert
                                                </CardDescription>
                                            </div>
                                            <Button variant="outline" size="sm">
                                                <Upload className="h-4 w-4 mr-2" />
                                                Upload PDF
                                            </Button>
                                        </div>
                                    </CardHeader>
                                    <CardContent>
                                        <textarea
                                            value={text}
                                            onChange={(e) => setText(e.target.value)}
                                            placeholder="Start typing your text here... You can enter up to 10,000 characters."
                                            className="w-full min-h-[400px] p-4 border rounded-lg resize-none focus:outline-none focus:ring-2 focus:ring-ring bg-background"
                                            disabled={isGenerating}
                                        />
                                        <div className="flex items-center justify-between mt-4">
                                            <p className="text-sm text-muted-foreground">
                                                {text.length.toLocaleString()} / 10,000 characters
                                            </p>
                                            <div className="flex gap-2">
                                                <Button
                                                    variant="outline"
                                                    onClick={() => setText("")}
                                                    disabled={isGenerating}
                                                >
                                                    Clear
                                                </Button>
                                                <Button
                                                    onClick={handleGenerate}
                                                    disabled={text.length === 0 || isGenerating}
                                                >
                                                    {isGenerating ? (
                                                        <>
                                                            <Loader2 className="h-4 w-4 mr-2 animate-spin" />
                                                            Generating...
                                                        </>
                                                    ) : (
                                                        "Generate Handwriting"
                                                    )}
                                                </Button>
                                            </div>
                                        </div>
                                    </CardContent>
                                </Card>

                                {isGenerating && (
                                    <Card className="border-primary">
                                        <CardHeader>
                                            <CardTitle className="flex items-center gap-2">
                                                <Loader2 className="h-5 w-5 animate-spin text-primary" />
                                                Generation in Progress
                                            </CardTitle>
                                            <CardDescription>
                                                Creating your handwritten document...
                                            </CardDescription>
                                        </CardHeader>
                                        <CardContent>
                                            <Progress value={progress} showLabel />
                                            <p className="text-sm text-muted-foreground mt-4">
                                                {progress < 20 && "Preprocessing text..."}
                                                {progress >= 20 && progress < 50 && "Applying your handwriting style..."}
                                                {progress >= 50 && progress < 80 && "Generating characters..."}
                                                {progress >= 80 && "Creating final document..."}
                                            </p>
                                        </CardContent>
                                    </Card>
                                )}
                            </>
                        ) : (
                            <Card>
                                <CardHeader>
                                    <CardTitle>Preview & Download</CardTitle>
                                    <CardDescription>
                                        Your handwritten document is ready!
                                    </CardDescription>
                                </CardHeader>
                                <CardContent>
                                    {/* Preview Area */}
                                    <div className="border rounded-lg bg-white p-8 mb-6 min-h-[400px] flex items-center justify-center">
                                        <div className="text-center">
                                            <FileText className="h-24 w-24 mx-auto mb-4 text-primary" />
                                            <p className="text-lg font-medium mb-2">Document Preview</p>
                                            <p className="text-sm text-muted-foreground">
                                                Your handwritten document with {Math.ceil(text.length / 300)} page(s)
                                            </p>
                                        </div>
                                    </div>

                                    {/* Download Options */}
                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                        <Button className="w-full" size="lg">
                                            <Download className="h-4 w-4 mr-2" />
                                            Download PNG
                                        </Button>
                                        <Button className="w-full" variant="outline" size="lg">
                                            <Download className="h-4 w-4 mr-2" />
                                            Download PDF
                                        </Button>
                                    </div>

                                    <div className="flex gap-2 mt-4">
                                        <Button
                                            variant="ghost"
                                            onClick={() => {
                                                setIsComplete(false);
                                                setProgress(0);
                                            }}
                                        >
                                            Generate Another
                                        </Button>
                                        <Button
                                            variant="ghost"
                                            onClick={() => router.push("/dashboard/history")}
                                        >
                                            View in History
                                        </Button>
                                    </div>
                                </CardContent>
                            </Card>
                        )}
                    </div>

                    {/* Sidebar - Settings */}
                    <div className="space-y-6">
                        <Card>
                            <CardHeader>
                                <CardTitle className="flex items-center gap-2">
                                    <Settings2 className="h-5 w-5" />
                                    Options
                                </CardTitle>
                            </CardHeader>
                            <CardContent className="space-y-4">
                                <div>
                                    <label className="text-sm font-medium mb-2 block">
                                        Handwriting Style
                                    </label>
                                    <select className="w-full h-10 rounded-lg border border-input bg-background px-3 py-2">
                                        <option>Personal Style</option>
                                    </select>
                                </div>

                                <div>
                                    <label className="text-sm font-medium mb-2 block">
                                        Output Format
                                    </label>
                                    <select className="w-full h-10 rounded-lg border border-input bg-background px-3 py-2">
                                        <option>PNG Images</option>
                                        <option>Compiled PDF</option>
                                    </select>
                                </div>

                                <div>
                                    <label className="text-sm font-medium mb-2 block">
                                        Page Size
                                    </label>
                                    <select className="w-full h-10 rounded-lg border border-input bg-background px-3 py-2">
                                        <option>A4 (Default)</option>
                                        <option>Letter</option>
                                        <option>Legal</option>
                                    </select>
                                </div>

                                <div>
                                    <label className="text-sm font-medium mb-2 block">
                                        Line Spacing
                                    </label>
                                    <Input type="range" min="1" max="2" step="0.1" defaultValue="1.5" />
                                    <div className="flex justify-between text-xs text-muted-foreground mt-1">
                                        <span>Tight</span>
                                        <span>Normal</span>
                                        <span>Loose</span>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>

                        <Card className="bg-gradient-to-br from-primary/10 to-purple-600/10 border-primary/20">
                            <CardHeader>
                                <CardTitle className="text-base">Estimated Output</CardTitle>
                            </CardHeader>
                            <CardContent className="space-y-2 text-sm">
                                <div className="flex justify-between">
                                    <span className="text-muted-foreground">Pages</span>
                                    <span className="font-medium">
                                        {text.length > 0 ? Math.ceil(text.length / 300) : 0}
                                    </span>
                                </div>
                                <div className="flex justify-between">
                                    <span className="text-muted-foreground">Est. Time</span>
                                    <span className="font-medium">
                                        {text.length > 0 ? `~${Math.ceil(text.length / 300) * 30}s` : "0s"}
                                    </span>
                                </div>
                                <div className="flex justify-between">
                                    <span className="text-muted-foreground">File Size</span>
                                    <span className="font-medium">
                                        {text.length > 0 ? `~${(Math.ceil(text.length / 300) * 2).toFixed(1)} MB` : "0 MB"}
                                    </span>
                                </div>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </div>
        </div>
    );
}
