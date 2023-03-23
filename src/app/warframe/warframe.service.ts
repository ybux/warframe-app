import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs'
@Injectable({
  providedIn: 'root'
})
export class WarframeService {

  private API_WARFRAME= 'http://localhost:3000/api/warframe'
  constructor(private http: HttpClient) { }

  public getWarframes(): Observable<any>{
    return this.http.get(this.API_WARFRAME + '/warframeGet');
  }
  public getNameWarframes(): Observable<any>{
    return this.http.get(this.API_WARFRAME + '/warframeGetName');
  }

}
