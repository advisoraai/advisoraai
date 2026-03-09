export function LogoPlaceholder({ className, index }: { className?: string; index?: number }) {
    // Generate a deterministically selected geometric shape for the logo mark if index is provided
    const shapes = [
        "M10,10 L30,10 L30,30 L10,30 Z", // Square
        "M20,10 L30,30 L10,30 Z", // Triangle
        "M10,20 A10,10 0 1,1 30,20 A10,10 0 1,1 10,20", // Circle
        "M10,10 L20,30 L30,10", // V shape
        "M10,20 L20,10 L30,20 L20,30 Z" // Diamond
    ];

    const shapeIndex = index !== undefined ? index % shapes.length : 0;
    const selectedShape = shapes[shapeIndex];

    return (
        <svg className={className} viewBox="0 0 120 40" fill="currentColor">
            {/* Icon Mark */}
            <path d={selectedShape} fill="currentColor" />

            {/* Text Lines simulating a logo type */}
            <rect x="40" y="12" width="60" height="6" rx="1" opacity="0.8" />
            <rect x="40" y="22" width="40" height="6" rx="1" opacity="0.6" />
        </svg>
    );
}
