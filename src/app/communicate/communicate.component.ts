import { Component, OnInit } from '@angular/core';
import { FormGroup ,FormBuilder , Validators, FormControl} from '@angular/forms';
import { projectList } from 'src/assets/shared/projectList';

interface project{
  title:string,
  techStack:string,
  image:string,
  description:string,
  link:string
}
@Component({
  selector: 'app-communicate',
  templateUrl: './communicate.component.html',
  styleUrls: ['./communicate.component.scss']
})

export class CommunicateComponent implements OnInit {

  contactForm:FormGroup;
  projectLists:project[]=projectList;
  constructor(private fb:FormBuilder) {

   }

  ngOnInit(): void {

  }



}
