//Logger Rate Limiter
//Design a logger system that receives a stream of messages
//along with their timestamps. Each unique message should
//one be printed 'at most every 10seconds(i.e message printed
// at timestamp t will prevent other identical messages from
// being printed until timestamp t +10)
// all messages will come in chronological order. Several messages
//may arrive at the same timestamp
//Implement the Logger class:
//-Logger( ) initializes the logger object
//-bool shouldPrintMessage(int timestamp, string message)
//Returns 'true' if the 'message' should be printed in the given
//timestamp, otherwise returns 'false'

//Input
//["Logger, "shouldPrintMessage, "shouldPrintMessage",
//  "shouldPrintMessage", "shouldPrintMessage",
//  "shouldPrintMessage", "shouldPrintMessage"]
//[[], [1, "foo"], [2,"bar"], [3, "foo"], [8, "bar"], [10, 'foo], [11, "foo"]]

var Logger = function(){
    //map the message and time
    this.printed = new Map();
}

/**
 * Returns true if message should be printed in the given timestamp, other
 * otherwise returns false 
 *      If the this method returls fase, the message will not be printed
 *      The timestamp is in seconds granularity
 */

Logger.prototype.shouldPrintMessage = function(timestamp, message){
    if(this.printed.has(message)){
        const last = this.printed.get(message)
        if (timestamp - last < 10){
            return false
        } 
    }
    
        this.printed.set(message, timestamp)
        return true
    

}

console.log(Logger.prototype.shouldPrintMessage([[], [1, "foo"], [2, "bar"], [3, "foo"], [8, "bar"], [10, "foo"], [11, "foo"]]))
/**
 * Your Logger object will be instantiated and called as such:
 * var obj = new Logger()
 * var param_1 = obj.shouldPrintMessage(timestamp, message)
 */