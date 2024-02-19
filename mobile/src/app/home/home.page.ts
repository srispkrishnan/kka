import { AfterContentChecked, Component, ViewChild, ViewEncapsulation } from '@angular/core';
import {SwiperComponent} from 'swiper/angular';
import { Router } from '@angular/router';

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
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
  encapsulation: ViewEncapsulation.None
})
export class HomePage implements AfterContentChecked {

  constructor(private router: Router) { }

  @ViewChild('swiper') swiper!: SwiperComponent;

  ngAfterContentChecked(): void {
    if (this.swiper) {
      this.swiper.updateSwiper({})
      this.swiper.swiperRef.autoplay.start();
    }
  }

  goToPage(){
    this.router.navigateByUrl('/aboutus');
  }

}
