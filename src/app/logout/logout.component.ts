import {Component, NgModule, OnInit} from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient, HttpHeaders  } from '@angular/common/http';
import {Router, RouterModule, Routes} from '@angular/router';
import { ReferralInformationComponent } from '../referral-information/referral-information.component';

const routes: Routes = [
  { path: 'referral-information',    component: ReferralInformationComponent }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ],
  declarations: []
})

export class AppRoutingModule { }

export class Status {
  constructor(
    public status: string,
    public message: string,
) {
  }
}

export class Referral {
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
    public patientBirthDate: string,
    public justification: string,
    public organizationContact: string,
  ) {
  }
}

export class Referrals {
  constructor(
    public status: Status,
    public directions: Referral[],
  ) {
  }
}


@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css'],
})

export class LogoutComponent implements OnInit {

  // @ts-ignore
  referralsJSON = new Referrals();
  referrals: Referral[] = [];

  constructor(private http: HttpClient, router: Router) { }

  // tslint:disable-next-line:typedef
  readReferral(id: number) {
    /*this.referralID = id;*/
  }

  // tslint:disable-next-line:typedef
  getPatient() {

/*    const body = {username: 'user2', password: '12345678'};
    this.http.post('http://localhost:8080/auth', body, {responseType: 'text'}).subscribe((data) => {const receivedToken = data});*/

    const headersD = new HttpHeaders({ Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE2MTEyMzUyNTQsInJvbGUiOiJyZWdpc3RyYXIiLCJ1c2VybmFtZSI6InVzZXIyIn0.yLavd28aw5h9C8WJ4_6Y5WPJxLkt7P2nkQKVBOqFcJ0'});

    this.http.get<any>('http://localhost:8080/directions', { headers: headersD }).subscribe(
      response => {
        this.referralsJSON = response;
        this.referrals = this.referralsJSON.directions;
      }
    );
  }

  ngOnInit(): void {

    this.getPatient();


/*   let headers: HttpHeaders = new HttpHeaders();
   headers = headers.append('Accept', 'text/plain');


   // tslint:disable-next-line:max-line-length
   const headersD = new HttpHeaders({ Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE2MDkxNDM2NzMsInJvbGUiOiJyZWdpc3RyYXIiLCJ1c2VybmFtZSI6InVzZXIyIn0.5-C8iaAXIbZeNCnIqMcAv7tT3C0tluECjEcCj7ebo1g'});

   const body = {username: 'user2', password: '12345678'};

   const bodyD = {};

   this.http.post('http://localhost:8080/auth', body, {headers, responseType: 'text'}).subscribe((data) => {const receivedToken = data });

   this.http.get<any>('http://localhost:8080/directions', { headers: headersD }).subscribe((data) => {const receivedToken = data });*/



  }
}
