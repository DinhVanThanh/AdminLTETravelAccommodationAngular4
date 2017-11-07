import { environment } from './../../../environments/environment';
import { Param } from './../../Models/param';
import { Injectable } from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
@Injectable()
export class BaseHttpApiService {

  constructor(private http: HttpClient) { }
  
  

  Post(url:string, data:any, parameter:Param[]):Observable<any>
  {
    let param = new HttpParams();
    if(parameter)
    {
      for(let i of parameter)
      {
        param.set(i.Key, i.Value);
      }
      return this.http.post(environment.baseUrl + url,data, {params: param}) ;
    }
    return this.http.post(environment.baseUrl + url,data) ;
  }
  Put(url:string, data:any, parameter:Param[]):Observable<any>
  {
    let param = new HttpParams();
    if(parameter)
    {
      for(let i of parameter)
      {
        param.set(i.Key, i.Value);
      }
      return this.http.put(environment.baseUrl + url,data, {params: param}) ;
    }
    return this.http.put(environment.baseUrl+ url,data) ;
  }
  Delete(url:string)
  {
    return this.http.delete(environment.baseUrl+ url) ;
  }
}
