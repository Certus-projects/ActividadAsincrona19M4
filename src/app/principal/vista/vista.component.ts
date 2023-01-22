import { Component } from '@angular/core';
import { Users } from 'src/app/models/users';
import { UserserviceService } from 'src/app/services/userservice.service';

@Component({
  selector: 'app-vista',
  templateUrl: './vista.component.html',
  styleUrls: ['./vista.component.css']
})
export class VistaComponent {


  //aqui creamos una instancia de userserviceservice
  constructor(private userService:UserserviceService){}


  //array que va a obtener toda la info del metodo getusersall
  vistaListado = new Array(); // con ()

  //ejecutar mmetodo getuserall al cargar el componente
  ngOnInit(){
    /* 
    ejecutar metodo getUsersAll y obtener json devuelto por la api
    this.userService.getUsersAll().subscribe({
      next: (userAll:Users[])=> this.vistaListado=userAll, //el userAll dentro del () puede tener cualquier nombre, solo importa que sea de tipo Users[]
      error:(error)=>console.error(error),
      complete:()=> console.info('completed!')
    }) */

    //ejecutar el metodo getUsersAllInterceptor que captura la comunicacion, no un resultado
    //de toda la comunicaion solo queremos el body (e json esta dentro del body)
    this.userService.getUsersAllInterceptor().subscribe({
      next: (response:any)=> {
        this.vistaListado=response.body;
        console.log(response);
      },
      error:(error)=>console.error(error),
      complete:()=> console.info('completed!')
    })

  }

}
