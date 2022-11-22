
import { Injectable, NotFoundException } from '@nestjs/common';
import { FirestoreDatabase } from '../database/firestore-database';
import { Database } from 'src/database/database.interface';


@Injectable()
export class CustomerService {
  constructor(private readonly firestore: FirestoreDatabase) {}

    async getAll(): Promise<Database> {
        const result = await this.firestore.getAllData('leads');
        return result;
    }

    async getCustomerById(cpf:string){
        const result = await this.firestore.getAllData('leads');
        const ourCustomer = result.find((customer: { customer: Database; cpf: string}) => customer.cpf === cpf)
        if(!ourCustomer){
            throw new NotFoundException ('O cliente buscado não existe')
        }
        return ourCustomer
    }

    async createNewCustomer (object:Database): Promise<Database> {
        const result = await this.firestore.getAllData('leads');
        result.push(object)
        console.log('Cadastrado com sucesso!')
        return result
    }

//   async addLead(object: any): Promise<any> {
//     const result = await this.firestore.add('leads', object);
//     return 'Cadastrado com sucesso!!';
//   }
}


// @Injectable()
// export class CustomerService {
    
//     getAllCustomers(){
//         return customers
//     }
    
//     getCustomerById(id:number){
//         const ourCustomer = customers.find(customer => customer.id === id)
//         if(!ourCustomer){
//             throw new NotFoundException('O cliente buscado não existe')
//         }
//         return ourCustomer 
//     }

//     createNewCustomer(customer:any){
//         if(!customer){
//             throw new NotFoundException('As informações do cliente não foram definidas.')
//         }
//         customers.push(customer)
//         return customers
//     }

//     updateACustomer(id:number, customer:any){
//         let customerToUpdate = customers.find(customer => customer.id === id)
//         if(!customerToUpdate){
//             throw new NotFoundException('O cliente a ser atualizado não existe')
//         }
//         if(!customer){
//             throw new NotFoundException('As informações do cliente não foram definidas.')
//         }
//         for(let i = 0; i < customers.length; i++){
//             if(customers[i].id === id){
//                 customers[i].name = customer.name
//                 customers[i].email = customer.email
//                 customers[i].cellNumber = customer.cellNumber
//                 return customers
//             }
//         }
//     }

//     deleteACustomer(id:number){

//     }

//}
