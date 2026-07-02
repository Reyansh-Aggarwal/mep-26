import clsx from "clsx"
import { twMerge } from "tailwind-merge"
import { useEffect, useState, useRef } from "react";

export const cn = (...inputs: any[]) => {
    return twMerge(clsx(inputs));
}

export const useInView = (options?: IntersectionObserverInit) => {
    const ref = useRef<HTMLDivElement | null>(null);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(([entry]) => {
            setIsVisible(entry.isIntersecting);
        }, options || { threshold: 0.1 });

        if (ref.current) observer.observe(ref.current);

        return () => {
            if (ref.current) observer.unobserve(ref.current);
        };
    }, [options]);

    return { ref, isVisible };
};

export interface Club {
    name: string;
    colorClass: string;
    accentVar: string;
    members: Member[];
    executives: Member[];
}

export interface Member {
    role: string;
    name: string;
    image: any
}

export const ExternalRedirect = ({ url }: { url: string }) => {

    useEffect(() => {
        window.history.replaceState(null, '', '/home');

        window.location.href = url;
    }, [url]);

    return (
        <div>
            redirecting
        </div>
    );
}
