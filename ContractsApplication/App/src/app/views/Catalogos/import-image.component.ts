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
                'default': 'Selecciona una imagen',
                'replace': 'Selecciona una imagen',
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
        const a = document.createElement("a"); //Create <a>
        a.href = image.Base; //Image Base64 Goes here
        a.download = image.Name; //File name Here
        a.click();
        // const byteCharacters = atob(image.Base);
        // const byteNumbers = new Array(byteCharacters.length);
        // for (let i = 0; i < byteCharacters.length; i++) {
        //     byteNumbers[i] = byteCharacters.charCodeAt(i);
        // }

        // const byteArray = new Uint8Array(byteNumbers);

        // const blob = new Blob([byteArray], { 'type': 'image/jpeg' });

        // if (navigator.msSaveBlob) {
        //     const filename = 'fichier';
        //     navigator.msSaveBlob(blob, filename);
        // } else {
        //     const link = document.createElement("a");

        //     link.href = URL.createObjectURL(blob);

        //     link.setAttribute('visibility', 'hidden');
        //     link.download = 'fichier';

        //     document.body.appendChild(link);
        //     link.click();
        //     document.body.removeChild(link);
        // }
    }

}
