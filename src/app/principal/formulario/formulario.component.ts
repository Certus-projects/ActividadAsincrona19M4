import { Component } from '@angular/core';
import { Users } from 'src/app/models/users';
import { UserserviceService } from 'src/app/services/userservice.service';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent {


  //copiamos el constructor
  constructor(private userService:UserserviceService){}

  //crear el objeto que se enviara con el metodo postuser()
  datos: Users ={
    id:'',
    name:'',
    username:''
  }

  //o Crear(){}
  // formPostUser(){
  onSubmit(){
    this.userService.postUser(this.datos).subscribe(
      (usuario:Users)=>console.log(usuario)
    )
  }//la info es enviada, pero por seguridad la api que no es nuestra no se ve modificada, en la lista de usuarios solo vas a ver 10 siempre

}
