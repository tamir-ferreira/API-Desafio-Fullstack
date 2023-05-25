import { MigrationInterface, QueryRunner } from "typeorm";

export class UpdateField1685032871992 implements MigrationInterface {
    name = 'UpdateField1685032871992'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "contacts" RENAME COLUMN "created_at" TO "createdAt"`);
        await queryRunner.query(`ALTER TABLE "clients" RENAME COLUMN "created_at" TO "createdAt"`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "clients" RENAME COLUMN "createdAt" TO "created_at"`);
        await queryRunner.query(`ALTER TABLE "contacts" RENAME COLUMN "createdAt" TO "created_at"`);
    }

}
