import { Facebook, Instagram, Linkedin, Mail, MapPin, Phone, Twitter } from "lucide-react";
import Link from "next/link";

export default function Footer() {
    return (
        <footer className="bg-muted/30 border-t border-border pt-20 pb-10">
            <div className="container mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
                    {/* Brand Column */}
                    <div className="space-y-6">
                        <Link href="/" className="text-2xl font-black tracking-tighter text-foreground">
                            BOOKADOC
                        </Link>
                        <p className="text-muted-foreground leading-relaxed">
                            Automating healthcare practices with smart booking, billing, and analytics solutions.
                        </p>
                        <div className="flex gap-4">
                            <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                                <Facebook size={20} />
                            </a>
                            <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                                <Twitter size={20} />
                            </a>
                            <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                                <Instagram size={20} />
                            </a>
                            <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                                <Linkedin size={20} />
                            </a>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="font-bold text-foreground mb-6">Product</h3>
                        <ul className="space-y-4">
                            <li>
                                <Link href="/features" className="text-muted-foreground hover:text-primary transition-colors">
                                    Features
                                </Link>
                            </li>
                            <li>
                                <Link href="/pricing" className="text-muted-foreground hover:text-primary transition-colors">
                                    Pricing
                                </Link>
                            </li>
                            <li>
                                <Link href="/demo" className="text-muted-foreground hover:text-primary transition-colors">
                                    Request Demo
                                </Link>
                            </li>
                            <li>
                                <a href="https://appointment.dranjaligupta.in/" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                                    Live Site
                                </a>
                            </li>
                        </ul>
                    </div>

                    {/* Company */}
                    <div>
                        <h3 className="font-bold text-foreground mb-6">Company</h3>
                        <ul className="space-y-4">
                            <li>
                                <Link href="/about" className="text-muted-foreground hover:text-primary transition-colors">
                                    About Us
                                </Link>
                            </li>
                            <li>
                                <Link href="/contact" className="text-muted-foreground hover:text-primary transition-colors">
                                    Contact
                                </Link>
                            </li>
                            <li>
                                <Link href="/privacy" className="text-muted-foreground hover:text-primary transition-colors">
                                    Privacy Policy
                                </Link>
                            </li>
                            <li>
                                <Link href="/terms" className="text-muted-foreground hover:text-primary transition-colors">
                                    Terms of Service
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Contact */}
                    <div>
                        <h3 className="font-bold text-foreground mb-6">Contact</h3>
                        <ul className="space-y-4">
                            <li className="flex items-start gap-3 text-muted-foreground">
                                <Phone size={18} className="mt-1 shrink-0" />
                                <div className="space-y-1">
                                    <a href="tel:+918630632030" className="block hover:text-primary transition-colors">+91 86306 32030</a>
                                    <a href="tel:+918427036921" className="block hover:text-primary transition-colors">+91 84270 36921</a>
                                </div>
                            </li>
                            <li className="flex items-start gap-3 text-muted-foreground">
                                <Mail size={18} className="mt-1 shrink-0" />
                                <a href="mailto:hello@bookadoc.com" className="hover:text-primary transition-colors">
                                    hello@bookadoc.com
                                </a>
                            </li>
                            <li className="flex items-start gap-3 text-muted-foreground">
                                <MapPin size={18} className="mt-1 shrink-0" />
                                <span>New Delhi, India</span>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-border pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-sm text-muted-foreground">
                        © {new Date().getFullYear()} BookADoc. All rights reserved.
                    </p>
                    <p className="text-sm text-muted-foreground">
                        Designed for modern healthcare.
                    </p>
                </div>
            </div>
        </footer>
    );
}
