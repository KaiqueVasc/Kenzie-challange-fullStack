import { MigrationInterface, QueryRunner } from "typeorm";

export class CreateUser1691365569549 implements MigrationInterface {
    name = 'CreateUser1691365569549'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "users" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "fullName" character varying(100) NOT NULL, "email" character varying(80) NOT NULL, "password" character varying(100) NOT NULL, "telephone" character varying(11) NOT NULL, "registerDate" date NOT NULL DEFAULT now(), CONSTRAINT "UQ_97672ac88f789774dd47f7c8be3" UNIQUE ("email"), CONSTRAINT "PK_a3ffb1c0c8416b9fc6f907b7433" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "users"`);
    }

}
