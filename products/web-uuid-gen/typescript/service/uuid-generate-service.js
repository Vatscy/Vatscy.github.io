var Service;
(function (Service) {
    var UuidGenerateService = (function () {
        function UuidGenerateService() {
        }
        UuidGenerateService.prototype.newUuid = function () {
            var new4Data = function () {
                var max = Math.pow(16, 4) - 1;
                var newNum = Math.floor(Math.random() * max);
                return newNum.toString(16);
            };

            var data1 = new4Data() + new4Data();
            var data2 = new4Data();
            var data3 = new4Data();
            var data4 = new4Data();
            var data5 = new4Data() + new4Data() + new4Data();

            return data1 + "-" + data2 + "-" + data3 + "-" + data4 + "-" + data5;
        };
        return UuidGenerateService;
    })();
    Service.UuidGenerateService = UuidGenerateService;
})(Service || (Service = {}));
//# sourceMappingURL=uuid-generate-service.js.map
