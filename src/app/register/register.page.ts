import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { AuthenticateService } from '../services/authenticate.service';
import { NavController } from '@ionic/angular';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

  registerForm: FormGroup;
  validation_messages = {
    nombre: [
      {type:"required", message:"El nombre es requerido"},
      {type:"pattern",message:"ojo! solo debe contener letras"}
    ],

    apellido: [
      {type:"required", message:"El apellido es requerido"},
      {type:"pattern",message:"ojo! solo debe contener letras"}
    ],
    email: [
      {type:"required", message:"El email es requerido"},
      {type:"pattern",message:"ojo! este no es un email valido"}
    ],
    password: [
      {type:"required", message:"El password es requerido"},
      {type:"minlength", message:"Minimo 5 letras para el password"},
    ],
    
  }

  errorMessage: string = "";


  constructor(private formBuilder: FormBuilder,
    private authService: AuthenticateService,
    private navCtrl: NavController,
    private storage: Storage) {
    this.registerForm = this.formBuilder.group({
      nombre: new FormControl("", Validators.compose([
        Validators.required,
        Validators.pattern("^[a-zA-Z]+$")
      ])
      ),
      apellido: new FormControl("", Validators.compose([
        Validators.required,
        Validators.pattern("^[a-zA-Z]+$")
      ])
      ),
      email: new FormControl("", Validators.compose([
        Validators.required,
        Validators.pattern("^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$")
      ])
      ),
      password: new FormControl("", Validators.compose([
        Validators.required,
        Validators.minLength(5)
      ])
      ),

    });
   }

  ngOnInit() {
  }

  register(userData){
    this.authService.registerUser(userData).then( ()=> {
      this.navCtrl.navigateBack("/login");
    });
  }

  goToLogin(){
    this.navCtrl.navigateBack("/login");
  }

}
