export type Priority = 'Urgent' | 'Scheduled' | 'Optional';
export type EnergyLevel = 1 | 2 | 3; // ⚡ ⚡⚡ ⚡⚡⚡

export interface Task {
  id: string;
  title: string;
  description?: string;
  createdAt: Date;
  dueDate?: Date;
  priority: Priority;
  energyLevel: EnergyLevel;
  estimatedTime: number; // in minutes
  isCompleted: boolean;
  tags: string[];
}