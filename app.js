'use strict';
var app = app || {};

(function(){

    function CustomObj(name, value, tags, discount){
        this.name = ko.observable(name);
        this.formatedName = ko.computed(function(){
            return '<strong>' + this.name() + '</string>';
        }, this);
    
        this.value = ko.observable(value);
        tags = typeof(tags) !== 'undefined' ? tags : [];
        this.tags = ko.observableArray(tags);
        discount = typeof(discount) !== 'undefined' ? discount : 0;
        this.discount = ko.observable(discount);
        this.formatedDiscount = ko.computed(function () {
            return (this.discount() * 100) + '%';
          }, this);
        
    }

    function AppViewModel(){
        var self = this;
        this.firstName = ko.observable('Donald');
        this.lastName = ko.observable('Trump');
        this.fullName = ko.computed(function(){
            return self.firstName() + " " + self.lastName();
        });
        this.featuredProduct = ko.observable(new CustomObj('Pizza', 10));
        this.click = function(){
            alert("You clicked the button.");
        };

        this.arr = ko.observableArray([
            new CustomObj('Beer', '10lv', ['cold', 'draft', 'dark']),
            new CustomObj('Whiskey', '20lv', null, 0.2),
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
 