import React, { useState, useEffect } from "react";
import { Document, Page, pdfjs } from "react-pdf";
import { Download } from "lucide-react";
import "react-pdf/dist/Page/AnnotationLayer.css";
import "react-pdf/dist/Page/TextLayer.css";

// Set up PDF.js worker (required for react-pdf to work properly)
pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.mjs`;

export default function Resume() {
    // Total number of pages in the PDF
    const [numPages, setNumPages] = useState(null);

    // Track screen width for responsive PDF scaling
    const [width, setWidth] = useState(800);

    useEffect(() => {
        // Update width on window resize (client-side only)
        const handleResize = () => setWidth(window.innerWidth);
        handleResize(); // initial size
        window.addEventListener("resize", handleResize);

        return () => window.removeEventListener("resize", handleResize);
    }, []);

    // Called when PDF is successfully loaded
    function onDocumentLoadSuccess({ numPages }) {
        setNumPages(numPages);
    }

    return (
        <div
            className="flex flex-col items-center min-h-screen p-8
            bg-[linear-gradient(180deg,#fff7e6,#ffe6cc)]
            dark:bg-[linear-gradient(180deg,#0f1724,#05060a_60%)]
            text-gray-900 dark:text-white"
        >
            {/* Page title */}
            <h2 className="text-center text-xl mb-8 font-bold md:text-2xl lg:text-4xl">
                Resume
            </h2>

            {/* Download resume button */}
            <div className="mb-8 w-full flex justify-center">
                <a
                    href="/Resume.pdf"
                    download="Sayantan_Pachal_Resume.pdf"
                    className="flex items-center gap-2
                    bg-[linear-gradient(90deg,#bef264,#fef08a)]
                    dark:bg-[linear-gradient(90deg,#6ee7b7,#60a5fa)]
                    text-[#042023] font-bold py-3 px-8
                    rounded-full shadow-lg
                    transition-all duration-500 ease-in-out"
                >
                    Download PDF <Download size={20} />
                </a>
            </div>

            {/* PDF preview container */}
            <div
                className="w-full max-w-[800px] flex justify-center
                shadow-2xl rounded-xl overflow-hidden bg-white"
            >
                <Document
                    file="/Resume.pdf"
                    onLoadSuccess={onDocumentLoadSuccess}
                    loading={<p className="p-10 text-gray-500">Loading Resume…</p>}
                >
                    {/* Render all pages dynamically */}
                    {Array.from(new Array(numPages), (_, index) => (
                        <Page
                            key={index}
                            pageNumber={index + 1}
                            width={Math.min(800, width - 64)} // responsive width
                            renderTextLayer
                            renderAnnotationLayer
                        />
                    ))}
                </Document>
            </div>
        </div>
    );
}
