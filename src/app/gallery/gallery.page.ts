import { Component, OnInit } from '@angular/core';
import { ImageList } from '../app.constant';
import images from '../../assets/images.json';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.page.html',
  styleUrls: ['./gallery.page.scss'],
})
export class GalleryPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  zInxChange:string = "";
  contentZInxChange = false;
  imageList:ImageList[] = images;

  change(value:any){
    this.zInxChange = value;
    this.contentZInxChange = (value != "")
  }

}
