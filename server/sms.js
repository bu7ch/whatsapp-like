import { Meteor } from 'meteor/meteor';
import { Accounts } from 'meteor/accounts-base';


if (Meteor.settings && meteor.settings.ACCOUNTS_PHONE) {
  Accounts._options.adminPhoneNumbers = Meteor.settings.ACCOUNTS_PHONE.ADMIN_NUMBERS;
  Accounts._options.phoneVerficationMasterCode = Meteor.settings.ACCOUNTS_PHONE.MASTER_CODE;
}
