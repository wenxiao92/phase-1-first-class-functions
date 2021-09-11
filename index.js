function receivesAFunction(callBack){
    callBack();
}

function returnsANamedFunction(){
    return receivesAFunction
}

function returnsAnAnonymousFunction(){
    return function() {
    }
}