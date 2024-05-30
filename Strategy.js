class Context {
    constructor(strategy) {
      this.strategy = strategy;
    }
    
    executeStrategy(a, b) {
      return this.strategy.doOperation(a, b);
    }
  }
  
  class OperationAdd {
    doOperation(a, b) {
      return a + b;
    }
  }
  
  class OperationSubtract {
    doOperation(a, b) {
      return a - b;
    }
  }
  
  class OperationMultiply {
    doOperation(a, b) {
      return a * b;
    }
  }
  
  const contextAdd = new Context(new OperationAdd());
  console.log(contextAdd.executeStrategy(5, 3)); // 8
  
  const contextSubtract = new Context(new OperationSubtract());
  console.log(contextSubtract.executeStrategy(5, 3)); // 2
  
  const contextMultiply = new Context(new OperationMultiply());
  console.log(contextMultiply.executeStrategy(5, 3)); // 15
  