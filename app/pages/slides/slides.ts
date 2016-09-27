import { Component, ViewChild  } from '@angular/core';
import { App, Page,  NavController, Slides  } from 'ionic-angular';


@Component({
  templateUrl: 'build/pages/slides/slides.html',
})
export class SlidesPage {
	@ViewChild('mySlider') slider: Slides;


	  mySlideOptions = {
	    initialSlide: 0,
	    loop: false,
	  };
	selectedSegment:any;
	slides:any;
	sliderComponent:any;

  constructor(private navCtrl: NavController) {

    this.selectedSegment = "first";
    this.slides = [
      {
        id: "first",
        title: "First Slide"
      },
      {
        id: "second",
        title: "Second Slide"
      },
      {
        id: "third",
        title: "Third Slide"
      }
    ];
  }

  onSegmentChanged(segmentButton) {
    console.log("this.selectedSegment", this.selectedSegment);

    const selectedIndex = this.slides.findIndex((slide) => {
      return slide.id === this.selectedSegment;
    });
    console.log(selectedIndex);
    this.slider.slideTo(selectedIndex);

  }

  onSlideChanged(slider) {


    let currentIndex = this.slider.getActiveIndex();
    console.log("Current index is", currentIndex);
    this.selectedSegment = currentIndex;


    console.log('Slide changed', slider);
    
    const currentSlide = this.slides[slider.activeIndex];
    this.selectedSegment = currentSlide.id;
    console.log("Current index s2", currentSlide.id);



  }  

	back(){
		this.navCtrl.pop();

	}

}
