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
Meteor.publish(
  'tasks.public-private-list',
  function publishTasks(state = false, inputSearch = null, skip = 0) {
    if (!this.userId) {
      return this.ready();
    }
    check(state, Boolean);
    check(inputSearch, String);
    check(skip, Number);
    console.log(skip);

    if (inputSearch) {
      return TasksCollection.find({
        $or: [{ private: 'publica' }, { userId: this.userId, private: 'pessoal' }],
        $and: [{ name: inputSearch }], // buscar pelo name digitado no search input
      });
    }

    if (!state) {
      // checkbox off
      return TasksCollection.find(
        { $or: [{ private: 'publica' }, { userId: this.userId, private: 'pessoal' }] },
        { skip: skip, limit: 4 },
      );
    }

    if (state) {
      // checkbox on
      return TasksCollection.find({
        $or: [{ private: 'publica' }, { userId: this.userId, private: 'pessoal' }],
        $and: [{ status: 'concluida' }], // busca para so concluidas
      });
    }
  },
);

//
Meteor.publish('tasks', function publishTasks() {
  return TasksCollection.find({ userId: this.userId }); //todas tasks do usuario
});
