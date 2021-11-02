System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var ExchangeService;
    return {
        setters:[],
        execute: function() {
            ExchangeService = (function () {
                function ExchangeService() {
                    this.supportedCurrencies = ['EUR', 'GBP', 'USD'];
                    this.exchangeRates = {
                        'USD/GBP': 0.70,
                        'USD/EUR': 0.90,
                        'EUR/USD': 1.10,
                        'EUR/GBP': 0.80,
                        'GBP/EUR': 1.24,
                        'GBP/USD': 1.42
                    };
                }
                ExchangeService.prototype.getExchangeRate = function (baseCurrency, targetCurrency) {
                    if (baseCurrency === targetCurrency) {
                        return 1;
                    }
                    return this.exchangeRates[baseCurrency + '/' + targetCurrency];
                };
                return ExchangeService;
            }());
            exports_1("ExchangeService", ExchangeService);
        }
    }
});
