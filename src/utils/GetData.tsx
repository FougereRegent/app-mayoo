import { BuilderHttpRequest, HttpRequest, HttpRequestDirector } from "./HttpRequest";

type Credentials = {
  username: string,
  password: string
};

export interface IServiceToken {
  getToken(credential: Credentials): string
}


export class ProxyServiceToken implements IServiceToken {
  private static credentials?: Credentials;
  private static token: string;
  private service: IServiceToken;

  private checkIfTokenExist(credential: Credentials): boolean {
    return false;
  }

  constructor(service: IServiceToken) {
    this.service = service;
  }

  getToken(credential: Credentials): string {
    if (this.checkIfTokenExist(credential)) {
      return ProxyServiceToken.token;
    }

    let result_token: string = this.service.getToken(credential);
    if (result_token !== "") {
      ProxyServiceToken.token = result_token;
      ProxyServiceToken.credentials = credential;
      return "";
    }
    return ProxyServiceToken.token;
  }
}

export class ServiceToken implements IServiceToken {
  getToken(credential: Credentials): string {
    let request: HttpRequest = HttpRequestDirector.makeRequestLogin(credential.username, credential.password);
    fetch(request.url, request.option)
      .then(response => {
        console.log(response.status);
      })
      .catch(error => {
        console.error(error);
      });
    return "";
  }
}
