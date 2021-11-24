function receivesAFunction(callback) {
    callback("Workd")
} 

callback = (word) => console.log(`Hello, ${word}`);


function returnsANamedFunction() {
    function returnMe(){
        console.log('Thank you for return me back')
    };

    return returnMe;
};

returnsANamedFunction

function returnsAnAnonymousFunction() {
    return function () {console.log("No Name")}
}