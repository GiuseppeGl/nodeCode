import { Entity, Column } from "typeorm"

@Entity()
export class User {
    @Column()
    id: number
    name: string
    description: string
    filename: string
    views: number
    isPublished: boolean
   
}
   