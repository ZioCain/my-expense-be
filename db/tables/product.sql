CREATE TABLE product (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    name VARCHAR(255) NOT NULL,
    image VARCHAR(255) NULL,
	barcode VARCHAR(255) NULL,
	product_brand_id UUID REFERENCES product_brand (id)
);