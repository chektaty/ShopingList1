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
  selector: 'app-intro',
  templateUrl: './intro.page.html',
  styleUrls: ['./intro.page.scss'],
})
export class IntroPage implements OnInit {
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
   ;
  }

  doRefresh(event){
     
     setTimeout(() => {
      event.target.complete();
      this.viewListe()
    }, 1000);

  }

  addList(){
    this.navCtrl.navigateForward("/add-liste") 

  }

  async loading() {
    this.viewListe();
    let loading = await this.loadingCtrl.create({
      message:'Loading ... ',
      
      duration: 1000
  });
  loading.present();
  this.viewListe();
   
  setTimeout(()=>{
    loading.dismiss();
  },1000)
  
  this.viewListe();
  }
 

  async presentPrompt() {
    let b:any
    let id 
    // id user dss
    this.storage.getItem('myitem')
    .then(
      data => {
        id=data["id"]
      },
      error => console.error(error)
    );

    let alert = await this.alertCtrl.create({
     // title: 'Confirm purchase',
     header: 'Créer une nouvelle liste',
      inputs: [
        {
          name: 'name',
          type: 'text',
          placeholder: 'Nouvelle liste '
           
        },
      
      ],
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          handler: data => {
            console.log('Cancel clicked');
            this.viewListe();
          }
        },
        {
          text: 'Valider',
         
          handler: data => {
          // validation 
            this.apiService.createliste(data.name).subscribe(
            da => {
              let id1=da["id"]
               this.apiService.createlistead(id1,id).subscribe(da => { 
                 console.log("chekina",da)
                 this.viewListe();
               },
              error => {
               
               // this.alertService.presentToast(error);
               console.log("error",error)
              
              },
              () => {
                 
              //  this.alertService.presentToast("liste ajouter");             
              }
            );
              
            },
            error => {
             
              this.alertService.presentToast(error);
      
              
            },
            () => {
               
              this.alertService.presentToast(" Ajouté avec succes "); 
              this.viewListe();            
            }
          );
         
         
                  
          this.loading();
          }
          
        }
      ]
    });
   
    (await alert).present();
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
        return   this.http.post(base_path + 'query/liste_projet/0', body, { headers }
        ).subscribe(data=>{
          this.liste=data["data"];
          this.listeAll=data["data"];
          console.log( this.listeAll);
        })
        


      } ,
      error => console.error("erro my Item",error)
    );
   
      
    
          
  }



  viewListe1(){
    let idUser; 
   let body;
   let  base_path = 'https://api.axelib.io/0.1/list/liste/all';

  

    this.storage.getItem('myitem')
    .then(
      data =>{
        idUser =data.id,
        console.log("myitem",data)
        console.log(" id", idUser)
        //tramission des données  
       // body =  "1="+idUser;
          body="orderBy=id:desc"
        //headers 
        console.error("my body",body)
        const headers = new HttpHeaders()
        .set("Content-Type", "x-www-form-urlencoded")
        .set("ProjectID", "6lQwueo") 


        //tramission des données  
        body =  "1="+idUser;
        return   this.http.post(base_path , body, { headers }
        ).subscribe(data=>{
          this.liste=data["data"];
          this.listeAll=data["data"];
          console.log( data);
        })
        


      } ,
      error => console.error("erro my Item",error)
    );
   
      
    
          
  }

  goTo(route: string):void{
  
    this.navCtrl.navigateForward(`/${route}`);
  }
  showListe(id:number){
    this.navCtrl.navigateForward('/liste-detail/'+id);
  }
  
  // delete 
 // this.nativeStorage.remove('AccepterPart');

 // delete article liste 
 deletelisteId(id: any){
        let  base_path = 'https://api.axelib.io/0.1/delete/article/';
      
      //tramission des données
      let body =  "id="+id;

      const headers = new HttpHeaders()
      .set("Content-Type", "x-www-form-urlencoded")
      .set("ProjectID", "6lQwueo") 

      return this.http.post(base_path+id, body, { headers }
          ).subscribe(data=>{
            console.log( "delete",data);
            this.loading();
          })
      }

    // delete liste 
    deleteliste(id: any){
      let  base_path = 'https://api.axelib.io/0.1/delete/liste/';
    
    //tramission des données
    let body =  "id="+id;

    const headers = new HttpHeaders()
    .set("Content-Type", "x-www-form-urlencoded")
    .set("ProjectID", "6lQwueo") 

    return this.http.post(base_path+id, body, { headers }
        ).subscribe(data=>{
          console.log( "delete",data);
          this.loading();
        })
    }
    // delete listeUser 
    deletelink (id: any){
      let  base_path = 'https://api.axelib.io/0.1/delete/link_listeuser/';
    
    //tramission des données
    let body =  "id="+id;

    const headers = new HttpHeaders()
    .set("Content-Type", "x-www-form-urlencoded")
    .set("ProjectID", "6lQwueo") 

    return this.http.post(base_path+id, body, { headers }
        ).subscribe(data=>{
          console.log( "delete",data);
          this.loading();
        })
    }

    

  // listeidArticle
  listeidArticle(id,idlink){

    let  base_path = 'https://api.axelib.io/0.1/list/article/all';
   //"id" : "like:sun"
  //tramission des données
  let body =  "orderBy=id:desc"+"&id_liste=like:"+id;
  let mylisteproject:any
  let liste =[]

   const headers = new HttpHeaders()
   .set("Content-Type", "x-www-form-urlencoded")
   .set("ProjectID", "6lQwueo") 

    this.http.post(base_path, body, { headers }
      ).subscribe(data=>{
        mylisteproject=data["data"]
        let a=[]
        a=data["data"]
        if (a.length==0) {
          // delete liste 
           this.deleteInvitation(id)
           this.deleteliste(idlink)
          // delete link
          this.deletelink (id)
        }else{
          a.forEach(element => {
            // delete article 
            this.deletelisteId(element["id"])
            console.log(element["id"]);
          })
          // delete liste 
          this.deleteInvitation(id)
          this.deleteliste(id)
          // delete link
          this.deletelink (idlink)
          console.log(mylisteproject);
        }
       
        
      })
    
      this.loading()
      return mylisteproject
  }

  
  //
  async presentActionSheet(idliste,idlink) {
    
    let a=[];
    const actionSheet = await this.actionSheetController.create({
    
      buttons: [{
        text: 'Delete',
        role: 'destructive',
        icon: 'trash',
        handler: () => {
          console.log('Delete clicked',idliste);
          
          this.listeidArticle(idliste,idlink)
         
          console.log('Delete clicked', );
         
         
        //  console.log('Delete clicked',this.listeidArticle(idliste));
        }
      }, {
        text: 'Share',
        icon: 'share',
      
        handler: () => {
          console.log('Share clicked');
          this.addfreinds(idliste)
        }
      
    }, {
        text: 'Favorite',
        icon: 'heart',
        
        handler: () => {
          console.log('Favorite clicked');
          
        }
      }, {
        text: 'Cancel',
        role: 'cancel',
        icon: 'close',
        handler: () => {
          console.log('Cancel clicked');
        }
      }]
    });
    await actionSheet.present();
  }

  addfreinds(id:number){
    this.navCtrl.navigateForward('/search/'+id);
  }
  deleteInvitation(id){
    let  base_path = 'https://api.axelib.io/0.1/delete/invitation/';
   
    //tramission des données
    let body =  "id="+id;
  
     const headers = new HttpHeaders()
     .set("Content-Type", "x-www-form-urlencoded")
     .set("ProjectID", "6lQwueo") 
  
     return this.http.post(base_path+id, body, { headers }
        ).subscribe(data=>{
          console.log( "delete",data);
          this.loading();
        })
  }
}
