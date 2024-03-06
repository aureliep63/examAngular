import { Component, OnInit } from '@angular/core';
import { VoyageService } from '../../../services/voyage.service';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { Voyage } from '../../../models/voyage';
import { CommonModule } from '@angular/common';
import { Pictures } from '../../../models/pictures';
import { PicturesService } from '../../../services/pictures.service';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-detail',
  standalone: true,
  imports: [RouterModule, CommonModule],
  templateUrl: './detail.component.html',
  styleUrl: './detail.component.css'
})


export class DetailComponent implements OnInit {

  isLoading = true;
  voyage?: Voyage;
  picture?: Pictures[];
  types: string[] = ['Mer', 'Montagne', 'Campagne'];
  mapUrl: SafeResourceUrl;


  constructor(private voyageService: VoyageService, private activatedRoute: ActivatedRoute, private picturesService: PicturesService, private sanitizer: DomSanitizer) {
    this.mapUrl = this.sanitizer.bypassSecurityTrustResourceUrl('');
  }

  ngOnInit(): void {
    let id = this.activatedRoute.snapshot.paramMap.get('id');
    if (id) {
      this.voyageService.getOne(+id).subscribe(data => {
        this.voyage = data;

      });
      this.isLoading = false;
    }

    this.mapUrl = this.sanitizer.bypassSecurityTrustResourceUrl(`https://maps.google.com/maps?q=${this.voyage?.longitude},${this.voyage?.lattitude}&hl=fr&z=14&output=embed`);
  }
}



