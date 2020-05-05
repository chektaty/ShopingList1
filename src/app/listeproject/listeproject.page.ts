import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { Platform, NavController ,LoadingController} from '@ionic/angular';
import { ServieApiService } from '../services/servie-api.service';
import { AlertService } from 'src/app/services/alert.service';
import { NativeStorage } from '@ionic-native/native-storage/ngx';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { listes } from '../models/listes';
import { liste_response } from '../models/liste_response';
import { ActionSheetController } from '@ionic/angular';


@Component({
  selector: 'app-listeproject',
  templateUrl: './listeproject.page.html',
  styleUrls: ['./listeproject.page.scss'],
})
export class ListeprojectPage implements OnInit {
  liste={}as  listes;
  liste_response={}as  liste_response;
  listeAll=[];
  listeArticle=[]

  constructor(private navCtrl: NavController,private alertCtrl :AlertController,
    public apiService: ServieApiService,private alertService: AlertService,private storage: NativeStorage,
    public loadingCtrl: LoadingController,private http: HttpClient,public actionSheetController: ActionSheetController) { 
     
      this.viewListe();
    }

  ngOnInit() {
    this.viewListe()

  }
  viewListe(){
    let idUser; 
   let body;
   let  base_path = 'https://api.axelib.io/0.1/';

    this.storage.getItem('myitem')
    .then(
      data =>{
        idUser =data.id,
        console.log("myitem",data)
        console.log(" id", idUser)
        //tramission des données  
        body =  "1="+idUser;

        //headers 
        console.error("my body",body)
        const headers = new HttpHeaders()
        .set("Content-Type", "x-www-form-urlencoded")
        .set("ProjectID", "6lQwueo") 


        //tramission des données  
        body =  "1="+idUser;
        return   this.http.post(base_path + 'query/liste_invitation/0', body, { headers }
        ).subscribe(data=>{
          this.liste=data["data"];
          this.listeAll=data["data"];
          console.log( this.listeAll);
        })

      } ,
      error => console.error("erro my Item",error)
    );
    
          
  }


  doRefresh(event){
     
     setTimeout(() => {
      event.target.complete();
      this.viewListe()
    }, 500);

  }
  async loading() {
    this.viewListe();
    let loading = await this.loadingCtrl.create({
      message:'Loading ... ',
      
      duration: 500
  });
  loading.present();
  this.viewListe();
   
  setTimeout(()=>{
    loading.dismiss();
  },500)
  
  this.viewListe();
  }
  showListe(id:number){
    this.navCtrl.navigateForward('/liste-detail/'+id);
  }
}
