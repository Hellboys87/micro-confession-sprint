import { mkdirSync, writeFileSync } from "node:fs";

const ENTRY =
  "To: the night nurse on my grandmother's last night\n" +
  "I thanked the doctor, but you were the one holding her hand. I stood in the hallway all night, too afraid to go in — and by morning you were gone.\n";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY, "utf8");
