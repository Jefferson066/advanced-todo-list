import { Meteor } from 'meteor/meteor';
import { TasksCollection } from '../database/TasksCollection';
import { check } from 'meteor/check';

Meteor.publish('tasks.public-private', function publishTasks() {
  if (!this.userId) {
    return this.ready();
  }
  return TasksCollection.find({
    $or: [{ private: 'publica' }, { userId: this.userId, private: 'pessoal' }],
  });
});

// usada no todolist apenas /////
Meteor.publish('tasks.public-private-list', function publishTasks(state = false) {
  if (!this.userId) {
    return this.ready();
  }
  check(state, Boolean);
  if (!state) {
    return TasksCollection.find({
      $or: [{ private: 'publica' }, { userId: this.userId, private: 'pessoal' }],
    });
  }

  if (state) {
    return TasksCollection.find({
      $or: [{ private: 'publica' }, { userId: this.userId, private: 'pessoal' }],
      $and: [{ status: 'concluida' }], // query para so concluidas
    });
  }
});

Meteor.publish('tasks', function publishTasks() {
  return TasksCollection.find({ userId: this.userId }); //todas tasks do usuario
});
