import {
    BarChart3,
    Calendar,
    FileText,
    Headphones,
    Lock,
    MessageCircle,
    Package,
    ShieldCheck,
    Users
} from 'lucide-react';
import { Button } from '../components/Button';
import FeatureCard from '../components/FeatureCard';

export default function FeaturesPage() {
    const features = [
        {
            icon: <Calendar className="w-12 h-12" />,
            title: 'Smart Appointment System',
            description:
                'Automated scheduling with real-time availability, conflict detection, and instant confirmations. Reduce no-shows with automated reminders and easy rescheduling options for patients.',
        },
        {
            icon: <FileText className="w-12 h-12" />,
            title: 'Digital Billing',
            description:
                'Paperless billing with automated invoicing, payment tracking, and live updates to patients. Generate financial reports instantly and keep track of all pending payments.',
        },
        {
            icon: <BarChart3 className="w-12 h-12" />,
            title: 'Real-time Analytics',
            description:
                'Custom dashboards with insights on appointments, revenue, and patient trends. Make data-driven decisions to grow your practice and improve operational efficiency.',
        },
        {
            icon: <MessageCircle className="w-12 h-12" />,
            title: 'WhatsApp Integration',
            description:
                'Seamless integration with WhatsApp for appointment confirmations, reminders, and billing updates. Communicate with your patients on the platform they use most.',
        },
        {
            icon: <ShieldCheck className="w-12 h-12" />,
            title: 'Role-based Access',
            description:
                'Secure access controls for different staff members. Assign specific roles and permissions to doctors, receptionists, and managers to ensure data security.',
        },
        {
            icon: <Users className="w-12 h-12" />,
            title: 'Patient Records',
            description:
                'Digital patient history and electronic medical records (EMR). Access patient data securely from anywhere and maintain comprehensive treatment histories.',
        },
        {
            icon: <Lock className="w-12 h-12" />,
            title: 'Secure & Compliant',
            description:
                'Enterprise-grade security with data encryption and regular backups. We ensure your practice data is safe, secure, and compliant with healthcare regulations.',
        },
        {
            icon: <Package className="w-12 h-12" />,
            title: 'Inventory Management',
            description:
                'Track medical supplies and inventory levels in real-time. Get low stock alerts and manage procurement efficiently to avoid shortages.',
        },
        {
            icon: <Headphones className="w-12 h-12" />,
            title: 'Multi-channel Support',
            description:
                'Dedicated support team available via phone, email, and chat. We provide comprehensive training and onboarding to help you get the most out of BookADoc.',
        },
    ];

    return (
        <div className="min-h-screen bg-background text-foreground pt-32 pb-20">
            {/* Header */}
            <section className="px-6 mb-20">
                <div className="max-w-4xl mx-auto text-center">
                    <h1 className="text-5xl md:text-7xl font-black text-foreground mb-8 tracking-tighter">
                        Powerful Features
                    </h1>
                    <p className="text-xl md:text-2xl text-muted-foreground font-light leading-relaxed max-w-2xl mx-auto">
                        Everything you need to run a modern, efficient healthcare practice in one unified platform.
                    </p>
                </div>
            </section>

            {/* Features Grid */}
            <section className="px-6 mb-32">
                <div className="max-w-7xl mx-auto">
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
                        {features.map((feature, index) => (
                            <FeatureCard key={index} {...feature} />
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="px-6 py-32 bg-muted/30">
                <div className="max-w-4xl mx-auto text-center">
                    <h2 className="text-4xl md:text-5xl font-black text-foreground mb-8 tracking-tight">
                        Ready to modernize your practice?
                    </h2>
                    <p className="text-xl text-muted-foreground mb-12">
                        Join hundreds of doctors who trust BookADoc for their daily operations.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-6 justify-center">
                        <Button href="/demo" variant="primary" className="min-w-[200px]">
                            Request Demo
                        </Button>
                        <Button
                            href="https://appointment.dranjaligupta.in"
                            variant="outline"
                            className="min-w-[200px]"
                        >
                            Visit Live Demo
                        </Button>
                    </div>
                </div>
            </section>
        </div>
    );
}
