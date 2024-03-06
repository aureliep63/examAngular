import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { Voyage } from '../../../models/voyage';
import { VoyageService } from '../../../services/voyage.service';
import { DeleteConfirmService } from "../../../services/delete-confirm.service";
import { ToastrService } from "ngx-toastr";

@Component({
  selector: 'app-admin-list',
  standalone: true,
  imports: [RouterModule, CommonModule],
  templateUrl: './admin-list.component.html',
  styleUrl: './admin-list.component.css'
})
export class AdminListComponent implements OnInit {

  isLoading = true;
  voyages?: Voyage[];
  types: string[] = ['Mer', 'Montagne', 'Campagne'];

  constructor(private router: Router, private voyageService: VoyageService, private confirmSercice: DeleteConfirmService, private toastr: ToastrService) {

  }

  ngOnInit(): void {
    this.voyageService.getAll().subscribe(data => {
      this.voyages = data;
      this.isLoading = false;
    })
  }

  logout() {
    window.localStorage.removeItem("token");
    this.router.navigate(["/login"]);
  }
  deleteEvent(id: number | undefined) {
    this.isLoading = true;
    this.confirmSercice
      .confirm("Veuillez confirmer",
        "Action irrémédiable").then(res => {
          if (res && id) {
            this.voyageService.delete(id).subscribe(data => {
              this.ngOnInit();
              this.isLoading = false;
              this.toastr.success("Voyage supprimé")
            })
          }
        });



  }

}
