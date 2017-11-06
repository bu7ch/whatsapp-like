// Libs

import 'angular-animate';

import 'angular-meteor';

import 'angular-meteor-auth';

import 'angular-sanitize';

import 'angular-ui-router';

import 'angular-moment';

import 'ionic-scripts';

import Angular from 'angular';

import Loader from 'angular-ecmascript/module-loader';

import { Meteor } from 'meteor/meteor';



// Modules
import RoutesConfig from '../routes';
import CalendarFilter from '../filters/calendar.filter';
import LoginCtrl from '../controllers/login.controller';
import ChatCtrl from '../controllers/chat.controller';
import ChatsCtrl from '../controllers/chats.controller';
import InputDirective from '../directives/input.directive';
import ProfileCtrl from '../controllers/profile.controller';
import SettingsCtrl from '../controllers/settings.controller';
import ConfirmationCtrl from '../controllers/confirmation.controller';
import Routes from '../routes';

const App = 'Whatsapp';



// App

Angular.module(App, [

  'angular-meteor',
  'angular-meteor.auth',
  'angularMoment',
  'ionic'

]);

new Loader(App)
  .load(ChatsCtrl)
  .load(ChatCtrl)
  .load(LoginCtrl)
  .load(ProfileCtrl)
  .load(SettingsCtrl)
  .load(InputDirective)
  .load(CalendarFilter)
  .load(RoutesConfig)
  .load(ConfirmationCtrl)
  .load(Routes);

// Startup

if (Meteor.isCordova) {

  Angular.element(document).on('deviceready', onReady);

}

else {

  Angular.element(document).ready(onReady);

}



function onReady() {

  Angular.bootstrap(document, [App]);

}
