import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-form-component',
  templateUrl: './form-component.component.html',
  styleUrl: './form-component.component.css',
})
export class FormComponentComponent implements OnInit {
  public myForm: FormGroup = new FormGroup({});
  public isEmailError: boolean = false;
  public isPasswordError: boolean = false;
  public isDisabled: boolean = false;
  public isSuccess: boolean = false;

  constructor() {}

  ngOnInit(): void {
    this.myForm = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', Validators.minLength(8)),
    });
  }

  onSubmit() {
    console.log(this.myForm.invalid);
    if (this.myForm.get('email')?.errors && this.myForm.get('email')?.touched) {
      this.isEmailError = true;
    } else {
      this.isEmailError = false;
    }
    if (
      this.myForm.get('password')?.errors &&
      this.myForm.get('password')?.touched
    ) {
      this.isPasswordError = true;
    } else {
      this.isPasswordError = false;
    }
    if (this.myForm.valid) {
      this.isDisabled = false;
      this.isSuccess = true;
      // Aquí puedes enviar los datos del formulario a tu servidor o realizar otras acciones
    } else {
      this.isDisabled = true;
      this.isSuccess = false;
      // Marcar todos los controles como tocados para mostrar los mensajes de error
      this.myForm.markAllAsTouched();
    }
  }
}
