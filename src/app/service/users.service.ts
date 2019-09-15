import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of, ObservableLike } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

//Database Data is Stored in this Service
export class UsersService {

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
    
    //Array of Season Data
    seasons: any;

    //DO NOT SORT
    //Array of Fastest Lap Data
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

        //POST Request to be.php
        /*
            mode  -> 1 denotes Request for Table Data
                     2 denotes Request for Array of Columns from a Specified 'table'
                     3 denotes Request for Array of Table Names from a Specified 'db'

            db    -> denotes Database Name
            table -> denotes Table Name
            sort  -> [Optional] Sorts Query Result by Specified Option
         */
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

    //Insert Functions
    insertSeason(season_name: String): Observable<any> {
        this.usersfilepath = "server/insert.php";
        
        let headers = new HttpHeaders();
        headers.append('Content-Type', 'application/json');

        let newseason = this.http.post<any>(this.usersfilepath, JSON.stringify(
        {
            "mode": 3,
            "season": season_name
        }), 
        {
            headers: headers
        });

        return newseason;    
    }

    insertResult(mode: Number, season_name: String, track_name: String): Observable<any> {
        this.usersfilepath = "server/insert.php";
        
        let headers = new HttpHeaders();
        headers.append('Content-Type', 'application/json');

        let sresult = this.http.post<any>(this.usersfilepath, JSON.stringify(
        {
            "mode": mode,
            "season": season_name,
            "track": track_name
        }), 
        {
            headers: headers
        });

        return sresult; 
    }

    insertUser(user: any): Observable<any> {
        this.usersfilepath = "server/insert.php";
        
        let headers = new HttpHeaders();
        headers.append('Content-Type', 'application/json');

        const req = user;
        req.mode = 4;
        req.active = 1;
        //Object.defineProperties(req, {
        //    mode: { value: 4 },
        //    active: { value: 1 },
        //});
        
        console.log(req);
        //if(user.username) req.username = user.username;
        //if(user.discord)  req.discord = user.discord;
        //if(user.steam)    req.steam = user.steam;
        //if(user.location) req.location = user.location;
        //if(user.number)   req.number = user.number;
        //if(user.role)     req.role = user.role;        
        //if(user.aka)      req.aka = user.aka;

        let suser = this.http.post<any>(this.usersfilepath, JSON.stringify(req), 
        {
            headers: headers
        });

        return suser; 
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

    //Returns only a Specific Season Data
    getSeason(season: number): any {
        //console.log('Returning Season 1');
        //console.log(this.seasons[season]);
        return this.seasons[season];
    }

    //Returns only a Specific Season of Fastest Laps
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