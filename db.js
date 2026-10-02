const Database = require('better-sqlite3');
const db = new Database('recipes.db');

db.exec('
    CREATE TABLE IF NOT EXISTS recipes (
        recipe_id           INTEGER PRIMARY KEY AUTOINCREMENT,
        recipe_name         TEXT NOT NULL,
        recipe_prep_mins    INTEGER NOT NULL,
        recipe_cook_mins    INTEGER NOT NULL
    );

    CREATE TABLE IF NOT EXISTS ingredients (
        recipe_id               INTEGER NOT NULL,
        ingredient_name         TEXT NOT NULL,
        ingredient_amount       REAL NOT NULL,
        FOREIGN KEY (recipe_id) REFERENCES recipes(recipe_id) ON DELETE CASCADE
    );
');