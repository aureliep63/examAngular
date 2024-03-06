import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Voyage } from '../../../models/voyage';
import { VoyageService } from '../../../services/voyage.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterModule, CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})

export class HomeComponent implements OnInit {

  isLoading = true;
  voyages?: Voyage[];
  types: string[] = ['Mer', 'Montagne', 'Campagne'];

  constructor(private voyageService: VoyageService) { }


  ngOnInit(): void {
    this.voyageService.getAll().subscribe(data => {
      this.voyages = data;
      console.log(data);
      this.isLoading = false;
    });

  }


}
