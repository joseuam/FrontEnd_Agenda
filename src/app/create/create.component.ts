import { Component, OnInit } from '@angular/core';
import{Contacto} from '../Modelos/Contacto';
import{ContactoServiceService} from '../contacto-service.service';
import { Router, ActivatedRoute, Params } from '@angular/router';


@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {

  nuevoContacto:Contacto;
  id:number;

  constructor(private router:Router, private contactoService:ContactoServiceService) { 
  	this.nuevoContacto = new Contacto(10,'','',null,'');
  }

  ngOnInit(): void {
    this.contactoService.getContactos()
    .subscribe(data=>{
      this.id=data.length;
      console.log("regrese del servicio");
    });
  }

  onSubmit(){
    var con=confirm("Seguro que quieres guardar este contacto");
    console.log(this.nuevoContacto);
    if(con){
      this.nuevoContacto.id_Contacto=this.id+1;
    	this.contactoService.crearContacto(this.nuevoContacto)
    	.subscribe(a=>{
    		this.router.navigate(['main']);
    	})
    }    
  }

}
