import { pgTable, varchar, text, integer, boolean, timestamp, jsonb } from 'drizzle-orm/pg-core';

export const categories = pgTable('categories', {
  id: varchar('id', { length: 50 }).primaryKey(),
  slug: varchar('slug', { length: 100 }).notNull().unique(),
  name: varchar('name', { length: 100 }).notNull(),
  description: text('description'),
  icon: varchar('icon', { length: 10 }),
  color: varchar('color', { length: 50 }),
  parentId: varchar('parent_id', { length: 50 }),
  order: integer('order').default(0),
  isNew: boolean('is_new').default(false),
  createdAt: timestamp('created_at').defaultNow(),
  updatedAt: timestamp('updated_at').defaultNow(),
});

export const prompts = pgTable('prompts', {
  id: varchar('id', { length: 50 }).primaryKey(),
  slug: varchar('slug', { length: 200 }).notNull().unique(),
  title: varchar('title', { length: 200 }).notNull(),
  description: text('description').notNull(),
  content: text('content').notNull(),
  categoryId: varchar('category_id', { length: 50 }).notNull(),
  type: varchar('type', { length: 20 }).default('simple'),
  aiCompatible: jsonb('ai_compatible').$type<string[]>().default(['chatgpt']),
  tags: jsonb('tags').$type<string[]>().default([]),
  copyCount: integer('copy_count').default(0),
  isNew: boolean('is_new').default(false),
  isFeatured: boolean('is_featured').default(false),
  order: integer('order').default(0),
  createdAt: timestamp('created_at').defaultNow(),
  updatedAt: timestamp('updated_at').defaultNow(),
});

export type Category = typeof categories.$inferSelect;
export type Prompt = typeof prompts.$inferSelect;
