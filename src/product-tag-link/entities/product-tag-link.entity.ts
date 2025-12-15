import { ProductTag } from "src/product-tag/entities/product-tag.entity";
import { Product } from "src/product/entities/product.entity";
import { Column, Entity, JoinColumn, ManyToOne } from "typeorm";

@Entity({name: "product_tag_link"})
export class ProductTagLink {
	@Column({ type: 'uuid' })
    product_id: string;

    @ManyToOne(() => Product)
    @JoinColumn({ name: 'product_id' })
    product: Product;

    // --- Product Tag Relationship ---

    @Column({ type: 'uuid' })
    product_tag_id: string;

    @ManyToOne(() => ProductTag)
    @JoinColumn({ name: 'product_tag_id' })
    productTag: ProductTag;
}
