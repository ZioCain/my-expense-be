CREATE TABLE product_tag_link (
    product_id UUID NOT NULL REFERENCES product (id) ON DELETE CASCADE,
    product_tag_id UUID NOT NULL REFERENCES product_tag (id) ON DELETE CASCADE,

    PRIMARY KEY (product_id, product_tag_id)
);