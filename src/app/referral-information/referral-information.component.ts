import { Component, OnInit } from '@angular/core';
import { Referral, Status } from '../logout/logout.component';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';

export class Referrals {
  constructor(
    public direction: Referral,
    public status: Status,
  ) {
  }
}

export class AnalysisInfo {
  constructor(
    public id: string,
    public name: string,
    public isChecked: boolean,
    // tslint:disable-next-line:variable-name
    public file_id: string,
  ) {
  }
}

export class Analysis {
  constructor(
    public status: Status,
    public analysis: AnalysisInfo[],
  ) {
  }
}

@Component({
  selector: 'app-referral-information',
  templateUrl: './referral-information.component.html',
  styleUrls: ['./referral-information.component.css']
})

export class ReferralInformationComponent implements OnInit {

  constructor(private http: HttpClient, private route: ActivatedRoute) { }

  // @ts-ignore
  referral = new Referrals();
  // @ts-ignore
  referralInfo = new Referral();
  status: string | undefined;

  // @ts-ignore
  analysisJSON = new Analysis();
  analysisInfo: AnalysisInfo[] = [];


  statusMap = new Map([
        [ 0, 'Ожидаются результаты'],
        [ 1, 'Ожидает проверки'],
        [ 2, 'Одобрено'],
        [ 3, 'Отклонено']
    ]);




  getReferralByID(id: number) {

    const headersD = new HttpHeaders({ Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE2MTEyMzUyNTQsInJvbGUiOiJyZWdpc3RyYXIiLCJ1c2VybmFtZSI6InVzZXIyIn0.yLavd28aw5h9C8WJ4_6Y5WPJxLkt7P2nkQKVBOqFcJ0'});
    let urlDir: string;
    urlDir = 'http://localhost:8080/direction/' + String(id);

    this.http.get<any>(urlDir, { headers: headersD }).subscribe(
      response => {
        this.referral = response;
        this.referralInfo = this.referral.direction;
        this.status = this.statusMap.get(Number(this.referralInfo.status));
      }
    );
    let urlAn: string;
    urlAn = urlDir + '/analysis';
    this.http.get<any>(urlAn, { headers: headersD }).subscribe(
      response => {
        this.analysisJSON = response;
        this.analysisInfo = this.analysisJSON.analysis;
        console.log(this.analysisInfo);
      }
    );
  }

  changeStatus(st: string, direction: Referral) {
    const headersD = new HttpHeaders({ Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE2MTEyMzUyNTQsInJvbGUiOiJyZWdpc3RyYXIiLCJ1c2VybmFtZSI6InVzZXIyIn0.yLavd28aw5h9C8WJ4_6Y5WPJxLkt7P2nkQKVBOqFcJ0'});
    this.http.post<any>('http://localhost:8080/status', {
      directionId: Number(direction.id),
      status: Number(st)
    }, { headers: headersD }).subscribe(
      response => {
      console.log(response);
      }
    );
    /*this.getReferralByID(Number(direction.id));*/
    this.status = this.statusMap.get(Number(st));
  }

  ngOnInit(): void {

    this.getReferralByID(Number(this.route.snapshot.paramMap.get('id')));

/*    this.referralInfo[0] = this.getReferralByID(Number(this.route.snapshot.paramMap.get('id')));
    console.log(this.referralInfo[0]);
    console.log(this.getReferralByID(Number(this.route.snapshot.paramMap.get('id'))));*/
    /*this.getByID();*/

  }

}
