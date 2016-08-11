import { Component } from 'angular2/core';
import { HTTP_PROVIDERS } from 'angular2/http';
import 'rxjs/Rx';   // Load all features
import { ROUTER_PROVIDERS, RouteConfig, ROUTER_DIRECTIVES } from 'angular2/router';

import { StudentListComponent } from './students/student-list.component';
import { StudentService } from './students/student.service';
import { StudentDetailComponent } from './students/student-detail.component';

@Component({
    selector: 'sm-app',
    template: `
    <div>
        <nav class='navbar navbar-default'>
            <div class='container-fluid'>
                <a class='navbar-brand'>{{pageTitle}}</a>
                <ul class='nav navbar-nav'>
                    <li><a [routerLink]="['Students']">Student List</a></li>
                </ul>
            </div>
        </nav>
        <div class='container'>
            <router-outlet></router-outlet>
        </div>
     </div>
     `,
    directives: [ROUTER_DIRECTIVES],
    providers: [StudentService,
                HTTP_PROVIDERS,
                ROUTER_PROVIDERS]
})
@RouteConfig([
    { path: '/students', name: 'Students', component: StudentListComponent },
    { path: '/student/:id', name: 'StudentDetail', component: StudentDetailComponent }
])
export class AppComponent {
    pageTitle: string = 'Students Management';
}