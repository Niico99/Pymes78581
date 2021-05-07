import { Component, OnChanges, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
   selector: 'app-puntaje',
   templateUrl: './puntaje.component.html',
   styleUrls: ['./puntaje.component.css']

})
export class PuntajeComponent implements OnChanges{
   @Input() puntaje: number;
   puntajeAncho: number;
   @Output() puntajeClicked: EventEmitter<string> = new EventEmitter<string>();

   ngOnInit(): void {
   }

   ngOnChanges(): void{
       this.puntajeAncho = this.puntaje * 68 / 5;
   }

   onClick(){
     this.puntajeClicked.emit('El puntaje es: ' + this.puntaje);
     //console.log("El puntaje es: " + this.puntaje);
   }
}
