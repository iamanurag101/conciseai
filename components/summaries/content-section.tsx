import { containerVariants } from "@/utils/constants";
import { MotionDiv } from "@/components/common/motion-wrapper";

export default function ContentSection({
    title,
    points
} : {
    title: string;
    points: string[];
}) {
    return (
        <MotionDiv 
        variants={containerVariants} 
        key={points.join('')}
        initial="hidden"
        animate="visible"
        exit="exit"
        className="space-y-4">
            {points.map((point,index) => {
                return (
                    <div key={`point-${index}`}
                    className="group relative bg-gradient-to-br from-gray-200/[0.08] to-gray-400/[0.03] 
                    p-4 rounded-2xl border border-gray-500/10 hover:shadow-lg transition-all">
                        <div
                        className="absolute inset-0 bg-gradient-to-r from-gray-500/10 to-transparent 
                        opacity-0 group-hover:opacity-100 transition-opacity rounded-2xl"
                        />
                        <div className="relative flex items-start gap-3">
                            <p className="text-md text-muted-foreground/90 leading-relaxed">
                                {point.replace(/^•\s*/, '')}
                            </p>
                        </div>
                    </div>
                )
            })}
        </MotionDiv>
    )
}