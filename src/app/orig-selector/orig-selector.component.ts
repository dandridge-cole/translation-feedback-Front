import { Component, OnInit } from '@angular/core';
import { SelectorService } from '../services/selectorService';

@Component({
  selector: 'app-orig-selector',
  templateUrl: './orig-selector.component.html',
  styleUrls: ['./orig-selector.component.css']
})
export class OrigSelectorComponent implements OnInit {

  constructor(public selectorService:SelectorService) { }

  ngOnInit() {
    this.getOrigTexts();
  }

  getOrigTexts(){
    this.selectorService.getOrigTexts();
  }

  onOrigTextSelect(origText){
    this.selectorService.selectedOrigText=origText;
  }
}
