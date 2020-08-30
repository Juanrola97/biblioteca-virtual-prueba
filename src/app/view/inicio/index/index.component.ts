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

  employees = [
    {'name': 'Fazt', position: 'manager', email:'email@email.com'},
    {'name': 'Juan', position: 'Designer', email:'email@email.com'},
    {'name': 'Pedro', position: 'Programmer', email:'email@email.com'}
  ];

  model:any = {};
  model2:any = {};
  hideUpdate:boolean = true;

  addEmployee():void{
    this.employees.push(this.model);
    this.msg = 'campo agregado';
  }

  deleteEmployee(i):void {
    var answer = confirm('Estas seguro querer eliminarlo?');
    if(answer) {
      this.employees.splice(i, 1);
      this.msg = 'campo eliminado';
    }
  }

  myValue;
  editEmployee(i):void {
    this.hideUpdate = false;
    this.model2.name = this.employees[i].name;
    this.model2.position = this.employees[i].position;
    this.model2.email = this.employees[i].email;
    this.myValue = i;
  }

  updateEmployee():void {
    let i = this.myValue;
    for(let j = 0; j < this.employees.length; j++){
      if(i == j) {
        this.employees[i] = this.model2;
        this.msg = 'campo actualizado';
        this.model2 = {};
      }
    }
  }

  closeAlert():void {
    this.msg = '';
  }

}
