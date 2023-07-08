import { ThemeProvider } from "@react-navigation/native";

enum HttpMethod {
  POST,
  PUT,
  GET,
  DELETE,
  HEAD
};

type HttpOption = {
  method: string,
  headers: any
  body: any
};

class HttpRequest {
  option?: HttpOption;
  url?: string;
}

export interface IBuilderHttpRequest {
  setMethod(method: HttpMethod): IBuilderHttpRequest;
  setUrl(url: string): IBuilderHttpRequest;
  setBody(body: any): IBuilderHttpRequest;
  setHeaders(header: any): IBuilderHttpRequest;
  getHttpRequest(): HttpRequest;
}


export class BuilderHttpRequest implements IBuilderHttpRequest {

  setMethod(method: HttpMethod): IBuilderHttpRequest {
    throw new Error("Not Implemented");
  }

  setUrl(url: string): IBuilderHttpRequest {
    throw new Error("Not Implemented");
  }

  setBody(body: any): IBuilderHttpRequest {
    throw new Error("Not Implemented");
  }

  setHeaders(header: any): IBuilderHttpRequest {
    throw new Error("Not Implemented");
  }

  getHttpRequest(): HttpRequest {
    throw new Error("Not Implemented");
  }
}
