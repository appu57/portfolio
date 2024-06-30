import { Component, OnInit } from '@angular/core';
import { CommunicateComponent } from '../communicate/communicate.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {

  constructor(private matdialog:MatDialog) { }

  ngOnInit(): void {

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
}
