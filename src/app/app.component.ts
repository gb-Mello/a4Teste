import { Component } from '@angular/core';
import { DataService } from './services/data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  name:string;
  title = 'SantLibrary';
  isCliente:boolean = false;
  isLivro:boolean = false;
  isHome:boolean=true;
  isNull:boolean=false;
  posts:Post[];
  livros:Livro[];

  constructor(private dataService:DataService) { 
    console.log('construtor rodou');
  }

  clickCliente(){
    console.log('Clicou aquiiiii');
    this.isCliente = true;
    this.isLivro = false;
    this.isHome = false;
    this.isNull = false;
  }

  clickLivros(){
    this.isLivro = true;
    this.isCliente = false;
    this.isHome = false;
    this.isNull = false;
  }

  clickHome(){
    this.isHome = true;
    this.isCliente = false;
    this.isLivro = false;
    this.posts=null;
    this.livros = null;
    this.isNull=false;
  }

  buscaCliente(name){
    console.log(name);
    this.dataService.getClientes(name).subscribe((posts) => {
      console.log(posts);
      this.posts = posts;
    });
    if(this.posts==null){
      this.isNull = true;
    }
  }

  buscaLivro(title){
    this.dataService.getLivros(title).subscribe((posts) => {
      console.log(posts);
      this.livros = posts;
    });
    if(this.livros==null){
      this.isNull = true;
    }
  }
}
interface Post{
  id: number,
  fullName: string,
  gender: string,
  age: number,
  email:string,
  phone:string,
  username: string,
}
interface Livro{
  id: number,
  title: string,
  author: string,
  yearPublished: number,
  price: string,
  rating: string,
}

