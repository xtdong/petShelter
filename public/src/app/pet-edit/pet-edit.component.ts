import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-pet-edit',
  templateUrl: './pet-edit.component.html',
  styleUrls: ['./pet-edit.component.css']
})
export class PetEditComponent implements OnInit {

  toEditPet;
  messageShow;

  constructor(
    private _httpService: HttpService,
    private _router: Router,
    private _route: ActivatedRoute,
  ) { }

  ngOnInit() {
    this.toEditPet = {
      name: '',
      type: '',
      description: '',
      url: '',
      skills: ['', '', ''],
    };
    this._route.params.subscribe((params: Params) => {
      this.getPet(params['id']);
    });
  }

  getPet(id) {
    let getPet = this._httpService.getPet(id);
    getPet.subscribe(response => {
      this.toEditPet = response['data'];
    });
  }

  // editPet(id, petName, petType, petDescription, petUrl, skill1, skill2, skill3) {
  //   this.toEditPet.petID = id;
  //   this.toEditPet.name = petName.value;
  //   // console.log('*****', petName.value);
  //   this.toEditPet.type = petType.value;
  //   this.toEditPet.description = petDescription.value;
  //   this.toEditPet.url = petUrl.value;
  //   this.toEditPet.skills = [skill1.value, skill2.value, skill3.value];
  //   // console.log('*****', this.toEditPet.skills);

  //   let setPet = this._httpService.editPet(this.toEditPet);
  //   setPet.subscribe(response => {
  //     this.messageShow = response['message'];
  //     if (this.messageShow != 'Success') {
  //       this.messageShow = response['error'];
  //     } else {
  //       this._router.navigate(['/pets']);
  //     }
  //   });

  // }

  editPet(id) {
    this.toEditPet.petID = id;
    let setPet = this._httpService.editPet(this.toEditPet);
    setPet.subscribe(response => {
      this.messageShow = response['message'];
      if (this.messageShow != 'Success') {
        this.messageShow = response['error'];
      } else {
        this._router.navigate(['/pets']);
      }
    });
  }


}
