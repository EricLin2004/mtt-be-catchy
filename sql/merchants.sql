DROP TABLE IF EXISTS merchants CASCADE;

CREATE TABLE merchants (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  apiKey TEXT UNIQUE,
  sharedSecret TEXT UNIQUE,
  name TEXT,
  location TEXT,
  starsRequired INTEGER
);