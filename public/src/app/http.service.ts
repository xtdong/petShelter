import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  constructor(
    private _http: HttpClient,
  ) { }


  // add
  addNewPet(obj) {
    console.log('new pet ', obj)
    return this._http.post('/addPet', obj);
  }

  // get all
  getAllPets() {
    return this._http.get('/getAllPets');
  }
  // get one
  getPet(petId) {
    return this._http.get(`/edit/${petId}`);
  }
  // edit
  // editPet(obj) {
  //   // console.log(obj.petID)
  //   return this._http.patch(`/edit/${obj.petID}`, obj);
  // }
  editPet(obj) {
    console.log(obj.petID);
    return this._http.patch('/edit/' + obj.petID, obj);
  }

  delete(id) {
    // console.log('delete btn service');
    return this._http.post('/delete/' + id, {});
  }


  // add like
  addLike(id) {
    console.log('ADD LIKE btn service');
    return this._http.post('/addLike/' + id, {});
  }


  // end
}
