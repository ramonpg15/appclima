import { Component, OnInit } from '@angular/core';
import { ClimaService } from '../../services/clima.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  ciudad:string=''
  temperatura=0
  humedad=0
  clima=''
  query=false
  loading=false
  mostrarError=false
  constructor(private _clima:ClimaService) { }

  ngOnInit(): void {
  }
  obtenerClima(){
    this.query=false
    this.loading=true
    console.log(this.ciudad);
    this._clima.obtenerClima(this.ciudad).subscribe(response=>{
      this.loading=false
      this.query=true
      console.log(response);
      this.temperatura=response.main['temp']
      this.humedad=response.main['humidity']
      this.clima=response.weather[0].description
    },(error:any)=>{
      console.log(error);
      this.loading=false
      this.error()
    })
  }
  error(){
    this.mostrarError=true
    setTimeout(() => {
      this.mostrarError=false
      this.ciudad=''
    }, 3000);
  }

}
