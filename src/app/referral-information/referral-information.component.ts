import { Component, OnInit } from '@angular/core';
import {LogoutComponent, Patients} from '../logout/logout.component';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-referral-information',
  templateUrl: './referral-information.component.html',
  styleUrls: ['./referral-information.component.css']
})

export class ReferralInformationComponent implements OnInit {

  constructor(private http: HttpClient, private route: ActivatedRoute) { }

  patient: Patients[] = [];
  referralInfo: Patients[] = [];

  getReferralByID(id: number) {

    const headersD = new HttpHeaders({ Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE2MDkyMzIxNDAsInJvbGUiOiJyZWdpc3RyYXIiLCJ1c2VybmFtZSI6InVzZXIyIn0.DY1UW5f-DeRo_mpK0ucnPWyvTw6A8ZKvK360EhT6XUU'});

    this.http.get<any>('http://localhost:8080/directions', { headers: headersD }).subscribe(
      response => {
        console.log(response);
        this.patient = response;
        this.referralInfo[0] = this.patient[id];
        console.log(this.referralInfo);
      }
    );
/*    console.log(id);
    console.log(this.patient);*/
/*    return this.patient[1];*/
  }


  ngOnInit(): void {

    this.getReferralByID(Number(this.route.snapshot.paramMap.get('id')));

/*    this.referralInfo[0] = this.getReferralByID(Number(this.route.snapshot.paramMap.get('id')));
    console.log(this.referralInfo[0]);
    console.log(this.getReferralByID(Number(this.route.snapshot.paramMap.get('id'))));*/
    /*this.getByID();*/

  }

}
