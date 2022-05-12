import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../api.service';
import { AppComponent } from '../app.component';

@Component({
  selector: 'app-new-member',
  templateUrl: './new-member.component.html',
  styleUrls: ['./new-member.component.css']
})
export class NewMemberComponent implements OnInit {
 public member ={name:"", surname: "", phone: ""}

  ///poderia ter criado um service exclusivo, mas vamos usar o principal
  constructor(private api : ApiService, private appComponent: 
    AppComponent, private router: Router) { }

  ngOnInit(): void {
  }

  save(){
      this.api.saveNemMember(this.member).subscribe(
        data => {
          console.log(data);
          //atualizando lista de membros
          this.appComponent.members.push(data);
          this.router.navigate([''])

          
        },
        error => {
          console.log("Aconteceu um erro: ", error.message);
        }
      );
  }

}
