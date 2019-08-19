import { Injectable } from '@angular/core';
import { UsersService } from './users.service';
import { ColumnsService } from './columns.service';

@Injectable({
  providedIn: 'root'
})
export class StatService {

  //DO NOT SORT
  points: any;
  pointsdefined: boolean = false;

  flapusers: any;
  flapusersdefined: boolean = false;

  users: any;
  teams: any;

  /*Structure of a particular season
    {
        team: string,
        member: Array<number>,
        points: number
    }*/
  constructors: any;        //0 based index
  reserves: Array<Array<number>>;  //0 based index
  order: Array<number>;     //0 based index

  constructor(private columnsService: ColumnsService, private usersService: UsersService) { }

  begin_compute(): void {
    this.init();
    this.compute_points();
    this.construct_teams();
  }

  init(): void {
    this.users = this.usersService.getUsers();
    this.teams = this.usersService.getTeams();

    this.order = new Array(this.users.length);
        for(let i = 0; i < this.users.length; i++)
            this.order[i] = i;

    this.reserves = new Array();
  }

  compute_points(): void {
    //console.log('Computing Points');
    //console.log(this.usersService.seasons);
    let Tlength = this.columnsService.seasonsT.length;
    
    this.points = new Array();
    for (let i = 0; i < Tlength; i++) {
      this.points[i] = new Array(this.users.length);

      for(let j = 0; j < this.users.length; j++) {    
        this.points[i][j] = 0;
        
        for (let track of this.columnsService.seasonsC[i])
            this.points[i][j] += this.usersService.pointsS[this.usersService.seasons[i][j][track] - 1].feature;
      }
    }
  
    this.populate_flap();

    //console.log(this.points);
    this.pointsdefined = true;
  } 

  //Populates the Fastest Lap Index, as well as Adds to Points
  populate_flap(): void {
	  //console.log('Populating Fastest Laps');

	  //Assume Column Structure is same as Season Table, excluding "one"
	  this.flapusers = new Array(this.columnsService.seasonsT.length);
      for (let i = 0; i < this.columnsService.seasonsT.length - 1; i++) {
	      this.flapusers[i] = new Array(this.users.length);
	      this.flapusers[i].fill(0);

	      for(let j = 0; j < this.usersService.flaps[i].length; j++) {
          this.flapusers[i][this.usersService.flaps[i][j].id - 1] += 1;
          this.points[i+1][this.usersService.flaps[i][j].id - 1] += 1;
        }
	  }
	
	  //console.log(this.flapusers);
	  this.flapusersdefined = true;
  }

  teamsort(curseason: number): void {
    this.order = new Array(this.users.length);
        for(let i = 0; i < this.users.length; i++)
            this.order[i] = i;

    this.order.sort((li, ri) => {
      let l = this.teams[li][this.columnsService.teamsC[curseason]];
      let r = this.teams[ri][this.columnsService.teamsC[curseason]];

      if(l == r) {
        if (this.points[curseason][li] > this.points[curseason][ri]) return -1;
        else return 1;
      }
      else {
        if(l < r) return -1;
        else return 1;
      }	
    });

    console.log('Stat Order : ' + curseason);
    console.log(this.order);

    //console.log('Team Sort ' + curseason);
    /*
    this.teams.sort((leftside, rightside) => {
        if(leftside.id < rightside.id) return -1;
        else return 1;
    });

    this.users.sort((leftside, rightside) => {
        let l = this.teams[leftside.id - 1][this.columnsService.teamsC[curseason]];
        let r = this.teams[rightside.id - 1][this.columnsService.teamsC[curseason]];

        if(l == r) {
            if(this.points[curseason][leftside.id - 1] > this.points[curseason][rightside.id - 1]) return -1;
            else return 1;
        }
        else {
            if(l < r) return -1;
            else return 1;
        }
    });

    this.teams.sort((leftside, rightside) => {
        let l = leftside[this.columnsService.teamsC[curseason]];
        let r = rightside[this.columnsService.teamsC[curseason]];
        
        if(l == r) {
            if (this.points[curseason][leftside.id - 1] > this.points[curseason][rightside.id - 1]) return -1;
            else return 1;
        }
        else {
            if(l < r) return -1;
            else return 1;
        }	
  });*/


}

  construct_teams(): void {
    //console.log('Constructing Teams');

    this.constructors = new Array(this.columnsService.seasonsT.length);
    this.reserves = new Array(this.columnsService.seasonsT.length);
    for(let i = 0; i < this.columnsService.seasonsT.length; i++) {
      this.constructors[i] = new Array();
      this.reserves[i] = new Array();

      this.teamsort(i);

      let prev = "", k = -1;
      for(let j = 0; j < this.order.length; j++) {
        let T = this.teams[this.order[j]][this.columnsService.teamsC[i]];
        if(T == "None")
          continue;

        if(T == "Reserve") {
          this.reserves[i].push(this.order[j]);
          continue;
        }

  
        if(T != prev) {
          k++;
          this.constructors[i].push({
              team: T,
              member: [], 
              points: 0
          });
        }  

        this.constructors[i][k].points += this.points[i][this.order[j]];
        this.constructors[i][k].member.push(this.order[j]);
        prev = T;
      }
    }
    
    this.sort_teams();
    //console.log(this.constructors);
  }

  sort_teams(): void {
    for(let i = 0; i < this.columnsService.seasonsT.length; i++) {
      this.constructors[i].sort((leftside, rightside) => {
        if(leftside.points > rightside.points) return -1;
        else return 1;
      });
    }

    //this.reorder_byid();
  }

  reorder_byid(): void {
    this.users.sort((leftside, rightside) => {
      if(leftside.id < rightside.id) return -1;
      else return 1;
    });

    this.teams.sort((leftside, rightside) => {
      if(leftside.id < rightside.id) return -1;
      else return 1;
    });
  }


  //Get Functions
  getPoints(season: number): any {
    //console.log('Returning Points');
    //console.log(this.points[season]);
    return this.points[season];
  }

  getFlapUsers(season: number): any {
    //console.log('Returning Fastest Lap Users');
    //console.log(this.flapusers[season - 1]);
    return this.flapusers[season - 1];
  }

  getConstructors(season: number): any {
    //console.log('Returning Constructors');
    //console.log(this.constructors[season]);
    return this.constructors[season];
  }

  getReserves(season: number): any {
    //console.log('Returning Reserves');
    //console.log(this.reserves[season]);
    return this.reserves[season];
  }
}