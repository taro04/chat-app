import * as moment from 'moment'

export class User {
    uid: number
    name: string

    constructor(num1:number, str2:string){
        this.uid = num1
        this.name = str2
    }
}

export class Comment {
    user: User
    initial: string
    content: string
    date: number

    constructor(usr:User, str2:string){
        this.user = usr
        this.initial = usr.name.slice(0,1)
        this.content = str2
        this.date = +moment();
    }
}
