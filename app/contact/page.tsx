import { Clock, Link as LinkIcon, MessageSquare, Phone } from 'lucide-react';
import ContactForm from '../components/ContactForm';

export default function ContactPage() {
    return (
        <div className="min-h-screen bg-background text-foreground pt-32 pb-20 px-6">
            <div className="max-w-6xl mx-auto">
                <div className="text-center mb-20">
                    <h1 className="text-5xl md:text-7xl font-black text-foreground mb-8 tracking-tighter">
                        Get in Touch
                    </h1>
                    <p className="text-xl md:text-2xl text-muted-foreground font-light leading-relaxed max-w-2xl mx-auto">
                        We&apos;d love to hear from you. Reach out to us for demos, questions, or support.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 gap-16">
                    {/* Contact Information */}
                    <div className="space-y-8">
                        <div className="bg-card text-card-foreground rounded-3xl p-10 shadow-sm border border-border">
                            <h2 className="text-2xl font-bold text-foreground mb-8 flex items-center gap-3">
                                <Phone className="w-6 h-6 text-primary" />
                                Phone
                            </h2>
                            <div className="space-y-6">
                                <div>
                                    <p className="text-muted-foreground text-sm mb-1 uppercase tracking-wider font-semibold">Tarush Agarwal</p>
                                    <a
                                        href="tel:+918630632030"
                                        className="text-primary hover:text-primary/80 transition-colors text-xl font-bold block"
                                    >
                                        +91 8630632030
                                    </a>
                                </div>
                                <div>
                                    <p className="text-muted-foreground text-sm mb-1 uppercase tracking-wider font-semibold">Hardik Singla</p>
                                    <a
                                        href="tel:+918427036921"
                                        className="text-primary hover:text-primary/80 transition-colors text-xl font-bold block"
                                    >
                                        +91 8427036921
                                    </a>
                                </div>
                            </div>
                        </div>

                        <div className="bg-card text-card-foreground rounded-3xl p-10 shadow-sm border border-border">
                            <h2 className="text-2xl font-bold text-foreground mb-8 flex items-center gap-3">
                                <LinkIcon className="w-6 h-6 text-primary" />
                                Live Demo
                            </h2>
                            <p className="text-muted-foreground mb-4 leading-relaxed">
                                See BookADoc in action at our live working demo:
                            </p>
                            <a
                                href="https://appointment.dranjaligupta.in"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-primary hover:text-primary/80 transition-colors text-xl font-bold break-all"
                            >
                                appointment.dranjaligupta.in
                            </a>
                        </div>

                        <div className="bg-muted/30 rounded-3xl p-10 border border-border">
                            <h3 className="text-xl font-bold text-foreground mb-6 flex items-center gap-3">
                                <Clock className="w-6 h-6 text-primary" />
                                Office Hours
                            </h3>
                            <div className="space-y-3 text-muted-foreground">
                                <p className="flex justify-between">
                                    <span>Monday - Friday:</span>
                                    <span className="font-medium text-foreground">9:00 AM - 6:00 PM</span>
                                </p>
                                <p className="flex justify-between">
                                    <span>Saturday:</span>
                                    <span className="font-medium text-foreground">10:00 AM - 4:00 PM</span>
                                </p>
                                <p className="flex justify-between">
                                    <span>Sunday:</span>
                                    <span className="font-medium text-foreground">Closed</span>
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Contact Form */}
                    <div className="bg-card text-card-foreground rounded-3xl p-10 shadow-lg border border-border">
                        <h2 className="text-2xl font-bold text-foreground mb-8 flex items-center gap-3">
                            <MessageSquare className="w-6 h-6 text-primary" />
                            Send us a Message
                        </h2>
                        <ContactForm />
                    </div>
                </div>
            </div>
        </div>
    );
}
