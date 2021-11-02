import { Component } from "@angular/core";
import { ExchangeService } from "./exchange.service";

@Component({
  selector: "converter",
  providers: [ExchangeService],
  template: `
    <input
      type="number"
      [(ngModel)]="baseAmount"
      [ngClass]="{ error: isValid(baseAmount), warning: baseAmount < 0 }"
    />
    <currency-select [(selected)]="baseCurrency"> </currency-select>
    = <strong>{{ targetAmount }}</strong>
    <currency-select [(selected)]="targetCurrency"> </currency-select>
    <p *ngIf="isValid(baseAmount)">Proszę podać wartość do przeliczenia</p>
  `,
  styles: [
    `
      input[type="number"] {
        width: 10ex;
        text-align: right;
      }
      .error {
        background-color: #ff5555;
      }
      .warning {
        background-color: #cccccc;
      }
      .hidden {
        display: none;
      }
    `,
  ],
})
export class AppComponent {
  baseCurrency: string = "USD";
  targetCurrency: string = "GBP";
  baseAmount: number = 1;

  constructor(private exchangeService: ExchangeService) {}

  isValid(value) {
    return !Number.isFinite(value);
  }

  get targetAmount() {
    const exchangeRate = this.exchangeService.getExchangeRate(
      this.baseCurrency,
      this.targetCurrency
    );
    return this.baseAmount * exchangeRate;
  }
}
