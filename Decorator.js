class SimpleCoffee {
    cost() {
      return 5;
    }
  }
  
  class MilkDecorator {
    constructor(coffee) {
      this.coffee = coffee;
    }
    
    cost() {
      return this.coffee.cost() + 1;
    }
  }
  
  class SugarDecorator {
    constructor(coffee) {
      this.coffee = coffee;
    }
    
    cost() {
      return this.coffee.cost() + 0.5;
    }
  }
  
  let coffee = new SimpleCoffee();
  console.log(coffee.cost()); // 5
  
  coffee = new MilkDecorator(coffee);
  console.log(coffee.cost()); // 6
  
  coffee = new SugarDecorator(coffee);
  console.log(coffee.cost()); // 6.5
  