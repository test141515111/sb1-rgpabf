import React from 'react';
import { motion } from 'framer-motion';
import { Selection } from '../types';
import { Copy } from 'lucide-react';
import { useSound } from '../hooks/useSound';

interface ResultProps {
  selections: Selection[];
}

export function Result({ selections }: ResultProps) {
  const { playHover, playCopy } = useSound();

  const combinedPrompt = selections
    .flatMap(s => s.items.map(item => item.prompt))
    .join(', ');

  const combinedJapanese = selections
    .flatMap(s => s.items.map(item => item.japanese || item.prompt))
    .join('、');

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    playCopy();
  };

  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      className="glass-panel rounded-lg p-6 shadow-xl"
    >
      <h2 className="text-xl font-semibold mb-4 neon-text">選択結果</h2>
      
      <div className="space-y-6">
        <div>
          <div className="flex items-center justify-between mb-2">
            <h3 className="font-medium text-pink-300">English Prompt</h3>
            <motion.button
              onMouseEnter={playHover}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => copyToClipboard(combinedPrompt)}
              className="text-pink-400 hover:text-pink-300 flex items-center gap-1"
            >
              <Copy size={16} />
              <span>Copy</span>
            </motion.button>
          </div>
          <div className="p-3 bg-black/50 rounded-lg text-sm whitespace-pre-wrap border border-gray-800/50">
            {combinedPrompt}
          </div>
        </div>

        <div>
          <div className="flex items-center justify-between mb-2">
            <h3 className="font-medium text-pink-300">日本語</h3>
            <motion.button
              onMouseEnter={playHover}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => copyToClipboard(combinedJapanese)}
              className="text-pink-400 hover:text-pink-300 flex items-center gap-1"
            >
              <Copy size={16} />
              <span>Copy</span>
            </motion.button>
          </div>
          <div className="p-3 bg-black/50 rounded-lg text-sm whitespace-pre-wrap border border-gray-800/50">
            {combinedJapanese}
          </div>
        </div>

        <div className="mt-4">
          <h3 className="font-medium mb-2 text-pink-300">選択項目</h3>
          <div className="space-y-2">
            {selections.map((selection) => (
              <div key={selection.genre} className="space-y-1">
                <div className="font-medium text-gray-400">{selection.genre}:</div>
                {selection.items.map((item, index) => (
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    key={`${item.image}-${index}`}
                    className="flex gap-2 text-sm ml-4"
                  >
                    <span>{item.image}</span>
                    {item.duplicate > 1 && (
                      <span className="text-pink-400">({item.duplicate}回)</span>
                    )}
                  </motion.div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
}