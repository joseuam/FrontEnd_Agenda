import { Component, OnInit,Inject } from '@angular/core';
import {Contacto} from '../Modelos/Contacto';
import{ContactoServiceService} from '../contacto-service.service';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {

  contactos:Contacto[]=[];

  constructor( private contactoService:ContactoServiceService) { }

  ngOnInit(): void {
  	this.contactos.push(new Contacto(13,"Jose","Bautizta",551889675,"jose@hotmail.com"));
  	this.contactos.push(new Contacto(14,"Brandon","Licona",688567484,"bren@hotmail.com"));
  	this.contactos.push(new Contacto(15,"Brenda","Corrella",559373830,"cobre@hotmail.com"));
  	this.contactos.push(new Contacto(4,"Teresa","Lozano",552930303,"cineti@hotmail.com"));
  	this.contactos.push(new Contacto(5,"Noemi","Rosas",552930303,"rosi@hotmail.com"));
  	this.contactos.push(new Contacto(6,"Pepe","Grillo",552930303,"jose@hotmail.com"));
  	this.contactos.push(new Contacto(7,"Mecanico","",552930303,"meca@hotmail.com"));
  	this.contactos.push(new Contacto(8,"Gas","",21,"gs@hotmail.com"));
  	this.contactos.push(new Contacto(9,"Mama","",552930303,""));
  	this.contactos.push(new Contacto(10,"Luis","Rosales",529303030,"jose@hotmail.com"));
  	this.contactos.push(new Contacto(11,"Diana","Lozano",771,"jose@hotmail.com"));
  	this.contactos.push(new Contacto(12,"Susana","Pacheco",529303030,"jose@hotmail.com"));
  	for(var i=0;i<this.contactos.length;i++){
  		this.contactoService.crearContacto(this.contactos[i]).subscribe();
  	}

  }

}
