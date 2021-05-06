import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormControl, FormGroup } from "@angular/forms";

@Component({
    selector: 'app-articulo-familia',
    templateUrl: './articulo-familia.component.html'
})

export class ArticuloFamiliaComponent implements OnInit{
    
    frmArticulos: FormGroup;

    constructor(private fb: FormBuilder) { }

    ngOnInit(): void {
        this.frmArticulos = this.fb.group(
            {
                IdArticuloFamilia: [0],
                Familia: ['']
            }
        );
    }

    mostrar(){
        alert(' ID Articulo es ' + this.frmArticulos.value.IdArticuloFamilia + 
              ' y la familia es ' + this.frmArticulos.value.Familia);
    }

    limpiar(){
        this.frmArticulos.reset({
            IdArticuloFamilia: [0],
            Familia: ['']
        });
    }

}