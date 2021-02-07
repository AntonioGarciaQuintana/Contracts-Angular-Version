import { NgModule } from "@angular/core";
import { CyclePipe } from "../Pipe/Cycle.pipe";
import { OnlyNumbersDirective } from "../Pipe/onlyNumber.directive";

@NgModule({
    imports:[],
    declarations: [
        CyclePipe,
        OnlyNumbersDirective
    ],
    exports: [
        CyclePipe,
        OnlyNumbersDirective
    ]
})
export class ApplicationPipeModule {}