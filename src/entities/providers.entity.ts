import { Entity, Column, PrimaryColumn } from "typeorm";
import { v4 as uuidv4 } from "uuid";

@Entity()
export class Providers {
  @PrimaryColumn("uuid")
  readonly id: string;

  @Column("varchar", { length: 256, nullable: false })
  fantasy_name: string;

  @Column("varchar", { length: 256, nullable: false })
  name: string;

  @Column("varchar", { length: 14, nullable: false })
  cnpj: string;

  @Column("varchar", { length: 9, nullable: false })
  ie: string;

  @Column("varchar", { length: 256, nullable: false })
  street: string;

  @Column()
  number: number;

  @Column("varchar", { length: 256 })
  complement: string;

  @Column("varchar", { length: 256, nullable: false })
  district: string;

  @Column("varchar", { length: 2, nullable: false })
  state: string;

  @Column("varchar", { length: 256, nullable: false })
  country: string;

  @Column("varchar", { length: 10, nullable: false })
  zip_code: string;

  constructor() {
    if (!this.id) {
      this.id = uuidv4();
    }
  }
}
