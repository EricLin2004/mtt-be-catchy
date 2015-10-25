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