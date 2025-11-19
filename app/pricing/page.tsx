'use client';

import { ArrowRight, HelpCircle } from 'lucide-react';
import { useState } from 'react';
import { Button } from '../components/Button';
import PricingCard from '../components/PricingCard';

export default function PricingPage() {
    const [period, setPeriod] = useState<'monthly' | 'yearly'>('monthly');

    const monthlyPricing = [
        {
            title: 'INDIVIDUAL',
            price: '₹1K',
            period: 'PER MONTH',
            features: [
                '2 Admin Roles',
                'upto 5 receptionists',
                'unlimited appointments',
                'Appointment confirmation and reminder messages as needed on WhatsApp',
                'Live billing updates to patients',
            ],
            trial: '* Includes a 5 day trial',
        },
        {
            title: 'HOSPITAL',
            price: '₹3K',
            period: 'PER MONTH',
            features: [
                '17 Admin Roles (including 15 doctors and 2 managers)',
                'upto 50 receptionists',
                'all benefits of Individual tier',
                'Advanced analytics custom dashboard as needed',
                'Priority Support',
            ],
            trial: '* Includes a 5 day trial',
            highlighted: true,
        },
        {
            title: 'ENTERPRISE',
            price: 'CUSTOM',
            period: 'CONTACT US',
            features: [
                'Multi-location support',
                'Custom integrations',
                'Dedicated Support',
                'SLA & Uptime Guarantee',
                'On-premise deployment option',
            ],
            isCustom: true,
        },
    ];

    const yearlyPricing = [
        {
            title: 'INDIVIDUAL',
            price: '₹10K',
            period: 'PER YEAR',
            features: [
                '2 Admin Roles',
                'upto 5 receptionists',
                'unlimited appointments',
                'Appointment confirmation and reminder messages as needed on WhatsApp',
                'Live billing updates to patients',
            ],
            trial: '* Includes a 5 day trial',
        },
        {
            title: 'HOSPITAL',
            price: '₹30K',
            period: 'PER YEAR',
            features: [
                '17 Admin Roles (including 15 doctors and 2 managers)',
                'upto 50 receptionists',
                'all benefits of Individual tier',
                'Advanced analytics custom dashboard as needed',
                'Priority Support',
            ],
            trial: '* Includes a 5 day trial',
            highlighted: true,
        },
        {
            title: 'ENTERPRISE',
            price: 'CUSTOM',
            period: 'CONTACT US',
            features: [
                'Multi-location support',
                'Custom integrations',
                'Dedicated Support',
                'SLA & Uptime Guarantee',
                'On-premise deployment option',
            ],
            isCustom: true,
        },
    ];

    return (
        <div className="min-h-screen bg-background text-foreground pt-32 pb-20">
            {/* Header */}
            <section className="px-6 mb-20">
                <div className="max-w-4xl mx-auto text-center">
                    <h1 className="text-5xl md:text-7xl font-black text-foreground mb-8 tracking-tighter">
                        Simple Pricing
                    </h1>
                    <p className="text-xl md:text-2xl text-muted-foreground font-light leading-relaxed max-w-2xl mx-auto">
                        Transparent pricing with no hidden fees. Choose the plan that fits your practice size.
                    </p>
                </div>
            </section>

            {/* Toggle */}
            <div className="flex justify-center mb-20">
                <div className="bg-card p-1.5 rounded-full shadow-sm inline-flex border border-border">
                    <button
                        onClick={() => setPeriod('monthly')}
                        className={`px-10 py-4 rounded-full font-bold transition-all duration-300 ${period === 'monthly'
                                ? 'bg-primary text-primary-foreground shadow-md'
                                : 'text-muted-foreground hover:text-foreground'
                            }`}
                    >
                        Monthly
                    </button>
                    <button
                        onClick={() => setPeriod('yearly')}
                        className={`px-10 py-4 rounded-full font-bold transition-all duration-300 ${period === 'yearly'
                                ? 'bg-primary text-primary-foreground shadow-md'
                                : 'text-muted-foreground hover:text-foreground'
                            }`}
                    >
                        Yearly
                    </button>
                </div>
            </div>

            {/* Pricing Grid */}
            <section className="px-6 mb-32">
                <div className="max-w-7xl mx-auto">
                    <div className="grid md:grid-cols-3 gap-10">
                        {(period === 'monthly' ? monthlyPricing : yearlyPricing).map(
                            (plan, index) => (
                                <PricingCard key={index} {...plan} />
                            )
                        )}
                    </div>
                    <div className="mt-12 text-center space-y-2">
                        <p className="text-primary text-sm italic">
                            (These are promotional charges and may change later)
                        </p>
                        <p className="text-muted-foreground text-sm">
                            Extra domain charges may be added if needed
                        </p>
                    </div>
                </div>
            </section>

            {/* FAQ Section */}
            <section className="px-6 py-32 bg-muted/30">
                <div className="max-w-4xl mx-auto">
                    <h2 className="text-4xl md:text-5xl font-black text-foreground text-center mb-16 tracking-tight">
                        Frequently Asked Questions
                    </h2>
                    <div className="grid gap-8">
                        {[
                            {
                                q: 'Can I switch plans later?',
                                a: 'Yes, you can upgrade or downgrade your plan at any time. Changes will be reflected in your next billing cycle.',
                            },
                            {
                                q: 'Is there a setup fee?',
                                a: 'No, there are no setup fees for our standard plans. Enterprise plans may have custom implementation costs depending on requirements.',
                            },
                            {
                                q: 'Do you offer a free trial?',
                                a: 'Yes, all paid plans come with a 5-day trial period so you can experience the full features of BookADoc risk-free.',
                            },
                            {
                                q: 'What payment methods do you accept?',
                                a: 'We accept all major credit cards, debit cards, and UPI payments for Indian customers.',
                            },
                        ].map((faq, index) => (
                            <div key={index} className="bg-card p-8 rounded-2xl border border-border">
                                <h3 className="text-xl font-bold text-foreground mb-3 flex items-start gap-3">
                                    <HelpCircle className="w-6 h-6 text-primary shrink-0 mt-0.5" />
                                    {faq.q}
                                </h3>
                                <p className="text-muted-foreground ml-9 leading-relaxed">{faq.a}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="px-6 py-32">
                <div className="max-w-4xl mx-auto text-center">
                    <h2 className="text-4xl md:text-5xl font-black text-foreground mb-8 tracking-tight">
                        Still have questions?
                    </h2>
                    <p className="text-xl text-muted-foreground mb-12">
                        Our team is happy to help you find the right plan for your practice.
                    </p>
                    <Button href="/contact" variant="outline" className="min-w-[200px]">
                        Contact Sales <ArrowRight className="ml-2 w-5 h-5" />
                    </Button>
                </div>
            </section>
        </div>
    );
}
