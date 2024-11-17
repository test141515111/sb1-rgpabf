import React from 'react';
import { motion } from 'framer-motion';
import { PromptItem } from '../types';
import { useSound } from '../hooks/useSound';
import { Check } from 'lucide-react';

interface GenreSelectorProps {
  genre: string;
  items: PromptItem[];
  selectedItems: PromptItem[];
  onSelect: (item: PromptItem) => void;
}

export function GenreSelector({ genre, items, selectedItems, onSelect }: GenreSelectorProps) {
  const { playHover, playSelect } = useSound();

  const isSelected = (item: PromptItem) =>
    selectedItems.some(i => i.image === item.image && i.prompt === item.prompt);

  const handleSelect = (item: PromptItem) => {
    playSelect();
    onSelect(item);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="mb-6"
    >
      <h3 className="text-lg font-medium mb-3 text-pink-300">{genre}</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
        {items.map((item) => (
          <motion.button
            key={`${item.genre}-${item.image}-${item.prompt}`}
            onClick={() => handleSelect(item)}
            onMouseEnter={playHover}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className={`p-4 rounded-lg text-left transition-all relative
              ${isSelected(item)
                ? 'bg-pink-950/60 border-2 border-pink-500/50 shadow-lg shadow-pink-500/20'
                : 'glass-panel'
              }`}
          >
            <div className="font-medium mb-1">{item.image}</div>
            <div className="text-sm text-gray-400">{item.japanese || '翻訳なし'}</div>
            <div className="text-xs text-gray-500 mt-1">{item.prompt}</div>
            {item.duplicate > 1 && (
              <div className="text-xs text-pink-400 mt-1">
                {item.duplicate}回繰り返し
              </div>
            )}
            {isSelected(item) && (
              <div className="absolute top-2 right-2">
                <Check size={16} className="text-pink-400" />
              </div>
            )}
          </motion.button>
        ))}
      </div>
    </motion.div>
  );
}