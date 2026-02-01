"use client";

import { useState, useCallback } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Upload, X, CheckCircle2, AlertCircle, Image as ImageIcon, Loader2 } from "lucide-react";
import Link from "next/link";

export default function UploadPage() {
    const router = useRouter();
    const [files, setFiles] = useState<File[]>([]);
    const [isDragging, setIsDragging] = useState(false);
    const [isTraining, setIsTraining] = useState(false);
    const [trainingProgress, setTrainingProgress] = useState(0);

    const handleDragOver = useCallback((e: React.DragEvent) => {
        e.preventDefault();
        setIsDragging(true);
    }, []);

    const handleDragLeave = useCallback((e: React.DragEvent) => {
        e.preventDefault();
        setIsDragging(false);
    }, []);

    const handleDrop = useCallback((e: React.DragEvent) => {
        e.preventDefault();
        setIsDragging(false);
        const droppedFiles = Array.from(e.dataTransfer.files).filter((file) =>
            file.type.startsWith("image/")
        );
        setFiles((prev) => [...prev, ...droppedFiles].slice(0, 30));
    }, []);

    const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files) {
            const selectedFiles = Array.from(e.target.files);
            setFiles((prev) => [...prev, ...selectedFiles].slice(0, 30));
        }
    };

    const removeFile = (index: number) => {
        setFiles((prev) => prev.filter((_, i) => i !== index));
    };

    const handleTraining = () => {
        setIsTraining(true);
        // Simulate training progress
        const interval = setInterval(() => {
            setTrainingProgress((prev) => {
                if (prev >= 100) {
                    clearInterval(interval);
                    setTimeout(() => router.push("/dashboard"), 1000);
                    return 100;
                }
                return prev + 2;
            });
        }, 100);
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-background via-secondary/10 to-background py-8">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
                {/* Header */}
                <div className="mb-8">
                    <Link href="/dashboard" className="text-sm text-primary hover:underline mb-4 inline-block">
                        ← Back to Dashboard
                    </Link>
                    <h1 className="text-4xl font-bold mb-2">Upload Handwriting Samples</h1>
                    <p className="text-muted-foreground">
                        Upload 5-30 images of your handwriting to train your personalized AI model
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {/* Main Upload Area */}
                    <div className="lg:col-span-2 space-y-6">
                        <Card>
                            <CardHeader>
                                <CardTitle>Upload Images</CardTitle>
                                <CardDescription>
                                    Upload clear images of your handwriting. More samples = better quality!
                                </CardDescription>
                            </CardHeader>
                            <CardContent>
                                <div
                                    className={`border-2 border-dashed rounded-lg p-12 text-center transition-all ${isDragging
                                        ? "border-primary bg-primary/5 scale-105"
                                        : "border-border hover:border-primary/50"
                                        }`}
                                    onDragOver={handleDragOver}
                                    onDragLeave={handleDragLeave}
                                    onDrop={handleDrop}
                                >
                                    <Upload className="h-12 w-12 mx-auto mb-4 text-muted-foreground" />
                                    <h3 className="text-lg font-medium mb-2">
                                        Drag and drop your images here
                                    </h3>
                                    <p className="text-sm text-muted-foreground mb-4">
                                        or click to browse your files
                                    </p>
                                    <input
                                        type="file"
                                        multiple
                                        accept="image/*"
                                        onChange={handleFileSelect}
                                        className="hidden"
                                        id="file-upload"
                                        disabled={files.length >= 30}
                                    />
                                    <label htmlFor="file-upload">
                                        <Button variant="outline" type="button" className="cursor-pointer">
                                            Browse Files
                                        </Button>
                                    </label>
                                    <p className="text-xs text-muted-foreground mt-4">
                                        Supported formats: JPG, PNG, HEIC (Max 30 files)
                                    </p>
                                </div>

                                {/* Uploaded Files */}
                                {files.length > 0 && (
                                    <div className="mt-6">
                                        <div className="flex items-center justify-between mb-4">
                                            <h4 className="font-medium">
                                                Uploaded Samples ({files.length}/30)
                                            </h4>
                                            <Button
                                                variant="ghost"
                                                size="sm"
                                                onClick={() => setFiles([])}
                                            >
                                                Clear All
                                            </Button>
                                        </div>
                                        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                                            {files.map((file, index) => (
                                                <div
                                                    key={index}
                                                    className="relative group border rounded-lg p-2 hover:border-primary transition-colors"
                                                >
                                                    <div className="aspect-square bg-secondary rounded flex items-center justify-center mb-2">
                                                        <ImageIcon className="h-8 w-8 text-muted-foreground" />
                                                    </div>
                                                    <p className="text-xs truncate">{file.name}</p>
                                                    <button
                                                        onClick={() => removeFile(index)}
                                                        className="absolute top-1 right-1 p-1 bg-destructive text-destructive-foreground rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
                                                    >
                                                        <X className="h-4 w-4" />
                                                    </button>
                                                    <div className="absolute bottom-1 right-1 bg-green-500 text-white rounded-full p-1">
                                                        <CheckCircle2 className="h-3 w-3" />
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                )}
                            </CardContent>
                        </Card>

                        {/* Training Section */}
                        {isTraining && (
                            <Card className="border-primary">
                                <CardHeader>
                                    <CardTitle className="flex items-center gap-2">
                                        <Loader2 className="h-5 w-5 animate-spin text-primary" />
                                        Training in Progress
                                    </CardTitle>
                                    <CardDescription>
                                        Your AI model is learning your handwriting style...
                                    </CardDescription>
                                </CardHeader>
                                <CardContent>
                                    <Progress value={trainingProgress} showLabel />
                                    <p className="text-sm text-muted-foreground mt-4">
                                        {trainingProgress < 30 && "Preprocessing samples..."}
                                        {trainingProgress >= 30 && trainingProgress < 60 && "Analyzing style features..."}
                                        {trainingProgress >= 60 && trainingProgress < 90 && "Training model..."}
                                        {trainingProgress >= 90 && "Finalizing..."}
                                    </p>
                                </CardContent>
                            </Card>
                        )}

                        {files.length >= 5 && !isTraining && (
                            <Card className="bg-gradient-to-br from-primary/10 to-purple-600/10 border-primary/20">
                                <CardContent className="pt-6">
                                    <div className="flex items-start gap-4">
                                        <div className="flex-1">
                                            <h3 className="font-semibold mb-2">Ready to train!</h3>
                                            <p className="text-sm text-muted-foreground mb-4">
                                                You've uploaded {files.length} samples. Click below to start training your
                                                personalized handwriting AI.
                                            </p>
                                            <Button onClick={handleTraining} size="lg">
                                                Start Training
                                            </Button>
                                        </div>
                                    </div>
                                </CardContent>
                            </Card>
                        )}
                    </div>

                    {/* Sidebar - Guidelines */}
                    <div className="space-y-6">
                        <Card>
                            <CardHeader>
                                <CardTitle>Guidelines</CardTitle>
                            </CardHeader>
                            <CardContent className="space-y-4 text-sm">
                                <div className="flex gap-3">
                                    <CheckCircle2 className="h-5 w-5 text-green-500 flex-shrink-0" />
                                    <div>
                                        <p className="font-medium mb-1">Clear & Legible</p>
                                        <p className="text-muted-foreground">
                                            Make sure your handwriting is clear and easy to read
                                        </p>
                                    </div>
                                </div>
                                <div className="flex gap-3">
                                    <CheckCircle2 className="h-5 w-5 text-green-500 flex-shrink-0" />
                                    <div>
                                        <p className="font-medium mb-1">Good Lighting</p>
                                        <p className="text-muted-foreground">
                                            Take photos in well-lit conditions for best results
                                        </p>
                                    </div>
                                </div>
                                <div className="flex gap-3">
                                    <CheckCircle2 className="h-5 w-5 text-green-500 flex-shrink-0" />
                                    <div>
                                        <p className="font-medium mb-1">Full Coverage</p>
                                        <p className="text-muted-foreground">
                                            Include all letters, numbers, and punctuation
                                        </p>
                                    </div>
                                </div>
                                <div className="flex gap-3">
                                    <AlertCircle className="h-5 w-5 text-amber-500 flex-shrink-0" />
                                    <div>
                                        <p className="font-medium mb-1">Avoid Blur</p>
                                        <p className="text-muted-foreground">
                                            Blurry or low-quality images will reduce accuracy
                                        </p>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>

                        <Card>
                            <CardHeader>
                                <CardTitle>Sample Requirements</CardTitle>
                            </CardHeader>
                            <CardContent className="space-y-2 text-sm">
                                <div className="flex justify-between">
                                    <span className="text-muted-foreground">Minimum samples</span>
                                    <span className="font-medium">5 images</span>
                                </div>
                                <div className="flex justify-between">
                                    <span className="text-muted-foreground">Recommended</span>
                                    <span className="font-medium">15+ images</span>
                                </div>
                                <div className="flex justify-between">
                                    <span className="text-muted-foreground">Maximum</span>
                                    <span className="font-medium">30 images</span>
                                </div>
                                <div className="flex justify-between">
                                    <span className="text-muted-foreground">Training time</span>
                                    <span className="font-medium">3-5 minutes</span>
                                </div>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </div>
        </div>
    );
}
