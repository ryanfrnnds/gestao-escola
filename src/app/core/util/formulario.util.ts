import { FormGroup } from '@angular/forms';
export class FormUtil {
  static marcarComoTocado(
    formulario: FormGroup,
    marcarCamposDesabilitados = true
  ) {
    for (const key in formulario.controls) {
      if (formulario.controls.hasOwnProperty(key)) {
        const control: any = formulario.controls[key];

        if (marcarCamposDesabilitados) {
          if (control.controls) {
            this.marcarComoTocado(control);
          } else {
            control.markAsTouched();
          }
        } else {
          if (control.status !== 'DISABLED') {
            if (control.controls) {
              this.marcarComoTocado(control, false);
            } else {
              control.markAsTouched();
            }
          }
        }
      }
    }
  }

  static marcarComoNaoTocado(formulario: FormGroup) {
    for (const key in formulario.controls) {
      if (formulario.controls.hasOwnProperty(key)) {
        const control: any = formulario.controls[key];
        if (control.controls) {
          this.marcarComoNaoTocado(control);
        } else {
          control.markAsUntouched();
        }
      }
    }
  }

  static resetar(formulario: FormGroup) {
    for (const key in formulario.controls) {
      if (formulario.controls.hasOwnProperty(key)) {
        const control: any = formulario.controls[key];
        if (control.controls) {
          this.resetar(control);
        } else {
          if (control.enabled) {
            control.setValue(null);
            control.markAsUntouched();
          }
        }
      }
    }
  }
}
