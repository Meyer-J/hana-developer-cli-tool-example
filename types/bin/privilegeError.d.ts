export var command: string;
export var aliases: string[];
export var describe: string;
export var builder: import("yargs").CommandBuilder<{}, {}>;
export function handler(argv: any): void;
export function dbCall(prompts: any): Promise<any>;
