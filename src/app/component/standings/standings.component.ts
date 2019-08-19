import { Component, OnInit } from '@angular/core';
import { UsersService } from '../../service/users.service';
import { ColumnsService } from '../../service/columns.service';
import { StatService } from '../../service/stat.service'

@Component({
  selector: 'app-standings',
  templateUrl: './standings.component.html',
  styleUrls: ['./standings.component.css']
})

export class StandingsComponent implements OnInit {

    users: any;
    userLoaded: boolean = false;

    teams: any;
    teamsLoaded: boolean = false;

    teamsC: any;
    teamsCLoaded: boolean = false;

    //season1[0] -> id : 1
    season: any;
    seasonLoaded: boolean = false;

    seasonC: any;
    seasonCLoaded: boolean = false;

    //1 -> [0]
    curseason: number = 1;
    seasonsT: any;

    flapuser: any;
    flapdefined: boolean= false;

    points: any;
    ready: boolean = false;

    order: Array<number>;

    constructor(private usersService: UsersService, private columnsService: ColumnsService, private statService: StatService) {
        console.log('Calling S C');
    }

    get(): void {

        //get users from fdb, users
        //get season1 from seasons, one
        //get columns from seasons, one
        //get points from fdb, points
        //get teams from fdb, teams

        this.users = this.usersService.getUsers();
        this.userLoaded = true;
        console.log(this.users);

        this.season = this.usersService.getSeason(this.curseason);
        this.seasonLoaded = true;

        this.seasonC = this.columnsService.getSeasonC(this.curseason)
        this.seasonCLoaded = true;

        this.points = this.statService.getPoints(this.curseason);
        this.seasonsT = this.columnsService.getTables();

        if(this.curseason == 0) this.flapdefined = false;
        else {
            this.flapuser = this.statService.getFlapUsers(this.curseason);
            console.log(this.flapuser);
            this.flapdefined = true;
        }
        
        this.teams = this.usersService.getTeams();
        this.teamsLoaded = true;

        this.teamsC = this.columnsService.getTeamsC();
        this.teamsCLoaded = true;

        this.order = new Array(this.users.length);
        for(let i = 0; i < this.users.length; i++)
            this.order[i] = i;
    }

    //Sorting based on Points
    sort(): void {

        //-1 means L before R
        this.order.sort((l, r) => {
            if(!this.users[r].active) return -1;
            if(this.points[l] > this.points[r]) return -1;
            if(this.points[l] < this.points[r]) return 1;

            //Pull None further
            if(this.teams[l][this.teamsC[this.curseason]] == "None") return 1;
            if(this.teams[r][this.teamsC[this.curseason]] == "None") return -1;
            
            //Pull Reserve further
            if(this.teams[r][this.teamsC[this.curseason]] == "Reserve") return -1;
            return 1;
        });

        console.log(this.teamsC[this.curseason]);
        while(!this.users[this.order[this.order.length - 1]].active || 
            this.teams[this.order[this.order.length - 1]][this.teamsC[this.curseason]] == "None") {
                console.log(this.order.pop());
                console.log("Next last guy is : " + this.users[this.order[this.order.length - 1]].username);
            }

        console.log('The Order : ');
        console.log(this.order);

        /*
        this.users.sort((leftside, rightside): number => {
            let l = leftside, r = rightside;
            console.log(l.username + " , " + r.username);

            if(!leftside.active) return 1;
            if (this.points[leftside.id - 1] > this.points[rightside.id - 1]) return -1;
            else return 1;
        });

        this.season.sort((leftside, rightside): number => {
            let l = leftside, r = rightside;
            console.log(this.users[leftside.id - 1].username + " v " + this.users[leftside.id - 1].username);

            if(!this.users[leftside.id - 1].active) return 1;
            if (this.points[leftside.id - 1] > this.points[rightside.id - 1]) return -1;
            else return 1;
        });
        */
    }

    dnfs(): void {
        for (let i = 0; i < this.season.length; i++)
            for (let track of this.seasonC)
                if (this.season[i][track] == 21) this.season[i][track] = "DNF";
                else if (this.season[i][track] == 22) this.season[i][track] = "DNS";
                else if (this.season[i][track] == 23) this.season[i][track] = "DSQ";
    }

    changeSeason(s: number): void {
        if(this.curseason == s) return;
        this.curseason = s;

        this.get();
        this.dnfs();
        this.sort();
    }

    ngOnInit() {
        this.get();
        this.dnfs();
        this.sort();

        this.ready = true;
    }
}
