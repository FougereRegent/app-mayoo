import { useNavigationBuilder } from "@react-navigation/native";
import Unauthorized from "./CustomExceptions/Unauthorized";
import { BuilderHttpRequest, HttpRequest, HttpRequestDirector } from "./HttpRequest";

type Credentials = {
  username: string,
  password: string
};

type AuthentificationResponse = {
  token: string
}

export interface IServiceToken {
  getToken(credential: Credentials): Promise<string>
}

export class ProxyServiceToken implements IServiceToken {
  private static credentials?: Credentials;
  private static token: string;
  private service: IServiceToken;

  private checkIfTokenExist(credential: Credentials): boolean {
    return ProxyServiceToken.token != "" && ProxyServiceToken.token != undefined;
  }

  constructor(service: IServiceToken) {
    this.service = service;
  }

  async getToken(credential: Credentials): Promise<string> {
    let result_token: string = "";
    if (this.checkIfTokenExist(credential)) {
      return ProxyServiceToken.token;
    }

    try {
      result_token = await this.service.getToken(credential);
    }
    catch (error) {
      throw error;
    }

    ProxyServiceToken.token = result_token;
    ProxyServiceToken.credentials = credential;

    return ProxyServiceToken.token;
  }
}

export class ServiceToken implements IServiceToken {
  async getToken(credential: Credentials): Promise<string> {
    let request: HttpRequest = HttpRequestDirector.makeRequestLogin(credential.username, credential.password);
    let response = await fetch(request.url, request.option);

    if (response.status == 404)
      throw new NotFound();
    if (response.status == 403)
      throw new Unauthorized("Pas de token valid");

    let token: AuthentificationResponse | any = await response.json();
    return token.token;
  }
}
