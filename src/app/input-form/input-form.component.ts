import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { HttpClient } from "@angular/common/http";
import { Router } from "@angular/router";

@Component({
  selector: 'app-input-form',
  templateUrl: './input-form.component.html',
  styleUrls: ['./input-form.component.css']
})

export class InputFormComponent implements OnInit {

  registered = false;
  submitted = false;
  userForm: FormGroup;


  constructor(private formBuilder: FormBuilder, private http: HttpClient) { }

  ngOnInit(){

    this.userForm = this.formBuilder.group({
    firstName: ['', Validators.required],
    lastName: ['', Validators.required],
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.minLength(5), Validators.pattern('^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])[a-zA-Z0-9]+$')]],
    });
  }

  onSubmit(){

    this.submitted = true;
    let data: any = Object.assign( this.userForm.value);

    // this.http.get("https://www.w3schools.com/angular/customers.php").subscribe((res:any)=>{
    //   console.log(res);
    // });

    if(this.userForm.invalid === true) {
      return ;
    }
  	else{
      this.http.post('/api/', data).subscribe((res: any)=>{
          console.log(res, "response");
        });
        this.registered = true;
      }
  }
}
