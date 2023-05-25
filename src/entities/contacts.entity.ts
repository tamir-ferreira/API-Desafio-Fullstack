import {
  Column,
  CreateDateColumn,
  Entity,
  ManyToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Client } from ".";

@Entity("contacts")
export class Contact {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column({ length: 45 })
  name: string;

  @Column({ length: 45, unique: true })
  email: string;

  @Column({ length: 15 })
  telephone: string;

  @CreateDateColumn({ type: "date" })
  createdAt: string;

  @ManyToOne(() => Client, (client) => client.contacts)
  client: Client;
}
