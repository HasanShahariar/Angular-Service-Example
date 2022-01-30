import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { HomeService } from '../../services/home.service';

@Component({
  selector: 'app-mails',
  templateUrl: './mails.component.html',
  styleUrls: ['./mails.component.scss']
})
export class MailsComponent implements OnInit {
  isClicked:boolean=true;
  @Output() componentNameProvider = new EventEmitter<string>();

  employees:string [] = [];
  constructor(private homeService:HomeService) { }

  ngOnInit() {
    this.employees = this.homeService.showEmplyees();
  }

  mailCreate(component:string){
    this.componentNameProvider.emit(component);
    this.isClicked = !this.isClicked;

  }

}
