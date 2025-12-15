import { Expose } from 'class-transformer';

export class ProductBrandResponseDto {
	@Expose()
	id: string;

	@Expose()
	name: string;

	@Expose()
	logo: string;
}