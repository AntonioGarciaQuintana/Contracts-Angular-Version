import { NgModule } from "@angular/core";
import { CyclePipe } from "../Pipe/Cycle.pipe";

@NgModule({
    imports:[],
    declarations: [
        CyclePipe
    ],
    exports: [
        CyclePipe
    ]
})
export class ApplicationPipeModule {}