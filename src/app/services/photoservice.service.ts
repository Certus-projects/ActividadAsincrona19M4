import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Photos } from '../models/photos';

@Injectable({
  providedIn: 'root',
})
export class PhotoService {
  // constructor() { }

  //empezamos creando una instancia de tipo httpclient
  constructor(private http: HttpClient) {}

  //definir la url del api (el apiURL/ esta en environment.ts, es una forma de base url, ya que podemos añadirle distintos endpoints)
  apiPhoto = environment.apiURL + 'photos/';

  //metodos GET para obtener datos de la api Photos  (todos los metodos en el servicio tienen que ser :observable)

  //la interface en models/Photo.ts se llama Photos y es una matriz, por eso Photos[]
  getPhotosAll(): Observable<Photos[]> {
    return this.http.get<Photos[]>(this.apiPhoto);
  }

  getPhotoId(PhotoId: string): Observable<Photos> {
    const url = this.apiPhoto + PhotoId;
    return this.http.get<Photos>(url); // parecerá que hay errores hasta que completes el metodo
  }

  //con esto le enviamos info a la api
  postPhoto(Photo: Photos): Observable<Photos> {
    return this.http.post<Photos>(this.apiPhoto, Photo);
  }

  //metodo get interceptor, no es igual a getPhotosall()(en ese se obtiene json), aqui solo queremos hacer get
  getPhotosAllInterceptor(): Observable<any> {
    return this.http.get(this.apiPhoto, { observe: 'response' });
  }
}
