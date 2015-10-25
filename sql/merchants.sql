DROP TABLE IF EXISTS merchants CASCADE;

CREATE TABLE merchants (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  api_key TEXT UNIQUE,
  shared_secret TEXT UNIQUE,
  name TEXT,
  location TEXT,
  stars_required INTEGER
);

