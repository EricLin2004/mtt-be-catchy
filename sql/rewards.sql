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

