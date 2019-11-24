import { Component, OnInit } from '@angular/core';
import { ImageService } from '../image.service';

@Component({
  selector: 'images',
  templateUrl: './images.component.html',
  styles: []
})
export class ImagesComponent implements OnInit {

  constructor(private service: ImageService) { }

  ngOnInit() {
    this.service.getImageDetailList();
  }
}