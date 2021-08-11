import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export default class CreateBarTables1628640398611 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'bar_tables',
        columns: [
          {
            name: 'id',
            type: 'varchar',
            isPrimary: true,
            generationStrategy: 'uuid',
            default: 'uuid_generate_v4()',
          },
          {
            name: 'number',
            type: 'int',
            isGenerated: true,
            isUnique: true,
          },
          {
            name: 'status',
            type: 'boolean',
            isNullable: true,
          },
        ],
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('bar_tables');
  }
}
