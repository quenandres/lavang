import { Component, OnInit, Input } from '@angular/core';
import { Image } from '../../models/image';

@Component({
  selector: 'ng-image-list',
  templateUrl: './image-list.component.html',
  styles: ['img{box-shadow:0px 1px 6px 1px rgba(0,0,0,0.75);margin-bottom:20px;float:left;}img:hover{filter:gray;}']

})
export class ImageListComponent implements OnInit {
 	image = new Image ('1','Primera Imagen','Descripcion primera imagen','https://videotutoriales.com/maspa/maspa1.jpg','https://videotutoriales.com/maspa/maspa1-1.jpg');
  constructor() { }

  ngOnInit() {
  }

}
