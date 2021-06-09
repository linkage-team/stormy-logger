"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Logger = void 0;

require("./types/types");

var _chalk = _interopRequireDefault(require("chalk"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var Logger = /*#__PURE__*/function () {
  function Logger() {
    var scope = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;

    _classCallCheck(this, Logger);

    _defineProperty(this, "scope", void 0);

    _defineProperty(this, "logType", null);

    this.scope = scope;
  }

  _createClass(Logger, [{
    key: "log",
    value: function log() {
      var value = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
      var logType = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
      this.logType = logType;
      if (!value) return; // if no value to print return
      // if no scope directly print value

      if (!this.scope) this.write(value);else {
        var formatedOutput = "".concat(this.scope, ": ").concat(value);
        this.write(formatedOutput);
      }
    } // write function that will be used to print out values

  }, {
    key: "write",
    value: function write(value) {
      var colorFn = function colorFn(v) {
        return v;
      };

      if (this.logType === "error") colorFn = _chalk["default"].red;
      if (this.logType === "info") colorFn = _chalk["default"].blue;
      if (this.logType === "warn") colorFn = _chalk["default"].yellow;
      if (!this.logType) colorFn = _chalk["default"].reset;
      console.log(colorFn(value));
    }
  }]);

  return Logger;
}();

exports.Logger = Logger;
var logger = new Logger();
logger.log("mwana wumunyarwanda");
var l2 = new Logger("dev");
l2.log("mwaaa");
l2.log();
l2.log("");
var l3 = new Logger("dev");
l3.log("error", "error");
l3.log("warn", "warn");
l3.log("info", "info");
var strJson = "\n{\n  \"glossary\": {\n      \"title\": \"example glossary\",\n  \"GlossDiv\": {\n          \"title\": \"S\",\n    \"GlossList\": {\n              \"GlossEntry\": {\n                  \"ID\": \"SGML\",\n        \"SortAs\": \"SGML\",\n        \"GlossTerm\": \"Standard Generalized Markup Language\",\n        \"Acronym\": \"SGML\",\n        \"Abbrev\": \"ISO 8879:1986\",\n        \"GlossDef\": {\n                      \"para\": \"A meta-markup language, used to create markup languages such as DocBook.\",\n          \"GlossSeeAlso\": [\"GML\", \"XML\"]\n                  },\n        \"GlossSee\": \"markup\"\n              }\n          }\n      }\n  }\n}";
l3.log(strJson);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9Mb2dnZXIudHMiXSwibmFtZXMiOlsiTG9nZ2VyIiwic2NvcGUiLCJ2YWx1ZSIsImxvZ1R5cGUiLCJ3cml0ZSIsImZvcm1hdGVkT3V0cHV0IiwiY29sb3JGbiIsInYiLCJjaGFsayIsInJlZCIsImJsdWUiLCJ5ZWxsb3ciLCJyZXNldCIsImNvbnNvbGUiLCJsb2ciLCJsb2dnZXIiLCJsMiIsImwzIiwic3RySnNvbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBOztBQUNBOzs7Ozs7Ozs7Ozs7SUFFYUEsTTtBQUlYLG9CQUFxQztBQUFBLFFBQXpCQyxLQUF5Qix1RUFBTixJQUFNOztBQUFBOztBQUFBOztBQUFBLHFDQUZWLElBRVU7O0FBQ25DLFNBQUtBLEtBQUwsR0FBYUEsS0FBYjtBQUNEOzs7O1dBRUQsZUFBNEQ7QUFBQSxVQUF4REMsS0FBd0QsdUVBQXJDLElBQXFDO0FBQUEsVUFBL0JDLE9BQStCLHVFQUFaLElBQVk7QUFDMUQsV0FBS0EsT0FBTCxHQUFlQSxPQUFmO0FBRUEsVUFBSSxDQUFDRCxLQUFMLEVBQVksT0FIOEMsQ0FHdEM7QUFFcEI7O0FBQ0EsVUFBSSxDQUFDLEtBQUtELEtBQVYsRUFBaUIsS0FBS0csS0FBTCxDQUFXRixLQUFYLEVBQWpCLEtBQ0s7QUFDSCxZQUFNRyxjQUFjLGFBQU0sS0FBS0osS0FBWCxlQUFxQkMsS0FBckIsQ0FBcEI7QUFDQSxhQUFLRSxLQUFMLENBQVdDLGNBQVg7QUFDRDtBQUNGLEssQ0FFRDs7OztXQUNBLGVBQWNILEtBQWQsRUFBbUM7QUFDakMsVUFBSUksT0FBTyxHQUFHLGlCQUFvQkMsQ0FBcEI7QUFBQSxlQUFnQ0EsQ0FBaEM7QUFBQSxPQUFkOztBQUVBLFVBQUksS0FBS0osT0FBTCxLQUFpQixPQUFyQixFQUE4QkcsT0FBTyxHQUFHRSxrQkFBTUMsR0FBaEI7QUFDOUIsVUFBSSxLQUFLTixPQUFMLEtBQWlCLE1BQXJCLEVBQTZCRyxPQUFPLEdBQUdFLGtCQUFNRSxJQUFoQjtBQUM3QixVQUFJLEtBQUtQLE9BQUwsS0FBaUIsTUFBckIsRUFBNkJHLE9BQU8sR0FBR0Usa0JBQU1HLE1BQWhCO0FBQzdCLFVBQUksQ0FBQyxLQUFLUixPQUFWLEVBQW1CRyxPQUFPLEdBQUdFLGtCQUFNSSxLQUFoQjtBQUVuQkMsTUFBQUEsT0FBTyxDQUFDQyxHQUFSLENBQVlSLE9BQU8sQ0FBQ0osS0FBRCxDQUFuQjtBQUNEOzs7Ozs7O0FBR0gsSUFBTWEsTUFBTSxHQUFHLElBQUlmLE1BQUosRUFBZjtBQUNBZSxNQUFNLENBQUNELEdBQVAsQ0FBVyxxQkFBWDtBQUVBLElBQU1FLEVBQUUsR0FBRyxJQUFJaEIsTUFBSixDQUFXLEtBQVgsQ0FBWDtBQUNBZ0IsRUFBRSxDQUFDRixHQUFILENBQU8sT0FBUDtBQUNBRSxFQUFFLENBQUNGLEdBQUg7QUFDQUUsRUFBRSxDQUFDRixHQUFILENBQU8sRUFBUDtBQUVBLElBQU1HLEVBQUUsR0FBRyxJQUFJakIsTUFBSixDQUFXLEtBQVgsQ0FBWDtBQUNBaUIsRUFBRSxDQUFDSCxHQUFILENBQU8sT0FBUCxFQUFnQixPQUFoQjtBQUVBRyxFQUFFLENBQUNILEdBQUgsQ0FBTyxNQUFQLEVBQWUsTUFBZjtBQUVBRyxFQUFFLENBQUNILEdBQUgsQ0FBTyxNQUFQLEVBQWUsTUFBZjtBQUVBLElBQU1JLE9BQU8sdXBCQUFiO0FBd0JBRCxFQUFFLENBQUNILEdBQUgsQ0FBT0ksT0FBUCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBcIi4vdHlwZXMvdHlwZXNcIjtcbmltcG9ydCBjaGFsayBmcm9tIFwiY2hhbGtcIjtcblxuZXhwb3J0IGNsYXNzIExvZ2dlciB7XG4gIHByaXZhdGUgc2NvcGU6IFZhbHVlVHlwZTtcbiAgcHJpdmF0ZSBsb2dUeXBlOiBMb2dUeXBlID0gbnVsbDtcblxuICBjb25zdHJ1Y3RvcihzY29wZTogVmFsdWVUeXBlID0gbnVsbCkge1xuICAgIHRoaXMuc2NvcGUgPSBzY29wZTtcbiAgfVxuXG4gIGxvZyh2YWx1ZTogVmFsdWVUeXBlID0gbnVsbCwgbG9nVHlwZTogTG9nVHlwZSA9IG51bGwpOiB2b2lkIHtcbiAgICB0aGlzLmxvZ1R5cGUgPSBsb2dUeXBlO1xuXG4gICAgaWYgKCF2YWx1ZSkgcmV0dXJuOyAvLyBpZiBubyB2YWx1ZSB0byBwcmludCByZXR1cm5cblxuICAgIC8vIGlmIG5vIHNjb3BlIGRpcmVjdGx5IHByaW50IHZhbHVlXG4gICAgaWYgKCF0aGlzLnNjb3BlKSB0aGlzLndyaXRlKHZhbHVlKTtcbiAgICBlbHNlIHtcbiAgICAgIGNvbnN0IGZvcm1hdGVkT3V0cHV0ID0gYCR7dGhpcy5zY29wZX06ICR7dmFsdWV9YDtcbiAgICAgIHRoaXMud3JpdGUoZm9ybWF0ZWRPdXRwdXQpO1xuICAgIH1cbiAgfVxuXG4gIC8vIHdyaXRlIGZ1bmN0aW9uIHRoYXQgd2lsbCBiZSB1c2VkIHRvIHByaW50IG91dCB2YWx1ZXNcbiAgcHJpdmF0ZSB3cml0ZSh2YWx1ZTogc3RyaW5nKTogdm9pZCB7XG4gICAgbGV0IGNvbG9yRm4gPSA8VCBleHRlbmRzIHVua25vd24+KHY6IFQpOiBUID0+IHY7XG5cbiAgICBpZiAodGhpcy5sb2dUeXBlID09PSBcImVycm9yXCIpIGNvbG9yRm4gPSBjaGFsay5yZWQ7XG4gICAgaWYgKHRoaXMubG9nVHlwZSA9PT0gXCJpbmZvXCIpIGNvbG9yRm4gPSBjaGFsay5ibHVlO1xuICAgIGlmICh0aGlzLmxvZ1R5cGUgPT09IFwid2FyblwiKSBjb2xvckZuID0gY2hhbGsueWVsbG93O1xuICAgIGlmICghdGhpcy5sb2dUeXBlKSBjb2xvckZuID0gY2hhbGsucmVzZXQ7XG5cbiAgICBjb25zb2xlLmxvZyhjb2xvckZuKHZhbHVlKSk7XG4gIH1cbn1cblxuY29uc3QgbG9nZ2VyID0gbmV3IExvZ2dlcigpO1xubG9nZ2VyLmxvZyhcIm13YW5hIHd1bXVueWFyd2FuZGFcIik7XG5cbmNvbnN0IGwyID0gbmV3IExvZ2dlcihcImRldlwiKTtcbmwyLmxvZyhcIm13YWFhXCIpO1xubDIubG9nKCk7XG5sMi5sb2coXCJcIik7XG5cbmNvbnN0IGwzID0gbmV3IExvZ2dlcihcImRldlwiKTtcbmwzLmxvZyhcImVycm9yXCIsIFwiZXJyb3JcIik7XG5cbmwzLmxvZyhcIndhcm5cIiwgXCJ3YXJuXCIpO1xuXG5sMy5sb2coXCJpbmZvXCIsIFwiaW5mb1wiKTtcblxuY29uc3Qgc3RySnNvbiA9IGBcbntcbiAgXCJnbG9zc2FyeVwiOiB7XG4gICAgICBcInRpdGxlXCI6IFwiZXhhbXBsZSBnbG9zc2FyeVwiLFxuICBcIkdsb3NzRGl2XCI6IHtcbiAgICAgICAgICBcInRpdGxlXCI6IFwiU1wiLFxuICAgIFwiR2xvc3NMaXN0XCI6IHtcbiAgICAgICAgICAgICAgXCJHbG9zc0VudHJ5XCI6IHtcbiAgICAgICAgICAgICAgICAgIFwiSURcIjogXCJTR01MXCIsXG4gICAgICAgIFwiU29ydEFzXCI6IFwiU0dNTFwiLFxuICAgICAgICBcIkdsb3NzVGVybVwiOiBcIlN0YW5kYXJkIEdlbmVyYWxpemVkIE1hcmt1cCBMYW5ndWFnZVwiLFxuICAgICAgICBcIkFjcm9ueW1cIjogXCJTR01MXCIsXG4gICAgICAgIFwiQWJicmV2XCI6IFwiSVNPIDg4Nzk6MTk4NlwiLFxuICAgICAgICBcIkdsb3NzRGVmXCI6IHtcbiAgICAgICAgICAgICAgICAgICAgICBcInBhcmFcIjogXCJBIG1ldGEtbWFya3VwIGxhbmd1YWdlLCB1c2VkIHRvIGNyZWF0ZSBtYXJrdXAgbGFuZ3VhZ2VzIHN1Y2ggYXMgRG9jQm9vay5cIixcbiAgICAgICAgICBcIkdsb3NzU2VlQWxzb1wiOiBbXCJHTUxcIiwgXCJYTUxcIl1cbiAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgIFwiR2xvc3NTZWVcIjogXCJtYXJrdXBcIlxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgfVxuICB9XG59YDtcblxubDMubG9nKHN0ckpzb24pO1xuIl19