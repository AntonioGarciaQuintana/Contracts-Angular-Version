import { Injectable } from "@angular/core";
import { environment } from "../../environments/environment";
import { HttpClient } from '@angular/common/http';

@Injectable()
export class commonService {

    urlContracts = environment.contracts;
    urlPayment = environment.payment;

    constructor(private http: HttpClient) { }

    getPages(page: number, size: number, sort: string, search?: string) {
        const Gurl = `${this.urlContracts + '/GetPage'}/?page=${page}&size=${size}&sort=${sort}&search=${search}`;
        return this.http.get<any[]>(Gurl);
    }

    getAllContracts = () => {
        const Gurl = `${this.urlContracts + '/GetAllContracts'}`;
        return this.http.get<any[]>(Gurl);
    }

    onSaveContract(obj: any) {
        return this.http.post<any>(this.urlContracts + '/SaveContract', obj);
    }

    getContract(id: number) {
        return this.http.get<any>(this.urlContracts + '/GetContract' + '/' + id);
    }

    cancelContract(id: number) {
        return this.http.delete<void>(this.urlContracts + '/CancelContract' + '/' + id);
    }

    onSaveImageContract(obj: any) {
        return this.http.post<any>(this.urlContracts + '/SaveImageContract', obj);
    }

    getAllImagesContracts = (idContract: number) => {
        const Gurl = `${this.urlContracts + '/GetAllImageContracts'}/?idContract=${idContract}`;
        return this.http.get<any[]>(Gurl);
    }

    onDeleteImageContract = (idImage: number) => {
        const Gurl = `${this.urlContracts + '/DeleteImageContract'}/?idImage=${idImage}`;
        return this.http.delete<any>(Gurl);
    }

    onSavePayment(obj: any) {
        return this.http.post<any>(this.urlPayment + '/SavePayment', obj);
    }

    getAllPaymentContract = (idContract: number, type: number) => {
        const Gurl = `${this.urlPayment + '/GetAllPayment'}/?idContract=${idContract}&type=${type}`;
        return this.http.get<any[]>(Gurl);
    }

    getAmountResumeByContract = (idContract: number, type: number) => {
        const Gurl = `${this.urlPayment + '/GetAmountResumeByContract'}/?idContract=${idContract}&type=${type}`;
        return this.http.get<any>(Gurl);
    }

    OnDeletePayment = (idPayment: number) => {
        const Gurl = `${this.urlPayment + '/DeletePayment'}/?idPayment=${idPayment}`;
        return this.http.delete<any>(Gurl);
    }

    onGetResumeContract = (idContract: number) => {
        const Gurl = `${this.urlContracts + '/GetResumeContract'}/?idContract=${idContract}`;
        return this.http.get<any>(Gurl);
    }

    onGetDashboardInfo = () => {
        const Gurl = `${this.urlPayment + '/GetInforDashboard'}`;
        return this.http.get<any>(Gurl);
    }

}
