import { Directive, ElementRef, HostListener, Input, OnInit } from "@angular/core";

@Directive({
    selector: '[appOnlyNumbers]'
})
export class OnlyNumbersDirective implements OnInit {

    private regex: RegExp = new RegExp(/[0-9]/g);
    // Allow key codes for special events. Reflect :
    private specialKeys: Array<number> = [46, 9, 27, 13, 190, 35, 36, 37, 39];
    // Backspace, tab, end, home

    @Input() maxlength = 14;
    @Input() min = 1;
    @Input() max = 100000000;
    @Input() aceptDecimal = false;

    constructor(private el: ElementRef) {

    }

    ngOnInit(): void {
        if (this.aceptDecimal) {
            this.specialKeys.push(110);
        }
    }
    @HostListener('keydown', ['$event'])
    onKeyDown(event: KeyboardEvent) {
        const e = <KeyboardEvent>event;

        if ((
            (this.specialKeys.indexOf(event.which) > -1) ||

            (e.which === 65 && e.ctrlKey === true) ||

            (e.which === 67 && e.ctrlKey === true) ||

            (e.which === 88 && e.ctrlKey === true))) {
        } else if (
            (e.which >= 48 && e.which <= 57) ||
            (event.which >= 96 && event.which <= 105) ||
            event.which === 8) {

        } else {
            event.preventDefault();
        }

        const current: string = this.el.nativeElement.value;

        if (this.aceptDecimal && current.indexOf('.') !== -1 && event.which === 190) {
            event.preventDefault();
        }

        if (!this.aceptDecimal && event.which === 190) {
            event.preventDefault();
        }

        if (event.which !== 8 && event.which !== 37 && event.which !== 39) {
            const next: string = current.concat(event.key);
            if ((next && !String(next).match(this.regex)) ||
                (this.maxlength && next.length > this.maxlength) ||
                (this.min && +next < this.min) ||
                (this.max && +next >= this.max)) {
                event.preventDefault();
            }
        }
    }
}
