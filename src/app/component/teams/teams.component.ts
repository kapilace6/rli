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

    order: Array<[number, number]>;

    constructor(private usersService: UsersService, private columnsService: ColumnsService, private statService: StatService) {
        console.log('Calling T C');
    }

    get(): void {

        //get users from fdb, users
        //get teams from fdb, teams
        //get teamsC from fdb, teams

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
            this.order[i] = [this.usersService.seasons[this.curseason][i].id - 1, i];
    }

    ngOnInit() {
        this.get();
        //this.sort();    
	    this.ready = true;
    }

    sort(): void {
        //Asuuming Teams are Sorted by ID, by stat.reorder_byid()
        this.order.sort((li, ri) => {
            let l = this.teams[li[0]][this.teamsC[this.curseason]];
            let r = this.teams[ri[0]][this.teamsC[this.curseason]];
            
            if(l == r) {
                return this.statService.pointsort(li[0], ri[0], li[1], ri[1], this.curseason);
            }
	    	else {
                if(l < r) return -1;
                else return 1;
            }	
	    });
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