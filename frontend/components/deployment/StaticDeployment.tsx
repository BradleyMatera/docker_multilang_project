import { Card } from "@/components/ui/Card";

export function StaticDeployment() {
  return (
    <div className="grid gap-6 md:grid-cols-2">
      <Card className="bg-gradient-to-br from-buildStart/20 to-buildEnd/10">
        <h3 className="text-lg font-semibold text-white">Static export</h3>
        <p className="text-sm leading-relaxed text-slate-200">
          Run <code>bunx next build && bunx next export</code> to emit the <code>out/</code> directory. The bundle ships to
          any CDN and consumes language output via documented endpoints.
        </p>
      </Card>
      <Card className="bg-gradient-to-br from-shipStart/20 to-shipEnd/10">
        <h3 className="text-lg font-semibold text-white">Hosting options</h3>
        <ul className="mt-3 space-y-2 text-sm text-slate-200">
          <li>• Vercel static upload (instant, edge cached)</li>
          <li>• AWS Amplify / CloudFront distribution</li>
          <li>• GitHub Pages via <code>npx gh-pages -d out</code></li>
        </ul>
      </Card>
    </div>
  );
}
