import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

    //xmlhttp: XMLHttpRequest;
    //usersfilepath: string = "assets/users.json";

    usersfilepath: any = "server/be.php"; //?db=fdb&table=users";
    userString: string;

    
     users: any;
     userdefined: boolean = false;

    //s[0] -> pos : 1
     pointsS: any;
     pointsSdefined: boolean = false;

     teams: any;
     teamsdefined: boolean = false;

    //n1[0] -> id : 1
     season1: any;
     season1defined: boolean = false;

     seasons: any;

     //DO NOT SORT
     flaps: any;
     flapdefined: boolean = false;

    constructor(private http: HttpClient) {
    }

    isdefined(v: string) {
        if (v == "users") return this.userdefined;
        if (v == "teams") return this.teamsdefined;
        if (v == "season1") return this.season1defined;

        return false;
    }

    getO(db: string, table: string, sort: string = ""): Observable<any> {
        //console.log(table + ' being requested');

        this.usersfilepath = "server/be.php";
        
        let headers = new HttpHeaders();
        headers.append('Content-Type', 'application/json');

        let susers = this.http.post<any>(this.usersfilepath, JSON.stringify(
        {
            "mode": 1,
            "db" : db,
            "table": table,
            "sort": sort
        }), 
        {
            headers: headers
        });

        return susers;    
    }

    //Get Table Functions
    getUsers(): any {
        //console.log('Returning User');
        //console.log(this.users);
        return this.users;
    }

    getPointsS(): any {
        //console.log('Returning Points System');
        //console.log(this.pointsS);
        return this.pointsS;
    }

    getTeams(): any {
        //console.log('Returning Teams');
        //console.log(this.teams);
        return this.teams;
    }

    getSeason(season: number): any {
        //console.log('Returning Season 1');
        //console.log(this.seasons[season]);
        return this.seasons[season];
    }

    getFlaps(season: number): any {
        //console.log('Returning Fastest Lap');
        //console.log(this.flaps[season - 1]);
        return this.flaps[season - 1];
    }
}


/*this.susers = this.http.post<any>(this.usersfilepath,
            {
                "db": "fdb",
                "table": "users"
            });

        //console.log('If Called');*/

/* //console.log('I\'m running first');

        //Create an instance of XMLHttpRquest
        this.xmlhttp = new XMLHttpRequest();
        if (!this.xmlhttp) {
            ////console.log("Giving up Cannot create an XMLHttpRequest instance");
        }

        //Send a GET Request for Users File
        this.xmlhttp.open('GET', this.usersfilepath);
        this.xmlhttp.send();

        ////console.log("Run first, I presume?");

        function printandcontinue() { //console.log('Let\'s continue'); };

        //Load into variables
        this.xmlhttp.onreadystatechange = () => {
            if (this.xmlhttp.readyState == XMLHttpRequest.DONE) {
                this.userString = this.xmlhttp.responseText;
                this.users = JSON.parse(this.xmlhttp.response);

                ////console.log(this.userString);
                //console.log('Constructor Running');
                ////console.log(this.users);

                //printandcontinue();
            }
        };*/