CREATE TABLE market_brand (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    name VARCHAR(255) NOT NULL,
    logo VARCHAR(255) NULL
);