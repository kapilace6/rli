import { Component, OnInit } from '@angular/core';
import { UsersService } from '../../service/users.service';
import { ColumnsService } from '../../service/columns.service';
import { StatService } from '../../service/stat.service'

@Component({
  selector: 'app-teams',
  templateUrl: './teams.component.html',
  styleUrls: ['./teams.component.css']
})

export class TeamsComponent implements OnInit {

    users: any;
    userLoaded: boolean = false;

    teams: any;
    teamsLoaded: boolean = false;

    teamsC: any;
    teamsCLoaded: boolean = false;

    //1 -> [0]
    curseason: number = 1;
    seasonsT: any;

    constructors: any;
    reserves: any;
    
    points: any;
    ready: boolean = false;

    order: Array<number>;

    constructor(private usersService: UsersService, private columnsService: ColumnsService, private statService: StatService) {
        console.log('Calling T C');
    }

    get(): void {

        //get users from fdb, users
        //get teams from fdb, teams
        //get teamsC from fdb, teams

        /*
        this.users = JSON.stringify(this.usersService.getUsers());
        this.userLoaded = true;

        this.season1 = JSON.stringify(this.usersService.getSeason1());
        this.season1Loaded = true;

        this.season1C = JSON.stringify(this.columnsService.getSeason1C());
        this.season1CLoaded = true;

        this.pointsS = JSON.stringify(this.usersService.getPoints());
        this.pointsSLoaded = true;
        */

        this.users = this.usersService.getUsers();
        this.userLoaded = true;

        this.teams = this.usersService.getTeams();
        this.teamsLoaded = true;

        this.teamsC = this.columnsService.getTeamsC();
        this.teamsCLoaded = true;

        this.seasonsT = this.columnsService.getTables();
        this.points = this.statService.getPoints(this.curseason);

        this.constructors = this.statService.getConstructors(this.curseason);
        this.reserves = this.statService.getReserves(this.curseason);

        this.order = new Array(this.usersService.seasons[this.curseason].length);
        for(let i = 0; i < this.usersService.seasons[this.curseason]; i++)
            this.order[i] = this.usersService.seasons[this.curseason][i].id - 1;
    }

    ngOnInit() {
        this.get();
        //this.sort();    
	    this.ready = true;
    }

    sort(): void {
        //Asuuming Teams are Sorted by ID, by stat.reorder_byid()
        this.order.sort((li, ri) => {
            let l = this.teams[li][this.teamsC[this.curseason]];
            let r = this.teams[ri][this.teamsC[this.curseason]];
            
            if(l == r) {
                return this.statService.pointsort(li, ri, this.curseason);
            }
	    	else {
                if(l < r) return -1;
                else return 1;
            }	
	    });
        
        /*this.teams.sort((leftside, rightside) => {
            if(leftside.id < rightside.id) return -1;
            else return 1;
        });

        this.users.sort((leftside, rightside) => {
            let l = this.teams[leftside.id - 1][this.teamsC[this.curseason]];
            let r = this.teams[rightside.id - 1][this.teamsC[this.curseason]];

            if(l == r) {
                if(this.points[leftside.id - 1] > this.points[rightside.id - 1]) return -1;
                else return 1;
            }
            else {
                if(l < r) return -1;
                else return 1;
            }
        });

	    this.teams.sort((leftside, rightside) => {
            let l = leftside[this.teamsC[this.curseason]];
            let r = rightside[this.teamsC[this.curseason]];
            
            if(l == r) {
                if (this.points[leftside.id - 1] > this.points[rightside.id - 1]) return -1;
                else return 1;
            }
	    	else {
                if(l < r) return -1;
                else return 1;
            }	
	    });*/
    }

    changeSeason(s: number): void {
	    if(this.curseason == s) return;
        this.curseason = s;
        
        this.get();
        this.sort();
    }
}

//Current Season Drivers

//Current Reserves