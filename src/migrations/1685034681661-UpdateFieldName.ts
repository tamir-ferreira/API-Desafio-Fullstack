import { MigrationInterface, QueryRunner } from "typeorm";

export class UpdateFieldName1685034681661 implements MigrationInterface {
    name = 'UpdateFieldName1685034681661'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "contacts" RENAME COLUMN "full_name" TO "name"`);
        await queryRunner.query(`ALTER TABLE "clients" RENAME COLUMN "full_name" TO "name"`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "clients" RENAME COLUMN "name" TO "full_name"`);
        await queryRunner.query(`ALTER TABLE "contacts" RENAME COLUMN "name" TO "full_name"`);
    }

}
