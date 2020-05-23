import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from "@angular/fire/auth";
import { Router } from "@angular/router";
import { auth } from 'firebase/app';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  correo = '';
  contraseina=''; 

  constructor(
    private afAuth: AngularFireAuth,
    private router: Router
  ) { }

  ngOnInit() {
  }

  async login(){
    const { correo, contraseina } = this;
    try {
      await this.afAuth.createUserWithEmailAndPassword(correo, contraseina);
      this.router.navigateByUrl('/home');
      
    } catch (e) {
      console.log(e);
    }
  }

  async loginWithGoogle() {
    try {
      const provider = new auth.GoogleAuthProvider();
      await this.afAuth.signInWithPopup(provider);
      this.router.navigateByUrl('/home');
    } catch (e) {
      console.log(e);
    }
  }

}
