import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';

@Injectable({
    providedIn: 'root'
})

//Metadata, i.e. Column and Table Data is Stored in this Service
export class ColumnsService {

    //xmlhttp: XMLHttpRequest;
    //usersfilepath: string = "assets/users.json";

    usersfilepath: string = "server/be.php"; //?db=fdb&table=users";
    userString: string;

    usersC: any;
    userCdefined: boolean = false;

    teamsC: any;
    teamsCdefined: boolean = false;

    seasonsT: any;
    seasonsTdefined: boolean = false;

    seasonsC: any;
    seasonsCdefined: boolean = false;
    
    //season1 should have the same columns as fastest_laps

    constructor(private http: HttpClient) {
    }

    isdefined(v: string) {
        if (v == "users") return this.userCdefined;
        //if (v == "points") return this.pointsdefined;
        if (v == "teams") return this.teamsCdefined;
        if (v == "seasonC") return this.seasonsCdefined;

        return false;
    }

    //Get Column Observable
    getC(db: string, table: string): Observable<any> {
        //console.log(table + '\'s Columns being requested');

        //this.usersfilepath = "be.php?mode=2&db=" + db + "&table=" + table;
        this.usersfilepath = "server/be.php";

        let headers = new HttpHeaders();
        headers.append('Content-Type', 'application/json');

        let susers = this.http.post<any>(this.usersfilepath, JSON.stringify(
        {
            "mode": 2,
            "db" : db,
            "table": table
        }), 
        {
            headers: headers
        });

        return susers;
    }

    //Get Tables Observable
    getT(db: string): Observable<any> {
        //console.log(db + '\'s Tables being requested');

        this.usersfilepath = "server/be.php";
        
        let headers = new HttpHeaders();
        headers.append('Content-Type', 'application/json');

        let susers = this.http.post<any>(this.usersfilepath, JSON.stringify(
        {
            "mode": 3,
            "db" : db
        }), 
        {
            headers: headers
        });

        return susers;
    }

    getTables(): any {
        //console.log('Returning Season Tables');
        //console.log(this.seasonsT);
        return this.seasonsT;
    }

    getUsersC(): any {
        //console.log('Returning User Columns');
        //console.log(this.usersC);
        return this.usersC;
    }

    getTeamsC(): any {
        //console.log('Returning Teams');
        //console.log(this.teamsC);
        return this.teamsC;
    }

    //Returns only a Specific Season Columns
    getSeasonC(season: number): any {
        //console.log('Returning Season 1');
        //console.log(this.seasonsC[season]);
        return this.seasonsC[season];
    }
}

/*
 	1 	track   Primary 	varchar(30) 	latin1_swedish_ci 		No 	None

	2 	id 	int(11) 			No 	None 			Change Change 	Drop Drop 	

    More More

	3 	lap 	int(11) 			No 	None 			Change Change 	Drop Drop 	

    More More

	4 	time 	varchar(11) 	latin1_swedish_ci 		No 	None 			Change Change 	Drop Drop 	

    More More

	5 	tyre 	varchar(15) 	latin1_swedish_ci 		No 	None 			Change Change 	Drop Drop 	

    More More

*/