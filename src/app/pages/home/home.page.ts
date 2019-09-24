import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  options = {
    direction: 'vertical',
    slidesPerView: 1,
    initialSlide: 0,
    speed: 300,
    spaceBetween: 0,
    height: window.screen.height-60
  };

  transformation: any;

/*   myOption = {
    onSlideChangeStart: (swiper) => {
      if (swiper.activeIndex > swiper.previousIndex) { //go forward
        this.transformation = swiper.translate;
        console.log(this.transformation);
      }
      else if (swiper.activeIndex < swiper.previousIndex) { //go backward
        console.log(swiper);
      }
    }
  } */

  constructor() { }

  ngOnInit() {
    console.log("home page initialized");
  }
}
