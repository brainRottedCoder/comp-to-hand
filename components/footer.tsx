import Link from "next/link";
import { PenTool, Github, Twitter, Linkedin } from "lucide-react";

export function Footer() {
    return (
        <footer className="border-t bg-background">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                    {/* Brand */}
                    <div className="space-y-4">
                        <Link href="/" className="flex items-center gap-2 group">
                            <div className="rounded-lg bg-gradient-to-r from-primary to-purple-600 p-2">
                                <PenTool className="h-5 w-5 text-white" />
                            </div>
                            <span className="text-lg font-bold bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent">
                                HandwriteAI
                            </span>
                        </Link>
                        <p className="text-sm text-muted-foreground">
                            Transform your digital text into authentic handwriting with AI.
                        </p>
                        <div className="flex gap-4">
                            <a
                                href="https://twitter.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-muted-foreground hover:text-primary transition-colors"
                            >
                                <Twitter className="h-5 w-5" />
                            </a>
                            <a
                                href="https://github.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-muted-foreground hover:text-primary transition-colors"
                            >
                                <Github className="h-5 w-5" />
                            </a>
                            <a
                                href="https://linkedin.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-muted-foreground hover:text-primary transition-colors"
                            >
                                <Linkedin className="h-5 w-5" />
                            </a>
                        </div>
                    </div>

                    {/* Product */}
                    <div>
                        <h3 className="font-semibold mb-4">Product</h3>
                        <ul className="space-y-3">
                            <li>
                                <Link
                                    href="/#features"
                                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                                >
                                    Features
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="/#pricing"
                                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                                >
                                    Pricing
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="/dashboard"
                                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                                >
                                    Dashboard
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Resources */}
                    <div>
                        <h3 className="font-semibold mb-4">Resources</h3>
                        <ul className="space-y-3">
                            <li>
                                <Link
                                    href="/docs"
                                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                                >
                                    Documentation
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="/blog"
                                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                                >
                                    Blog
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="/support"
                                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                                >
                                    Support
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Legal */}
                    <div>
                        <h3 className="font-semibold mb-4">Legal</h3>
                        <ul className="space-y-3">
                            <li>
                                <Link
                                    href="/privacy"
                                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                                >
                                    Privacy Policy
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="/terms"
                                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                                >
                                    Terms of Service
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="/ethics"
                                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                                >
                                    Ethical Use
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="mt-12 pt-8 border-t text-center">
                    <p className="text-sm text-muted-foreground">
                        © {new Date().getFullYear()} HandwriteAI. All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
}
