import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ng-image',
  templateUrl: './image.component.html',
  styles: ['img{box-shadow:0px 1px 6px 1px rgba(0,0,0,0.75);margin-bottom:20px;float:left;}img:hover{filter:gray;}']
})
export class ImageComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
