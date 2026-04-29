import { Task } from '@/types/task';
import { CheckCircle, Clock, Zap } from 'lucide-react';
import { motion } from 'framer-motion';

interface TaskCardProps {
  task: Task;
  onComplete: (id: string) => void;
}

export default function TaskCard({ task, onComplete }: TaskCardProps) {
  // Mapping energy levels to emoji/colors
  const energyColors = {
    1: "text-green-400",
    2: "text-amber-400",
    3: "text-rose-500"
  };

  return (
    <motion.div 
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-slate-800/50 backdrop-blur-md border border-slate-700 p-4 rounded-xl flex items-center justify-between group hover:border-indigo-500/50 transition-all"
    >
      <div className="flex items-center gap-4">
        <button 
          onClick={() => onComplete(task.id)}
          className="text-slate-500 hover:text-emerald-400 transition-colors"
        >
          <CheckCircle className={task.isCompleted ? "text-emerald-400" : ""} size={24} />
        </button>
        
        <div>
          <h3 className={`font-medium ${task.isCompleted ? 'line-through text-slate-500' : 'text-slate-100'}`}>
            {task.title}
          </h3>
          <div className="flex gap-3 mt-1 items-center text-xs text-slate-400">
            <span className="flex items-center gap-1">
              <Clock size={12} /> {task.estimatedTime}m
            </span>
            <span className={`flex items-center gap-1 ${energyColors[task.energyLevel]}`}>
              <Zap size={12} fill="currentColor" /> Level {task.energyLevel}
            </span>
            {task.priority === 'Urgent' && (
              <span className="bg-rose-500/10 text-rose-500 px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider">
                Urgent
              </span>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );
}