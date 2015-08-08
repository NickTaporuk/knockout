function AppViewModel(){
    var newsHeadersArray = ['Best news','Best news 1','Best news 2'],
    newsArray = [
        {
            title:'vvvvvvvvvvvvvvvvvvvvvv',
            text:'wqdwedweewdwedwedewdwedewd',
            isNew:true
        },
        {
            title:'wedwedwedwedwed',
            text:'wedewdwedwed',
            isNew:false
        },
        {
            title:'q3r23r23r23',
            text:'32r23r23r23',
            isNew:false
        },
    ];

    this.newsHeaders    = ko.observableArray(newsHeadersArray);
    this.news           = ko.observableArray(newsArray);

    this.addNewsControl = {
        newTitle : ko.observable(),
        newText  : ko.observable(),
        newIsNew : ko.observable(),

        addItem: function(context) {
            var value = {
                title:context.newTitle(),
                text:context.newText(),
                isNew:context.newIsNew()
            };

            self.news.push(value);
        },

        removeAll:function(){
            self.news.removeAll();
        }
    };

    this.removeItem = function(context,value){
        self.news.splice(event.target.dataset.index,1);
        //self.news.remove(context);
    };
}
ko.applyBindings(AppViewModel());