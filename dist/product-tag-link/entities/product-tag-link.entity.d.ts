import { ProductTag } from "src/product-tag/entities/product-tag.entity";
import { Product } from "src/product/entities/product.entity";
export declare class ProductTagLink {
    product_id: string;
    product: Product;
    product_tag_id: string;
    productTag: ProductTag;
}
