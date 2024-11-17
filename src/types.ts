export interface PromptItem {
  type: string;
  genre: string;
  image: string;
  content: string;
  duplicate: number;
  prompt: string;
  japanese: string;
}

export interface Selection {
  genre: string;
  items: PromptItem[];
}