import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from './api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'members-front';

  selected_member = {id : 0, name : "", surname :""};
  members = [
    {name:'Lucas', id: 1, surname:'Ottoni', phone:'67996546419', image:'http://www.minhaapp.com/photo1'},
    {name:'Igor', id: 2, surname:'Arruda',  phone:'67996546419', image:'http://www.minhaapp.com/photo2'},
    {name:'Maria', id: 3, surname:'da Silva',   phone:'67996546419', image:'http://www.minhaapp.com/photo3'},
  ]

  constructor(private api: ApiService, private router: Router){
    this.getMembers();
  }


  getMembers = () => {
    this.api.getAllMembers().subscribe({ 
      next: (returnedMembers) => this.members = returnedMembers,
      error: (e) => console.log(e)

    });
        /*    Forma deprecada de implementação
        this.api.getAllMembers().subscribe(
          data => {
            this.members = data;
          },
          error => {
            console.log("Aconteceu erro");
          }
        ); */
  };


  memberClicked = (member: { id: any; }) => {
    this.router.navigate(['member-detail',member.id])

 /*    this.api.getMember(member.id).subscribe(
      data => {
        this.selected_member = data;
        console.log(data);
      },
      error => {
        console.log(error);
      }
    ); */
  };
}
