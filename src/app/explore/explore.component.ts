import { Component, ElementRef, EventEmitter, HostListener, OnInit, Output, ViewChild } from '@angular/core';
import arrayOfObjects from '../../assets/shared/content';


@Component({
  selector: 'app-explore',
  templateUrl: './explore.component.html',
  styleUrls: ['./explore.component.scss']
})
export class ExploreComponent implements OnInit {

  cardObjects = arrayOfObjects;

  isOpen: boolean = false;
  @Output() closeNav = new EventEmitter();
  selectedElement: string;
  buttonclicked: boolean = false;
  mobileView:boolean=false;
  @ViewChild('Experience') experienceRef: ElementRef;
  @ViewChild('Education') educationRef: ElementRef;
  @ViewChild('Certification') certificationRef: ElementRef;
  @ViewChild('Skills') skillsRef: ElementRef;
  @ViewChild('Projects') projectsRef: ElementRef;

  constructor() { }

  ngOnInit(): void {
    window.scrollTo(0, 0);
    this.selectedElement = 'About Me';
  }


  @HostListener('window:scroll', [])
  onWindowScroll() {
    const y_axis = window.scrollY;
    if (this.buttonclicked == false) {
      if (y_axis < 900) {
        this.selectedElement = 'About Me';
      }
      else if (y_axis >= 900 && y_axis < 1800) {
        this.selectedElement = 'Experience';
      }
      else if (y_axis >= 1800 && y_axis < 2900) {
        this.selectedElement = 'Education';
      }
      else if (y_axis >= 2900 && y_axis < 4200) {
        this.selectedElement = 'Certification';
      }
      else if (y_axis >= 4200 && y_axis < 5000) {
        this.selectedElement = 'Skills';
      }
      else if (y_axis >= window.screenY) {
        this.selectedElement = 'Projects';
      }

    }

  }

  @HostListener('window:mousemove', ['$event'])
  onMouseMove(event: MouseEvent) {
    this.buttonclicked = false;
  }

  @HostListener('window:touchmove', ['$event'])
  onTouch(event: TouchEvent) {
    this.buttonclicked = false;
  }

  @HostListener('window:resize',['$event'])
  onResize(event)
  {
    if(window.innerWidth < 840)
    {
      this.mobileView=true;
    }
    else{
      this.mobileView=false;
    }
  } 

  changeIcon() {
    this.isOpen = !this.isOpen;

  }

  setResolution(value: string) {
    this.buttonclicked = true;
    this.selectedElement = value;
    
    let scrollPosition = 0;
    console.log(this.experienceRef);
    switch (value) {
      case 'Experience':
        scrollPosition =document.getElementById(value).offsetTop;
        break;
      case 'Education':
        scrollPosition = document.getElementById(value).offsetTop;
        break;
      case 'Certification':
        scrollPosition = document.getElementById(value).offsetTop;
        break;
      case 'Skills':
        scrollPosition =document.getElementById(value).offsetTop;
        break;
      case 'Projects':
        scrollPosition =document.getElementById(value).offsetTop;
        break;
      default:
        scrollPosition = 0;
        break;
    }

    window.scrollTo({
      top: scrollPosition,
      behavior: 'smooth'
    });

    if (window.innerWidth <= 900) {
      this.closeNav.emit();
    }
  }


  closeMatDialog(){
    this.closeNav.emit();
  }

}
