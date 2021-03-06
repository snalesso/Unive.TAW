export class HttpMessage<T> {

    public constructor(
        public readonly Content: T,
        public readonly ErrorMessage?: string) {
    }
}

export interface IHttpResponseError {
    readonly Message: string;
    readonly Status: number;
}