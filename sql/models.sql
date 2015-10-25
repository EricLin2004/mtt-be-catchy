CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

DROP TABLE IF EXISTS users CASCADE;

CREATE TABLE users (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  name TEXT
);

DROP TABLE IF EXISTS merchants CASCADE;

CREATE TABLE merchants (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  api_key TEXT UNIQUE,
  shared_secret TEXT UNIQUE,
  name TEXT,
  location TEXT,
  stars_required INTEGER
);

DROP TABLE IF EXISTS rewards CASCADE;

CREATE TABLE rewards (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  merchant_id UUID,
  name TEXT,
  description TEXT,
  image TEXT,
  price NUMERIC,

  FOREIGN KEY (merchant_id) REFERENCES merchants (id)
);

DROP TABLE IF EXISTS user_stars CASCADE;

CREATE TABLE user_stars (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  user_id UUID,
  merchant_id UUID,
  created_at DATE,
  redeemed BOOLEAN,

  FOREIGN KEY (user_id) REFERENCES users (id),
  FOREIGN KEY (merchant_id) REFERENCES merchants (id)
);

INSERT INTO users (name) VALUES ('Flynn Howling');

INSERT INTO merchants (name, location, stars_required, api_key, shared_secret) VALUES ('Panda Express', '3825 South Maryland Pky', 5, 'O69MZUH2UKCWTGLPI9MQ21b4GoCdPB3k4EV3sK3RD_d8HimSs', '{rwKMNhP4Sh1R#IEwc9iy34QI+udq}ti2HdTc@tH');
INSERT INTO merchants (name, location, stars_required, api_key, shared_secret) VALUES ('JINYA Ramen Bar', '4860 W Flamingo Rd', 10, '2389ESJ6HRFM5D7I5COG21PCIEnAXXNQe5Fnz9CvZEKC45YhQ', 'I4XoNhIvHjWs$IKJU#sOH#tkBb/MK#DIBT5NiLVL');
INSERT INTO merchants (name, location, stars_required, api_key, shared_secret) VALUES ('Newegg', 'http://www.newegg.com/', 5, '2JOHIUQVS82EDNKW8WT4210rdatIPinDOo5hTUPBuexSFbe-c', 'D-H1zwwM2dNWGRq}Q4P03Hl#95ThRmYF{0t4X3@4');
INSERT INTO merchants (name, location, stars_required, api_key, shared_secret) VALUES ('PlaceHolder', 'http://www.newegg.com/', 5, '028QDJE0R9IRDHTLNLHK21S-YxpppBZ9seQp5ZlBJrDWdf7aQ', 'uFu@#t9GRGgLp$0JpsD+#3RWtD3x@Mom8dj2oBy$');

