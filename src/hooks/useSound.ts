import { Howl } from 'howler';
import { useCallback } from 'react';

const sounds = {
  hover: new Howl({
    src: ['https://assets.codepen.io/389309/ui_hover.mp3'],
    volume: 0.2
  }),
  select: new Howl({
    src: ['https://assets.codepen.io/389309/ui_select.mp3'],
    volume: 0.3
  }),
  copy: new Howl({
    src: ['https://assets.codepen.io/389309/ui_copy.mp3'],
    volume: 0.3
  })
};

export function useSound() {
  const playHover = useCallback(() => sounds.hover.play(), []);
  const playSelect = useCallback(() => sounds.select.play(), []);
  const playCopy = useCallback(() => sounds.copy.play(), []);

  return { playHover, playSelect, playCopy };
}