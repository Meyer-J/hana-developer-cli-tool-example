export function handler(argv: any): void;
export function certs(prompts: any): Promise<void>;
export const command: "certificates";
export const aliases: string[];
export const describe: string;
export const builder: import("yargs").CommandBuilder<{}, {}>;
