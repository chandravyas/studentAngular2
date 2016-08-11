/* Defines the student entity */
export interface IStudent {
    id: number;
    name: string;
    department: string;
    programtype: string;
    yearjoined: number;
    yearcomplete: number;
}

export class Student implements IStudent {
     id: number;
    name: string;
    department: string;
    programtype: string;
    yearjoined: number;
    yearcomplete: number;


}

