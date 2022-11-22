import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { Database } from 'src/database/database.interface';
import { CustomerService } from './customer.service';


@Controller('customer')

export class CustomerController {
    constructor(private customerService: CustomerService) {}

    @Get()
        async getCustomers(){
        return this.customerService.getAll()
    }

    @Get(':cpf')
        async getCustomer(@Param('cpf') cpf:string){
        return this.customerService.getCustomerById(cpf)
    }

    @Post()
    create(@Body() customer:Database){
        return this.customerService.createNewCustomer(customer)
    }
    
    // @Get()
    // getCustomers(){
    //     return this.customerService.getAllCustomers()
    // }

    // @Get(':id')
    // getCustomer(@Param('id') id:number){
    //     return this.customerService.getCustomerById(Number(id))
    // }

    // @Put(':id')
    // update(@Param('id') id:number, @Body() customer:any){
    //     return this.customerService.updateACustomer(Number(id), customer)
    // }

    // @Delete(':id')
    // delete(@Param('id') id:number){
    //     return this.customerService.deleteACustomer(Number(id))
    // }

}
