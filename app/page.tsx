import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import {
  PenTool,
  Upload,
  Brain,
  FileText,
  Download,
  Sparkles,
  Shield,
  Zap,
  Users,
  Check,
  ArrowRight,
} from "lucide-react";

export default function Home() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-b from-background to-secondary/20 py-20 sm:py-32">
        <div className="absolute inset-0 bg-grid-white/10 bg-[size:20px_20px]" />
        <div className="container relative mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-4xl text-center animate-fade-in">
            <div className="mb-8 inline-flex items-center gap-2 rounded-full border bg-background/50 px-4 py-2 backdrop-blur-sm">
              <Sparkles className="h-4 w-4 text-primary" />
              <span className="text-sm font-medium">AI-Powered Handwriting Synthesis</span>
            </div>

            <h1 className="mb-6 text-5xl font-bold tracking-tight sm:text-6xl lg:text-7xl">
              Transform{" "}
              <span className="bg-gradient-to-r from-primary via-purple-600 to-pink-600 bg-clip-text text-transparent">
                Digital Text
              </span>{" "}
              into Authentic Handwriting
            </h1>

            <p className="mb-10 text-xl text-muted-foreground sm:text-2xl">
              Upload your handwriting samples, and let our AI learn your unique style.
              Generate realistic handwritten documents at scale.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link href="/auth/register">
                <Button size="lg" className="group">
                  Get Started Free
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Button>
              </Link>
              <Link href="/#how-it-works">
                <Button size="lg" variant="outline">
                  See How It Works
                </Button>
              </Link>
            </div>

            <div className="mt-12 flex flex-wrap items-center justify-center gap-8 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <Check className="h-5 w-5 text-green-500" />
                <span>No credit card required</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="h-5 w-5 text-green-500" />
                <span>Free tier available</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="h-5 w-5 text-green-500" />
                <span>Setup in minutes</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 sm:py-32">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center mb-16 animate-slide-up">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">
              Powerful Features for Authentic Results
            </h2>
            <p className="text-lg text-muted-foreground">
              Advanced AI technology that captures your unique handwriting style
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card
                key={index}
                className="group hover:border-primary/50 transition-all duration-300 animate-slide-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CardHeader>
                  <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-white transition-colors">
                    {feature.icon}
                  </div>
                  <CardTitle>{feature.title}</CardTitle>
                  <CardDescription>{feature.description}</CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section id="how-it-works" className="bg-secondary/20 py-20 sm:py-32">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">
              How It Works
            </h2>
            <p className="text-lg text-muted-foreground">
              Simple 4-step process to generate authentic handwritten documents
            </p>
          </div>

          <div className="relative mx-auto max-w-5xl">
            <div className="absolute left-1/2 top-0 bottom-0 w-0.5  bg-gradient-to-b from-primary to-purple-600 hidden lg:block" />

            <div className="space-y-12">
              {steps.map((step, index) => (
                <div
                  key={index}
                  className={`flex flex-col lg:flex-row items-center gap-8 ${index % 2 === 0 ? "" : "lg:flex-row-reverse"
                    }`}
                >
                  <div className="flex-1 animate-slide-up">
                    <Card className="hover:shadow-xl transition-shadow">
                      <CardHeader>
                        <div className="flex items-center gap-4">
                          <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-r from-primary to-purple-600 text-white font-bold text-lg">
                            {index + 1}
                          </div>
                          <CardTitle>{step.title}</CardTitle>
                        </div>
                      </CardHeader>
                      <CardContent>
                        <p className="text-muted-foreground">{step.description}</p>
                      </CardContent>
                    </Card>
                  </div>

                  <div className="flex-shrink-0 hidden lg:block">
                    <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center">
                      {step.icon}
                    </div>
                  </div>

                  <div className="flex-1 hidden lg:block" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-20 sm:py-32">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">
              Simple, Transparent Pricing
            </h2>
            <p className="text-lg text-muted-foreground">
              Choose the plan that fits your needs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {pricingPlans.map((plan, index) => (
              <Card
                key={index}
                className={`relative ${plan.featured
                    ? "border-primary shadow-2xl scale-105"
                    : ""
                  }`}
              >
                {plan.featured && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                    <span className="bg-gradient-to-r from-primary to-purple-600 text-white px-4 py-1 rounded-full text-sm font-medium">
                      Most Popular
                    </span>
                  </div>
                )}
                <CardHeader>
                  <CardTitle>{plan.name}</CardTitle>
                  <CardDescription>{plan.description}</CardDescription>
                  <div className="mt-4">
                    <span className="text-4xl font-bold">${plan.price}</span>
                    <span className="text-muted-foreground">/month</span>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <ul className="space-y-3">
                    {plan.features.map((feature, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <Check className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Link href="/auth/register" className="block">
                    <Button
                      className="w-full"
                      variant={plan.featured ? "default" : "outline"}
                    >
                      {plan.cta}
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative overflow-hidden bg-gradient-to-r from-primary via-purple-600 to-pink-600 py-20">
        <div className="absolute inset-0 bg-grid-white/10 bg-[size:20px_20px]" />
        <div className="container relative mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center text-white">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">
              Ready to Get Started?
            </h2>
            <p className="text-lg mb-8 text-white/90">
              Join thousands of users who are already creating authentic handwritten documents with AI
            </p>
            <Link href="/auth/register">
              <Button size="lg" variant="secondary" className="group">
                Start Free Trial
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

const features = [
  {
    icon: <Brain className="h-6 w-6" />,
    title: "Deep Style Learning",
    description: "AI analyzes your handwriting samples to capture stroke patterns, slant, spacing, and unique characteristics.",
  },
  {
    icon: <Sparkles className="h-6 w-6" />,
    title: "Natural Variability",
    description: "Each character is generated with subtle variations, just like real human handwriting—never repetitive.",
  },
  {
    icon: <Upload className="h-6 w-6" />,
    title: "Easy Upload",
    description: "Simply upload 5-20 handwriting samples and let our AI do the rest. Setup takes just minutes.",
  },
  {
    icon: <FileText className="h-6 w-6" />,
    title: "PDF & Text Support",
    description: "Convert plain text, PDF documents, or word files into handwritten format effortlessly.",
  },
  {
    icon: <Download className="h-6 w-6" />,
    title: "Multiple Export Formats",
    description: "Download your handwritten content as high-resolution PNG images or compiled PDF documents.",
  },
  {
    icon: <Shield className="h-6 w-6" />,
    title: "Privacy First",
    description: "Your handwriting samples and data are encrypted and never shared. Full GDPR compliance.",
  },
];

const steps = [
  {
    icon: <Upload className="h-8 w-8 text-primary" />,
    title: "Upload Handwriting Samples",
    description: "Provide 5-20 images of your handwriting. More samples = better quality results.",
  },
  {
    icon: <Brain className="h-8 w-8 text-primary" />,
    title: "AI Learns Your Style",
    description: "Our advanced AI analyzes your unique characteristics in just 3-5 minutes.",
  },
  {
    icon: <FileText className="h-8 w-8 text-primary" />,
    title: "Input Your Text",
    description: "Type your text or upload a PDF. Choose layout options and customization preferences.",
  },
  {
    icon: <Download className="h-8 w-8 text-primary" />,
    title: "Download Handwritten Output",
    description: "Get realistic handwritten documents in PNG or PDF format, ready to use.",
  },
];

const pricingPlans = [
  {
    name: "Free",
    description: "Perfect for trying out",
    price: 0,
    cta: "Get Started",
    featured: false,
    features: [
      "1 handwriting style",
      "10 generations per month",
      "Up to 1,000 characters per generation",
      "PNG export",
      "Community support",
    ],
  },
  {
    name: "Pro",
    description: "For regular users",
    price: 9.99,
    cta: "Start Free Trial",
    featured: true,
    features: [
      "3 handwriting styles",
      "Unlimited generations",
      "Up to 10,000 characters per generation",
      "PNG & PDF export",
      "Priority processing",
      "Email support",
      "Advanced customization",
    ],
  },
  {
    name: "Enterprise",
    description: "For teams and businesses",
    price: 49.99,
    cta: "Contact Sales",
    featured: false,
    features: [
      "Unlimited handwriting styles",
      "Unlimited generations",
      "Unlimited characters",
      "All export formats",
      "API access",
      "Priority support",
      "Custom integrations",
      "Team collaboration",
    ],
  },
];
