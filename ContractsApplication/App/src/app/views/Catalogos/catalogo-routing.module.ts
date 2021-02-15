import { NgModule } from "@angular/core";
import { Routes, RouterModule } from '@angular/router';
import { ContractManageComponent } from "./contract-manage.component";
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
        component: ContractManageComponent,
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