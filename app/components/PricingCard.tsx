import { motion } from "framer-motion";
import { Check } from "lucide-react";

interface PricingCardProps {
    title: string;
    price: string;
    period: string;
    features: string[];
    isCustom?: boolean;
    highlighted?: boolean;
    trial?: string;
}

export default function PricingCard({
    title,
    price,
    period,
    features,
    isCustom = false,
    highlighted = false,
    trial,
}: PricingCardProps) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            whileHover={{ y: -10 }}
            className={`bg-card text-card-foreground rounded-3xl p-10 shadow-lg hover:shadow-2xl transition-shadow duration-500 relative overflow-hidden ${highlighted
                ? 'border-2 border-primary ring-4 ring-primary/10'
                : 'border border-border'
                }`}
        >
            {highlighted && (
                <div className="absolute top-0 right-0 bg-primary text-primary-foreground text-xs font-bold px-4 py-1 rounded-bl-xl">
                    POPULAR
                </div>
            )}

            {/* Title */}
            <h3 className="text-2xl font-black text-primary mb-8 tracking-tight">{title}</h3>

            {/* Price */}
            {isCustom ? (
                <div className="mb-8">
                    <p className="text-5xl font-black tracking-tighter">CUSTOM</p>
                    <p className="text-muted-foreground text-sm font-medium mt-2 uppercase tracking-wide">CONTACT US</p>
                </div>
            ) : (
                <div className="mb-8">
                    <p className="text-5xl font-black tracking-tighter flex items-start">
                        {price}
                        <span className="text-lg font-medium text-muted-foreground mt-2 ml-1">*</span>
                    </p>
                    <p className="text-muted-foreground text-sm font-medium mt-2 uppercase tracking-wide">{period}</p>
                </div>
            )}

            {/* Features */}
            <ul className="space-y-4 mb-10">
                {features.map((feature, index) => (
                    <li key={index} className="flex items-start text-muted-foreground text-sm font-medium">
                        <Check className="w-5 h-5 text-primary mr-3 shrink-0" />
                        <span>{feature}</span>
                    </li>
                ))}
            </ul>

            {/* Trial */}
            {trial && (
                <p className="text-xs text-muted-foreground text-center mt-6 italic bg-muted/50 py-2 rounded-lg">
                    {trial}
                </p>
            )}
        </motion.div>
    );
}
