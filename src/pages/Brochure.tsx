import { useEffect, useRef, useState } from "react";
import { useLocation } from "react-router";
import { Document, Page, pdfjs } from "react-pdf";
import "react-pdf/dist/Page/AnnotationLayer.css";
import "react-pdf/dist/Page/TextLayer.css";
import { Navbar } from "../components/Navbar";
import { Cursor } from "../components/Cursor";
import brochurePdf from "../assets/mep-brochure.pdf";

pdfjs.GlobalWorkerOptions.workerSrc = new URL(
    "pdfjs-dist/build/pdf.worker.min.mjs",
    import.meta.url,
).toString();

export const Brochure = () => {
    const containerRef = useRef<HTMLDivElement>(null);
    const [containerHeight, setContainerHeight] = useState(0);
    const [numPages, setNumPages] = useState(0);
    const location = useLocation();

    useEffect(() => {
        if (numPages > 0) {
            const params = new URLSearchParams(location.search);
            const pageParam = params.get("page");
            if (pageParam) {
                const targetPage = parseInt(pageParam, 10);
                if (!isNaN(targetPage) && targetPage > 0 && targetPage <= numPages) {
                    setTimeout(() => {
                        const pageEl = document.getElementById(`brochure-page-${targetPage}`);
                        if (pageEl && containerRef.current) {
                            // Using scrollIntoView
                            pageEl.scrollIntoView({ behavior: "smooth" });
                        }
                    }, 100);
                }
            }
        }
    }, [numPages, location.search]);

    useEffect(() => {
        const container = containerRef.current;
        if (!container) return;

        const observer = new ResizeObserver(([entry]) => {
            setContainerHeight(entry.contentRect.height);
        });
        observer.observe(container);

        return () => observer.disconnect();
    }, []);

    const pageHeight = containerHeight ? containerHeight - 32 : undefined;

    return (
        <div className="flex flex-col h-dvh w-full bg-black overflow-hidden items-center cursor-focus cursor-none">
            <style>{`
                .brochure-scroll::-webkit-scrollbar {
                    width: 8px;
                }
                .brochure-scroll::-webkit-scrollbar-track {
                    background: transparent;
                }
                .brochure-scroll::-webkit-scrollbar-thumb {
                    background: rgba(255, 255, 255, 0.25);
                    border-radius: 9999px;
                }
                .brochure-scroll::-webkit-scrollbar-thumb:hover {
                    background: rgba(255, 255, 255, 0.45);
                }
                .brochure-scroll {
                    scrollbar-width: thin;
                    scrollbar-color: rgba(255, 255, 255, 0.25) transparent;
                }
            `}</style>
            <Navbar />
            <Cursor />
            <div className="flex justify-center shrink-0 px-4 pt-24 pb-2">
                <a
                    href={brochurePdf}
                    download
                    className="text-white font-secondary text-sm md:text-base border border-white/40 rounded-full px-6 py-2 hover:bg-white hover:text-black transition-colors duration-300 cursor-none"
                >
                    Download PDF
                </a>
            </div>

            <div
                ref={containerRef}
                data-lenis-prevent
                className="brochure-scroll flex-1 min-h-0 w-full overflow-y-auto flex flex-col items-center gap-4 py-4">
                <Document
                    file={brochurePdf}
                    onLoadSuccess={({ numPages }) => setNumPages(numPages)}
                    className="flex flex-col items-center gap-4"
                    loading={
                        <p className="text-white font-secondary text-center p-8">
                            Loading brochure...
                        </p>
                    }
                    error={
                        <p className="text-white font-secondary text-center p-8">
                            Failed to load PDF.{" "}
                            <a href={brochurePdf} className="underline" download>
                                Download it instead
                            </a>
                            .
                        </p>
                    }
                >
                    {Array.from({ length: numPages }, (_, index) => (
                        <div key={index} id={`brochure-page-${index + 1}`} className="w-full flex justify-center">
                            <Page
                                pageNumber={index + 1}
                                height={pageHeight}
                            />
                        </div>
                    ))}
                </Document>
            </div>
        </div>
    );
};
