/*
# Portfolio: collections and works

1. Purpose
- Store a portfolio of creative work grouped into 6 (or more) collections.
- Each collection holds 5+ works (images with title + description).

2. New Tables
- `collections`
  - `id` uuid PK
  - `title` text NOT NULL
  - `subtitle` text (one-line tagline)
  - `description` text (longer paragraph)
  - `cover_image_url` text (image used on the collections grid)
  - `display_order` int (controls ordering on the page)
  - `created_at` timestamptz
- `works`
  - `id` uuid PK
  - `collection_id` uuid FK -> collections.id ON DELETE CASCADE
  - `title` text NOT NULL
  - `description` text
  - `image_url` text NOT NULL
  - `medium` text (e.g. "Photography", "Oil on canvas")
  - `year` int
  - `display_order` int
  - `created_at` timestamptz

3. Security
- This is a single-tenant portfolio site with NO sign-in screen.
- Enable RLS on both tables.
- Allow anon + authenticated full CRUD (data is intentionally public/shared).

4. Notes
- Works are ordered by `display_order` then `created_at`.
- Collections are ordered by `display_order`.
*/

CREATE TABLE IF NOT EXISTS collections (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  title text NOT NULL,
  subtitle text,
  description text,
  cover_image_url text,
  display_order int NOT NULL DEFAULT 0,
  created_at timestamptz NOT NULL DEFAULT now()
);

CREATE TABLE IF NOT EXISTS works (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  collection_id uuid NOT NULL REFERENCES collections(id) ON DELETE CASCADE,
  title text NOT NULL,
  description text,
  image_url text NOT NULL,
  medium text,
  year int,
  display_order int NOT NULL DEFAULT 0,
  created_at timestamptz NOT NULL DEFAULT now()
);

ALTER TABLE collections ENABLE ROW LEVEL SECURITY;
ALTER TABLE works ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS "anon_select_collections" ON collections;
CREATE POLICY "anon_select_collections" ON collections
  FOR SELECT TO anon, authenticated USING (true);

DROP POLICY IF EXISTS "anon_insert_collections" ON collections;
CREATE POLICY "anon_insert_collections" ON collections
  FOR INSERT TO anon, authenticated WITH CHECK (true);

DROP POLICY IF EXISTS "anon_update_collections" ON collections;
CREATE POLICY "anon_update_collections" ON collections
  FOR UPDATE TO anon, authenticated USING (true) WITH CHECK (true);

DROP POLICY IF EXISTS "anon_delete_collections" ON collections;
CREATE POLICY "anon_delete_collections" ON collections
  FOR DELETE TO anon, authenticated USING (true);

DROP POLICY IF EXISTS "anon_select_works" ON works;
CREATE POLICY "anon_select_works" ON works
  FOR SELECT TO anon, authenticated USING (true);

DROP POLICY IF EXISTS "anon_insert_works" ON works;
CREATE POLICY "anon_insert_works" ON works
  FOR INSERT TO anon, authenticated WITH CHECK (true);

DROP POLICY IF EXISTS "anon_update_works" ON works;
CREATE POLICY "anon_update_works" ON works
  FOR UPDATE TO anon, authenticated USING (true) WITH CHECK (true);

DROP POLICY IF EXISTS "anon_delete_works" ON works;
CREATE POLICY "anon_delete_works" ON works
  FOR DELETE TO anon, authenticated USING (true);
