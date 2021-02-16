//function middleware validate
exports.validateProduct = function(req, res, next){
    let isVlid = true;

    if(req.body.name.trim().lenght < 2){
        isVlid = false;
    }else if(!req.body.imageUrl){
        isVlid = false;
    }

    if(isVlid){
        next();
    }
}