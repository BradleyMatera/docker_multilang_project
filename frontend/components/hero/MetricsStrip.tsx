import metrics from "@/data/metrics.json";

export function MetricsStrip() {
  return (
    <ul className="mt-8 grid grid-cols-2 gap-6 text-left md:grid-cols-4">
      {metrics.map((metric) => (
        <li key={metric.label} className="rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur">
          <p className="text-xs uppercase tracking-widest text-slate-300">{metric.label}</p>
          <p className="mt-2 text-xl font-semibold text-white">{metric.value}</p>
        </li>
      ))}
    </ul>
  );
}
