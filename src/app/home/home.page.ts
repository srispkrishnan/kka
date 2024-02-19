import { AfterContentChecked, Component, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import {SwiperComponent} from 'swiper/angular';

import SwiperCore, {
  Pagination,
  EffectCube,
  EffectFlip,
  Keyboard,
  Autoplay
} from 'swiper';

SwiperCore.use([Pagination,EffectCube,EffectFlip,Keyboard,Autoplay])

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements AfterContentChecked {

  constructor(
    private route: Router
  ) {}

  @ViewChild('swiper') swiper!: SwiperComponent;

  ngAfterContentChecked(): void {
    if (this.swiper) {
      this.swiper.updateSwiper({})
      this.swiper.swiperRef.autoplay.start();
    }
  }

  goToPage(name:string){
    this.route.navigateByUrl('/'+name);
  }

}
