export const createMockXHR = () => new MockXMLHttpRequest();

export class MockXMLHttpRequest {

    constructor() {

    }

    public onreadystatechange: (this: XMLHttpRequest, ev: Event) => {

    }

    public open(method: string, url: string, async?: boolean, user?: string, password?: string) {

    }

    public send(data?: any) {

    }

    public addEventListener<K extends keyof XMLHttpRequestEventMap>(type: K, listener: (this: XMLHttpRequest, ev: XMLHttpRequestEventMap[K]) => any, useCapture?: boolean) { }
}