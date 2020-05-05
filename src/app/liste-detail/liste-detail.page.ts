import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Platform, NavController ,LoadingController} from '@ionic/angular';
import { ChangeDetectorRef } from '@angular/core';
import { NativeStorage } from '@ionic-native/native-storage/ngx';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-liste-detail',
  templateUrl: './liste-detail.page.html',
  styleUrls: ['./liste-detail.page.scss'],
})
export class ListeDetailPage implements OnInit {
  myId = null;
  mytitle=null;
  mycount=null;
  mylisteproject=[];
  matches: String[];
  name:string;
  addTask:boolean;

  constructor(private activatedRoute: ActivatedRoute,private http: HttpClient,
    public loadingCtrl: LoadingController,private plt: Platform,private storage: NativeStorage,
     private cd: ChangeDetectorRef,private navCtrl: NavController) {
       this.loading1();
    this.listArticle();
   }

   ngOnInit() {
    this.myId = this.activatedRoute.snapshot.paramMap.get('id');
    console.log("Id ",this.myId)
    this.showtitle(this.myId)
    this.listArticle();
    this.showUser();
  }

  showForm(){
    this.addTask=!this.addTask;
    this.name='';
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
  
  this.listArticle();
  }

  doRefresh(event){
     
    setTimeout(() => {
     event.target.complete();
     this.listArticle()
   }, 1000);

 }
  async loading1() {
    
    let loading = await this.loadingCtrl.create({
      message:'Loading ... ',
      duration: 500
  });
  loading.present();
 
  setTimeout(()=>{
    loading.dismiss();
  },500)
  
  this.listArticle();
  }
  showtitle(id:number){
    let  base_path = 'https://api.axelib.io/0.1/get/liste/';
   
    //tramission des données  
  const body= new HttpParams() 
  .set("orderBy", "id:desc")
   //headers 

   const headers = new HttpHeaders()
   .set("Content-Type", "x-www-form-urlencoded")
   .set("ProjectID", "6lQwueo") 

   return this.http.post(base_path + id, body, { headers }
      ).subscribe(data=>{
        this.mytitle=data["data"]["name"];
       
        console.log( this.mytitle);
      })
  }

  createArcticle(){
    let  base_path = 'https://api.axelib.io/0.1/post/article';
   
  //tramission des données
  let body =  "id_liste="+this.myId+"&nom="+this.name;

   const headers = new HttpHeaders()
   .set("Content-Type", "x-www-form-urlencoded")
   .set("ProjectID", "6lQwueo") 

   return this.http.post(base_path, body, { headers }
      ).subscribe(data=>{
        console.log( "create ",data);
        this.showForm();
        this.loading();
      })
  }

  changeCheckState(list: any) {
    console.log('checked: ' + list.checked);
    let  base_path = 'https://api.axelib.io/0.1/update/article/';
   
    //tramission des données
    let body ="checked="+list.checked;
  
     const headers = new HttpHeaders()
     .set("Content-Type", "x-www-form-urlencoded")
     .set("ProjectID", "6lQwueo") 
  
     return this.http.post(base_path+list.id, body, { headers }
        ).subscribe(data=>{
          console.log( "checkListe",data);
  
        })
  }


  deleteliste(list: any){
    let  base_path = 'https://api.axelib.io/0.1/delete/article/';
   
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

  listArticle(){

    let  base_path = 'https://api.axelib.io/0.1/list/article/all';
   //"id" : "like:sun"
  //tramission des données
  let body =  "orderBy=id:desc"+"&id_liste=like:"+this.myId;


   const headers = new HttpHeaders()
   .set("Content-Type", "x-www-form-urlencoded")
   .set("ProjectID", "6lQwueo") 

   return this.http.post(base_path, body, { headers }
      ).subscribe(data=>{
        this.mylisteproject=data["data"]
        console.log( "liste",this.mylisteproject);
      })
  }
  showUser() {
    let  base_path = 'https://api.axelib.io/0.1/query/listusercount/0';
    
    //tramission des données
   
      
        let body = "1="+this.myId;
        
        const headers = new HttpHeaders()
        .set("Content-Type", "x-www-form-urlencoded")
        .set("ProjectID", "6lQwueo") 
    
        return this.http.post(base_path, body, { headers }
            ).subscribe(data=>{
              this.mycount=data["data"][0]["COUNT(*)"]
              console.log( "reponse",this.mycount);

            })
     
   
  }
  showListe(){
    this.navCtrl.navigateForward('/liste-invitation/'+this.myId);
  }

}
