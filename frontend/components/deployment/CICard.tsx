import { Card, CardBody } from "@nextui-org/react";

const workflow = `name: deploy\non:\n  push:\n    branches: [main]\njobs:\n  build:\n    runs-on: ubuntu-latest\n    steps:\n      - uses: actions/checkout@v4\n      - uses: oven-sh/setup-bun@v1\n      - run: bun install\n      - run: bunx next build && bunx next export\n      - run: npx vercel deploy --prebuilt --yes`;

export function CICard() {
  return (
    <Card radius="lg" className="border border-white/10 bg-white/5 backdrop-blur">
      <CardBody className="space-y-4">
        <div>
          <h3 className="text-lg font-semibold text-white">CI/CD pipeline</h3>
          <p className="text-sm text-slate-300">Automate builds through GitHub Actions with Bun and deploy to Vercel.</p>
        </div>
        <pre className="max-h-80 overflow-auto rounded-2xl bg-black/80 p-4 font-mono text-xs leading-relaxed text-emerald-200">
          {workflow}
        </pre>
      </CardBody>
    </Card>
  );
}
