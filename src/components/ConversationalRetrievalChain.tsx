import { ArrowRight, ArrowDown, FileText } from "lucide-react";
import { cn } from "@/lib/utils";

const Box = ({
    children,
    className = "",
}: {
    children: React.ReactNode;
    className?: string;
}) => (
    <div
        className={cn(
            "border-2 border-gray-700 rounded-xl px-3 py-2 text-xs text-center leading-tight min-w-20",
            className
        )}
    >
        {children}
    </div>
);

const HArrow = ({ long = false }: { long?: boolean }) => (
    <div className={cn("flex items-center shrink-0", long && "flex-1")}>
        <div className={cn("h-0.5 bg-current", long ? "flex-1" : "w-4")} />
        <ArrowRight size={14} className="-ml-0.5" />
    </div>
);

const VArrow = () => (
    <div className="flex flex-col items-center">
        <div className="w-0.5 h-4 bg-current" />
        <ArrowDown size={14} className="-mt-0.5" />
    </div>
);

interface ConversationalRetrievalChainProps {
    className?: string;
}

export default function ConversationalRetrievalChain({
    className = "",
}: ConversationalRetrievalChainProps) {
    return (
        <div className={cn("inline-grid font-mono text-xs select-none", className)}
            style={{
                gridTemplateColumns: "max-content max-content 1fr max-content",
                gridTemplateRows: "auto auto",
            }}
        >
            {/* ── Row 1: Input query → HAR → QA (top) ───────────── */}

            {/* Col 1, Row 1: Input query */}
            <div className="flex items-center pr-2" style={{ gridColumn: 1, gridRow: 1 }}>
                <Box>Input query</Box>
            </div>

            {/* Col 2, Row 1: arrow into HAR */}
            <div className="flex items-center" style={{ gridColumn: 2, gridRow: 1 }}>
                <HArrow />
            </div>

            {/* Col 3, Row 1: history_aware_retriever */}
            <div className="relative border-2 border-dashed border-orange-400 rounded-xl px-4 pt-6 pb-3 mx-2"
                style={{ gridColumn: 3, gridRow: 1 }}>
                <span className="absolute top-1.5 left-3 text-orange-400 text-[11px]">
                    history_aware_retriever
                </span>
                <div className="flex items-center gap-1">
                    <Box>
                        &ldquo;Contextualize
                        <br />
                        query&rdquo; prompt
                    </Box>
                    <HArrow />
                    <Box>LLM</Box>
                    <HArrow />
                    <Box>
                        Contextualized
                        <br />
                        query
                    </Box>
                    <HArrow />
                    <Box>Retriever</Box>
                </div>
            </div>

            {/* Col 4, Row 1+2: question_answer_chain — spans both rows */}
            <div className="relative border-2 border-dashed border-blue-400 rounded-xl px-4 pt-6 pb-3 ml-2 flex flex-col items-center gap-1"
                style={{ gridColumn: 4, gridRow: "1 / 3" }}>
                <span className="absolute top-1.5 left-3 text-blue-400 text-[11px]">
                    question_answer_chain
                </span>

                {/* Stacked document icons */}
                <div className="relative w-16 h-12 mb-3">
                    <FileText
                        size={36}
                        className="absolute top-2 left-1 fill-yellow-100 stroke-yellow-500"
                    />
                    <FileText
                        size={36}
                        className="absolute top-0 left-5 fill-yellow-200 stroke-yellow-500"
                    />
                    <span className="absolute -bottom-4 left-1/2 -translate-x-1/2 whitespace-nowrap text-[11px]">
                        Documents
                    </span>
                </div>

                <VArrow />
                <Box className="max-w-27.5">
                    &ldquo;Answer question&rdquo;
                    <br />
                    prompt
                </Box>
                <VArrow />
                <Box>LLM</Box>
                <VArrow />
                <Box>Answer</Box>
            </div>

            {/* ── Row 2: Chat history → long line → QA chain ────── */}

            {/* Col 1, Row 2: Chat history */}
            <div className="flex items-center pr-2 pt-4" style={{ gridColumn: 1, gridRow: 2 }}>
                <Box>Chat history</Box>
            </div>

            {/* Col 2–3, Row 2: long arrow spanning HAR width, pointing into QA chain */}
            <div className="flex items-center pt-4" style={{ gridColumn: "2 / 4", gridRow: 2 }}>
                <HArrow long />
            </div>
        </div>
    );
}
