export class ResponseHandler<T>{

    status:number;
    success:boolean;
    data:T;
    message:string

    constructor(status:number,success:boolean,data:T,message:string){
        this.status=status
        this.success=success
        this.data = data
        this.message=message
    }
}