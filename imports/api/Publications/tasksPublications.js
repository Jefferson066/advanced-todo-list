import { Meteor } from 'meteor/meteor';
import { TasksCollection } from '../database/TasksCollection';

Meteor.publish('tasks.public', function publishTasks() {
  if (!this.userId) {
    return this.ready();
  }
  return TasksCollection.find({ private: 'publica' });
});

Meteor.publish('tasks.private', function publishTasks() {
  if (!this.userId) {
    return this.ready();
  }
  return TasksCollection.find({ userId: this.userId, private: 'pessoal' });
});

/*
Andamento
Concluídas
Total de Tarefas Cadastradas

*/
