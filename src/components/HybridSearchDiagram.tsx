import { ArrowDown } from "lucide-react";
import { cn } from "@/lib/utils";

const VArrow = () => (
    <div className="flex flex-col items-center">
        <div className="w-0.5 h-5 bg-current" />
        <ArrowDown size={14} className="-mt-0.5" />
    </div>
);

interface HybridSearchDiagramProps {
    className?: string;
}

export default function HybridSearchDiagram({ className = "" }: HybridSearchDiagramProps) {
    return (
        <div className={cn("inline-flex flex-col items-center font-mono text-xs select-none", className)}>

            {/* ── Two retriever boxes ───────────────────────────── */}
            <div className="flex gap-10">
                <div className="border-2 border-pink-300 rounded-xl px-5 py-3 text-center bg-pink-400/10">
                    <div className="font-medium">BM25</div>
                    <div className="text-[10px] opacity-60 mt-0.5">(sparse retriver)</div>
                </div>
                <div className="border-2 border-blue-300 rounded-xl px-5 py-3 text-center bg-blue-400/10">
                    <div className="font-medium">lancedb</div>
                    <div className="text-[10px] opacity-60 mt-0.5">(Dense retriver)</div>
                </div>
            </div>

            {/* ── Ensemble retriever connector ──────────────────── */}
            {/*
              Lines go down from each box center, then a horizontal bar
              joins them, then a single line drops to the triangle.
              Percentages are approximate to the box centers above.
            */}
            <div className="relative w-full" style={{ height: "52px" }}>
                {/* Left downstroke */}
                <div className="absolute w-0.5 bg-current" style={{ height: "22px", left: "23%", top: 0 }} />
                {/* Right downstroke */}
                <div className="absolute w-0.5 bg-current" style={{ height: "22px", right: "23%", top: 0 }} />
                {/* Horizontal bar joining both lines */}
                <div className="absolute h-0.5 bg-current" style={{ left: "23%", right: "23%", top: "22px" }} />
                {/* Label just below the bar */}
                <div
                    className="absolute text-[10px] opacity-50 whitespace-nowrap"
                    style={{ top: "26px", left: "50%", transform: "translateX(-50%)" }}
                >
                    (Ensamble Retriver)
                </div>
                {/* Center downstroke to triangle */}
                <div className="absolute w-0.5 bg-current" style={{ height: "18px", left: "50%", transform: "translateX(-50%)", bottom: 0 }} />
            </div>

            <ArrowDown size={14} className="-mt-1" />

            {/* ── Hybrid Search triangle ────────────────────────── */}
            {/*
              Downward-pointing triangle via clip-path.
              drop-shadow follows the clip-path edge, giving a crisp border.
            */}
            <div className="relative" style={{ width: "160px", height: "110px" }}>
                <div
                    className="absolute inset-0"
                    style={{
                        clipPath: "polygon(50% 100%, 0% 0%, 100% 0%)",
                        background: "rgba(248,113,113,0.10)",
                        filter:
                            "drop-shadow(0 0 0 1px rgb(248 113 113)) drop-shadow(0 0 1px rgba(248,113,113,0.8))",
                    }}
                />
                <span
                    className="absolute text-center leading-tight"
                    style={{ top: "26px", left: "50%", transform: "translateX(-50%)" }}
                >
                    Hybrid
                    <br />
                    Search
                </span>
            </div>

            <VArrow />

            {/* ── "Relevant documents" label ───────────────────── */}
            <span className="text-[11px] opacity-60 mb-1">Relevant documents</span>

            {/* ── LLM box ──────────────────────────────────────── */}
            <div className="border-2 border-green-400 rounded-xl px-10 py-3 text-center bg-green-400/10">
                LLM
            </div>

            <VArrow />

            {/* ── Q&A diamond ──────────────────────────────────── */}
            <div className="relative flex items-center justify-center" style={{ width: "86px", height: "86px" }}>
                <div
                    className="absolute border-2 border-pink-400 rounded-sm"
                    style={{ width: "56px", height: "56px", transform: "rotate(45deg)" }}
                />
                <span className="relative text-xs">Q&amp;A</span>
            </div>

            {/* Footer */}
            <p className="text-[10px] opacity-30 mt-3 self-start">from: medium.com</p>
        </div>
    );
}
