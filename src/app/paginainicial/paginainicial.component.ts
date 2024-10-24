import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { FormControl, Validators } from '@angular/forms';
import { merge } from 'rxjs';

@Component({
  selector: 'app-paginainicial',
  templateUrl: './paginainicial.component.html',
  styleUrls: ['./paginainicial.component.css']
})
export class PaginainicialComponent {

  hide = signal(true); 

 
  readonly email = new FormControl('', [Validators.required, Validators.email]);


  errorMessage = signal('');

  constructor() {
    merge(this.email.statusChanges, this.email.valueChanges)
      .pipe(takeUntilDestroyed()) 
      .subscribe(() => this.updateErrorMessage()); 
  }


  togglePasswordVisibility() {
    this.hide.set(!this.hide()); 
  }

  updateErrorMessage() {
    if (this.email.hasError('required')) {
      this.errorMessage.set('ingresa un email');
    } else if (this.email.hasError('email')) {
      this.errorMessage.set('Email no valido');
    } else {
      this.errorMessage.set(''); 
    }
  }
  iniciarsesion(){
    alert("Presionando sobre el boton aceptar" + this.email.value);
  }

}

