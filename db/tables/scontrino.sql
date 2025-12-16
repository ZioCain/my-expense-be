CREATE TABLE scontrino(
	id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
	buy_date date not null default now(),
	market_store_id UUID REFERENCES market_store (id),
	total DOUBLE PRECISION NOT NULL DEFAULT 0.0
);