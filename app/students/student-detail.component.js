System.register(['angular2/core', 'angular2/router', './student.service'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, router_1, student_service_1;
    var StudentDetailComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (student_service_1_1) {
                student_service_1 = student_service_1_1;
            }],
        execute: function() {
            StudentDetailComponent = (function () {
                function StudentDetailComponent(_studentService, _router, _routeParams) {
                    this._studentService = _studentService;
                    this._router = _router;
                    this._routeParams = _routeParams;
                    this.pageTitle = 'Student Detail';
                }
                StudentDetailComponent.prototype.ngOnInit = function () {
                    if (!this.student) {
                        var id = +this._routeParams.get('id');
                        // this.pageTitle += `: ${id}`;
                        this.getStudent(id);
                    }
                };
                StudentDetailComponent.prototype.getStudent = function (id) {
                    var _this = this;
                    this._studentService.getStudent(id).subscribe(function (student) { return _this.student = student; }, function (error) { return _this.errorMessage = error; });
                };
                StudentDetailComponent.prototype.onBack = function () {
                    this._router.navigate(['Students']);
                };
                StudentDetailComponent.prototype.updateStudentEvent = function () {
                    var _this = this;
                    this._studentService.updateStudent(this.student).
                        subscribe(function (response) { _this._router.navigate(['Students']); console.log('updated Successfully!!'); }, function (error) { console.log("Error happened" + error); }, function () {
                        console.log("the subscription is completed");
                    });
                    // alert("Done!!!");
                    // this._router.navigate(['Students']);
                };
                StudentDetailComponent = __decorate([
                    core_1.Component({
                        templateUrl: 'app/students/student-detail.component.html'
                    }), 
                    __metadata('design:paramtypes', [student_service_1.StudentService, router_1.Router, router_1.RouteParams])
                ], StudentDetailComponent);
                return StudentDetailComponent;
            }());
            exports_1("StudentDetailComponent", StudentDetailComponent);
        }
    }
});
//# sourceMappingURL=student-detail.component.js.map