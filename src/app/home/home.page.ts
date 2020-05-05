import { Component } from '@angular/core';
import { NativeStorage } from '@ionic-native/native-storage/ngx';
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { Users } from '../models/Users';
import { ServieApiService } from '../services/servie-api.service';
import { Utilisateur } from '../models/Utilisateur';
import { async } from '@angular/core/testing';
import { AlertService } from 'src/app/services/alert.service';
import { Platform, NavController } from '@ionic/angular';
import { GooglePlus } from '@ionic-native/google-plus/ngx';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  user={}as  Utilisateur;
  constructor(private nativeStorage: NativeStorage,public formBuilder: FormBuilder,public apiService: ServieApiService,
    private alertService: AlertService,private navCtrl: NavController,private googlePlus: GooglePlus)  {}


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

     this.apiService.login(email,password).subscribe(
      data => {
        this.alertService.presentToast("Welcome");
      },
      error => {
        let text:string =error.error.message;
        

        this.alertService.presentToast(text);

        console.log(error);
      },
      () => { 
        // aller vers la passage suivante  sans retour 
        this.navCtrl.navigateRoot("/intro") 
     
      }
    );

  }

  loginwithgoogle(){
    this.googlePlus.login({})
    .then(res => console.log(res)
    )
    .catch(err => console.log(err));
  }

}
