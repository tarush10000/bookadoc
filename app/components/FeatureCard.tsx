'use client';

import { motion } from 'framer-motion';

interface FeatureCardProps {
    icon: React.ReactNode;
    title: string;
    description: string;
}

export default function FeatureCard({ icon, title, description }: FeatureCardProps) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            whileHover={{ y: -10 }}
            className="bg-card text-card-foreground rounded-2xl p-8 shadow-sm hover:shadow-xl transition-shadow duration-300 border border-border group"
        >
            <div className="text-primary mb-6 flex justify-center transform group-hover:scale-110 transition-transform duration-300">
                {icon}
            </div>
            <h3 className="text-xl font-bold mb-4 text-center tracking-tight">{title}</h3>
            <p className="text-muted-foreground text-sm text-center leading-relaxed">{description}</p>
        </motion.div>
    );
}
