import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Bob } from '../models/bob';

@Injectable({
  providedIn: 'root',
})
export class BobService {
  // constructor() { }

  //empezamos creando una instancia de tipo httpclient
  constructor(private http: HttpClient) {}

  //definir la url del api (el apiURL/ esta en environment.ts, es una forma de base url, ya que podemos añadirle distintos endpoints)
  apiBob = environment.bobApi;

  //metodos GET para obtener datos de la api Photos  (todos los metodos en el servicio tienen que ser :observable)

  //la interface en models/Photo.ts se llama Photos y es una matriz, por eso Photos[]
  getBobsAll(): Observable<Bob[]> {
    return this.http.get<Bob[]>(this.apiBob);
  }

  getBobId(BobId: string): Observable<Bob> {
    const url = this.apiBob + BobId;
    return this.http.get<Bob>(url); // parecerá que hay errores hasta que completes el metodo
  }

  //con esto le enviamos info a la api
  postBob(Bob: Bob): Observable<Bob> {
    return this.http.post<Bob>(this.apiBob, Bob);
  }

  //metodo get interceptor, no es igual a getBobsall()(en ese se obtiene json), aqui solo queremos hacer get
  getBobsAllInterceptor(): Observable<any> {
    return this.http.get(this.apiBob, { observe: 'response' });
  }
}
