

var handler = require("./handler"); //importing handler file
var event = require("events");
var emitter = new event.EventEmitter();


var account = function(amount) {
    balance = amount;

    function getBalance() {
        return balance;
    };

    function withdraw(amount) {
        balance -= amount;
        validate();
    };


    function deposit(amount) {
        balance += amount;
        moniter();
    };

    function validate() {
        if(balance<500)
        {
            emitter.emit("lowFund");
        }
        if(balance>10000)
        {
            emitter.emit("limitExtended");
        }
    };

    return {
        getBalance:getBalance,
        withdraw:withdraw,
        deposit:deposit
    };
};

emitter.on("lowFund",handler.lowFund);
emitter.on("lowFund",handler.sendEmail);

emitter.on("limitExtended",handler.limitExtended);

var aj123 = new account(5000);
console.log("Balance : "+aj123.getBalance());
aj123.withdraw(4600);
console.log("Balance : "+aj123.getBalance());
aj123.deposit(10000);
console.log("Balance : "+aj123.getBalance());
