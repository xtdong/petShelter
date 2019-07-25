import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-pet-new',
  templateUrl: './pet-new.component.html',
  styleUrls: ['./pet-new.component.css']
})
export class PetNewComponent implements OnInit {
  newPet;
  messageShow;
  allPets;


  constructor(
    private _httpService: HttpService,
    private _router: Router
  ) { }

  ngOnInit() {
    this.newPet = {
      name: '',
      type: '',
      description: '',
      url: '',
      skills: ['', '', ''],
    };
    this.messageShow = { key: '', error: '' };
    this.allPets = [];
  }

  addNewPet() {
    console.log('submit a Pet')
    let addPet = this._httpService.addNewPet(this.newPet);

    addPet.subscribe(response => {
      this.messageShow = response['message'];
      console.log(this.messageShow);

      if (this.messageShow != 'Success') {
        this.messageShow = response['error'];
        console.log('in messageshow', this.messageShow);
      } else {
        console.log('redricte');
        this.allPets.push(response['data']);
        this._router.navigate(['/pets']);
      }
    });
  }
  // end
}
