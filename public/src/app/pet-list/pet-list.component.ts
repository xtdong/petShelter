import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-pet-list',
  templateUrl: './pet-list.component.html',
  styleUrls: ['./pet-list.component.css']
})
export class PetListComponent implements OnInit {
  allPets;
  thisPet;


  constructor(
    private _httpService: HttpService,
    private _router: Router,
    private _route: ActivatedRoute,
  ) { }

  ngOnInit() {
    this.allPets = [];
    this.thisPet = {
      name: '',
      type: '',
      description: '',
      url: '',
      skills: ['', '', ''],
    };
    this.getAllPets();
  }

  getAllPets() {
    let allPets = this._httpService.getAllPets();
    allPets.subscribe(data => {
      this.allPets = data['data'];
    });
  }

  getPet(id) {
    let getPet = this._httpService.getPet(id);
    getPet.subscribe(response => {
      this.thisPet = response['data'];
    });
  }

  delete(id) {
    console.log('delete btn work');
    let deletePet = this._httpService.delete(id);
    deletePet.subscribe(response => {
      // console.log('delete in subscribe');
      console.log(response);
    });
    this.getAllPets();
  }


  // black belt
  // add likes

  addLike(id) {
    let likeIt = this._httpService.addLike(id);
    likeIt.subscribe(response => {
      console.log(response);
    });

    let count = 0;
    this.allPets.forEach(pet => {
      if (pet._id == id) {
        console.log('id matched');
        this.allPets[count].display_button = 1
        this.allPets[count].likes += 1
      }
      count += 1;
    });
    console.log(this.allPets);
  }
}