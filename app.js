'use strict';
var app = app || {};

(function(){

    function CustomObj(name, value){
        this.name = ko.observable(name);
        this.value = ko.observable(value);
    }

    function AppViewModel(){
        var self = this;
        this.firstName = ko.observable('Donald');
        this.lastName = ko.observable('Trump');
        this.fullName = ko.computed(function(){
            return this.firstName() + " " + this.lastName();
        }, this);
        this.click = function(){
            alert("You clicked the button.");
        };

        this.arr = ko.observableArray([
            new CustomObj('Beer', '10lv'),
            new CustomObj('Whiskey', '20lv'),
            new CustomObj('Cola', '5lv'),
            new CustomObj('Milk', '2lv')
        ]);
        this.addProduct = function () {  
            this.arr.push(new CustomObj("New drink", "100lv."));
        };

        this.removeProduct = function(product) {   
            console.log(this);
            console.log(self);
            //self.arr.remove(product);     //deletes from arr
            self.arr.destroy(product);
            alert(product._destroy);
            alert(self.arr().length);
        }; 

    }
    app.vm = new AppViewModel();
    ko.applyBindings(app.vm);
}());
 