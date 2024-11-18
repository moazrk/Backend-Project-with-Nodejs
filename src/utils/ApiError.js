//we have made a file which standardizes how APIerrors will occur


class ApiError extends Error
{
    constructor (statusCode, message="sth went wrong", errors= [], stack=""
      ) {

        super(message)
        this.statusCode= statusCode
        this.data = null
        this.message=message
        this.success=false  //success code wont go because we 
                             //are anfling APierrors. if someone detects success flag it will be false   

        this.errors=errors

        //stack trace
        if(stack){
            this.stack=stack

        }

        else{
            Error.captureStackTrace(this,this.constructor)
        }
      }
}

export {ApiError}