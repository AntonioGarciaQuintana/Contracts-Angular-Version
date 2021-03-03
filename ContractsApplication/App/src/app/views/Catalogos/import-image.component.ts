import { Component, Input, OnInit } from "@angular/core";
import { ImageDto } from "../../model/Image";
import { commonService } from "../../Services/common-service.service";
import { NotificationService } from "../../Services/notification.service";


declare var $: any;

@Component({
    selector: "import-image",
    templateUrl: "./import-image.component.html"
})
export class ImportImageComponent implements OnInit {

    dropifyElement: any;
    imageSelected: ImageDto;
    imageList: ImageDto[] = [];
    imageName = '';
    idImage = 0;



    @Input() idContract = 0;
    constructor(
        private _commonService: commonService,
        private _notification: NotificationService) { }

    ngOnInit(): void {
        this.clearDropofy();
        this.getImages();

        this.initDropify();

        this.dropifyElement.on('dropify.afterClear', () => {
            this.imageSelected = undefined;
        });
    }

    clearDropofy = () => {
        $('.dropify-clear').trigger('click');
    }

    initDropify = () => {
        this.dropifyElement = $('.dropify').dropify({
            messages: {
                'default': 'Imagen',
                'replace': 'Imagen',
                'remove': 'Eliminar',
                'error': 'Ooops, algo paso mal'
            },
            error: {
                'fileSize': 'El tamaño maximo de la imagen permitido es de ({{ value }}).',
                'imageFormat': 'El tipo de archivo es incorrecto solo se permiten imagenes de tipo {{ value }}.'
            }
        });
    }

    handleFileInput = (files: FileList) => {
        if (files) {
            for (let i = 0; i < files.length; i++) {
                const file: File = files[0];
                const myReader = new FileReader();
                myReader.onloadend = (e) => {
                    const binaryString = myReader.result as string;
                    this.imageSelected = new ImageDto();
                    this.imageSelected.Base = 'data:' + file.type + ';base64,' + btoa(binaryString);
                    this.imageSelected.Name = file.name;
                    this.imageSelected.IdContract = this.idContract;
                };
                myReader.readAsBinaryString(file);
            }
        }
    }

    importImage = () => {
        this._commonService.onSaveImageContract(this.imageSelected).toPromise()
            .then(result => {
                this._notification.success('La imagen se ha añadido con éxito al contrato');
                this.clearDropofy();
                this.getImages();
            }).catch(error => {
                this._notification.error('Ha ocurrido un error al añadir la imagen al contrato');
            });
    }

    getImages = () => {
        this._commonService.getAllImagesContracts(this.idContract).toPromise()
            .then(result => {
                this.imageList = result;
            }).catch(error => {
                this._notification.error('Ha ocurrido un error al consultar las imagenes');
            });
    }

    onDeleteImage = () => {
        this._commonService.onDeleteImageContract(this.idImage).toPromise()
            .then(result => {
                this.getImages();
                this._notification.success('La imagen se ha eliminado con éxito.');
            }).catch(error => {
                this._notification.error('Ha ocurrido un error al eliminar la imagen');
            });
    }

    onDownload(image: any) {
        const a = document.createElement('a');
        a.href = image.Base;
        a.download = image.Name;
        a.click();
    }

}
