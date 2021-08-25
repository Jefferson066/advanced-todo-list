import { Meteor } from 'meteor/meteor';
import { TasksCollection } from '../database/TasksCollection';

Meteor.publish('tasks', function publishTasks() {
  return TasksCollection.find({ userId: this.userId });
});

/*
Meteor.publish('tasks.public', function publishTasks() {
  return TasksCollection.find({ private: 'isPublic' });
});
Meteor.publish('tasks.private', function publishTasks() {
  return TasksCollection.find({ userId: this.userId, private: 'isPrivate' });
});*/
