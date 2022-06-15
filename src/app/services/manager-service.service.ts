import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Reimbursement } from '../reimbursement.model';

@Injectable({
  providedIn: 'root'
})
export class ManagerServiceService {

  baseUrl: string = "http://localhost:7474/reimbursement";

  constructor(private http: HttpClient) { }

  getAllRequests(): Observable<Reimbursement[]>{
    return this.http.get<Reimbursement[]>(this.baseUrl);
  }

}
