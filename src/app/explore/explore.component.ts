import { Component, EventEmitter, HostListener, OnInit, Output } from '@angular/core';
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

  constructor() { }

  ngOnInit(): void {
    window.scrollTo(0, 0);
    this.selectedElement = 'About Me';
  }


  @HostListener('window:scroll', [])
  onWindowScroll() {
    if (!this.buttonclicked) {
      const y_axis = window.scrollY;
      if (y_axis < 650) {
        this.selectedElement = 'About Me';
      }
      else if (y_axis >= 650 && y_axis < 1500) {
        this.selectedElement = 'Experience';
      }
      else if (y_axis >= 1500 && y_axis < 2250) {
        this.selectedElement = 'Education';
      }
      else if (y_axis >= 2280 && y_axis < 3000) {
        this.selectedElement = 'Certification';
      }
      else if (y_axis >= 3000 && y_axis < 3300) {
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

  changeIcon() {
    this.isOpen = !this.isOpen;

  }

  setResolution(value: string) {
    this.buttonclicked = true;
    this.selectedElement = value;
    switch (value) {
      case 'Experience':
        window.scrollTo(window.pageXOffset, 700);
        break;
      case 'Education':
        window.scrollTo(window.pageXOffset, 1500);
        break;
      case 'Certification':
        window.scrollTo(window.pageXOffset, 2280);
        break;
      case 'Skills':
        window.scrollTo(window.pageXOffset, 3300);
        break;
      case 'Projects':
        window.scrollTo(window.pageXOffset, 4300);
        break;
      default:
        window.scrollTo(0, 0);
        break;
    }
    if (window.innerWidth <= 900) {
      this.closeNav.emit();
    }


  }


}
