interface FeatureCardProps {
    icon: React.ReactNode;
    title: string;
    description: string;
}

export default function FeatureCard({ icon, title, description }: FeatureCardProps) {
    return (
        <div className="bg-card text-card-foreground rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-border group">
            <div className="text-primary mb-6 flex justify-center transform group-hover:scale-110 transition-transform duration-300">
                {icon}
            </div>
            <h3 className="text-xl font-bold mb-4 text-center tracking-tight">{title}</h3>
            <p className="text-muted-foreground text-sm text-center leading-relaxed">{description}</p>
        </div>
    );
}
