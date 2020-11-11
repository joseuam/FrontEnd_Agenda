import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Contacto} from './Modelos/Contacto';

@Injectable({
  providedIn: 'root'
})
export class ContactoServiceService {

  constructor(private http: HttpClient) { }

  getContactos(){
  	return this.http.get<Contacto[]>('https://localhost:5001/api/Contacttos1');
  }

  getContacto(id:number){
  	return this.http.get<Contacto>('https://localhost:5001/api/Contacttos1/'+id);
  }

  crearContacto(con: Contacto){
  	return this.http.post<Contacto>('https://localhost:5001/api/Contacttos1/agregar',con);
  }

  updateContacto(con: Contacto){
    return this.http.put<Contacto>('https://localhost:5001/api/Contacttos1/Actualizar',con);
  }

  borrarContacto(id:number){
    return this.http.delete('https://localhost:5001/api/Contacttos1/'+id);
  }


}
