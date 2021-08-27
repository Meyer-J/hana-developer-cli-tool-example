export var command: string;
export var aliases: string[];
export var describe: string;
export var builder: import("yargs").CommandBuilder<{}, {}>;
export function handler(argv: any): void;
export namespace inputPrompts {
    export namespace _function {
        const description: string;
        const type: string;
        const required: boolean;
    }
    export { _function as function };
    export namespace schema {
        const description_1: string;
        export { description_1 as description };
        const type_1: string;
        export { type_1 as type };
        const required_1: boolean;
        export { required_1 as required };
    }
    export namespace limit {
        const description_2: string;
        export { description_2 as description };
        const type_2: string;
        export { type_2 as type };
        const required_2: boolean;
        export { required_2 as required };
    }
}
export function getFunctions(prompts: any): Promise<any>;
