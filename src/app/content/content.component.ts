import { Component, ElementRef, HostListener, OnInit, Output, ViewChild } from '@angular/core';
import arrayOfObjects from '../../assets/shared/content';


interface CategoryItem {
  name: string;
  percentage: number | null;
  universityName: string;
  specialization: string | null;
  description: string | null;
  year: string | null;
  images: string | null;
  tasks: { 
    skills: string; 
    description: { task1: string; }[] 
  };
}
interface Category {
  name: string;
  icon: string;
  category: CategoryItem[];
  description: string;
}

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss']
})

export class ContentComponent implements OnInit {

  cardObjects: Category[] = arrayOfObjects;
  private activeCardIndices: number[] = [];
  heading: string;
  length : number = this.cardObjects.length-1;

  private startX = 0;


  // @ViewChild('slidingCards',{static:false}) slidingCards!:ElementRef;// ! stands for definite assignment assertion which will tell typescript that value will be assigned later , withoutr ! it shows slidingCard not initialised typescript requires class Property to either be initialised in constructor or hava default value

  // @HostListener('mousemove',['$event'])// I want to do some changes when user moves on the card but i can not write in ngOnInit since its initialised only once so we use hostListener
  // onMouseMove(event:MouseEvent){
  //   const slidingCard=this.slidingCards.nativeElement
  //   if(slidingCard.contains(event.target as Node))//Node is an interface from which a number of DOM API object types inherit. It allows those types to be treated similarly; for example, inheriting the same set of methods, or being tested in the same way.
  //   {
  //     console.log("entered");
  //   }
  // }


  constructor() {
    this.cardObjects.forEach((obj) => {
      this.activeCardIndices.push(0);
    })
  }

  ngOnInit(): void {
    var slidingcard = document.querySelector('.sliding-cards');
    slidingcard?.addEventListener('mouseover', () => {
      console.log("mousing");
    });

  }


  slideLeft(categoryIndex: number) {
    if (this.activeCardIndices[categoryIndex] > 0) {
      this.activeCardIndices[categoryIndex]--;
      this.updateCardTransform(categoryIndex);
    }
  }

  slideRight(categoryIndex: number) {
    const category = this.cardObjects[categoryIndex];
    if (this.activeCardIndices[categoryIndex] < category.category.length - 1) {
      this.activeCardIndices[categoryIndex]++;//icreases the count of right we moved in that particular object using index [1,1,0,0,0]
      this.updateCardTransform(categoryIndex);
    }
  }

  // onMouseMove(event: MouseEvent, categoryIndex: number) {
  //   if (event.movementX > 0) {
  //     this.slideRight(categoryIndex);
  //   }
  //   else {
  //     this.slideLeft(categoryIndex);
  //   }
  // }

  onTouchStart(event: TouchEvent, categoryIndex: number) {
    this.startX = event.touches[0].clientX;
  }

  onTouchMove(event: TouchEvent, categoryIndex: number) {
    const touchstop = event.touches[0].clientX;
    const touchdiff = touchstop - this.startX;
    if (touchdiff > 50) {
      this.slideLeft(categoryIndex);
    }
    else if (touchdiff < -1 - 0) {
      this.slideRight(categoryIndex);
    }
  }

  onTouchEnd(event: TouchEvent, i: number) {
    this.startX = 0;
  }

  updateCardTransform(categoryIndex: number) {
    const transformValue = `translateX(-${this.activeCardIndices[categoryIndex] * 100}%)`;//if the current card is 2nd object of the education and we want to move to 3rd we send the i from html and we give style traslateX that moves 2nd index to left 100% and 3rd comes up (since overflow is hidden we will not be able to see other card)
    const cardContainers = document.querySelectorAll('.card-container');
    const cardContainer = cardContainers[categoryIndex] as HTMLElement;
    if (cardContainer) {
      cardContainer.style.transform = transformValue;
    }
  }



}
