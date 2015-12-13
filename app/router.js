import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('code', function() {
    this.route('curriculum');
    this.route('duration');
    this.route('jobs');
    this.route('offering');
  });
  // this.route('rent');
  this.route('austin');
  this.route('faq');
  this.route('cost');
  this.route('rent', function() {
    this.route('you', {
    });
    this.route('me', {
    });
    this.route('cost', {
    });
    this.route('house');
    this.route('offering');
  });
});

export default Router;
