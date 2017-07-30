import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core';
import { Output,EventEmitter } from '@angular/core';
import {EmployService} from "../employ.service";
@Component({
  selector: 'app-employ-item',
  templateUrl: './employ-item.component.html',
  styleUrls: ['./employ-item.component.scss']
})
export class EmployItemComponent implements OnInit {
  @Input() user:any
  @Output() userClick = new EventEmitter<any>();
  constructor(private employServ:EmployService) { 
  }
  onUserClick(){
    this.userClick.emit(this.user)
  }
  ngOnInit() {
  }
}
