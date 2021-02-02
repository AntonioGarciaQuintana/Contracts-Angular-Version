import { NgModule } from "@angular/core";
import { Routes, RouterModule } from '@angular/router';
import { ContractRegisterComponent } from "./contract-register.component";
import { ContractsComponent } from "./contracts.component";
const routes: Routes = [
  {
    path: '',
    data: {
      title: 'Catalogo'
    },
    children: [
      {
        path: '',
        redirectTo: 'contracts'
      },
      {
        path: 'contracts',
        component: ContractsComponent,
        data: {
          title: 'Contratos'
        }
      },
      {
        path: 'contractregister',
        component: ContractRegisterComponent,
        data: {
          title: 'Registro de Contratos'
        }
      }
    ]
  }
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CatalogoRoutingModule { }