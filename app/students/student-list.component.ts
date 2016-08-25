import { Component, OnInit }  from 'angular2/core';
import { ROUTER_DIRECTIVES } from 'angular2/router';

import { IStudent } from './student';
import { StudentService } from './student.service';
import { StudentFilterPipe } from './student-filter.pipe';
import {OrderBy} from "./orderBy"
import {Format} from "./format"
import {Response} from 'angular2/http';
import { Router } from 'angular2/router';

@Component({
  templateUrl: 'app/students/student-list.component.html',
  styleUrls: ['app/students/student-list.component.css'],
  pipes: [StudentFilterPipe, OrderBy, Format],
  directives: [ROUTER_DIRECTIVES]
})
export class StudentListComponent implements OnInit {
  pageTitle: string = 'Student List';
  students: IStudent[];
  listFilter: string = '';
  errorMessage: string;
  columnName:string = 'id';
  columns: any[] = [
    {
      display: 'studentid', //The text to display
      variable: 'id', //The name of the key that's apart of the data array
      filter: 'number' //The type data type of the column (number, text, date, etc.)
    },
    {
      display: 'studentname',
      variable: 'name', //The name of the key that's apart of the data array
      filter: 'text' //The type data type of the column (number, text, date, etc.)
    },
    {
      display: 'department',
      variable: 'department', //The name of the key that's apart of the data array
      filter: 'text' //The type data type of the column (number, text, date, etc.)
    },
    {
      display: 'programtype', //The text to display
      variable: 'programtype', //The name of the key that's apart of the data array
      filter: 'text' //The type data type of the column (number, text, date, etc.)
    },
    {
      display: 'yearjoined', //The text to display
      variable: 'yearjoined', //The name of the key that's apart of the data array
      filter: 'number' //The type data type of the column (number, text, date, etc.)
    },
    {
      display: 'yearcomplete', //The text to display
      variable: 'yearcomplete', //The name of the key that's apart of the data array
      filter: 'number' //The type data type of the column (number, text, date, etc.)
    }

  ];
  sort: any = {
    column: 'id', //to match the variable of one of the columns
    descending: false
  };



  constructor(private _studentService: StudentService,private _router: Router) {

  }

  ngOnInit(): void {
 this.refreshStudentsList();
  }

  refreshStudentsList():void
  {
    this._studentService.getStudents()
      .subscribe(students => this.students = students,
      error => this.errorMessage = <any>error);
   // alert('In ng INit list compoent after exec');
  }

  selectedClass(columnName): string {
    return columnName == this.sort.column ? 'sort-' + this.sort.descending : 'false';
  }

  changeSorting(columnName): void {
    var sort = this.sort;
    if (sort.column == columnName) {
      sort.descending = !sort.descending;
    } else {
      sort.column = columnName;
      sort.descending = false;
    }
  }

  convertSorting(): string {
    return this.sort.descending ? '-' + this.sort.column : this.sort.column;
  }

  deleteStudentEvent(studentid:number,i:number)
    {
        this._studentService.deleteStudent(studentid).
        subscribe(
            (response:Response)=>{this._router.navigate(['Students']);
             this.refreshStudentsList();
            console.log('deleted Successfully!!'); },
            function(error) { console.log("Error happened" + error)},
   function() { console.log("delete is completed");
              });
    }

    changeSelect(name:string){
      this.columnName=name;

    }

    // deleteDomElement()
    // {
    //      let student: IStudent={id:-1,name:'chandra',department:'departmentname',programtype:'program',yearjoined:10,yearcomplete:11};

    //     this.students = [student];
    // }


}
