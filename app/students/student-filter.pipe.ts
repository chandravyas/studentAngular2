import {  PipeTransform, Pipe } from 'angular2/core';
import { IStudent } from './student';

@Pipe({
    name: 'studentFilter', pure: false
})
export class StudentFilterPipe implements PipeTransform {

    transform(value: IStudent[], ...args: string[]): IStudent[] {
        let filter: string = args[0] ? args[0].toLocaleLowerCase() : null;
        return filter ? value.filter((student: IStudent) =>
            student.name.toLocaleLowerCase().indexOf(filter) !== -1) : value;
    }
}
