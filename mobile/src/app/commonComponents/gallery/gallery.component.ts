import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

interface Item {
  imageSrc: string;
  imageAlt: string;
}

@Component({
  selector: 'app-gallery-viewer',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss']
})
export class GalleryComponent implements OnInit {

  @Input() galleryData: Item[] = [];
  @Input() showCount = false;
  @Input() showTitle = false;
  @Input() title = "";
  @Input() showLimit:number = 0;
  @Input() enableFullSize = false;

  @Output() zIndexChange = new EventEmitter<string>();

  previewImage = false;
  showMask = false;
  currentLightboxImage: Item = this.galleryData[0];
  currentIndex = 0;
  controls = true;
  totalImageCount = 0;
  showImageTile: Item[] = [];

  constructor() { }

  ngOnInit() {
    this.showImageTile = this.showLimit > 0 ? this.galleryData.filter((value:Item, index:number) => { return index<this.showLimit ? value : null }) : this.galleryData;
    this.totalImageCount = this.galleryData.length;
  }

  

  onPreviewImage(index: number): void {
    this.showMask = true;
    this.previewImage = true;
    this.currentIndex = index;
    this.currentLightboxImage = this.galleryData[index];
    this.zIndexChange.emit(this.title);
  }

  onClosePreview() {
    this.previewImage = false;
    this.showMask = false;
    this.zIndexChange.emit("");
  }

  next() {
    this.currentIndex = this.currentIndex + 1;
    if(this.currentIndex > this.galleryData.length -1 ){
      this.currentIndex = 0;
    }
    this.currentLightboxImage = this.galleryData[this.currentIndex];
  }

  prev() {
    this.currentIndex = this.currentIndex - 1;
    if(this.currentIndex < 0 ){
      this.currentIndex = this.galleryData.length -1;
    }
    this.currentLightboxImage = this.galleryData[this.currentIndex];
  }

}
