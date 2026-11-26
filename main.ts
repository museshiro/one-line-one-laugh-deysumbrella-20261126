import { mkdirSync, writeFileSync } from "node:fs";

// One Line, One Laugh — u-deysumbrella-one-line-one-laugh-e0cdcda9
// Writes a single funny line to /output/entry.txt. Deterministic,
// no network, no arguments, no relative writes anywhere.
const LINE =
  "The lift stopped between floors for ten minutes. We introduced ourselves, formed a committee, and still nobody pressed the alarm.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");
