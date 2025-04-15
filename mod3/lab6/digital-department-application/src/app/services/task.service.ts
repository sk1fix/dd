import { Injectable } from '@angular/core';
import { Task } from '../models/task.model';

@Injectable({
    providedIn: 'root'
})
export class TaskService {
    private tasks: Task[] = [];
    private nextId = 1;

    getTasks(): Task[] {
        return this.tasks;
    }

    addTask(task: Omit<Task, 'id' | 'createdAt' | 'updatedAt'>): void {
        const newTask: Task = {
            ...task,
            id: this.nextId++,
            createdAt: new Date(),
            updatedAt: new Date()
        };
        this.tasks.push(newTask);
    }

    updateTask(id: number, updates: Partial<Omit<Task, 'id' | 'createdAt'>>): void {
        const task = this.tasks.find(t => t.id === id);
        if (task) {
            Object.assign(task, updates);
            task.updatedAt = new Date();
        }
    }
}
