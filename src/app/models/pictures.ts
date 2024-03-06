export class Pictures {
  id?: number;
  alt?: string;
  src?: string;

  constructor(id?: number, alt?: string, src?: string) {
    this.id = id;
    this.alt = alt;
    this.src = src;
  }
}
