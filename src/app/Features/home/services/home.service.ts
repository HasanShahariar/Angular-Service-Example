import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
  
})
export class HomeService {

   

constructor() { }

  showAlert(component:string){
    alert("Creating "+component+"...")
  }
  showEmplyees(){
    return ["Hamidur Rahman", "Razib Sarkar", "Mominul Islam","Hasan Shaharair"];
  }


}
