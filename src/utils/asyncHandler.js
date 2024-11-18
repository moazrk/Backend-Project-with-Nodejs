//this is the same wrapper function but with promises instead of try catch

const asyncHandler = (requestHandler) => {

        (req,res,next) => {
            Promise
            
            .resolve(requestHandler(req,res,next))
            
            .catch((err) => next(err))
        }


}

export {asyncHandler}

/* This is a wrapper function which will be used everywhere with try catch


const asyncHandlerr = (fn) => async(req,res,next) => {
    try {
        await fn(req,res,next)
    } catch (error) {
        res.status(err.code || 500).json({ 
            success:false,
            message: err.message
        })
    }
}
*/

