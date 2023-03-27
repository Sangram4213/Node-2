const EventEmitter = require("events");

//const emitter = new EventEmitter();

const Logger = require("./logger");

const logger = new Logger();
logger.on("messageLogged", (argv) => {
  console.log("Listener caled", argv);
});
logger.log("message");
