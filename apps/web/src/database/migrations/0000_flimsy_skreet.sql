CREATE TABLE IF NOT EXISTS "sideproject_todos" (
	"id" serial PRIMARY KEY NOT NULL,
	"name" text NOT NULL,
	"completed" boolean DEFAULT false NOT NULL
);
