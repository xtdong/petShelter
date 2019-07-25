import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PetComponent } from './pet/pet.component';
import { PetNewComponent } from './pet-new/pet-new.component';
import { PetEditComponent } from './pet-edit/pet-edit.component';
import { PetListComponent } from './pet-list/pet-list.component';
import { PetDetailComponent } from './pet-detail/pet-detail.component';
import { NotFoundComponent } from './not-found/not-found.component';


const routes: Routes = [
  {
    path: 'pets', component: PetComponent, children: [
      { path: '', component: PetListComponent },
      { path: 'new', component: PetNewComponent },
      { path: 'detail/:id', component: PetDetailComponent },
      { path: 'edit/:id', component: PetEditComponent },
    ]
  },
  { path: '', pathMatch: 'full', redirectTo: '/pets' },
  // the ** will catch anything that did not match any of the above routes
  { path: '**', component: NotFoundComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
