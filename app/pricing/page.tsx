"use client";

import { Header } from "@/components/layout/Header";
import { Contact } from "@/components/sections/Contact";
import { Button } from "@/components/ui/Button";
import { Check } from "lucide-react";

const plans = [
    {
        name: "Starter",
        price: "$2,999",
        desc: "Essential security testing for startups.",
        features: ["Web Application Pentest", "1 Round of Retesting", "Basic Report", "Email Support"],
    },
    {
        name: "Professional",
        price: "$5,999",
        desc: "Comprehensive security for growing companies.",
        features: ["Web & API Pentest", "2 Rounds of Retesting", "Compliance Report (SOC2)", "Slack Support", "Vulnerability Chaining"],
        popular: true,
    },
    {
        name: "Enterprise",
        price: "Custom",
        desc: "Advanced red teaming for large organizations.",
        features: ["Full Scope (Web, Mobile, Network)", "Unlimited Retesting", "Executive Presentations", "Dedicated Security Engineer", "24/7 Support"],
    },
];

export default function PricingPage() {
    return (
        <main className="min-h-screen bg-white font-sans">
            <Header />
            <div className="pt-32 pb-20 container px-4 mx-auto">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">Simple, Transparent Pricing</h1>
                    <p className="text-xl text-slate-600">Choose the plan that fits your security needs. No hidden fees.</p>
                </div>

                <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                    {plans.map((plan, index) => (
                        <div
                            key={index}
                            className={`relative p-8 rounded-2xl border ${plan.popular ? 'border-primary shadow-xl scale-105' : 'border-slate-200 shadow-sm'} bg-white flex flex-col`}
                        >
                            {plan.popular && (
                                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-primary text-white px-4 py-1 rounded-full text-sm font-medium">
                                    Most Popular
                                </div>
                            )}
                            <h3 className="text-2xl font-bold text-slate-900 mb-2">{plan.name}</h3>
                            <div className="text-4xl font-bold text-slate-900 mb-4">{plan.price}</div>
                            <p className="text-slate-500 mb-8">{plan.desc}</p>

                            <ul className="space-y-4 mb-8 flex-1">
                                {plan.features.map((feature, i) => (
                                    <li key={i} className="flex items-start gap-3 text-slate-700">
                                        <Check className="text-primary flex-shrink-0" size={20} />
                                        <span className="text-sm">{feature}</span>
                                    </li>
                                ))}
                            </ul>

                            <Button variant={plan.popular ? "primary" : "outline"} className="w-full">
                                Get Started
                            </Button>
                        </div>
                    ))}
                </div>
            </div>
            <Contact />
        </main>
    );
}
