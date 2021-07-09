import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class users1625768296691 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: "users",
                columns: [
                    {
                        name: "id",
                        type: "uuid",
                        isPrimary: true,
                        isNullable: false,
                        isUnique: true,
                        
                    },
                    {
                        name: "name",
                        type: "varchar",
                        isNullable: false,
                        isUnique: false,
                    },
                    {
                        name: "email",
                        type: "varchar",
                        isNullable: false,
                        isUnique: true,
                    },
                    {
                        name: "password",
                        type: "varchar",
                        isNullable: false,
                        isUnique: false
                    },
                    {
                        name: "isAdmin",
                        type: "boolean",
                        default: false,
                        isUnique: false
                    }

                ]
            })
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("users")
    }

}
