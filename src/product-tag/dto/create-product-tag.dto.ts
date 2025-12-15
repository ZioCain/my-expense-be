import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsString } from "class-validator";

export class CreateProductTagDto {
	@ApiProperty({description:"Il nome del tag", example: "Cibo", type: "string"})
	@IsString()
	@IsNotEmpty()
	readonly name:string;
}
