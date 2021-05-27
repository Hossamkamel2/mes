import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navigator',
  templateUrl: './navigator.component.html',
  styleUrls: ['./navigator.component.css']
})
export class NavigatorComponent implements OnInit {

  activeTab: string;
  constructor() {
    this.activeTab = 'TIME LINE';
  }

  ngOnInit(): void {
  }

}
