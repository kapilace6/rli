import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-wdc',
  templateUrl: './wdc.component.html',
  styleUrls: ['./wdc.component.css']
})
export class WdcComponent implements OnInit {

  usersfilepath: string = "server/b2.php";
  constructor(private http: HttpClient) { }

  ngOnInit() {
      let headers = new HttpHeaders();
      headers.append('Content-Type', 'application/json');

      this.http.post<any>(this.usersfilepath, JSON.stringify(
      {
        "mode": 1,
        "db" : "fdb",
        "table": "users"
      }), {
        headers: headers
      }).subscribe(
          data => {
            console.log(data);
      });  
  }

}
