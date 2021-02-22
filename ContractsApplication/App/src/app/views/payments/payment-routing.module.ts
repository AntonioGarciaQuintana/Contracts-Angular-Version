import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { PaymentContractRegisterComponent } from "./payment-contract-register.component";
import { PaymentContractComponent } from "./payment-contract.component";
import { PaymentWaterComponent } from "./payment-water.component";

const routes: Routes = [
    {
        path: '',
        data: {
            title: 'Pagos'
        },
        children: [
            {
                path: '',
                redirectTo:'payment-contract'
            },
            {
                path: 'payment-contract',
                component: PaymentContractComponent,
                data: {
                    title:'Pago de contrato'
                }
            },
            {
                path: 'payment-contract-register',
                component: PaymentContractRegisterComponent,
                data: {
                    title: 'Registro pago de contracto'
                }
            },
            {
                path: 'payment-water',
                component: PaymentWaterComponent,
                data: {
                    title: 'Pago de agua'
                }
            }
        ]
    }
]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class PaymentRoutingModule { }