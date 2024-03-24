import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-ingresar',
  templateUrl: './ingresar.page.html',
  styleUrls: ['./ingresar.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule, ReactiveFormsModule]
})
export class IngresarPage implements OnInit {

  formularioLogin: FormGroup;

  constructor(public fb : FormBuilder) { 
    this.formularioLogin = this.fb.group({
      'nombre': new FormControl('', Validators.required),
      'password': new FormControl('', Validators.required)
    })
  }

  ngOnInit() {
  }

}
