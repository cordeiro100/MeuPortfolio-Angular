import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { HotToastService } from '@ngneat/hot-toast';
import { User } from 'src/app/models/user';
import { AuthenticationService } from 'src/app/services/authentication.service';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css'],
})
export class CadastroComponent implements OnInit {
  registerForm: FormGroup;

  constructor(private authService:AuthenticationService, private formBuilder: FormBuilder, private toast: HotToastService, private router: Router) {}

  ngOnInit(): void {
    this.registerForm = this.formBuilder.group({
      nome: ['', [Validators.required]],
      sobrenome: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
    });

    this.registrar();
  }


  get nome(){
    return this.registerForm.get('nome')
  }
  get sobrenome(){
    return this.registerForm.get('sobrenome')
  }
  
  get email(){
    return this.registerForm.get('email')
  }
  get password(){
    return this.registerForm.get('password')
  }


  userModel = new User('', '', '', '');

  registrar() {
    console.log(this.userModel)
    if(!this.registerForm.valid) return
    const {nome, sobrenome, email, password} =this.registerForm.value
    this.authService.registro(nome, email, password).pipe(
      this.toast.observe({
        success: 'Cadastro criado com sucesso!',
        loading: 'Carregando cadastro...',
        error: (message) => `${message}`
      })
    ).subscribe(()=>{
      this.router.navigateByUrl('/')
    })
  }
}
