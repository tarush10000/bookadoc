export default function BackgroundPattern() {
    return (
        <div className="absolute inset-0 overflow-hidden pointer-events-none -z-10">
            {/* Dot Grid Pattern */}
            <div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_70%,transparent_100%)] dark:bg-[radial-gradient(#27272a_1px,transparent_1px)] opacity-50" />

            {/* Gradient Blobs */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[1000px] bg-primary/5 rounded-full blur-3xl opacity-20 animate-pulse" />
            <div className="absolute bottom-0 right-0 w-[800px] h-[800px] bg-blue-500/5 rounded-full blur-3xl opacity-20" />
            <div className="absolute top-1/4 left-0 w-[600px] h-[600px] bg-purple-500/5 rounded-full blur-3xl opacity-20" />
        </div>
    );
}
