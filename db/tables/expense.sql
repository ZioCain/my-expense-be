CREATE TABLE expense(
	id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
	product_id UUID REFERENCES product (id),
	scontrino_id UUID REFERENCES scontrino (id),
	price double precision not null,
	discount double precision not null default 0.0,
);