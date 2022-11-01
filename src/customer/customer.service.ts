import { Injectable, NotFoundException } from '@nestjs/common';

const customers = [{
    id: 1,
    name: 'Téo',
    email: 'teo@email.com',
    cellNumber: '(11)12312-1212'
},{
    id: 2,
    name: 'Lyon',
    email: 'lyon@email.com',
    cellNumber: '(21)23423-2323'
},{
    id: 3,
    name: 'Luna',
    email: 'luna@email.com',
    cellNumber: '(31)34534-3434'
},{
    id: 4,
    name: 'Lelo',
    email: 'lelo@email.com',
    cellNumber: '(41)45645-4545'
}]

@Injectable()
export class CustomerService {
    
    getAllCustomers(){
        return customers
    }
    
    getCustomerById(id:number){
        const ourCustomer = customers.find(customer => customer.id === id)
        if(!ourCustomer){
            throw new NotFoundException('O cliente buscado não existe')
        }
        return ourCustomer 
    }

    createNewCustomer(customer:any){
        if(!customer){
            throw new NotFoundException('As informações do cliente não foram definidas.')
        }
        customers.push(customer)
        return customers
    }

    updateACustomer(id:number, customer:any){
        let customerToUpdate = customers.find(customer => customer.id === id)
        if(!customerToUpdate){
            throw new NotFoundException('O cliente a ser atualizado não existe')
        }
        if(!customer){
            throw new NotFoundException('As informações do cliente não foram definidas.')
        }
        for(let i = 0; i < customers.length; i++){
            if(customers[i].id === id){
                customers[i].name = customer.name
                customers[i].email = customer.email
                customers[i].cellNumber = customer.cellNumber
                return customers
            }
        }
    }

    deleteACustomer(id:number){

    }

}
