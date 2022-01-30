import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { HomeService } from '../../services/home.service';

@Component({
  selector: 'app-Banner',
  templateUrl: './Banner.component.html',
  styleUrls: ['./Banner.component.scss']
})
export class BannerComponent implements OnInit {

  isClicked:boolean=true;
  @Output() componentNameProvider = new EventEmitter<string>();

  employees:string [] = [];
  constructor(private homeService:HomeService) { }

  ngOnInit() {
    this.employees = this.homeService.showEmplyees();
  }

  bannerCreate(component:string){
    this.componentNameProvider.emit(component);
    this.isClicked = !this.isClicked;
  }

}
