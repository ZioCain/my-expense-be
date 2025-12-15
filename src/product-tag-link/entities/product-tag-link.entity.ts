import { ProductTag } from "src/product-tag/entities/product-tag.entity";
import { Product } from "src/product/entities/product.entity";
import { Column, Entity, JoinColumn, ManyToOne, PrimaryColumn } from "typeorm";

@Entity({name: "product_tag_link"})
export class ProductTagLink {
	@PrimaryColumn({ type: 'uuid' })
    product_id: string;

    @ManyToOne(() => Product)
    @JoinColumn({ name: 'product_id' })
    product: Product;

    // --- Product Tag Relationship ---

    @PrimaryColumn({ type: 'uuid' })
    product_tag_id: string;

    @ManyToOne(() => ProductTag)
    @JoinColumn({ name: 'product_tag_id' })
    productTag: ProductTag;
}
