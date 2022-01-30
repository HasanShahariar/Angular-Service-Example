import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-Banner',
  templateUrl: './Banner.component.html',
  styleUrls: ['./Banner.component.scss']
})
export class BannerComponent implements OnInit {

  @Output() componentNameProvider = new EventEmitter<string>();
  constructor() { }

  ngOnInit() {
  }

  bannerCreate(component:string){
    this.componentNameProvider.emit(component);
  }

}
