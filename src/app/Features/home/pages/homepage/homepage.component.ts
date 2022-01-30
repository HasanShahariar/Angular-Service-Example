import { Component, OnInit } from '@angular/core';
import { HomeService } from '../../services/home.service';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent implements OnInit {

  constructor(private homeService:HomeService) { }

  ngOnInit() {}

  createAlbum(event:any){
    this.homeService.showAlert(event)

  }

}
