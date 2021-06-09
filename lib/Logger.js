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

      if (this.logType === 'error') colorFn = _chalk["default"].red;
      if (this.logType === 'info') colorFn = _chalk["default"].blue;
      if (this.logType === 'warn') colorFn = _chalk["default"].yellow;
      if (!this.logType) colorFn = _chalk["default"].reset;
      console.log(colorFn(value));
    }
  }]);

  return Logger;
}();

exports.Logger = Logger;
var logger = new Logger();
logger.log('mwana wumunyarwanda');
var l2 = new Logger('dev');
l2.log('mwaaa');
l2.log();
l2.log('');
var l3 = new Logger('dev');
l3.log('error', 'error');
l3.log('warn', 'warn');
l3.log('info', 'info');
var strJson = "\n{\n  \"glossary\": {\n      \"title\": \"example glossary\",\n  \"GlossDiv\": {\n          \"title\": \"S\",\n    \"GlossList\": {\n              \"GlossEntry\": {\n                  \"ID\": \"SGML\",\n        \"SortAs\": \"SGML\",\n        \"GlossTerm\": \"Standard Generalized Markup Language\",\n        \"Acronym\": \"SGML\",\n        \"Abbrev\": \"ISO 8879:1986\",\n        \"GlossDef\": {\n                      \"para\": \"A meta-markup language, used to create markup languages such as DocBook.\",\n          \"GlossSeeAlso\": [\"GML\", \"XML\"]\n                  },\n        \"GlossSee\": \"markup\"\n              }\n          }\n      }\n  }\n}";
l3.log(strJson);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9Mb2dnZXIudHMiXSwibmFtZXMiOlsiTG9nZ2VyIiwic2NvcGUiLCJ2YWx1ZSIsImxvZ1R5cGUiLCJ3cml0ZSIsImZvcm1hdGVkT3V0cHV0IiwiY29sb3JGbiIsInYiLCJjaGFsayIsInJlZCIsImJsdWUiLCJ5ZWxsb3ciLCJyZXNldCIsImNvbnNvbGUiLCJsb2ciLCJsb2dnZXIiLCJsMiIsImwzIiwic3RySnNvbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBOztBQUNBOzs7Ozs7Ozs7Ozs7SUFFYUEsTTtBQUlULG9CQUFxQztBQUFBLFFBQXpCQyxLQUF5Qix1RUFBTixJQUFNOztBQUFBOztBQUFBOztBQUFBLHFDQUZWLElBRVU7O0FBQ2pDLFNBQUtBLEtBQUwsR0FBYUEsS0FBYjtBQUNIOzs7O1dBRUQsZUFBNEQ7QUFBQSxVQUF4REMsS0FBd0QsdUVBQXJDLElBQXFDO0FBQUEsVUFBL0JDLE9BQStCLHVFQUFaLElBQVk7QUFDeEQsV0FBS0EsT0FBTCxHQUFlQSxPQUFmO0FBRUEsVUFBSSxDQUFDRCxLQUFMLEVBQVksT0FINEMsQ0FHcEM7QUFFcEI7O0FBQ0EsVUFBSSxDQUFDLEtBQUtELEtBQVYsRUFBaUIsS0FBS0csS0FBTCxDQUFXRixLQUFYLEVBQWpCLEtBQ0s7QUFDRCxZQUFNRyxjQUFjLGFBQU0sS0FBS0osS0FBWCxlQUFxQkMsS0FBckIsQ0FBcEI7QUFDQSxhQUFLRSxLQUFMLENBQVdDLGNBQVg7QUFDSDtBQUNKLEssQ0FFRDs7OztXQUNBLGVBQWNILEtBQWQsRUFBbUM7QUFDL0IsVUFBSUksT0FBTyxHQUFHLGlCQUFvQkMsQ0FBcEI7QUFBQSxlQUFnQ0EsQ0FBaEM7QUFBQSxPQUFkOztBQUVBLFVBQUksS0FBS0osT0FBTCxLQUFpQixPQUFyQixFQUE4QkcsT0FBTyxHQUFHRSxrQkFBTUMsR0FBaEI7QUFDOUIsVUFBSSxLQUFLTixPQUFMLEtBQWlCLE1BQXJCLEVBQTZCRyxPQUFPLEdBQUdFLGtCQUFNRSxJQUFoQjtBQUM3QixVQUFJLEtBQUtQLE9BQUwsS0FBaUIsTUFBckIsRUFBNkJHLE9BQU8sR0FBR0Usa0JBQU1HLE1BQWhCO0FBQzdCLFVBQUksQ0FBQyxLQUFLUixPQUFWLEVBQW1CRyxPQUFPLEdBQUdFLGtCQUFNSSxLQUFoQjtBQUVuQkMsTUFBQUEsT0FBTyxDQUFDQyxHQUFSLENBQVlSLE9BQU8sQ0FBQ0osS0FBRCxDQUFuQjtBQUNIOzs7Ozs7O0FBR0wsSUFBTWEsTUFBTSxHQUFHLElBQUlmLE1BQUosRUFBZjtBQUNBZSxNQUFNLENBQUNELEdBQVAsQ0FBVyxxQkFBWDtBQUVBLElBQU1FLEVBQUUsR0FBRyxJQUFJaEIsTUFBSixDQUFXLEtBQVgsQ0FBWDtBQUNBZ0IsRUFBRSxDQUFDRixHQUFILENBQU8sT0FBUDtBQUNBRSxFQUFFLENBQUNGLEdBQUg7QUFDQUUsRUFBRSxDQUFDRixHQUFILENBQU8sRUFBUDtBQUVBLElBQU1HLEVBQUUsR0FBRyxJQUFJakIsTUFBSixDQUFXLEtBQVgsQ0FBWDtBQUNBaUIsRUFBRSxDQUFDSCxHQUFILENBQU8sT0FBUCxFQUFnQixPQUFoQjtBQUVBRyxFQUFFLENBQUNILEdBQUgsQ0FBTyxNQUFQLEVBQWUsTUFBZjtBQUVBRyxFQUFFLENBQUNILEdBQUgsQ0FBTyxNQUFQLEVBQWUsTUFBZjtBQUVBLElBQU1JLE9BQU8sdXBCQUFiO0FBd0JBRCxFQUFFLENBQUNILEdBQUgsQ0FBT0ksT0FBUCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAnLi90eXBlcy90eXBlcyc7XG5pbXBvcnQgY2hhbGsgZnJvbSAnY2hhbGsnO1xuXG5leHBvcnQgY2xhc3MgTG9nZ2VyIHtcbiAgICBwcml2YXRlIHNjb3BlOiBWYWx1ZVR5cGU7XG4gICAgcHJpdmF0ZSBsb2dUeXBlOiBMb2dUeXBlID0gbnVsbDtcblxuICAgIGNvbnN0cnVjdG9yKHNjb3BlOiBWYWx1ZVR5cGUgPSBudWxsKSB7XG4gICAgICAgIHRoaXMuc2NvcGUgPSBzY29wZTtcbiAgICB9XG5cbiAgICBsb2codmFsdWU6IFZhbHVlVHlwZSA9IG51bGwsIGxvZ1R5cGU6IExvZ1R5cGUgPSBudWxsKTogdm9pZCB7XG4gICAgICAgIHRoaXMubG9nVHlwZSA9IGxvZ1R5cGU7XG5cbiAgICAgICAgaWYgKCF2YWx1ZSkgcmV0dXJuOyAvLyBpZiBubyB2YWx1ZSB0byBwcmludCByZXR1cm5cblxuICAgICAgICAvLyBpZiBubyBzY29wZSBkaXJlY3RseSBwcmludCB2YWx1ZVxuICAgICAgICBpZiAoIXRoaXMuc2NvcGUpIHRoaXMud3JpdGUodmFsdWUpO1xuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGNvbnN0IGZvcm1hdGVkT3V0cHV0ID0gYCR7dGhpcy5zY29wZX06ICR7dmFsdWV9YDtcbiAgICAgICAgICAgIHRoaXMud3JpdGUoZm9ybWF0ZWRPdXRwdXQpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLy8gd3JpdGUgZnVuY3Rpb24gdGhhdCB3aWxsIGJlIHVzZWQgdG8gcHJpbnQgb3V0IHZhbHVlc1xuICAgIHByaXZhdGUgd3JpdGUodmFsdWU6IHN0cmluZyk6IHZvaWQge1xuICAgICAgICBsZXQgY29sb3JGbiA9IDxUIGV4dGVuZHMgdW5rbm93bj4odjogVCk6IFQgPT4gdjtcblxuICAgICAgICBpZiAodGhpcy5sb2dUeXBlID09PSAnZXJyb3InKSBjb2xvckZuID0gY2hhbGsucmVkO1xuICAgICAgICBpZiAodGhpcy5sb2dUeXBlID09PSAnaW5mbycpIGNvbG9yRm4gPSBjaGFsay5ibHVlO1xuICAgICAgICBpZiAodGhpcy5sb2dUeXBlID09PSAnd2FybicpIGNvbG9yRm4gPSBjaGFsay55ZWxsb3c7XG4gICAgICAgIGlmICghdGhpcy5sb2dUeXBlKSBjb2xvckZuID0gY2hhbGsucmVzZXQ7XG5cbiAgICAgICAgY29uc29sZS5sb2coY29sb3JGbih2YWx1ZSkpO1xuICAgIH1cbn1cblxuY29uc3QgbG9nZ2VyID0gbmV3IExvZ2dlcigpO1xubG9nZ2VyLmxvZygnbXdhbmEgd3VtdW55YXJ3YW5kYScpO1xuXG5jb25zdCBsMiA9IG5ldyBMb2dnZXIoJ2RldicpO1xubDIubG9nKCdtd2FhYScpO1xubDIubG9nKCk7XG5sMi5sb2coJycpO1xuXG5jb25zdCBsMyA9IG5ldyBMb2dnZXIoJ2RldicpO1xubDMubG9nKCdlcnJvcicsICdlcnJvcicpO1xuXG5sMy5sb2coJ3dhcm4nLCAnd2FybicpO1xuXG5sMy5sb2coJ2luZm8nLCAnaW5mbycpO1xuXG5jb25zdCBzdHJKc29uID0gYFxue1xuICBcImdsb3NzYXJ5XCI6IHtcbiAgICAgIFwidGl0bGVcIjogXCJleGFtcGxlIGdsb3NzYXJ5XCIsXG4gIFwiR2xvc3NEaXZcIjoge1xuICAgICAgICAgIFwidGl0bGVcIjogXCJTXCIsXG4gICAgXCJHbG9zc0xpc3RcIjoge1xuICAgICAgICAgICAgICBcIkdsb3NzRW50cnlcIjoge1xuICAgICAgICAgICAgICAgICAgXCJJRFwiOiBcIlNHTUxcIixcbiAgICAgICAgXCJTb3J0QXNcIjogXCJTR01MXCIsXG4gICAgICAgIFwiR2xvc3NUZXJtXCI6IFwiU3RhbmRhcmQgR2VuZXJhbGl6ZWQgTWFya3VwIExhbmd1YWdlXCIsXG4gICAgICAgIFwiQWNyb255bVwiOiBcIlNHTUxcIixcbiAgICAgICAgXCJBYmJyZXZcIjogXCJJU08gODg3OToxOTg2XCIsXG4gICAgICAgIFwiR2xvc3NEZWZcIjoge1xuICAgICAgICAgICAgICAgICAgICAgIFwicGFyYVwiOiBcIkEgbWV0YS1tYXJrdXAgbGFuZ3VhZ2UsIHVzZWQgdG8gY3JlYXRlIG1hcmt1cCBsYW5ndWFnZXMgc3VjaCBhcyBEb2NCb29rLlwiLFxuICAgICAgICAgIFwiR2xvc3NTZWVBbHNvXCI6IFtcIkdNTFwiLCBcIlhNTFwiXVxuICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgXCJHbG9zc1NlZVwiOiBcIm1hcmt1cFwiXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICB9XG4gIH1cbn1gO1xuXG5sMy5sb2coc3RySnNvbik7XG4iXX0=