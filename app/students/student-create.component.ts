import { Component, OnInit } from 'angular2/core';
import { RouteParams, Router } from 'angular2/router';
import {Response} from 'angular2/http';
import { IStudent,Student } from './student';
import { StudentService } from './student.service';

@Component({
    templateUrl: 'app/students/student-create.component.html'
})
export class StudentCreateComponent  {
    pageTitle: string = 'Enter Student Details';
    //student: IStudent={id:-1,name:'chandra',department:'departmentname',programtype:'program',yearjoined:10,yearcomplete:11};
      student: IStudent= new Student();
    errorMessage: string;

    constructor(private _studentService: StudentService,
        private _router: Router,
        private _routeParams: RouteParams) {
    }



    onBack(): void {
        this._router.navigate(['Students']);
    }

    createStudentEvent()
    {
        this._studentService.createStudent(this.student).
        subscribe(
            (response:Response)=>{this._router.navigate(['Students']);console.log('Created Successfully!!'); },
            function(error) { console.log("Error happened" + error)},
   function() { console.log("the subscription is completed");
              });
    }

}
