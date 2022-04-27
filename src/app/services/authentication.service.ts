import { Injectable } from '@angular/core';
import { Auth, createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from '@angular/fire/auth';
import { from, switchMap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor(private auth: Auth) { }

  login(email: string, password: string){
    return from(signInWithEmailAndPassword(this.auth, email, password))
   }
 
   logout(){
     return from(this.auth.signOut())
   }
   registro(nome: string, email: string, password: string) {
    return from(createUserWithEmailAndPassword(this.auth, email, password)).pipe(
      switchMap(({user}) => updateProfile(user, {displayName: nome}))
    )
    
    
  }


}
