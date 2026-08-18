export interface Article {
  id: string;
  title: string;
  description: string;
  publishedAt: string;
  readingTime: string;
  category: string;
  tags: string[];
  externalUrl?: string;
}
