import React from 'react';
import { Check } from 'lucide-react';
import { motion } from 'framer-motion';
import { useSound } from '../hooks/useSound';

interface TypeSelectorProps {
  types: string[];
  selectedTypes: string[];
  onTypeChange: (types: string[]) => void;
}

export function TypeSelector({ types, selectedTypes, onTypeChange }: TypeSelectorProps) {
  const { playHover, playSelect } = useSound();

  const toggleType = (type: string) => {
    playSelect();
    if (selectedTypes.includes(type)) {
      onTypeChange(selectedTypes.filter(t => t !== type));
    } else {
      onTypeChange([...selectedTypes, type]);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="mb-8"
    >
      <h2 className="text-xl font-semibold mb-4 neon-text">ステップ 1: タイプを選択</h2>
      <div className="flex flex-wrap gap-3">
        {types.map(type => (
          <motion.button
            key={type}
            onClick={() => toggleType(type)}
            onMouseEnter={playHover}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className={`px-4 py-2 rounded-lg flex items-center gap-2 transition-all
              ${selectedTypes.includes(type)
                ? 'bg-pink-600 text-white shadow-lg shadow-pink-500/20'
                : 'glass-panel'
              }`}
          >
            <span>{type}</span>
            {selectedTypes.includes(type) && <Check size={16} />}
          </motion.button>
        ))}
      </div>
    </motion.div>
  );
}