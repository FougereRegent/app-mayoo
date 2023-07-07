type Credentials = {
  username: string,
  password: string
};

interface IServiceToken {
  getToken(): string
  setCredentials(credentials: Credentials): void
  isValidToken(credentials: Credentials): boolean
}


export class ProxyServiceToken implements IServiceToken {
  private credential: Credentials[];
  private service: IServiceToken;

  constructor(service: IServiceToken) {
    this.service = service;
    this.credential = new Array();
  }

  getToken(): string {
    return "";
  }

  setCredentials(credentials: Credentials): void {
    if (this.credential.indexOf(credentials) === -1) {
      this.credential.push(credentials);
    }
  }

  isValidToken(credentials: Credentials): boolean {
    return false;
  }
}

class ServiceToken implements IServiceToken {
  private credential?: Credentials;

  getToken(): string {
    return "";
  }

  setCredentials(credentials: Credentials): void {

  }

  isValidToken(credentials: Credentials): boolean {
    return false;
  }

}
