/// <reference path="../typings/index.d.ts" />
"use strict";
var sink_1 = require("./sink");
var source_1 = require("./source");
exports.Source = source_1.AyluSource;
exports.sinks = {
    Console: sink_1.ConsoleSink,
    File: sink_1.FileSink
};
var Aylu = (function () {
    function Aylu() {
        this.sinks = [];
        this.sources = [];
    }
    ;
    Aylu.prototype.addSink = function (sink) {
        this.sinks.push(sink);
        for (var _i = 0, _a = this.sources; _i < _a.length; _i++) {
            var source = _a[_i];
            source.on("aylu-debug", sink.write);
            source.on("aylu-info", sink.write);
            source.on("aylu-warn", sink.write);
            source.on("aylu-error", sink.write);
            source.on("aylu-fatal", sink.write);
        }
    };
    ;
    Aylu.prototype.addSource = function (source) {
        this.sources.push(source);
        for (var _i = 0, _a = this.sinks; _i < _a.length; _i++) {
            var sink = _a[_i];
            source.on("aylu-debug", sink.write);
            source.on("aylu-info", sink.write);
            source.on("aylu-warn", sink.write);
            source.on("aylu-error", sink.write);
            source.on("aylu-fatal", sink.write);
        }
    };
    ;
    return Aylu;
}());
exports.Aylu = Aylu;
;
