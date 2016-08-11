System.register(['angular2/core', 'angular2/router', './student.service', './student-filter.pipe', "./orderBy", "./format"], function(exports_1, context_1) {
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
    var core_1, router_1, student_service_1, student_filter_pipe_1, orderBy_1, format_1;
    var StudentListComponent;
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
            },
            function (student_filter_pipe_1_1) {
                student_filter_pipe_1 = student_filter_pipe_1_1;
            },
            function (orderBy_1_1) {
                orderBy_1 = orderBy_1_1;
            },
            function (format_1_1) {
                format_1 = format_1_1;
            }],
        execute: function() {
            StudentListComponent = (function () {
                function StudentListComponent(_studentService) {
                    this._studentService = _studentService;
                    this.pageTitle = 'Student List';
                    this.listFilter = '';
                    this.columns = [
                        {
                            display: 'studentId',
                            variable: 'studentId',
                            filter: 'number' //The type data type of the column (number, text, date, etc.)
                        },
                        {
                            display: 'studentFirstName',
                            variable: 'studentFirstName',
                            filter: 'text' //The type data type of the column (number, text, date, etc.)
                        },
                        {
                            display: 'studentLastName',
                            variable: 'studentLastName',
                            filter: 'text' //The type data type of the column (number, text, date, etc.)
                        },
                        {
                            display: 'studentTimestamp',
                            variable: 'studentTimestamp',
                            filter: 'dateTime' //The type data type of the column (number, text, date, etc.)
                        }
                    ];
                    this.sort = {
                        column: 'studentId',
                        descending: false
                    };
                }
                StudentListComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    this._studentService.getStudents()
                        .subscribe(function (students) { return _this.students = students; }, function (error) { return _this.errorMessage = error; });
                };
                StudentListComponent.prototype.selectedClass = function (columnName) {
                    return columnName == this.sort.column ? 'sort-' + this.sort.descending : 'false';
                };
                StudentListComponent.prototype.changeSorting = function (columnName) {
                    var sort = this.sort;
                    if (sort.column == columnName) {
                        sort.descending = !sort.descending;
                    }
                    else {
                        sort.column = columnName;
                        sort.descending = false;
                    }
                };
                StudentListComponent.prototype.convertSorting = function () {
                    return this.sort.descending ? '-' + this.sort.column : this.sort.column;
                };
                StudentListComponent = __decorate([
                    core_1.Component({
                        templateUrl: 'app/students/student-list.component.html',
                        styleUrls: ['app/students/student-list.component.css'],
                        pipes: [student_filter_pipe_1.StudentFilterPipe, orderBy_1.OrderBy, format_1.Format],
                        directives: [router_1.ROUTER_DIRECTIVES]
                    }), 
                    __metadata('design:paramtypes', [student_service_1.StudentService])
                ], StudentListComponent);
                return StudentListComponent;
            }());
            exports_1("StudentListComponent", StudentListComponent);
        }
    }
});
//# sourceMappingURL=student-list.component.js.map