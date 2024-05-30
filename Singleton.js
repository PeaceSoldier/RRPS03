class Singleton {
    constructor() {
      if (!Singleton.instance) {
        this.data = "I am the single instance";
        Singleton.instance = this;
      }
      return Singleton.instance;
    }
    
    getData() {
      return this.data;
    }
  }
  
  const instance1 = new Singleton();
  const instance2 = new Singleton();
  
  console.log(instance1 === instance2); // true
  console.log(instance1.getData()); // "I am the single instance"
  