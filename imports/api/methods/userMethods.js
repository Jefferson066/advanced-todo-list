import { check } from 'meteor/check';
import { Meteor } from 'meteor/meteor';
import { Accounts } from 'meteor/accounts-base';
import { TasksCollection } from '../database/TasksCollection';
// Meteor.users.update. atualizar
Meteor.methods({
  'user.create'(username, password) {
    check(username, String);
    check(password, String);
    if (!Accounts.findUserByUsername(username)) {
      Accounts.createUser({
        username: username,
        password: password,
        profile: {},
      });
    }
  },
  'user.update'(name, email, birthDate, sex, company) {
    check(name, String);
    check(email, String);
    check(company, String);
    check(birthDate, String);
    check(sex, String);

    if (!this.userId) {
      throw new Meteor.Error('Not authorized!');
    }
    Meteor.users.update(this.userId, {
      $set: {
        profile: { name: name, email: email, birthDate: birthDate, sex: sex, company: company },
      },
    });
  },
  'tasks.insert'(name, text, data, username, isPrivate) {
    check(name, String);
    check(text, String);
    check(data, String);
    check(username, String);
    check(isPrivate, String);
    if (!this.userId) {
      throw new Meteor.Error('Not authorized!');
    }
    TasksCollection.insert({
      name,
      text,
      data,
      createdAt: new Date(),
      userId: this.userId,
      username: username,
      status: 'cadastrada',
      private: isPrivate,
    });
  },

  'tasks.remove'(taskId) {
    check(taskId, String);
    if (!this.userId) {
      throw new Meteor.Error('Not authorized.');
    }

    const task = TasksCollection.findOne({ _id: taskId, userId: this.userId });

    if (!task) {
      throw new Meteor.Error('Access denied.');
    }

    TasksCollection.remove(taskId);
  },
  'tasks.update'(_id, viewName, viewText, viewData, viewStatus, username, isPrivate) {
    check(_id, String);
    check(viewName, String);
    check(viewText, String);
    check(viewData, String);
    check(viewStatus, String);
    check(username, String);
    check(isPrivate, String);

    if (!this.userId) {
      throw new Meteor.Error('Not authorized!');
    }

    TasksCollection.update(_id, {
      name: viewName,
      text: viewText,
      data: viewData,
      createdAt: new Date(),
      userId: this.userId,
      username: username,
      status: viewStatus,
      private: isPrivate,
    });
  },
});
