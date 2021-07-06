import { ObjectUtil } from './object.util';
import { AbstractControl, ValidatorFn, Validators } from '@angular/forms';

// Levar para o CORE

enum MensagemError {
  required = 'Campo obrigatório',
  pattern = 'Formato inválido',
  cpfIncompleto = 'O campo cpf deve conter no mínimo 11 digitos',
  cpfInvalido = 'O cpf informado está inválido',
  cnpjIncompleto = 'O campo cnpj deve conter no mínimo 14 dígitos',
  cnpjInvalido = 'O cnpj informado está inválido',
  nomePessoa = 'O nome está inválido',
  autocompleteInvalido = 'Escolha um item da lista',
  telefoneFixoIncompleto = 'O campo telefone fixo deve conter no mínimo 10 dígitos',
  telefoneFixoInvalido = 'Atenção, após o DDD, telefones fixos iniciam com os números 3 ou 4. Ex: (85) 3xxx-xxxx',
  telefoneCelularIncompleto = 'O campo telefone celular deve conter no mínimo 11 dígitos',
  telefoneCelularInvalido = 'Atenção, após o DDD, telefones celulares iniciam com o número 9. Ex: (85) 9xxxx-xxxx',
}
// @dynamic
export class SesaValidators extends Validators {
  static get required(): ValidatorFn {
    return (
      control: AbstractControl
    ): { [key: string]: string } | { [key: string]: boolean } | null => {
      if (
        control.value === undefined ||
        control.value == null ||
        control.value.length === 0
      ) {
        return { required: true };
      }

      if (control.value === '0' || control.value === 0) {
        return null;
      }

      return !control.value ||
        (typeof control.value === 'string' && control.value.trim() === '')
        ? { required: true }
        : null;
    };
  }

  static pattern(regex: RegExp, message?: string): ValidatorFn {
    return (control: AbstractControl): { [key: string]: string } | null => {
      if (!control.value) {
        return null;
      }

      return !regex.test(control.value)
        ? { error: message || MensagemError.pattern }
        : null;
    };
  }

  public static cpf(control: AbstractControl) {
    if (control.value) {
      const cpf = control.value;
      if (cpf == null) {
        return { invalidCpf: true };
      }

      if (cpf.length !== 11) {
        return { invalidCpf: true };
      }

      if (
        cpf === '00000000000' ||
        cpf === '11111111111' ||
        cpf === '22222222222' ||
        cpf === '33333333333' ||
        cpf === '44444444444' ||
        cpf === '55555555555' ||
        cpf === '66666666666' ||
        cpf === '77777777777' ||
        cpf === '88888888888' ||
        cpf === '99999999999'
      ) {
        return { invalidCpf: true };
      }

      let numero = 0;
      let caracter = '';
      const numeros = '0123456789';
      let j = 10;
      let somatorio = 0;
      let resto = 0;
      let digito1 = 0;
      let digito2 = 0;
      let cpfAux = '';
      cpfAux = cpf.substring(0, 9);

      for (let i = 0; i < 9; i++) {
        caracter = cpfAux.charAt(i);
        if (numeros.search(caracter) === -1) {
          return { invalidCpf: true };
        }
        numero = Number(caracter);
        somatorio = somatorio + numero * j;
        j--;
      }

      resto = somatorio % 11;
      digito1 = 11 - resto;
      if (digito1 > 9) {
        digito1 = 0;
      }
      j = 11;
      somatorio = 0;
      cpfAux = cpfAux + digito1;

      for (let i = 0; i < 10; i++) {
        caracter = cpfAux.charAt(i);
        numero = Number(caracter);
        somatorio = somatorio + numero * j;
        j--;
      }

      resto = somatorio % 11;
      digito2 = 11 - resto;
      if (digito2 > 9) {
        digito2 = 0;
      }
      cpfAux = cpfAux + digito2;
      if (cpf !== cpfAux) {
        return { invalidCpf: true };
      }
    }
  }

  static get cnpj(): ValidatorFn {
    return (control: AbstractControl): { [key: string]: string } | null => {
      const valor: string = ObjectUtil.buscarValor(control, 'value', '');
      if (valor) {
        if (valor.length !== 14) {
          return { error: MensagemError.cnpjIncompleto };
        }
        if (
          valor === '00000000000000' ||
          valor === '11111111111111' ||
          valor === '22222222222222' ||
          valor === '33333333333333' ||
          valor === '44444444444444' ||
          valor === '55555555555555' ||
          valor === '66666666666666' ||
          valor === '77777777777777' ||
          valor === '88888888888888' ||
          valor === '99999999999999'
        ) {
          return { error: MensagemError.cnpjInvalido };
        }
        return null;
      }
    };
  }

  public static validAutocomplete(): ValidatorFn {
    return (control: AbstractControl): { [key: string]: string } | null => {
      if (typeof control.value === 'string' && control.value !== '') {
        return { error: MensagemError.autocompleteInvalido };
      }
      return null;
    };
  }

  public static pisPasep(control: AbstractControl) {
    if (control.value) {
      const pisPasep = control.value;

      if (pisPasep == null) {
        return { invalidPisPasep: true };
      }

      let multiplicadorBase = '3298765432';
      let total = 0;
      let resto = 0;
      let multiplicando = 0;
      let multiplicador = 0;
      let digito = 99;

      if (
        pisPasep.length !== 11 ||
        pisPasep === '00000000000' ||
        pisPasep === '11111111111' ||
        pisPasep === '22222222222' ||
        pisPasep === '33333333333' ||
        pisPasep === '44444444444' ||
        pisPasep === '55555555555' ||
        pisPasep === '66666666666' ||
        pisPasep === '77777777777' ||
        pisPasep === '88888888888' ||
        pisPasep === '99999999999'
      ) {
        return { invalidPisPasep: true };
      } else {
        for (var i = 0; i < 10; i++) {
          multiplicando = parseInt(pisPasep.substring(i, i + 1));
          multiplicador = parseInt(multiplicadorBase.substring(i, i + 1));
          total += multiplicando * multiplicador;
        }
        resto = 11 - (total % 11);
        resto = resto === 10 || resto === 11 ? 0 : resto;
        digito = parseInt('' + pisPasep.charAt(10));
        if (resto !== digito) {
          return { invalidPisPasep: true };
        }
        return null;
      }
    }
    return null;
  }

  public static telefoneFixo(control: AbstractControl) {
    const validaTelefone = /^\d{2}[34]{1}\d{7}$/;

    if (control.value) {
      const telefoneFixo = control.value;

      if (telefoneFixo.length !== 10) {
        return { error: MensagemError.telefoneFixoIncompleto };
      }

      return !validaTelefone.test(telefoneFixo)
        ? { error: MensagemError.telefoneFixoInvalido }
        : null;
    }
  }

  public static telefoneCelular(control: AbstractControl) {
    const validaTelefone = /^\d{2}[9]{1}\d{8}$/;

    if (control.value) {
      const telefoneFixo = control.value;

      if (telefoneFixo.length !== 11) {
        return { error: MensagemError.telefoneCelularIncompleto };
      }

      return !validaTelefone.test(telefoneFixo)
        ? { error: MensagemError.telefoneCelularInvalido }
        : null;
    }
  }
}
