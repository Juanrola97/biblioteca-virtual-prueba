import { Component, OnInit } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss']
})
export class IndexComponent implements OnInit {
  
  title: String = "Libreria Online";
  page_size: number = 2;
  page_number: number = 1;
  pageSizeOptions: [5,10,20,30,40,50]; 

  constructor() { }

  ngOnInit() {
  }

  handlePage(e: PageEvent){
    this.page_size = e.pageSize;
    this.page_number = e.pageIndex+1;
  }

  msg:string = '';
  id:number = 1;

  libros = [
    {'id': '1', 'nombre': 'Lorem ipsum ', 'nombre_autor':'Albero, Miguel', 'editorial':'fugiat nulla', 'ano_publicacion':'1997-03-12'},
    {'id': '2', 'nombre': 'Lorem ipsum ', 'nombre_autor':'Albero, Miguel', 'editorial':'fugiat nulla', 'ano_publicacion':'1997-03-12'},
    {'id': '3', 'nombre': 'Lorem ipsum ', 'nombre_autor':'Albero, Miguel', 'editorial':'fugiat nulla', 'ano_publicacion':'1997-03-12'},
    {'id': '4', 'nombre': 'Lorem ipsum ', 'nombre_autor':'Albero, Miguel', 'editorial':'fugiat nulla', 'ano_publicacion':'1997-03-12'},
    {'id': '5', 'nombre': 'Lorem ipsum ', 'nombre_autor':'Albero, Miguel', 'editorial':'fugiat nulla', 'ano_publicacion':'1997-03-12'},
    {'id': '6', 'nombre': 'Lorem ipsum ', 'nombre_autor':'Albero, Miguel', 'editorial':'fugiat nulla', 'ano_publicacion':'1997-03-12'},
    {'id': '7', 'nombre': 'Lorem ipsum ', 'nombre_autor':'Albero, Miguel', 'editorial':'fugiat nulla', 'ano_publicacion':'1997-03-12'},
    {'id': '8', 'nombre': 'Lorem ipsum ', 'nombre_autor':'Albero, Miguel', 'editorial':'fugiat nulla', 'ano_publicacion':'1997-03-12'},
  ];

  model:any = {};
  model2:any = {};
  hideUpdate:boolean = true;

  addLibro():void{
    this.libros.push(this.model);
    this.msg = 'campo agregado';
  }

  deleteLibro(i):void {
    var answer = confirm('Estas seguro querer eliminarlo?');
    if(answer) {
      this.libros.splice(i, 1);
      this.msg = 'campo eliminado';
    }
  }

  myValue;
  editLibro(i):void {
    this.hideUpdate = false;
    this.model2.id = this.libros[i].id;
    this.model2.nombre = this.libros[i].nombre;
    this.model2.nombre_autor = this.libros[i].nombre_autor;
    this.model2.editorial = this.libros[i].editorial;
    this.model2.ano_publicacion = this.libros[i].ano_publicacion;
    this.myValue = i;
  }

  updateLibro():void {
    let i = this.myValue;
    for(let j = 0; j < this.libros.length; j++){
      if(i == j) {
        this.libros[i] = this.model2;
        this.msg = 'campo actualizado';
        this.model2 = {};
      }
    }
  }

  closeAlert():void {
    this.msg = '';
  }

}
