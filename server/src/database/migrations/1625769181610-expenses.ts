import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class expenses1625769181610 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: "expenses",
                columns: [
                    {
                        name: "id",
                        type: "uuid",
                        isPrimary: true,
                        isNullable: false,
                        isUnique: true,
                    },
                    {
                        name: "ownerId",
                        type: "uuid",
                        isNullable: false,
                        isUnique: false
                    },
                    {
                        name: "value",
                        type: "float",
                        isNullable: false,
                        isUnique: false
                    },
                    {
                        name: "day",
                        type: "integer",
                        isNullable: false,
                        isUnique: false
                    },
                    {
                        name: "month",
                        type: "integer",
                        isNullable: false,
                        isUnique: false
                    },
                    {
                        name: "year",
                        type: "integer",
                        isNullable: false,
                        isUnique: false
                    }
                ]
            })
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        queryRunner.dropTable("expenses")
    }

}
