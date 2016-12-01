'use strict';
var app = app || {};

(function () {
    function PersonViewModel() {
        var self = this;
        self.firstName = ko.observable("");
        self.lastName = ko.observable("");
        self.saveUserData = function (model, event) {
            console.log(model);
            console.log(event);
        };
        self.logData = function () { console.log(self); };
        self.setName = function () { self.firstName('Bob') };
        self.details = ko.observable('');

        self.showDetails = function (target, event, details) {
            self.details(details);
        };
        self.hideDetails = function (target, event) {
            self.details('');
        };

        self.primaryPhone = ko.observable('');
        self.primaryPhoneHasFocus = ko.observable(true);
        self.secondaryPhone = ko.observable('');
        self.annoyMe = ko.observable(true);
        self.annoyTimes = ko.observableArray(['morning']);
        self.annoyTimesRadio = ko.observable('');
        self.annoyTimesOptions = ko.observableArray([
            'In the morning',
            'In the afternoon',
            'In the evening'
        ]);
        self.selectedTimes = ko.observable(self.annoyTimesOptions()[0]);
        self.products = ko.observableArray([
            {
                name: 'Beer',
                price: 10
            },
            {
                name: 'Vodka',
                price: 20
            },
            {
                name: 'Whiskey',
                price: 50
            }
        ]);
        self.selectedProduct = ko.observable();

    }

    ko.applyBindings(new PersonViewModel());
} ());