import { Component, OnInit } from '@angular/core';
import {Contacto} from '../Modelos/Contacto';
import { Router, ActivatedRoute, Params } from '@angular/router';
import{ContactoServiceService} from '../contacto-service.service';


@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

	contactos:Contacto[]=[];
  auxEdita:Contacto;

  constructor(private router:Router, private contactoService:ContactoServiceService) { }

  ngOnInit(): void {
    this.auxEdita=new Contacto(null,"","",0,"");
    

    
    this.contactoService.getContactos()
    .subscribe(data=>{
      this.contactos=data;
      console.log("regrese del servicio");
    });
  }

  crear(){
    this.router.navigate(['crear']);
  }


  editar(contacto:Contacto){
    console.log("con ",contacto);
    this.auxEdita.nombre=contacto.nombre;
    this.auxEdita.apellido=contacto.apellido;
    this.auxEdita.telefono=contacto.telefono;
    this.auxEdita.correo=contacto.correo;
    this.auxEdita.id_Contacto=contacto.id_Contacto;
  }

  save(){
    console.log(this.auxEdita);
    for(var i=0; i<this.contactos.length;i++){
      if(this.contactos[i].id_Contacto==this.auxEdita.id_Contacto){
        this.contactos[i].nombre=this.auxEdita.nombre;
        this.contactos[i].apellido=this.auxEdita.apellido;
        this.contactos[i].telefono=this.auxEdita.telefono;
        this.contactos[i].correo=this.auxEdita.correo;
        break;
      }
    }
    this.contactoService.updateContacto(this.auxEdita)
    .subscribe(a=>{
      alert("Contacto guardado con exito");
    });
    //this.router.navigate(['main']);
  }

  noClick(){
    this.auxEdita=new Contacto(null,"","",0,"");
  }

  eliminar(){
    this.contactoService.borrarContacto(this.auxEdita.id_Contacto)
    .subscribe(a=>{
      alert("Contacto eliminado. Por favor Cierre");
        for(var i=0; i<this.contactos.length;i++){
          if(this.contactos[i].id_Contacto==this.auxEdita.id_Contacto){
               this.contactos.splice( i, 1 );
              break;
          }
        }
     
    });

  }

}
