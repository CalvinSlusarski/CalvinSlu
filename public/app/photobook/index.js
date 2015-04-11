
define(['durandal/app', 'durandal/system',  'jquery', 'knockout', 'jquery-ui'], function (app, system,  $, ko) {
    var vm = {};
    vm.photoInArray = ko.observableArray([]);
    // temp
    vm.photoInArray([
        new photo(
            'https://fbcdn-sphotos-c-a.akamaihd.net/hphotos-ak-xfp1/v/t1.0-9/1935715_1247480994083_1588857_n.jpg?oh=b3aaa25ff227eaed78d559786b40701d&oe=55E14ECE&__gda__=1435988421_006f033de281db2cb6af7e0f05d1726c'
        ),
        new photo(
            'https://scontent-ord.xx.fbcdn.net/hphotos-xap1/v/t1.0-9/4261_1145626807792_8143272_n.jpg?oh=29227312bf3639556270e2a55883b67c&oe=55E074FE'
        )]);

    // end of temp
    setTimeout(function(){
        console.log('testing');
            //$('body').append('<script type="text/javascript" src="js/jquery-ui.min.js"></script>');
            $(".stickyNote").draggable();
    },2000)
    return vm;

    // var name = ko.observable();
    // var canSayHello = ko.computed(function () {
    //     return name() ? true : false;
    // });

    // return {
    //     displayName: 'What is your name?',
    //     name: name,
    //     sayHello: function() {
    //         app.showMessage('Hello ' + name() + '!', 'Greetings');
    //     },
    //     canSayHello: canSayHello,
    //     activate: function() {
    //         system.log('Lifecycle : activate : hello');
    //     },
    //     binding: function () {
    //         system.log('Lifecycle : binding : hello');
    //         return { cacheViews:false }; //cancels view caching for this module, allowing the triggering of the detached callback
    //     },
    //     bindingComplete: function () {
    //         system.log('Lifecycle : bindingComplete : hello');
    //     },
    //     attached: function (view, parent) {
    //         system.log('Lifecycle : attached : hello');
    //     },
    //     compositionComplete: function (view) {
    //         system.log('Lifecycle : compositionComplete : hello');
    //     },
    //     detached: function (view) {
    //         system.log('Lifecycle : detached : hello');
    //     }
    // };
    function photo(url, comment){
        self = this;
        self.url = url;
        self.comment = comment;
        self.tackTopLeft = 'pin'
        self.tackTopRight = 'pin'
        self.frameType = 'photo'
        self.edit = ko.observable(true);
    }
});