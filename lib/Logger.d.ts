import './types/types';
export declare class Logger {
    private scope;
    private logType;
    constructor(scope?: ValueType);
    log(value?: ValueType, logType?: LogType): void;
    private write;
}
