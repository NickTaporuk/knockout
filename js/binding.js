var Person = function(){
    this.firstName  = ko.observable("John");
    this.lastName   = ko.observable("Smith");
    this.fullName   = ko.dependentObservable(function(){
        return this.firstName() + '->'+ this.lastName();
    },this);
};

ko.applyBindings(new Person());