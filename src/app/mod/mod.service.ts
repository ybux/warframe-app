import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs'
@Injectable({
  providedIn: 'root'
})
export class ModService {

  private API_MOD = 'http://localhost:3000/api/mods'
  constructor(private http: HttpClient) { }

  public getMods(): Observable<any>{
    return this.http.get(this.API_MOD + '/modsGet');
  }

  public getModsWarframe(name:string): Observable<any>{
    return this.http.get(this.API_MOD + '/modsWarframeGet/'+name);
  }

}
