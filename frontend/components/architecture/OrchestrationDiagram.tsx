import Image from "next/image";
import { Card } from "@/components/ui/Card";

export function OrchestrationDiagram() {
  return (
    <Card>
      <div className="grid gap-4 text-sm text-slate-300 md:grid-cols-2">
        <div className="space-y-3">
          <h3 className="text-xl font-semibold text-white">Flow</h3>
          <ol className="space-y-3">
            <li className="rounded-xl border border-white/10 bg-black/50 p-3">
              <p className="text-xs uppercase tracking-wide text-sky-300">01 · Build</p>
              <p className="mt-1">Bun compiles the Next.js microsite and exports static assets.</p>
            </li>
            <li className="rounded-xl border border-white/10 bg-black/50 p-3">
              <p className="text-xs uppercase tracking-wide text-cyan-300">02 · Run</p>
              <p className="mt-1">docker compose up provisions language containers exposing JSON output.</p>
            </li>
            <li className="rounded-xl border border-white/10 bg-black/50 p-3">
              <p className="text-xs uppercase tracking-wide text-emerald-300">03 · Deploy</p>
              <p className="mt-1">CI/CD publishes the static export to Vercel or CloudFront while containers remain optional.</p>
            </li>
          </ol>
        </div>
        <div className="relative h-64 rounded-2xl border border-white/10 bg-gradient-to-br from-sky-700/30 to-indigo-800/30">
          <Image src="/brand/docker-whale.svg" alt="Docker whale" fill className="object-contain p-6" />
        </div>
      </div>
    </Card>
  );
}
