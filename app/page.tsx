"use client";

import { useState } from 'react';
import { Task } from '@/types/task';
import TaskCard from '@/components/TaskCard';
import { Sparkles } from 'lucide-react';

export default function Dashboard() {
  // Updated mock data with the missing properties
  const [tasks, setTasks] = useState<Task[]>([
    {
      id: '1',
      title: 'Finalize Companion UI Design',
      isCompleted: false,
      estimatedTime: 45,
      energyLevel: 3,
      priority: 'Urgent',
      createdAt: new Date(), // This satisfies the TypeScript requirement
      tags: ['ui', 'development'] // This satisfies the TypeScript requirement
    },
    {
      id: '2',
      title: 'Review statistics notes',
      isCompleted: false,
      estimatedTime: 20,
      energyLevel: 1,
      priority: 'Scheduled',
      createdAt: new Date(),
      tags: ['university']
    }
  ]);

  const toggleTask = (id: string) => {
    setTasks(tasks.map(t => t.id === id ? { ...t, isCompleted: !t.isCompleted } : t));
  };

  const nowTask = tasks.find(t => !t.isCompleted && t.priority === 'Urgent') || tasks[0];

  return (
    <main className="min-h-screen bg-slate-900 text-slate-100 p-6 md:p-12">
      {/* ... the rest of your UI code remains exactly the same ... */}
      <div className="max-w-2xl mx-auto space-y-12">
        <header className="flex justify-between items-center">
          <div>
            <h1 className="text-3xl font-bold bg-gradient-to-r from-indigo-400 to-rose-400 bg-clip-text text-transparent">
              Companion
            </h1>
            <p className="text-slate-400 text-sm">Focus on what matters now.</p>
          </div>
          <div className="h-10 w-10 rounded-full bg-slate-800 border border-slate-700 flex items-center justify-center">
            <Sparkles size={18} className="text-amber-400" />
          </div>
        </header>

        <section>
          <h2 className="text-xs font-semibold uppercase tracking-widest text-slate-500 mb-4">The Now Slot</h2>
          {nowTask && (
            <div className="scale-105 origin-left">
               <TaskCard task={nowTask} onComplete={toggleTask} />
            </div>
          )}
        </section>

        <section className="space-y-4">
          <h2 className="text-xs font-semibold uppercase tracking-widest text-slate-500 mb-4">Upcoming</h2>
          <div className="grid gap-3">
            {tasks.filter(t => t.id !== nowTask?.id).map(task => (
              <TaskCard key={task.id} task={task} onComplete={toggleTask} />
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}