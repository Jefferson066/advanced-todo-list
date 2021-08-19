import { check } from 'meteor/check';
import { Meteor } from 'meteor/meteor';
import { Accounts } from 'meteor/accounts-base';
import { TasksCollection } from '../database/TasksCollection';

Meteor.methods({
  'user.create'(username, password) {
    check(username, String);
    check(password, String);
    if (!Accounts.findUserByUsername(username)) {
      Accounts.createUser({
        username: username,
        password: password,
      });
    }
  },
  'tasks.insert'(text) {
    check(text, String);
    if (!this.userId) {
      throw new Meteor.Error('Not authorized!');
    }
    TasksCollection.insert({
      text,
      createdAt: new Date(),
      userId: this.userId,
    });
  },
});
