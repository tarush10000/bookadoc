'use client';

import {
  ArrowRight,
  BarChart3,
  Calendar,
  FileText,
  MessageCircle,
  ShieldCheck,
  Smile,
  TrendingUp,
  Zap
} from 'lucide-react';
import { useEffect, useRef, useState } from 'react';
import BackgroundPattern from './components/BackgroundPattern';
import { Button } from './components/Button';
import ContactForm from './components/ContactForm';
import CustomCursor from './components/CustomCursor';
import DynamicGradient from './components/DynamicGradient';
import FeatureCard from './components/FeatureCard';
import PricingCard from './components/PricingCard';

export default function Home() {
  const [pricingPeriod, setPricingPeriod] = useState<'monthly' | 'yearly'>('monthly');
  const sectionsRef = useRef<(HTMLElement | null)[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('slide-up-scroll');
          }
        });
      },
      { threshold: 0.15, rootMargin: '0px 0px -50px 0px' }
    );

    sectionsRef.current.forEach((section) => {
      if (section) observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

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
      ],
      isCustom: true,
    },
  ];

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <CustomCursor />
      {/* Hero Section */}
      <section
        ref={(el) => {
          sectionsRef.current[0] = el;
        }}
        className="relative min-h-screen flex items-center justify-center pt-32 pb-20 px-6 overflow-hidden"
      >
        <BackgroundPattern />
        <DynamicGradient />
        <div className="max-w-5xl mx-auto text-center z-10 relative">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-background/30 backdrop-blur-3xl -z-10 rounded-full blur-3xl opacity-50" />

          <div className="inline-block mb-4 px-4 py-1.5 rounded-full border border-primary/20 bg-primary/5 text-primary text-sm font-medium tracking-wide animate-fade-in">
            The Future of Healthcare Management
          </div>

          <h1 className="text-7xl md:text-9xl font-black text-foreground mb-8 tracking-tighter animate-fade-in">
            <span className="bg-clip-text text-transparent bg-gradient-to-b from-foreground to-foreground/70">
              BOOKADOC
            </span>
          </h1>

          <p className="text-2xl md:text-4xl text-muted-foreground font-light mb-12 tracking-wide animate-slide-up stagger-1 max-w-3xl mx-auto leading-tight">
            Your <span className="text-primary font-medium">one-stop</span> booking & billing solution for modern clinics.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center animate-slide-up stagger-2">
            <Button
              href="https://appointment.dranjaligupta.in"
              variant="outline"
              className="min-w-[200px] h-14 text-lg border-primary/50 hover:bg-primary/5"
            >
              Visit Live Site <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            <Button
              href="/demo"
              variant="primary"
              className="min-w-[200px] h-14 text-lg shadow-xl shadow-primary/20 hover:shadow-2xl hover:shadow-primary/30"
            >
              Request Demo
            </Button>
          </div>
        </div>
      </section>

      {/* Problems Worth Solving */}
      <section
        ref={(el) => {
          sectionsRef.current[1] = el;
        }}
        className="py-32 px-6 bg-muted/30"
      >
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-6xl font-black text-foreground text-center mb-6 tracking-tight">
            Problems Worth Solving
          </h2>
          <p className="text-primary text-center mb-20 font-light text-xl tracking-wide">
            Healthcare providers face these challenges daily
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              'Manual appointment handling',
              'Paper-based records & billing',
              'No real-time tracking',
              'Low patient engagement',
              'Time-consuming admin tasks',
            ].map((problem, index) => (
              <div
                key={index}
                className="bg-card text-card-foreground p-10 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 border border-border group"
              >
                <p className="text-lg font-semibold text-center group-hover:text-primary transition-colors">{problem}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Big Idea */}
      <section
        ref={(el) => {
          sectionsRef.current[2] = el;
        }}
        className="py-40 px-6"
      >
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-4xl md:text-6xl font-black text-foreground mb-10 tracking-tight">
            Our Big Idea
          </h2>
          <p className="text-primary text-2xl md:text-3xl font-light mb-10 leading-relaxed">
            A full web-based system that automates booking → billing end-to-end
          </p>
          <p className="text-muted-foreground text-xl leading-relaxed max-w-3xl mx-auto">
            BookADoc transforms healthcare administration by providing a comprehensive
            platform that handles everything from appointment scheduling to billing,
            with real-time analytics and automated patient communication.
          </p>
        </div>
      </section>

      {/* Core Features */}
      <section
        ref={(el) => {
          sectionsRef.current[3] = el;
        }}
        className="py-32 px-6 bg-muted/30"
      >
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-6xl font-black text-foreground text-center mb-6 tracking-tight">
            Core Features
          </h2>
          <p className="text-primary text-center mb-20 font-light text-xl tracking-wide">
            Everything you need in one platform
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
            <FeatureCard
              icon={<Calendar className="w-12 h-12" />}
              title="Smart Appointment System"
              description="Automated scheduling with real-time availability, conflict detection, and instant confirmations."
            />
            <FeatureCard
              icon={<FileText className="w-12 h-12" />}
              title="Digital Billing"
              description="Paperless billing with automated invoicing, payment tracking, and live updates to patients."
            />
            <FeatureCard
              icon={<BarChart3 className="w-12 h-12" />}
              title="Real-time Analytics"
              description="Custom dashboards with insights on appointments, revenue, and patient trends."
            />
            <FeatureCard
              icon={<MessageCircle className="w-12 h-12" />}
              title="WhatsApp Reminders"
              description="Automated appointment confirmations and reminders sent directly via WhatsApp."
            />
            <FeatureCard
              icon={<ShieldCheck className="w-12 h-12" />}
              title="Role-based Dashboard"
              description="Customized access levels for doctors, managers, and receptionists."
            />
          </div>
        </div>
      </section>

      {/* Key Benefits */}
      <section
        ref={(el) => {
          sectionsRef.current[4] = el;
        }}
        className="py-32 px-6"
      >
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-6xl font-black text-foreground text-center mb-6 tracking-tight">
            Key Benefits
          </h2>
          <p className="text-primary text-center mb-20 font-light text-xl tracking-wide">
            Transform your practice
          </p>
          <div className="grid md:grid-cols-3 gap-12">
            <div className="text-center p-8 rounded-3xl hover:bg-muted/30 transition-colors duration-300">
              <div className="text-primary mb-6 flex justify-center">
                <Zap className="w-16 h-16" />
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-4">
                Increased Efficiency
              </h3>
              <p className="text-muted-foreground text-lg leading-relaxed">
                Reduce administrative overhead by up to 70% with automated workflows
              </p>
            </div>
            <div className="text-center p-8 rounded-3xl hover:bg-muted/30 transition-colors duration-300">
              <div className="text-primary mb-6 flex justify-center">
                <Smile className="w-16 h-16" />
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-4">
                Better Patient Experience
              </h3>
              <p className="text-muted-foreground text-lg leading-relaxed">
                Keep patients informed with real-time updates and easy booking
              </p>
            </div>
            <div className="text-center p-8 rounded-3xl hover:bg-muted/30 transition-colors duration-300">
              <div className="text-primary mb-6 flex justify-center">
                <TrendingUp className="w-16 h-16" />
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-4">
                Data-driven Insights
              </h3>
              <p className="text-muted-foreground text-lg leading-relaxed">
                Make informed decisions with comprehensive analytics and reports
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Preview */}
      <section
        ref={(el) => {
          sectionsRef.current[5] = el;
        }}
        className="py-32 px-6 bg-muted/30"
      >
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-6xl font-black text-foreground text-center mb-6 tracking-tight">
            Pricing Plans
          </h2>
          <p className="text-primary text-center mb-16 font-light text-xl tracking-wide">
            Choose the plan that fits your needs
          </p>

          {/* Toggle */}
          <div className="flex justify-center mb-16">
            <div className="bg-card p-1.5 rounded-full shadow-sm inline-flex border border-border">
              <button
                onClick={() => setPricingPeriod('monthly')}
                className={`px-10 py-4 rounded-full font-bold transition-all duration-300 ${pricingPeriod === 'monthly'
                  ? 'bg-primary text-primary-foreground shadow-md'
                  : 'text-muted-foreground hover:text-foreground'
                  }`}
              >
                Monthly
              </button>
              <button
                onClick={() => setPricingPeriod('yearly')}
                className={`px-10 py-4 rounded-full font-bold transition-all duration-300 ${pricingPeriod === 'yearly'
                  ? 'bg-primary text-primary-foreground shadow-md'
                  : 'text-muted-foreground hover:text-foreground'
                  }`}
              >
                Yearly
              </button>
            </div>
          </div>

          {/* Pricing Cards */}
          <div className="grid md:grid-cols-3 gap-10 mb-12">
            {(pricingPeriod === 'monthly' ? monthlyPricing : yearlyPricing).map(
              (plan, index) => (
                <PricingCard key={index} {...plan} />
              )
            )}
          </div>

          <p className="text-primary text-center text-sm italic mb-2">
            (These are promotional charges and may change later)
          </p>
          <p className="text-muted-foreground text-center text-sm">
            Extra domain charges may be added if needed
          </p>

          <div className="text-center mt-16">
            <Button href="/pricing" variant="outline" className="min-w-[240px]">
              View Full Pricing Details
            </Button>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section
        ref={(el) => {
          sectionsRef.current[6] = el;
        }}
        className="py-32 px-6"
      >
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl md:text-6xl font-black text-foreground text-center mb-6 tracking-tight">
            Get in Touch
          </h2>
          <p className="text-primary text-center mb-20 font-light text-xl tracking-wide">
            Ready to transform your practice?
          </p>

          <div className="grid md:grid-cols-2 gap-16">
            <div className="space-y-10">
              <div>
                <h3 className="text-2xl font-bold text-foreground mb-6">Contact Us</h3>
                <div className="space-y-6">
                  <div className="bg-card p-6 rounded-2xl border border-border">
                    <p className="text-muted-foreground font-semibold mb-2 text-sm uppercase tracking-wider">Phone</p>
                    <a
                      href="tel:+918630632030"
                      className="text-xl font-medium hover:text-primary transition-colors block mb-1"
                    >
                      +91 8630632030 <span className="text-sm text-muted-foreground font-normal">(Tarush Agarwal)</span>
                    </a>
                    <a
                      href="tel:+918427036921"
                      className="text-xl font-medium hover:text-primary transition-colors block"
                    >
                      +91 8427036921 <span className="text-sm text-muted-foreground font-normal">(Hardik Singla)</span>
                    </a>
                  </div>
                  <div className="bg-card p-6 rounded-2xl border border-border">
                    <p className="text-muted-foreground font-semibold mb-2 text-sm uppercase tracking-wider">Live Demo</p>
                    <a
                      href="https://appointment.dranjaligupta.in"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xl font-medium hover:text-primary transition-colors break-all"
                    >
                      appointment.dranjaligupta.in
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-foreground mb-6">Send a Message</h3>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
