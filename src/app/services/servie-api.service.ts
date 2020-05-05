import { Injectable } from '@angular/core';
import { NativeStorage } from '@ionic-native/native-storage/ngx';
import { Utilisateur } from '../models/Utilisateur';
import { listes } from '../models/listes';
import { liste_response } from '../models/liste_response';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { tap } from 'rxjs/operators';



@Injectable({
  providedIn: 'root'
})
export class ServieApiService {
  // API path
  base_path = 'https://api.axelib.io/0.1/';
  // verify login user
  isLoggedIn = false;
  //response login user
  token:any;
  idUser:Number 

  users={}as  Utilisateur;
  liste={}as  listes;
  liste_response={}as  liste_response;
  constructor(private http: HttpClient,private storage: NativeStorage) { }

  //login user  for api axlib  
public login(email, password) {

  //tramission des données
  const body= new HttpParams() 
  .set("email", email)
  .set("password", password)
  //headers 
  const headers = new HttpHeaders()
  .set("Content-Type", "x-www-form-urlencoded") // attention axelib attend les données de type de  x-www-form-urlencoded
  .set("ProjectID", "6lQwueo") 

return this.http.post(this.base_path + 'login/user',body.toString(), {headers}
).pipe(
tap(token => {
  console.log(token["user"])
 
  let donne={
    id:token["user"]["id"],
    nikname:token["user"]["nickname"]
  }
  console.log(donne)
  this.storage.setItem('myitem', {id: token["user"]["id"], nikname: token["user"]["nickname"]})
      .then(
        () => console.log('save item!'),
        error => console.error('Error storing item', error)
      );
      // pour sauvegarde l'utilisateur 
      this.storage.setItem('idUs',donne["id"])

      this.storage.setItem('LoggedIn', true)
  .then(
    () => {
      console.log('Token Stored');
    },
    error => console.error('stockage d’erreur', error)
  );
    this.token = token;
    this.isLoggedIn = true;
    return token;
  }),
  );
}


// inscription avec axelib 
public register(email, password) {

  //tramission des données
  const body= new HttpParams() 
  .set("email", email)
  .set("password", password)
  //headers 
  const headers = new HttpHeaders()
  .set("Content-Type", "x-www-form-urlencoded") // attention axelib attend les données de type de  x-www-form-urlencoded
  .set("ProjectID", "6lQwueo") 

return this.http.post(this.base_path + '/register/user',body.toString(), {headers}
).pipe(
tap(token => {
  console.log(token["user_id"])
 
  let donne={
    id:token["user_id"]
  }
  console.log(donne)
  this.storage.setItem('myitem', {id: token["user_id"]})
      .then(
        () => console.log('save item!'),
        error => console.error('Error storing item', error)
      );
      // pour sauvegarde l'utilisateur 
      this.storage.setItem('idUs',donne["id"])

      this.storage.setItem('LoggedIn', true)
  .then(
    () => {
      console.log('Token Stored');
    },
    error => console.error('stockage d’erreur', error)
  );
    this.token = token;
    this.isLoggedIn = true;
    return token;
  }),
  );
}


  // generation des chiffre
  public getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
  }
  
// create liste 

   //create liste 
   public  createliste(name) {

    let list:any
      //tramission des données
      const body= new HttpParams() 
      .set("name", name)
      //tramission des données
      
    
      const headers = new HttpHeaders()
      .set("Content-Type", "x-www-form-urlencoded")
      .set("ProjectID", "6lQwueo") 
    
     
    
    return this.http.post(this.base_path + 'post/liste', body, { headers }
    ).pipe(
    tap(data => {
    
      console.log(data)
      
      this.storage.setItem('a', true)
    
      .then(
        () => {
          console.log('Token Stored');
        },
        error => console.error('stockage d’erreur', error)
      );
      list = data;
      return data;
    }),
    );
    }
    
    public  createlistead(idListe,idUt) {
    
      let list:any
       
        //tramission des données
        
      
        //code invitaion
        const nombre =this.getRandomInt(99999) 
      
       
      //  console.log("userActif",token)
        //headers 
      
        const headers = new HttpHeaders()
        .set("Content-Type", "x-www-form-urlencoded")
        .set("ProjectID", "6lQwueo") 
      
    let body2 =  "id_liste="+idListe+"&id_user="+idUt+"&codeinvitation="+nombre+"&state=inactif";
    
      return this.http.post(this.base_path + 'post/link_listeuser', body2, { headers }
      ).pipe(
      tap(data => {
        
        this.storage.setItem('', true)
      
        .then(
          () => {
            console.log('Token Stored');
          },
          error => console.error('stockage d’erreur', error)
        );
        list = data;
        return list;
      }),
      );
      }

}
