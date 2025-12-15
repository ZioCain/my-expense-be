CREATE TABLE market_store (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    address VARCHAR(255) NULL,
    latitudine DOUBLE PRECISION NULL,
    longitudine DOUBLE PRECISION NULL,
    market_brand_id UUID REFERENCES market_brand (id)
);