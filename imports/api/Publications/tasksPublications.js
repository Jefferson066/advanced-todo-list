import { Meteor } from 'meteor/meteor';
import { TasksCollection } from '../database/TasksCollection';

Meteor.publish('tasks.public-private', function publishTasks() {
  if (!this.userId) {
    return this.ready();
  }
  return TasksCollection.find({
    $or: [{ private: 'publica' }, { userId: this.userId, private: 'pessoal' }],
  });
});

/*
Meteor.publish('tasks.private', function publishTasks() {
  if (!this.userId) {
    return this.ready();
  }
  return TasksCollection.find({ userId: this.userId, private: 'pessoal' });
});
*/

Meteor.publish('tasks', function publishTasks() {
  return TasksCollection.find({ userId: this.userId }); //todas tasks do usuario
});
