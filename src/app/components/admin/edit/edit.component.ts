import { Component } from '@angular/core';
import { Voyage } from '../../../models/voyage';
import { FormVoyage } from '../../../models/form-voyage';
import { VoyageService } from '../../../services/voyage.service';
import { PicturesService } from '../../../services/pictures.service';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-edit',
  standalone: true,
  imports: [RouterModule, CommonModule, FormsModule],
  templateUrl: './edit.component.html',
  styleUrl: './edit.component.css'
})
export class EditComponent {

  isLoading: boolean = true;
  voyage?: Voyage;
  voyForm: FormVoyage = new FormVoyage();
  types?: string[] = ['Mer', 'Montagne', 'Campagne'];

  constructor(private voyageService: VoyageService, private pictureService: PicturesService,
    private activatedRoute: ActivatedRoute, private routerService: Router) {
  }

  ngOnInit(): void {

    let id = this.activatedRoute.snapshot.paramMap.get('id');
    if (id) {
      this.voyageService.getOne(+id).subscribe(data => {
        this.voyage = data;
        this.voyForm.id = data.id;
        this.voyForm.destination = data.destination;
        this.voyForm.nbStar = data.nbStar;
        this.voyForm.lattitude = data.lattitude;
        this.voyForm.longitude = data.longitude;
        this.voyForm.mainPicture = data.mainPicture;
        this.voyForm.type = data.type;
        this.isLoading = false;
      })
    }
  }


  updateVoyage() {
    this.isLoading = true;
    this.voyageService.put(this.voyForm).subscribe(data => {
      this.routerService.navigate(["/admin"]);
      this.isLoading = false;
    })
  }


}
