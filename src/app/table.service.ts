import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class TableService{
    CourseService(): any[]{
        throw new Error("Method not implemented");
    }
    constructor() {}

    getTika(){
        return[
            {id:0, hobby:"Bersepeda", ket:"Bersepeda membuat badan sehat dan bugar"},
            {id:1, hobby:"Traveling", ket:"Traveling membuat kita happy dan awet muda"},
            {id:2, hobby:"Nonton Film", ket:"Karena sangan menghibur"}
        ]
    }
}