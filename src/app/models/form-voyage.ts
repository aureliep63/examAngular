import { Pictures } from "./pictures";

export class FormVoyage {
  id?: number;
  destination?: string;
  lattitude?: number;
  longitude?: number;
  type?: string;
  nbStar?: number;
  mainPicture?: Pictures;

  constructor(id?: number, destination?: string, lattitude?: number, longitude?: number, type?: string, nbStar?: number, mainPicture?: Pictures) {
    this.id = id;
    this.destination = destination;
    this.lattitude = lattitude;
    this.longitude = longitude;
    this.type = type;
    this.nbStar = nbStar;
    this.mainPicture = mainPicture;

  }
}
