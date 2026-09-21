import { defineCollection, z } from 'astro:content';

const articles = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    excerpt: z.string(),
    // カテゴリーはトーンの違う3種類:
    // entertainment = エンタメ枠(赤バッジ) / serious = 大人の説明(アウトラインバッジ) / story = 実録(黒バッジ)
    category: z.enum(['entertainment', 'diagnosis', 'serious', 'story']),
    date: z.coerce.date(),
    readingMinutes: z.number().optional(),
    badge: z.string().optional(), // カード右上に出す丸バッジ（例: "検証" "NEW"）
  }),
});

export const collections = { articles };
