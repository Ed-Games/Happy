import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class createOrphanages1602640901304 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(new Table({
            name : 'orphanages',
            columns:[
                {
                    name: 'id',
                    type : 'integer',
                    unsigned: true,
                    isPrimary: true,
                    isGenerated: true,
                    generationStrategy: 'increment',
                    
                }
            ]
        }))
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
    }

}
