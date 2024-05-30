class Dog {
    speak() {
      console.log("Woof!");
    }
  }
  
  class Cat {
    speak() {
      console.log("Meow!");
    }
  }
  
  class AnimalFactory {
    createAnimal(type) {
      switch(type) {
        case 'dog':
          return new Dog();
        case 'cat':
          return new Cat();
        default:
          throw new Error("Unknown animal type");
      }
    }
  }
  
  const factory = new AnimalFactory();
  const dog = factory.createAnimal('dog');
  dog.speak(); // Woof!
  
  const cat = factory.createAnimal('cat');
  cat.speak(); // Meow!
  