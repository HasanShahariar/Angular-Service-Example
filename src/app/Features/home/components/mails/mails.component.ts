import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-mails',
  templateUrl: './mails.component.html',
  styleUrls: ['./mails.component.scss']
})
export class MailsComponent implements OnInit {

  @Output() componentNameProvider = new EventEmitter<string>();
  
  constructor() { }

  ngOnInit() {
  }

  mailCreate(component:string){
    this.componentNameProvider.emit(component);
  }

}
