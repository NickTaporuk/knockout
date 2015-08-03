function AppViewModel(){
    this.firstName  = ko.observable('');
    this.lastName   = ko.observable('');
    this.age        = ko.observable('');
    this.sex        = ko.observable('');
    this.isAdmin    = ko.observable(false);
    this.adminName  = ko.observable('');
    this.sexOptions = ['Мужской','Женский'];


    this.fullName = ko.computed(function(){
        return this.firstName()+' '+this.lastName();
    },this);

    this.notEmpty = ko.computed(function(){
        return !!this.sex() || !!this.firstName() || !!this.lastName() || !!this.isAdmin()
    },this);

    this.reset = function(){
        this.firstName('');
        this.lastName('');
        this.age(null);
        this.sex(null);
        this.isAdmin(false);
    };

    this.save = function(){
        event.preventDefault();
        if(this.notEmpty()){
            alert('Ура всё сохранилось!!!');
            this.reset();
        }
    }
};

ko.applyBindings(new AppViewModel());