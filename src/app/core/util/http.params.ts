import { HttpParams } from "@angular/common/http";

export class HttpParamUtil {
  private constructor() {}

  public static criarParams<T>(filtro: T): HttpParams {
    let params = new HttpParams();

    for (const key in filtro) {
      if (Object.prototype.hasOwnProperty.call(filtro, key)) {
        let element:any = filtro[key];
        if(element) {
          params = params.append(key, element);
        }
      }
    }
    return params;
  }
}
