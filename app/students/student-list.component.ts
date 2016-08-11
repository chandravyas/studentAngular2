import { Component, OnInit }  from 'angular2/core';
import { ROUTER_DIRECTIVES } from 'angular2/router';

import { IStudent } from './student';
import { StudentService } from './student.service';
import { StudentFilterPipe } from './student-filter.pipe';
import {OrderBy} from "./orderBy"
import {Format} from "./format"

@Component({
    templateUrl: 'app/students/student-list.component.html',
    styleUrls: ['app/students/student-list.component.css'],
    pipes: [StudentFilterPipe,OrderBy,Format],
    directives: [ROUTER_DIRECTIVES]
})
export class StudentListComponent implements OnInit {
    pageTitle: string = 'Student List';
    students: IStudent[];
    listFilter: string = '';
    errorMessage: string;
    columns: any[]=[
    {
      display: 'studentId', //The text to display
      variable: 'studentId', //The name of the key that's apart of the data array
      filter: 'number' //The type data type of the column (number, text, date, etc.)
    },
    {
      display: 'studentFirstName', 
      variable: 'studentFirstName', //The name of the key that's apart of the data array
      filter: 'text' //The type data type of the column (number, text, date, etc.)
    },
    {
      display: 'studentLastName', 
      variable: 'studentLastName', //The name of the key that's apart of the data array
      filter: 'text' //The type data type of the column (number, text, date, etc.)
    },
    {
      display: 'studentTimestamp', //The text to display
      variable: 'studentTimestamp', //The name of the key that's apart of the data array
      filter: 'dateTime' //The type data type of the column (number, text, date, etc.)
    }
  ];
    sort: any={
    column: 'studentId', //to match the variable of one of the columns
    descending: false
  };
  

    constructor(private _studentService: StudentService) {

    }

    ngOnInit(): void {
           this._studentService.getStudents()
                     .subscribe(students => this.students = students,
                       error =>  this.errorMessage = <any>error);
    }

    selectedClass(columnName): string{
    return columnName == this.sort.column ? 'sort-' + this.sort.descending : 'false';
  }
  
  changeSorting(columnName): void{
    var sort = this.sort;
    if (sort.column == columnName) {
      sort.descending = !sort.descending;
    } else {
      sort.column = columnName;
      sort.descending = false;
    }
  }
  
  convertSorting(): string{
    return this.sort.descending ? '-' + this.sort.column : this.sort.column;
  }
}
