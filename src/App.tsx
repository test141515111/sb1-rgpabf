import React, { useState } from 'react';
import { TypeSelector } from './components/TypeSelector';
import { GenreSelector } from './components/GenreSelector';
import { Result } from './components/Result';
import { promptData, genres, types } from './data';
import { PromptItem, Selection } from './types';
import { Sparkles } from 'lucide-react';
import { motion } from 'framer-motion';

function App() {
  const [selectedTypes, setSelectedTypes] = useState<string[]>([]);
  const [selections, setSelections] = useState<Selection[]>([]);

  const filteredData = promptData.filter(item => 
    selectedTypes.length === 0 || selectedTypes.includes(item.type)
  );

  const handleItemSelect = (genre: string, item: PromptItem) => {
    setSelections(prev => {
      const existingGenre = prev.find(s => s.genre === genre);
      
      if (existingGenre) {
        const isSelected = existingGenre.items.some(i => 
          i.image === item.image && i.prompt === item.prompt
        );

        if (isSelected) {
          // Remove item if already selected
          const updatedItems = existingGenre.items.filter(i => 
            !(i.image === item.image && i.prompt === item.prompt)
          );
          
          if (updatedItems.length === 0) {
            // Remove genre if no items left
            return prev.filter(s => s.genre !== genre);
          }
          
          return prev.map(s => 
            s.genre === genre ? { ...s, items: updatedItems } : s
          );
        } else {
          // Add new item to existing genre
          return prev.map(s => 
            s.genre === genre 
              ? { ...s, items: [...s.items, item] }
              : s
          );
        }
      }
      
      // Add new genre with item
      return [...prev, { genre, items: [item] }];
    });
  };

  const getSelectedItems = (genre: string) => 
    selections.find(s => s.genre === genre)?.items || [];

  return (
    <div className="min-h-screen">
      <header className="bg-black/80 shadow-lg border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex items-center gap-2"
          >
            <Sparkles className="text-pink-400" />
            <h1 className="text-2xl font-bold neon-text">プロンプトセレクター</h1>
          </motion.div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-8">
            <TypeSelector
              types={types}
              selectedTypes={selectedTypes}
              onTypeChange={setSelectedTypes}
            />

            <div>
              <h2 className="text-xl font-semibold mb-6 neon-text">ステップ 2: 各ジャンルから選択</h2>
              {genres.map(genre => {
                const items = filteredData.filter(item => item.genre === genre);
                if (items.length === 0) return null;
                
                return (
                  <GenreSelector
                    key={genre}
                    genre={genre}
                    items={items}
                    selectedItems={getSelectedItems(genre)}
                    onSelect={(item) => handleItemSelect(genre, item)}
                  />
                );
              })}
            </div>
          </div>

          <div className="lg:col-span-1">
            <div className="sticky top-8">
              <Result selections={selections} />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;