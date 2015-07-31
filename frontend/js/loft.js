function AppViewModel(){
    this.FirstName  = ko.observable();
    this.LastName   = ko.observable();
};

ko.applyBindings(new AppViewModel());