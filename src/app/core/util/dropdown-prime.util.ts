import { Dropdown } from "@entidade-prime";


export class DropdownPrimeUtil {
  public static valuesSelect(
    lista: Array<any>,
    label: string,
    value: string
  ): Array<Dropdown> {
    const listaRetorno: Array<Dropdown> = new Array<Dropdown>();

    lista.forEach((item) => {
      const dropdownItem: Dropdown = new Dropdown({
        label: item[label],
        value: item[value],
      });
      listaRetorno.push(dropdownItem);
    });

    return listaRetorno;
  }
}
