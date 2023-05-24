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
  full_name: string;

  @Column({ length: 45, unique: true })
  email: string;

  @Column({ default: false, nullable: true })
  telephone: string;

  @CreateDateColumn({ type: "date" })
  createdAt: string;

  @ManyToOne(() => Client)
  client: Client;
}
