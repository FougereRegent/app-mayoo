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
  public option: HttpOption;
  public url: string;

  public constructor() {
    this.option = {
      method: "",
      headers: {},
      body: ""
    };

    this.url = "";
  }
}

export interface IBuilderHttpRequest {
  setMethod(method: HttpMethod): IBuilderHttpRequest;
  setUrl(url: string): IBuilderHttpRequest;
  setBody(body: any): IBuilderHttpRequest;
  setHeaders(header: any): IBuilderHttpRequest;
  getHttpRequest(): HttpRequest;
}


export class BuilderHttpRequest implements IBuilderHttpRequest {

  private httpRequest: HttpRequest;

  constructor() {
    this.httpRequest = new HttpRequest();
  }

  setMethod(method: HttpMethod): IBuilderHttpRequest {
    switch (method) {
      case HttpMethod.GET:
        this.httpRequest.option.method = "GET";
        break;
      case HttpMethod.PUT:
        this.httpRequest.option.method = "PUT";
        break;
      case HttpMethod.HEAD:
        this.httpRequest.option.method = "HEAD";
        break;
      case HttpMethod.POST:
        this.httpRequest.option.method = "POST";
        break;
      case HttpMethod.DELETE:
        this.httpRequest.option.method = "DELETE";
        break;
    }
    return this;
  }

  setUrl(url: string): IBuilderHttpRequest {
    this.httpRequest.url = url;
    return this;
  }

  setBody(body: any): IBuilderHttpRequest {
    this.httpRequest.option.body = body;
    return this;
  }

  setHeaders(header: any): IBuilderHttpRequest {
    this.httpRequest.option.headers = header;
    return this;
  }

  getHttpRequest(): HttpRequest {
    return this.httpRequest;
  }
}

export class HttpRequestDirector {

  static makeRequestLogin(username: string, password: string): HttpRequest {
    let builder: BuilderHttpRequest = new BuilderHttpRequest();
    builder.setUrl("http://10.0.0.114:8080/auth/user")
      .setBody(JSON.stringify({
        email: username,
        password: password
      }))
      .setHeaders({
        Accept: "application/json",
        'Content-Type': "application/json"
      });

    return builder.getHttpRequest();
  }
}
