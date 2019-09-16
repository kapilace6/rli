import { Component, OnInit } from '@angular/core';
import { UsersService } from './service/users.service';
import { ColumnsService } from './service/columns.service';
import { StatService } from './service/stat.service';
import { TesseractWorker, OSD, PSM } from 'tesseract.js';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

//Flow is to Load Data from 'fdb' first, which contains { Users, Points and Teams }
//followed by Loading the Columns and Table Metadata
//folloed by Loading Data about each Season, which contains { Seasons, Fastest Laps }

export class AppComponent implements OnInit {
  
    //threshold denotes the number of Units of Data to be loaded before the App is ready to display the contents
    //loaded denotes the number of Loaded Units of Data.
    sometext: string = "Awesome, it Works";
    loaded: number = 0;
    threshold: number = 6;                                  //Set for the Tables & Columns in fdb

    //Program Starts Here : 
    constructor(private columnsService: ColumnsService, private usersService: UsersService, private statService: StatService) {
        this.sometext = "";

        this.LoadUsers();
        this.LoadColumns();
    }

    LoadUsers(): void {
      //console.log('Loading Users');

        //Get Users Table
        this.usersService.getO("fdb", "users", "id").subscribe(
            users => {
                this.usersService.users = users;
                this.usersService.userdefined = true;

                this.loaded++;
                this.computeStats();
            }
        );

        //Get Points Table
        this.usersService.getO("fdb", "points", "pos").subscribe(
            points => {
                //don't need pos, because not sorting
                this.usersService.pointsS = points;
                for (let i = 0; i < this.usersService.pointsS.length; ++i)
                    delete this.usersService.pointsS[i].pos;

                this.usersService.pointsSdefined = true;

                this.loaded++;
                this.computeStats();
            }
        );

        
        //Get Teams Table
        this.usersService.getO("fdb", "teams", "id").subscribe(
            teams => {
                this.usersService.teams = teams;
                this.usersService.teamsdefined = true;

                this.loaded++;
                this.computeStats();
            }
        );
    }

    LoadColumns(): void {
      //console.log('Loading Columns');

      //Get Users Table
      this.columnsService.getC("fdb", "users").subscribe(
          users => {
              this.columnsService.usersC = users;
              this.columnsService.userCdefined = true;

              this.loaded++;
              this.computeStats();
          }
      );
          
      //Get Teams Table
      this.columnsService.getC("fdb", "teams").subscribe(
          teams => {
              this.columnsService.teamsC = teams;
              this.columnsService.teamsC.shift();
              
              this.columnsService.teamsCdefined = true;

              this.loaded++;
              this.computeStats();
          }
      );

      //Get Seasons's Tables
      this.columnsService.getT("seasons").subscribe(
        seasons => {
            this.columnsService.seasonsT = seasons;
            this.columnsService.seasonsTdefined = true;

            this.loaded++;
            this.threshold += (this.columnsService.seasonsT.length * 3) - 1;
            
            this.computeStats();
            this.LoadSeasons();
        });    
    }

    LoadSeasons(): void {
        //Load the Seasons Data
        this.usersService.seasons = new Array(this.columnsService.seasonsT.length);
        for(let i = 0; i < this.columnsService.seasonsT.length; i++) {

            //Get Season i Table
            this.usersService.getO("seasons", this.columnsService.seasonsT[i], "id").subscribe(
                seasons => {
                
                    //need id, because sorting using id
                    this.usersService.season1 = seasons;
                    this.usersService.season1defined = true;

                    this.loaded++;

                    this.usersService.seasons[i] = seasons;
                    this.computeStats();
            });
        }

        //Load the Columns Data
        this.columnsService.seasonsC = new Array(this.columnsService.seasonsT.length);
        for(let i = 0; i < this.columnsService.seasonsT.length; i++) {

            //Get Season i Columns
            this.columnsService.getC("seasons", this.columnsService.seasonsT[i]).subscribe(
                seasons => {
                
                    //shift removes the first element from the Array, i.e., "id"
                    let S = seasons;
                    S.shift();

                    this.loaded++;

                    this.columnsService.seasonsC[i] = S;
                    this.computeStats();
            });
        }

        //Load Fastest Lap Tables
        this.usersService.flaps = new Array(this.columnsService.seasonsT.length - 1);
        for(let i = 1; i < this.columnsService.seasonsT.length; i++) {

            //Get Fastest Lap i Table
            this.usersService.getO("fastest_laps", this.columnsService.seasonsT[i]).subscribe(
                flap => {
                    this.usersService.flaps[i-1] = flap;

                    this.loaded++;
                    this.computeStats();
            });
        }
    }

    computeStats(): void {
        if(this.loaded < this.threshold) return;
        this.statService.begin_compute();
    }

/*    constructor() {
        const worker = new TesseractWorker();
        let myImage: string = "assets/Qualy.png";

        
        /*worker.recognize(myImage, 'eng', {
            tessjs_image_rectangle_left: 560,
            tessjs_image_rectangle_top: 305,
            tessjs_image_rectangle_width: 210,
            tessjs_image_rectangle_height: 30,
          })
            .progress(progress => {
                console.log('progress', progress);
            })
            
            .then(result => {
                this.loaded = 20;
                this.sometext = result.text;
                console.log('result', result);
            });

            const params = [
                {
                  tessjs_image_rectangle_left: 0,
                  tessjs_image_rectangle_top: 0,
                  tessjs_image_rectangle_width: 500,
                  tessjs_image_rectangle_height: 300,
                },
                {
                  tessjs_image_rectangle_left: 500,
                  tessjs_image_rectangle_top: 0,
                  tessjs_image_rectangle_width: 500,
                  tessjs_image_rectangle_height: 300,
                },
              ];
              
              Promise.all(
                params.map(param => (
                  worker
                    .recognize(
                      'https://tesseract.projectnaptha.com/img/eng_bw.png',
                      'eng',
                      param
                    )
                    .then(({ text }) => text)
                )) 
              ).then((texts) => {
                console.log(texts);

                this.loaded = 20;
                worker.terminate();
              });
    }*/
    
    ngOnInit() {
    }
}
