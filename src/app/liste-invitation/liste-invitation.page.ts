import { Component, OnInit } from '@angular/core';
import { AlertService } from 'src/app/services/alert.service';
import { NativeStorage } from '@ionic-native/native-storage/ngx';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Platform, NavController ,LoadingController} from '@ionic/angular';
import { ChangeDetectorRef } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-liste-invitation',
  templateUrl: './liste-invitation.page.html',
  styleUrls: ['./liste-invitation.page.scss'],
})
export class ListeInvitationPage implements OnInit {
  mylisteAmie=[];
  myId = null;

  constructor(private activatedRoute: ActivatedRoute,private http: HttpClient,
    public loadingCtrl: LoadingController,private plt: Platform,private storage: NativeStorage,private alertService: AlertService,
     private cd: ChangeDetectorRef) { 
      this.loading()
     }

  ngOnInit() {
    this.myId = this.activatedRoute.snapshot.paramMap.get('id');
    console.log("Id ",this.myId)
    this.viewListe()
    this.loading()
  }
  async loading() {
    
    let loading = await this.loadingCtrl.create({
      message:'Loading ... ',
      duration: 300
  });
  loading.present();
 
  setTimeout(()=>{
    loading.dismiss();
  },300)
  
  this.viewListe();
  }

  viewListe(){
    let  base_path = 'https://api.axelib.io/0.1/query/list_invitation_user/0';
   
        let body =  "1="+this.myId ;

        const headers = new HttpHeaders()
        .set("Content-Type", "x-www-form-urlencoded")
        .set("ProjectID", "6lQwueo") 
 
     return this.http.post(base_path, body, { headers }
         ).subscribe(data=>{
           this.mylisteAmie=data["data"]
         })
  }
  deleteInvitation(list){
    let  base_path = 'https://api.axelib.io/0.1/delete/invitation/';
   
    //tramission des données
    let body =  "id="+list.id;
  
     const headers = new HttpHeaders()
     .set("Content-Type", "x-www-form-urlencoded")
     .set("ProjectID", "6lQwueo") 
  
     return this.http.post(base_path+list.id, body, { headers }
        ).subscribe(data=>{
          console.log( "delete",data);
          this.loading();
        })
  }

}
