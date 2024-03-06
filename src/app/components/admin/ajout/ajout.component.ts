import { Component, OnInit } from '@angular/core';
import { Voyage } from '../../../models/voyage';
import { VoyageService } from '../../../services/voyage.service';
import { PicturesService } from '../../../services/pictures.service';
import { Router, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { FormVoyage } from '../../../models/form-voyage';

@Component({
  selector: 'app-ajout',
  standalone: true,
  imports: [CommonModule, RouterModule, FormsModule],
  templateUrl: './ajout.component.html',
  styleUrl: './ajout.component.css'
})
export class AjoutComponent implements OnInit {

  isLoading = true;
  types?: string[] = ['Mer', 'Montagne', 'Campagne'];
  voys = new FormVoyage();
  stringError?: string;

  constructor(private voyageService: VoyageService, private pictureService: PicturesService, private router: Router) {
  }

  ajoutVoyage() {
    this.isLoading = true;
    this.voyageService.post(this.voys).subscribe(data => {
      this.router.navigate(["/admin"]);
    }, error => {

    })
  }

  ngOnInit(): void {
    this.isLoading = false;
    this.voyageService.getAll().subscribe(data => {
      console.log(data);
      // this.types = data;

    })
  }

}
