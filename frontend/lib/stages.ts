export const stages = [
  { id: "overview", label: "Overview", gradient: "from-buildStart to-buildEnd" },
  { id: "language", label: "Languages", gradient: "from-runStart to-runEnd" },
  { id: "architecture", label: "Architecture", gradient: "from-sky-400 to-indigo-500" },
  { id: "deployment", label: "Deployment", gradient: "from-shipStart to-shipEnd" },
  { id: "ship", label: "Ship", gradient: "from-emerald-400 to-teal-500" }
] as const;

type Stage = (typeof stages)[number];

export type StageId = Stage["id"];
