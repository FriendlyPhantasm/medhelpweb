import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';

/*@Injectable({
  providedIn: 'root'
})*/

export class Patients {
  constructor(
    public id: number,
    public patientFirstName: string,
    public patientLastName: string,
    public patientPolicyNumber: string,
    public patientTel: string,
    public doctorName: string,
    public doctorSpecialty: string,
    public date: string,
    public icdCode: string,
    public medicalOrganization: string,
    public status: string,
  ) {
  }
}
export class DirectionsService {

  constructor(private http: HttpClient) { }

  patient: Patients[] = [];

  getPatient() {

    const headersD = new HttpHeaders({ Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE2MDkxNDM2NzMsInJvbGUiOiJyZWdpc3RyYXIiLCJ1c2VybmFtZSI6InVzZXIyIn0.5-C8iaAXIbZeNCnIqMcAv7tT3C0tluECjEcCj7ebo1g'});

    this.http.get<any>('http://localhost:8080/directions', { headers: headersD }).subscribe(
      response => {
        this.patient = response;
      }
    );

    return this.patient;
  }
}
