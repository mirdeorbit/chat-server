import { Entity, Column, ObjectIdColumn } from 'typeorm';

@Entity({name: 'users'})
export class User {
    @ObjectIdColumn()
    id: number;

    @Column()
    email: string;

    @Column()
    password: string;

    @Column({ default: true })
    fullName: string;

    @Column()
    token: string;
}