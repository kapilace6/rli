import { Component, OnInit } from '@angular/core';
import { AppComponent } from '../../app.component';
import { UsersService } from '../../service/users.service';

@Component({
  selector: 'app-drivers',
  templateUrl: './drivers.component.html',
  styleUrls: ['./drivers.component.css']
})
export class DriversComponent implements OnInit  {

    users: any;
    userString: string;
    userLoaded: boolean = false;

    constructor(private usersService: UsersService) {
        console.log('Calling D C');
        this.userLoaded = false;
    }

    /*
    getUsers(): void {

        console.log('User Definition : ' + this.usersService.isUserdefined());

        if (this.usersService.isUserdefined()) {
            this.users = this.usersService.getUsers();
            this.userLoaded = true;
        }
        else
        {
            this.usersService.getUsersO("fdb", "users")
                .subscribe(users => {
                    this.users = users;

                    this.usersService.users = users;
                    this.usersService.userString = JSON.stringify(users);

                    this.userString = this.usersService.getUsersString();

                    this.userLoaded = true;
                    console.log(this.usersService.userString);
                    console.log(this.users);
                    
                });
        }
    }
    */

    ngOnInit() {
        this.users = this.usersService.getUsers();
        this.userLoaded = true;
        //this.getUsers();
    }
}
