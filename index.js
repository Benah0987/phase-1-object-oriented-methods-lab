function BoardMember(name, homeState, training) {
    this.name = name;
    this.homeState = homeState;
    this.training = training;
  }
  
  //using the prototype to create veto method
  BoardMember.prototype.veto = function() {
    return "No, I must disagree";
  };

  BoardMember.prototype.approve = function(){
    return "you can do that, Yes i can"
  }

  //protype doCharity
  BoardMember.prototype.doCharity = function(){
    return 'i like to help people'
  }
  BoardMember.prototype.releasePressStatement = function() {
    return "You will see great things from Scuber.";
  };
  
  BoardMember.prototype.sayHi = function() {
    return `Hi, my name is ${this.name}. I am from ${this.homeState}, and I was trained in ${this.training}.`;
  };
