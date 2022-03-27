import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ClimaService {
  key = '5e61c48c7898d5570793f361e59338bd'
  url = 'https://api.openweathermap.org/data/2.5/weather?&appid='
  constructor(private _http: HttpClient) { }

  obtenerClima(ciudad: string): Observable<any> {
    const URL = this.url + this.key + '&q='+ciudad
    return this._http.get(URL)
  }
}
