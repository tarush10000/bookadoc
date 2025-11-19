import Link from 'next/link';

interface ButtonProps {
    children: React.ReactNode;
    href?: string;
    variant?: 'primary' | 'outline' | 'ghost';
    onClick?: () => void;
    type?: 'button' | 'submit';
    className?: string;
    disabled?: boolean;
}

export function Button({
    children,
    href,
    variant = 'primary',
    onClick,
    type = 'button',
    className = '',
    disabled = false,
}: ButtonProps) {
    const baseStyles = 'px-8 py-4 rounded-full font-bold tracking-wide transition-all duration-300 inline-flex items-center justify-center text-center disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100 disabled:hover:shadow-none';

    const variantStyles = {
        primary: 'bg-primary text-primary-foreground hover:opacity-90 hover:scale-105 shadow-lg hover:shadow-primary/20',
        outline: 'border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground hover:scale-105',
        ghost: 'text-muted-foreground hover:text-primary hover:bg-muted/50',
    };

    const combinedStyles = `${baseStyles} ${variantStyles[variant]} ${className}`;

    if (href) {
        return (
            <Link href={href} className={combinedStyles}>
                {children}
            </Link>
        );
    }

    return (
        <button type={type} onClick={onClick} className={combinedStyles} disabled={disabled}>
            {children}
        </button>
    );
}
