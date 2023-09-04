export class Ingredient {
  //adding the accessor public to the inputs to this constructor is a short hand
  // to give us member variables for this class.
  constructor(public name: string, public amount: number) {
    this.name = name;
    this.amount = amount;
  }
}
