global.FILE_LOGGER = "./cobalt_logger.log";
const fs = require('fs');
require('cobalt-log');
require('./file_logger.js');
require('./clean_logger_file.js');

// Create Cobalt instance
this.logger = new Cobalt.Console({
    from : "Cobalt Logger:",
    _color: "green",
    loggers : [ new Cobalt.Logger.JsConsole({
        formatter : Cobalt.Formatter.Token,
        formatterOpts : {
            formatString : "{{_from}}: {{message}}",
            ansiColor : true
        }
    })]
});
    
// Create Cobalt instance to save into a file
this.fileLogger = new Cobalt.Console({
    from: 'Cobalt File Logger:',
    loggers: [
        new FileLogger({
            file: FILE_LOGGER
        })
    ]
});

this.logger.log("Testing Logger options");
this.fileLogger.log("Testing Logger options");
// Test API - the ones that are used currently on place-it github respos
this.logger.log("log()");
this.logger.info("info()");
this.logger.notice("notice()");
this.logger.warn("warn()");
this.logger.error("error()");
this.logger.log("now(): ", this.logger.now());
this.fileLogger.log("now()", this.logger.now());