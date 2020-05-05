import { Component, OnInit } from '@angular/core';
import { NativeStorage } from '@ionic-native/native-storage/ngx';
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { Users } from '../models/Users';
import { ServieApiService } from '../services/servie-api.service';
import { Utilisateur } from '../models/Utilisateur';
import { AlertService } from 'src/app/services/alert.service';
import { async } from '@angular/core/testing';
import { Platform, NavController } from '@ionic/angular';

@Component({
  selector: 'app-inscription',
  templateUrl: './inscription.page.html',
  styleUrls: ['./inscription.page.scss'],
})
export class InscriptionPage implements OnInit {


  constructor(private nativeStorage: NativeStorage,public formBuilder: FormBuilder,public apiService: ServieApiService,
    private alertService: AlertService,private navCtrl: NavController)  {}

  ngOnInit() {
  }
  
  get password() {
    return this.registrationForm.get("password");
  }
  get email() {
    return this.registrationForm.get('email');
  }
   
  public errorMessages = {
    password: [
      { type: 'required', message: 'password is required' },
      { type: 'maxlength', message: 'password cant be longer than 100 characters' }
    ],
    email: [
      { type: 'required', message: 'Email is required' },
      { type: 'pattern', message: 'Please enter a valid email address' }
    ],
    
  };
  registrationForm = this.formBuilder.group({
    password: ['', [Validators.required, Validators.maxLength(100)]],
    email: [
      '',
      [
        Validators.required,
        Validators.pattern('^[a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,4}$')
      ]
    ],
  
  });


  public submit() {
  
     let  email=this.registrationForm.value.email
     let password=this.registrationForm.value.password 

     this.apiService.register(email,password).subscribe(
      data => {
        this.alertService.presentToast("Welcome");
      },
      error => {
        let text:string =error.error.message;
        

        this.alertService.presentToast(text);

        console.log(error.error.message);
      },
      () => { 
        // aller vers la passage suivante  sans retour 
        this.navCtrl.navigateRoot("/intro") 
     
      }
    );

  }

}
