import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name: 'cycle'
})
export class CyclePipe implements PipeTransform{
    transform(date:string) : string {

        return this.getFormat(date);
    }

    getFormat = (dateFormat:string) => {
      //  const datetime = new Date(dateFormat);
        return Intl.DateTimeFormat("es-ES", ).format(new Date(dateFormat));
    }

}