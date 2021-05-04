import { Controller, Get, Param } from '@nestjs/common';

@Controller('categories')
export class CategoriesController {
  @Get(':idCategory/products/:idProducts')
  getCategorys(
    @Param('idCategory') idCategory: string,
    @Param('idProducts') idProducts: string,
  ) {
    return `categoria ${idCategory} producto ${idProducts}`;
  }
}
