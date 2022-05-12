import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { AppComponent } from '../app.component';
import { ApiService } from './api.service';

@Component({
  selector: 'app-members-detail',
  templateUrl: './members-detail.component.html',
  styleUrls: ['./members-detail.component.css']
})
export class MembersDetailComponent implements OnInit {

  constructor(private route: ActivatedRoute, private api: ApiService, private router: Router,
    private appComponent: AppComponent) { }
  imagemSelecionada : File = null!;
  selected_member = {id: undefined,  name: '', surname: '', phone:'', image:""};
  selected_id: number | undefined;

  ngOnInit(): void {
    this.route.paramMap.subscribe((param: ParamMap) => {
      let id = parseInt(param.get('id') ||'{}');
      this.selected_id = id;
      this.loadMember(id);

    });
  }

  loadMember(id: number){
    this.api.getMember(String(id)).subscribe(
      data => {
        this.selected_member = data;
      },
      error => {
        console.log("Aconteceu um erro: ", error.message);
      }
    );
  }

  update(){
    //const imagem();
    //imagem.append('image', this.imagemSelecionada, this.imagemSelecionada.name)
    console.log("Imagem método component");
    this.api.updateMember(this.selected_member,this.imagemSelecionada).subscribe(
      data => {
        this.selected_member = data;
      },
      error => {
        console.log("Aconteceu um erro: ", error.message);
      }
    );
  }


  delete(){
    this.api.deleteMember(this.selected_id).subscribe(
      data => {
        let indexRemover;
        this.appComponent.members.forEach((elemento, indice) =>{
          if(elemento.id == this.selected_id)
            indexRemover = indice;  
        })
        this.appComponent.members.splice(Number(indexRemover), 1);

      },
      error => {
        console.log("Aconteceu um erro: ", error.message);
      }
    );
  }

  newMember(){
    this.router.navigate(['new-member'])
  }

  onFileSelected(event: any){
    console.log(event);
    this.imagemSelecionada = event.target.files[0];
    console.log("Imagem Selecionada: ", this.imagemSelecionada);
  }

}
