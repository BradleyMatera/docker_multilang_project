import timeline from "@/data/workflow.json";
import { Card } from "@/components/ui/Card";

export function WorkflowTimeline() {
  return (
    <Card className="relative border-l border-white/10 pl-6">
      <ul className="space-y-8">
        {timeline.timeline.map((step, index) => (
          <li key={step.title} className="relative">
            <span className="absolute -left-[29px] mt-1 flex h-6 w-6 items-center justify-center rounded-full border border-white/20 bg-black/70 text-xs font-semibold text-sky-300">
              {String(index + 1).padStart(2, "0")}
            </span>
            <h4 className="text-lg font-semibold text-white">{step.title}</h4>
            <p className="mt-2 text-sm leading-relaxed text-slate-300">{step.detail}</p>
          </li>
        ))}
      </ul>
    </Card>
  );
}
