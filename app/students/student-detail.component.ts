import { Component, OnInit } from 'angular2/core';
import { RouteParams, Router } from 'angular2/router';
import {Response} from 'angular2/http';
import { IStudent } from './student';
import { StudentService } from './student.service';

@Component({
    templateUrl: 'app/students/student-detail.component.html'
})
export class StudentDetailComponent implements OnInit{
    pageTitle: string = 'Student Detail';
    student: IStudent;
    errorMessage: string;
    private sub: any;

    constructor(private _studentService: StudentService,
        private _router: Router,
        private _routeParams: RouteParams) {
    }

    ngOnInit() {
        if (!this.student) {
            let id = +this._routeParams.get('id');
            // this.pageTitle += `: ${id}`;
            this.getStudent(id);
        }
    }

 
    getStudent(id: number) {
        this._studentService.getStudent(id).subscribe(
            student => this.student = student,
            error => this.errorMessage = <any>error);
    }

    onBack(): void {
        this._router.navigate(['Students']);
    }

    updateStudentEvent()
    {
        this._studentService.updateStudent(this.student).
        subscribe(
            (response:Response)=>{this._router.navigate(['Students']);console.log('updated Successfully!!'); },
            function(error) { console.log("Error happened" + error)},
   function() { console.log("the subscription is completed");
              });
       // alert("Done!!!");
        // this._router.navigate(['Students']);
    }


}
