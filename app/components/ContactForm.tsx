'use client';

import { useState } from 'react';
import { Button } from './Button';

export default function ContactForm() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        clinicName: '',
        message: '',
    });
    const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setStatus('submitting');

        try {
            const response = await fetch("https://formsubmit.co/ajax/tarushagarwal2003@gmail.com", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "Accept": "application/json"
                },
                body: JSON.stringify(formData)
            });

            if (response.ok) {
                setStatus('success');
                setFormData({ name: '', email: '', clinicName: '', message: '' });
                setTimeout(() => setStatus('idle'), 5000);
            } else {
                setStatus('error');
            }
        } catch (error) {
            console.error("Form submission error:", error);
            setStatus('error');
        }
    };

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    return (
        <form onSubmit={handleSubmit} className="space-y-6">
            {/* Honeypot to prevent spam */}
            <input type="text" name="_honey" style={{ display: 'none' }} />

            {/* Disable Captcha */}
            <input type="hidden" name="_captcha" value="false" />

            <div>
                <label htmlFor="name" className="block text-foreground font-semibold mb-2 text-sm tracking-wide">
                    Name
                </label>
                <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-background border-2 border-border rounded-xl focus:border-primary focus:ring-4 focus:ring-primary/10 focus:outline-none transition-all duration-300"
                    placeholder="Your name"
                />
            </div>

            <div>
                <label htmlFor="email" className="block text-foreground font-semibold mb-2 text-sm tracking-wide">
                    Email
                </label>
                <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-background border-2 border-border rounded-xl focus:border-primary focus:ring-4 focus:ring-primary/10 focus:outline-none transition-all duration-300"
                    placeholder="your@email.com"
                />
            </div>

            <div>
                <label htmlFor="clinicName" className="block text-foreground font-semibold mb-2 text-sm tracking-wide">
                    Clinic Name
                </label>
                <input
                    type="text"
                    id="clinicName"
                    name="clinicName"
                    value={formData.clinicName}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-background border-2 border-border rounded-xl focus:border-primary focus:ring-4 focus:ring-primary/10 focus:outline-none transition-all duration-300"
                    placeholder="Your clinic or hospital name"
                />
            </div>

            <div>
                <label htmlFor="message" className="block text-foreground font-semibold mb-2 text-sm tracking-wide">
                    Message
                </label>
                <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-4 py-3 bg-background border-2 border-border rounded-xl focus:border-primary focus:ring-4 focus:ring-primary/10 focus:outline-none transition-all duration-300 resize-none"
                    placeholder="Tell us about your requirements..."
                />
            </div>

            <Button
                type="submit"
                variant="primary"
                className="w-full py-4"
                disabled={status === 'submitting'}
            >
                {status === 'submitting' ? 'Sending...' : 'Send Message'}
            </Button>

            {status === 'success' && (
                <p className="text-green-600 text-center font-medium animate-fade-in">
                    Message sent successfully! We'll be in touch soon.
                </p>
            )}
            {status === 'error' && (
                <p className="text-red-500 text-center font-medium animate-fade-in">
                    Something went wrong. Please try again later.
                </p>
            )}
        </form>
    );
}
