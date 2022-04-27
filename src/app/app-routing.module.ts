import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CadastroComponent } from './views/cadastro/cadastro.component';
import { FrutafrutoComponent } from './views/frutafruto/frutafruto.component';
import { LoginComponent } from './views/login/login.component';
import { MainComponent } from './views/main/main.component';

const routes: Routes = [
  {path: "", component: LoginComponent },
  {path: "cadastro", component: CadastroComponent},
  {path: "main", component: MainComponent},
  {path: "frutafruto", component: FrutafrutoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
