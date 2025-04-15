export type TaskType = 'bug' | 'task';
export type Priority = 'critical' | 'high' | 'medium' | 'low';
export type Status = 'open' | 'in progress' | 'closed';

export interface Task {
    id: number;
    type: TaskType;
    priority?: Priority;
    status: Status;
    title: string;
    description?: string;
    assignee?: string;
    creator: string;
    createdAt: Date;
    updatedAt: Date;
}
