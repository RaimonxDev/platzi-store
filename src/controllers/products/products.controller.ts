import { Body, Controller, Get, Param, Post, Query } from '@nestjs/common';

@Controller('products')
export class ProductsController {
  // Ruta Principal
  @Get()
  paginacion(
    @Query('limit') limit: number = 100,
    @Query('offset') offset: number = 0,
    @Query('brand') brand: string,
  ) {
    return {
      message: `limit:${limit} ofsset:${offset} brand:${brand}`,
    };
  }
  //Primero se definen las rutas NO DINAMICAS
  @Get('filter')
  getProductFilter() {
    return { message: `yo soy filter` };
  }
  //Ruta dinamica
  @Get(':id')
  getProduct(@Param('id') id: string) {
    return { message: `product ${id}` };
  }
  @Post()
  create(@Body() payload: any) {
    return {
      message: 'accion de crear',
      payload,
    };
  }

  // No importa el orden en la peticion
}
