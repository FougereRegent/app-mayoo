import { createNavigatorFactory } from "@react-navigation/native";

type Credentials = {
  username: string,
  password: string
};

interface IServiceToken {
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

class ServiceToken implements IServiceToken {
  private credential?: Credentials;

  getToken(credential: Credentials): string {
    return "";
  }
}
