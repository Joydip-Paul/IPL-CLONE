import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  url:string = '';

  constructor(private http: HttpClient) { 
    this.url = '/assets/json/';
  }

  public getAllTeamApi(): Observable<any> {
    return this.http.get<any[]>(this.url+'team.json').pipe(
      map(res => res)
    )
    }
}
