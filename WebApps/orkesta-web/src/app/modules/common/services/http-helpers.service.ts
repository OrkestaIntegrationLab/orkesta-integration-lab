import { HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HttpHelpersService {

  constructor() { }

 getHttpParamsFromPlainObject(object: any, addNulls: boolean = true) {
    let params = new HttpParams();
    for (const key of Object.keys(object)) {
      if (object[key] === null && !addNulls) {
        continue;
      }
      if (object[key] instanceof Array) {
        object[key].forEach((item) => {
          params = params.append(`${key}`, item ?? "");
        });
      } else if (
        object[key] instanceof Date ||
        Object.prototype.toString.call(object[key]) === "[object Date]"
      ) {
        params = params.append(key.toString(), formatDate(object[key]));
      } else {
        params = params.append(key.toString(), object[key] ?? "");
      }
    }
    // for (const key in object) {
    //     if (object[key] === null && !addNulls) {
    //       continue;
    //     }
    //     params = params.set(key, object[key] ?? '');
    // }

    return params;
  }
}


const formatDate = (str: string | Date) => {
  if (!str) {
    return undefined;
  }
  const d = new Date(str);
  const padLeft = (n: number) => ("00" + n).slice(-2);
  const dformat = [
    d.getFullYear(),
    padLeft(d.getMonth() + 1),
    padLeft(d.getDate()),
  ].join("");
  return dformat;
};
