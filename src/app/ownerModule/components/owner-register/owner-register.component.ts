import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormControl, FormGroup, Validators, FormBuilder } from '@angular/forms';
import { requireCheckboxesToBeCheckedValidator } from "./require-checkboxes-to-be-checked.validator1";


import { registermodel } from 'src/app/ownerModule/models/owner-register.model';
import { ownerServices } from '../../services/ownerServices';
import { LocalStorageService } from '../../services/localstorage.service';

@Component({
  selector: 'app-owner-register',
  templateUrl: './owner-register.component.html',
  styleUrls: ['./owner-register.component.css']
})
export class OwnerRegisterComponent implements OnInit {

  RegisterForm : FormGroup;
  RegisterDetails: any;
  registermodel: registermodel[] = []
  msg: any;
  data: any;

  constructor(private router: Router,
    private _fb: FormBuilder,
    private RegSer: ownerServices,

    private localstorageservice: LocalStorageService) { }

  ngOnInit(): void {
    this.RegisterDetails = JSON.parse(window.localStorage.getItem('RegisterDetails'));
    this.RegisterForm = this._fb.group({
      firstName: new FormControl(this.RegisterDetails ? this.RegisterDetails.firstName : '', Validators.required),
      lastName: new FormControl(this.RegisterDetails ? this.RegisterDetails.lastName : '', Validators.required),
      userId: new FormControl(this.RegisterDetails ? this.RegisterDetails.userId : '', Validators.required),
      email: new FormControl(this.RegisterDetails ? this.RegisterDetails.email : '', Validators.required),
      isOwner: new FormControl(this.RegisterDetails ? this.RegisterDetails.isOwner : '', ),
      address: new FormControl(this.RegisterDetails ? this.RegisterDetails.address : '', Validators.required),
      address1: new FormControl(this.RegisterDetails ? this.RegisterDetails.address1 : '', Validators.required),
      city: new FormControl(this.RegisterDetails ? this.RegisterDetails.city : '', Validators.required),
      zipCode: new FormControl(this.RegisterDetails ? this.RegisterDetails.zipCode : '', Validators.required),
      mobileNumber: new FormControl(this.RegisterDetails ? this.RegisterDetails.mobileNumber : '', [Validators.minLength(10),Validators.required,Validators.pattern("[0-9]{10}$")]),
      myCheckboxGroup: new FormGroup(
      {},requireCheckboxesToBeCheckedValidator()
    ),
      mySingleCheckbox: new FormControl(false, [Validators.requiredTrue])
      
   }
    
    
    )};  
  
   

  register(){
    this.RegisterDetails = {
      firstName: this.RegisterForm.get('firstName').value,
      lastName: this.RegisterForm.get('lastName').value,
      userId: this.RegisterForm.get('userId').value,
      isOwner: this.RegisterForm.get('isOwner').value,
      address:this.RegisterForm.get('address').value,
      address1: this.RegisterForm.get('address1').value,
      zipCode: this.RegisterForm.get('zipCode').value,
      city:this.RegisterForm.get('city').value,
      mobileNumber: this.RegisterForm.get('mobileNumber').value,
      email: this.RegisterForm.get('email').value,

    }
    console.log(this.RegisterDetails)
    this.RegSer.registerUser(this.RegisterDetails).subscribe(
      (data:any) => {
        console.log(data.data);
        this.data= data.data.msg 
       console.log(data.data);
     
        
      }
    )
  }
  Regiesterok(){
    if(this.data == "registration Success")
       {
         
         this.router.navigateByUrl("/owner-login")
       }
  }
  onclick(){
    this.router.navigateByUrl("/owner-login")
  }
  
}