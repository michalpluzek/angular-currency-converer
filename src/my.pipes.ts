import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: "mypipe",
})
export class MyPipe implements PipeTransform {
  transform(value: number, digits: number = 2) {
    return value.toFixed(digits) + " !!";
  }
}
