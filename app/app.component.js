System.register(["@angular/core", "./exchange.service"], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, exchange_service_1;
    var AppComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (exchange_service_1_1) {
                exchange_service_1 = exchange_service_1_1;
            }],
        execute: function() {
            AppComponent = (function () {
                function AppComponent(exchangeService) {
                    this.exchangeService = exchangeService;
                    this.now = Date.now();
                    this.baseCurrency = "USD";
                    this.targetCurrency = "GBP";
                    this.baseAmount = 1;
                }
                AppComponent.prototype.isValid = function (value) {
                    return !Number.isFinite(value);
                };
                Object.defineProperty(AppComponent.prototype, "targetAmount", {
                    get: function () {
                        var exchangeRate = this.exchangeService.getExchangeRate(this.baseCurrency, this.targetCurrency);
                        return this.baseAmount * exchangeRate;
                    },
                    enumerable: true,
                    configurable: true
                });
                AppComponent = __decorate([
                    core_1.Component({
                        selector: "converter",
                        providers: [exchange_service_1.ExchangeService],
                        template: "\n    <p>{{ now | date: \"fullDate\" }}</p>\n    <input\n      type=\"number\"\n      [(ngModel)]=\"baseAmount\"\n      [ngClass]=\"{ error: isValid(baseAmount), warning: baseAmount < 0 }\"\n    />\n    <currency-select [(selected)]=\"baseCurrency\"> </currency-select>\n    = <strong>{{ targetAmount | number: \"1.2-2\" }}</strong>\n    <currency-select [(selected)]=\"targetCurrency\"> </currency-select>\n    <p *ngIf=\"isValid(baseAmount)\">Prosz\u0119 poda\u0107 warto\u015B\u0107 do przeliczenia</p>\n  ",
                        styles: [
                            "\n      input[type=\"number\"] {\n        width: 10ex;\n        text-align: right;\n      }\n      .error {\n        background-color: #ff5555;\n      }\n      .warning {\n        background-color: #cccccc;\n      }\n    ",
                        ],
                    }), 
                    __metadata('design:paramtypes', [exchange_service_1.ExchangeService])
                ], AppComponent);
                return AppComponent;
            }());
            exports_1("AppComponent", AppComponent);
        }
    }
});
