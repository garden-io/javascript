import * as yaml from 'js-yaml';
export declare function loadYaml<T = any>(data: string, opts?: yaml.LoadOptions): T | undefined;
export declare function loadAllYaml(data: string, opts?: yaml.LoadOptions): any[];
export declare function dumpYaml(object: any, opts?: yaml.DumpOptions): string;
