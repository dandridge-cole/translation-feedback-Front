import { Component, OnInit } from '@angular/core';
import { selectorService } from '../services/selectorService';

@Component({
  selector: 'app-orig-selector',
  templateUrl: './orig-selector.component.html',
  styleUrls: ['./orig-selector.component.css']
})
export class OrigSelectorComponent implements OnInit {

  constructor(selectorService:selectorService) { }

  ngOnInit() {
    this.getOrigTexts();
  }

  getOrigTexts(){
    selectorService.getOrigTexts();
  }
}
