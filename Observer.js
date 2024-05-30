class Subject {
    constructor() {
      this.observers = [];
    }
    
    addObserver(observer) {
      this.observers.push(observer);
    }
    
    removeObserver(observer) {
      this.observers = this.observers.filter(obs => obs !== observer);
    }
    
    notifyObservers(message) {
      this.observers.forEach(observer => observer.update(message));
    }
  }
  
  class Observer {
    update(message) {
      console.log(`Observer received message: ${message}`);
    }
  }
  
  const subject = new Subject();
  const observer1 = new Observer();
  const observer2 = new Observer();
  
  subject.addObserver(observer1);
  subject.addObserver(observer2);
  
  subject.notifyObservers("Hello Observers!"); 
  // Observer received message: Hello Observers!
  // Observer received message: Hello Observers!
  