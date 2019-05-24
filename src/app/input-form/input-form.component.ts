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
  userForm: FormGroup;

  dummyTest:any;

  constructor(private formBuilder: FormBuilder, private http: HttpClient) { }

  ngOnInit(){
    this.userForm = this.formBuilder.group({
    city: ['', Validators.required],
    expert: ['', Validators.required],
    });
    this.http.post('http://localhost:3000/api/', {}).subscribe((res: any)=>{
      console.log(res.data.doctors, "response");
      this.dummyTest = res.data.doctors;
    });
  }

  onSubmit(){
    let data: any = Object.assign( this.userForm.value);
    this.http.post('http://localhost:3000/api/', data).subscribe((res: any)=>{
      console.log(res.data.doctors, "response");
      this.dummyTest = res.data.doctors;
    });
  }
}
