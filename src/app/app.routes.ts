import { Routes } from '@angular/router';
import { HomeComponent } from './components/public/home/home.component';
import { DetailComponent } from './components/public/detail/detail.component';
import { LoginComponent } from './components/admin/login/login.component';
import { AdminListComponent } from './components/admin/admin-list/admin-list.component';
import { AjoutComponent } from './components/admin/ajout/ajout.component';
import { EditComponent } from './components/admin/edit/edit.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'admin', component: AdminListComponent },
  { path: 'admin/ajout', component: AjoutComponent },
  { path: 'admin/edit/:id', component: EditComponent },
  { path: ':id', component: DetailComponent }
];
