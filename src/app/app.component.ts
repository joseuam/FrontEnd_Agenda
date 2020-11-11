import { Component } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  login:boolean=false;
  title = 'AgendaAngular';
  campos={"usuario":"","contra":""};

  constructor(private router:Router) { }

  onSubmit(){

  	if(this.campos.usuario=="jose" && this.campos.contra=="12345"){
  		this.login=true;
  	}else{
  		this.campos.usuario="";
  		this.campos.contra="";
  		alert("Contraseña y/o usuario invalido");
  	}

  }

  cerrarSesion(){
  	this.login=false;
  }


}
