'use client';

import { ArrowRight, CheckCircle, Clock, Shield } from 'lucide-react';
import { Button } from '../components/Button';
import ContactForm from '../components/ContactForm';

export default function DemoPage() {
    return (
        <div className="min-h-screen bg-background text-foreground pt-32 pb-20 px-6">
            <div className="max-w-6xl mx-auto">
                {/* Header */}
                <div className="text-center mb-20">
                    <h1 className="text-5xl md:text-7xl font-black text-foreground mb-8 tracking-tighter">
                        Request a Demo
                    </h1>
                    <p className="text-xl md:text-2xl text-muted-foreground font-light leading-relaxed max-w-2xl mx-auto">
                        See how BookADoc can transform your healthcare practice with a personalized walkthrough.
                    </p>
                </div>

                <div className="grid lg:grid-cols-2 gap-16 items-start">
                    {/* Left Column: Benefits */}
                    <div className="space-y-10">
                        <div className="bg-card text-card-foreground rounded-3xl p-10 shadow-sm border border-border">
                            <h2 className="text-2xl font-bold text-foreground mb-8">
                                What to expect?
                            </h2>
                            <ul className="space-y-6">
                                {[
                                    'Full walkthrough of the dashboard',
                                    'Customized workflow for your clinic',
                                    'Q&A session with our product experts',
                                    'Pricing and implementation details',
                                ].map((item, index) => (
                                    <li key={index} className="flex items-start gap-4">
                                        <CheckCircle className="w-6 h-6 text-primary shrink-0 mt-0.5" />
                                        <span className="text-lg text-muted-foreground">{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div className="grid sm:grid-cols-2 gap-6">
                            <div className="bg-muted/30 rounded-3xl p-8 border border-border">
                                <Clock className="w-8 h-8 text-primary mb-4" />
                                <h3 className="text-lg font-bold text-foreground mb-2">Quick Response</h3>
                                <p className="text-muted-foreground">
                                    We usually respond within 2 hours during business hours.
                                </p>
                            </div>
                            <div className="bg-muted/30 rounded-3xl p-8 border border-border">
                                <Shield className="w-8 h-8 text-primary mb-4" />
                                <h3 className="text-lg font-bold text-foreground mb-2">No Commitment</h3>
                                <p className="text-muted-foreground">
                                    The demo is completely free with no obligation to buy.
                                </p>
                            </div>
                        </div>

                        <div className="bg-primary/5 rounded-3xl p-10 border border-primary/10">
                            <h3 className="text-xl font-bold text-foreground mb-4">
                                Want to explore on your own?
                            </h3>
                            <p className="text-muted-foreground mb-6">
                                You can visit our live working site to see the patient booking experience.
                            </p>
                            <Button
                                href="https://appointment.dranjaligupta.in"
                                variant="outline"
                                className="w-full sm:w-auto"
                            >
                                Visit Live Site <ArrowRight className="ml-2 w-5 h-5" />
                            </Button>
                        </div>
                    </div>

                    {/* Right Column: Form */}
                    <div className="bg-card text-card-foreground rounded-3xl p-10 shadow-lg border border-border sticky top-32">
                        <h2 className="text-2xl font-bold text-foreground mb-2">
                            Schedule Your Demo
                        </h2>
                        <p className="text-muted-foreground mb-8">
                            Fill out the form below and we&apos;ll get in touch to schedule a time that works for you.
                        </p>
                        <ContactForm />
                    </div>
                </div>
            </div>
        </div>
    );
}
