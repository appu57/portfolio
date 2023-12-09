import { Component, HostListener, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CommunicateComponent } from '../communicate/communicate.component';
import { BreakpointObserver } from '@angular/cdk/layout';
import { MatDrawerMode } from '@angular/material/sidenav';


@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss'],

})
export class HomeComponent implements OnInit {
    themeIcon = '';
    mobileView = false;
    openValue: boolean = true;
    modeValue: MatDrawerMode = 'side';
    constructor(private matdialog: MatDialog, private observer: BreakpointObserver) { }


    @HostListener('window:resize', ['$event'])
    onResize(event: Event): void {
        this.updateSideNav();
    }

    ngOnInit() {
        this.observer.observe(['(max-width:800px)']).subscribe((response) => {
            if (response.matches) {
                this.mobileView = true;
            }
            else {
                this.mobileView = false;
            }
        });
        console.log(this.mobileView);
    }

    openContactPage() {
        const dialogRef = this.matdialog.open(CommunicateComponent, {
            autoFocus: false,
            backdropClass: "blur-background",
            data: {
                buttonText: {
                    cancel: 'Cancel'
                }
            },

        });
    }

    updateSideNav() {
        this.mobileView = window.innerWidth <= 900;
        if (this.mobileView) {
            this.openValue = false;
            this.modeValue = 'over';
        }
        else {
            this.openValue = true;
            this.modeValue = 'side';
        }
    }

    rotateIcon(){
        let icon=document.getElementById('icon');
        if(icon.innerHTML=="arrow_back")
        {
            icon.innerHTML="menu";
        }
        else{
            icon.innerHTML="arrow_back";
        }
    }

}
