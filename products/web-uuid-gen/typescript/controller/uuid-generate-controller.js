var Controller;
(function (Controller) {
    var UuidGenerateController = (function () {
        function UuidGenerateController($scope, uuidGenerateService) {
            this.$scope = $scope;
            this.uuidGenerateService = uuidGenerateService;
            $scope.uuid = uuidGenerateService.newUuid();

            $scope.refreshUuid = function () {
                $scope.uuid = uuidGenerateService.newUuid();
            };
        }
        return UuidGenerateController;
    })();
    Controller.UuidGenerateController = UuidGenerateController;
})(Controller || (Controller = {}));
//# sourceMappingURL=uuid-generate-controller.js.map
