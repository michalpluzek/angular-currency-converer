export class ExchangeService {
  supportedCurrencies = ["EUR", "GBP", "USD"];

  private exchangeRates = {
    "USD/GBP": 0.71,
    "USD/EUR": 0.82,
    "EUR/USD": 1.13,
    "EUR/GBP": 0.94,
    "GBP/EUR": 1.25,
    "GBP/USD": 1.36,
  };

  getExchangeRate(baseCurrency: string, targetCurrency: string) {
    if (baseCurrency === targetCurrency) return 1;
    return this.exchangeRates[baseCurrency + "/" + targetCurrency];
  }
}
