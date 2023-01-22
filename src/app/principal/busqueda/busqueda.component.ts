import { Component } from '@angular/core';
import { Users } from 'src/app/models/users';
import { UserserviceService } from 'src/app/services/userservice.service';

@Component({
  selector: 'app-busqueda',
  templateUrl: './busqueda.component.html',
  styleUrls: ['./busqueda.component.css']
})
export class BusquedaComponent {

  //pegar lo del ts de vista

  
  //aqui creamos una instancia de userserviceservice
  constructor(private userService:UserserviceService){}


  //array que va a obtener toda la info del metodo getusersall
  vistaListado = new Array(); // con ()

  //no necesitamos el ng on init, lo modificamos para el metodo
  resultado = false;
  mostrarError = false;
  user!: Users| null; //por errores 'no puede ser null..'

  busquedaGetUserId(id:string){
    // this.user=null;
    this.userService.getUserId(id).subscribe({
      next: (usuario:Users)=> {
        this.resultado=true;
        this.user = usuario
        console.log(this.user); //si el id esta vacio, devuelve el array de objetos, si el id es un id correcto devuelve el objeto correcto (pero el array su typeof es objeto tambien)
      },
      error:(error)=>{
        this.resultado=false;
        this.mostrarError=true;
        console.error(error)
      },
      complete:()=> console.info('found!')
    })
  }
  

}
