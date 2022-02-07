define("index", ["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    class Router {
        async route(session, request, response) {
            response.end('hello world');
            return true;
        }
    }
    exports.default = Router;
});
