import { Component, OnInit } from '@angular/core';
import { AlertService } from 'src/app/services/alert.service';
import { NativeStorage } from '@ionic-native/native-storage/ngx';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Platform, NavController ,LoadingController} from '@ionic/angular';
import { ChangeDetectorRef } from '@angular/core';
import { ActivatedRoute } from '@angular/router';



@Component({
  selector: 'app-search',
  templateUrl: './search.page.html',
  styleUrls: ['./search.page.scss'],
})
export class SearchPage implements OnInit {
  searchTitle:string;
  mylisteAmie=[];
  myliste=[];
  myId = null;

  constructor(private activatedRoute: ActivatedRoute,private http: HttpClient,
    public loadingCtrl: LoadingController,private plt: Platform,private storage: NativeStorage,private alertService: AlertService,
     private cd: ChangeDetectorRef) {
      
      }

  ngOnInit() {
    this.myId = this.activatedRoute.snapshot.paramMap.get('id');
    console.log("Id ",this.myId)
  }

  async loading() {
    
    let loading = await this.loadingCtrl.create({
      message:'Loading ... ',
      
      duration: 1000
  });
  loading.present();
  this.mylisteAmie
   
  setTimeout(()=>{
    loading.dismiss();
  },1000)
  
  this.mylisteAmie
  }
  
  async loading1() {
    
    let loading = await this.loadingCtrl.create({
      message:'Loading ... ',
      
      duration: 2000
  });
  loading.present();
  this.mylisteAmie
   
  setTimeout(()=>{
    loading.dismiss();
  },2000)
  
  }
  
  searchMovie() {
    let  base_path = 'https://api.axelib.io/0.1/query/liste_user/0';
    
    //tramission des données
    let a=`${this.searchTitle}`
    let b='"'+a+'"'
    console.log( "reponse",b);

    let body =  "1="+b;
    

    const headers = new HttpHeaders()
    .set("Content-Type", "x-www-form-urlencoded")
    .set("ProjectID", "6lQwueo") 

    return this.http.post(base_path, body, { headers }
        ).subscribe(data=>{
          this.myliste=data["data"]
          console.log( "reponse",this.myliste);

          this.loading();
        })
  }

  Addproject(list) {
    let  base_path = 'https://api.axelib.io/0.1/post/invitation';
    
    //tramission des données
    let id_user
    this.loading1()
    this.storage.getItem('myitem')
    .then(
      data => {
        id_user=data["id"]
        console.log("user",id_user)
        let id_liste=this.myId
        console.log("liste",id_liste)
        let id_invitation=list.id
        console.log("invitation",id_invitation)
    
    
        let body = "id_user="+id_user+"&id_liste="+id_liste+"&id_invitation="+id_invitation+"&statut=True";;
        
        const headers = new HttpHeaders()
        .set("Content-Type", "x-www-form-urlencoded")
        .set("ProjectID", "6lQwueo") 
    
        return this.http.post(base_path, body, { headers }
            ).subscribe(data=>{
             
              console.log( "reponse",data);      
              this.alertService.presentToast(" Ajouté avec succes "); 

            })
      },
      error => console.error(error)
    );
    
   
  }
  
}
