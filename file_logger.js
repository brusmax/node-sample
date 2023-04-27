var fs = require('fs');
/**
File logger module for Cobalt Logger Library
**/
Class('FileLogger')({
    prototype: {
        writeStream: null,

        init: function (config) {
            Object.keys(config).forEach(function (property) {
                this[property] = config[property];
            }, this);

            this._openStream();
        },

        log: function () {
            var args = Array.prototype.slice.call(arguments, 0);
            args.forEach(function (item) {
                item.processPid = process.pid;
                this.writeStream.write(Cobalt.stringify(item) + '\n');
            }, this);
        },

        _openStream: function () {
            this.writeStream = fs.createWriteStream(this.file, {flags: 'a'});
        },

        _closeStream: function () {
            this.writeStream.end();
        }
    }
});
