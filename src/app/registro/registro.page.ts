import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from "@angular/fire/auth";
import { Router } from "@angular/router";

@Component({
  selector: 'app-registro',
  templateUrl: './registro.page.html',
  styleUrls: ['./registro.page.scss'],
})
export class RegistroPage implements OnInit {

  correo = '';
  contraseina= ''; 

  constructor(
    private afAuth: AngularFireAuth,
    private router: Router
  ) { }

  ngOnInit() {
  }

  async registro() {
    const { correo, contraseina } = this;
    console.log(correo, contraseina); 
    
    try{
      await this.afAuth.createUserWithEmailAndPassword(correo, contraseina);
      this.router.navigateByUrl('/home'); 
    } catch(e){
      console.log(e); 
    }
    
  }

}
