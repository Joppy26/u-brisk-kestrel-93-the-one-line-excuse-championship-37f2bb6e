import { mkdirSync, writeFileSync } from "node:fs";

const ENTRY = "I did exactly what you asked, so the file is gone and my confidence is still at 98%.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY, "utf8");
