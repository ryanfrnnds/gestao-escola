export class Dropdown {
  value: string | any;
  label: string;

  constructor(obj?: Partial<Dropdown>) {
    if (obj) {
      Object.assign(this, obj);
    }
  }
}
