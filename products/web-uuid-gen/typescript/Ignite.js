/**
* モジュールの作成や動作の定義。
*/
var App;
(function (App) {
    App.appName = "web-uuid-gen";

    // モジュールの定義
    angular.module(App.appName, ["ngRoute", App.appName + ".controller", App.appName + ".service", App.appName + ".filter", App.appName + ".directive"], function () {
    }).run(function ($rootScope, $routeParams) {
    });

    // モジュールの定義。
    angular.module(App.appName + ".service", [], // .configで設定する項目はなし
    function () {
    }).factory("uuidGenerateService", function ($http) {
        return new Service.UuidGenerateService();
    });

    angular.module(App.appName + ".controller", [App.appName + ".service"], function () {
    }).controller("UuidGenerateController", Controller.UuidGenerateController);

    // モジュールの定義。directiveに関するモジュール。
    angular.module(App.appName + ".directive", [], function () {
    }).directive("tgFileBind", function () {
        return function (scope, elm, attrs) {
            elm.bind("change", function (evt) {
                scope.$apply(function (scope) {
                    scope[attrs.name] = evt.target.files;
                });
            });
        };
    }).directive("tgContenteditable", function ($parse) {
        return {
            require: "ngModel",
            link: function (scope, elm, attrs, ctrl) {
                var value = $parse(attrs.ngModel)(scope);

                elm.attr("contenteditable", "");

                // view -> model
                var viewToModel = function () {
                    scope.$apply(function () {
                        ctrl.$setViewValue(elm.html());
                    });
                };
                elm.bind("blur", viewToModel);
                elm.bind("keyup", viewToModel);
                elm.bind("keydown", viewToModel);

                // model -> view
                ctrl.$render = function () {
                    elm.html(ctrl.$viewValue);
                };

                // load init value from DOM
                if (value) {
                    ctrl.$setViewValue(value);
                    ctrl.$render();
                } else {
                    ctrl.$setViewValue(elm.html());
                }
            }
        };
    });

    // モジュールの定義。filterに関するモジュール。
    angular.module(App.appName + ".filter", [], function () {
    }).filter("rmDuplicated", function () {
        return function (input, options) {
            if (angular.isUndefined(input)) {
                return input;
            } else if (!angular.isArray(input)) {
                console.error("input is not array.", input);
                return input;
            }
            var excludeList;
            if (angular.isUndefined(options)) {
                console.error("options is required.");
                return input;
            } else if (angular.isArray(options)) {
                excludeList = options;
            } else if (angular.isArray(options.exclude)) {
                excludeList = options.exclude;
            }
            var compareFn = function (a, b) {
                return a.$key.keystr === b.$key.keystr;
            };
            if (angular.isUndefined(options)) {
            } else if (angular.isFunction(options.compare)) {
                compareFn = options.compare;
            }

            var result = [];
            input.forEach(function (data) {
                if (!excludeList.some(function (exclude) {
                    return compareFn(data, exclude);
                })) {
                    result.push(data);
                }
            });

            return result;
        };
    });
})(App || (App = {}));

/**
* Initializing
*/
$(function () {
    $("#refresh-button").tooltip();
});
//# sourceMappingURL=Ignite.js.map
