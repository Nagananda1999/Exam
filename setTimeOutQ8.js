//Q8 In what order will the numbers 1-4 be logged to the console when the code below is executed? Why?

(function() {

    console.log(1); //This is a regular synchronous function call, so it will be executed immediately, logging "1" to the console first.

    setTimeout(function(){console.log(2)}, 1000); //This sets up a timer to execute the function after a delay of 1000 milliseconds (1 second). However, since this is asynchronous, the rest of the code continues executing without waiting for the timer to finish. So, "4" will be logged before the timer reaches 1 second.

    setTimeout(function(){console.log(3)}, 0); //This sets up a timer to execute the function after a delay of 0 milliseconds. Although it's tempting to think that it will log "3" immediately, it's not the case. Even though the delay is set to 0, this callback is still queued in the event loop after the current code has finished executing. Since the current code is synchronous and has not completed yet, "3" will be logged after "4".

    console.log(4);//This is another regular synchronous function call, and it will log "4" to the console after "1" but before the two timeouts are executed.

})();

// Final Output
// 1
// 4
// 3
// 2