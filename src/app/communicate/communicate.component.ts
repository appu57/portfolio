import { Component, OnInit } from '@angular/core';
import { FormGroup ,FormBuilder , Validators, FormControl} from '@angular/forms';

@Component({
  selector: 'app-communicate',
  templateUrl: './communicate.component.html',
  styleUrls: ['./communicate.component.scss']
})
export class CommunicateComponent implements OnInit {

  contactForm:FormGroup;
  constructor(private fb:FormBuilder) {

   }

  ngOnInit(): void {

    this.contactForm=this.fb.group({
        name:new FormControl(null,[Validators.required,Validators.minLength(2),Validators.maxLength(100)]),
        subject:new FormControl(null,[Validators.required,Validators.minLength(2),Validators.maxLength(100)]),
        content:new FormControl(null,[Validators.required,Validators.minLength(2),Validators.maxLength(400)])

    });
  }

  onSubmit(){
    console.log(this.contactForm.value);
  }

}
