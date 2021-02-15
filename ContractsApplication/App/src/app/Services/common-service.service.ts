import { Injectable } from "@angular/core";
import { environment } from "../../environments/environment";
import { HttpClient } from '@angular/common/http';

@Injectable()
export class commonService {

    urlContracts = environment.contracts;

    constructor(private http: HttpClient) { }

    getPages(page: number, size: number, sort: string, search?: string) {
        const Gurl = `${this.urlContracts + '/GetPage'}/?page=${page}&size=${size}&sort=${sort}&search=${search}`;
        return this.http.get<any[]>(Gurl);
      }

    getAllContracts = () =>{
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
    
}