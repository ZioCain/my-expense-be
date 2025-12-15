import { IsUUID } from "class-validator";

export class CreateProductTagLinkDto {
	@IsUUID()
	product_id: string;

	@IsUUID()
	product_tag_id: string;
}
