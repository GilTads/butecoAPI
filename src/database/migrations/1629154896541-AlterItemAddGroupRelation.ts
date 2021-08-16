import {
  MigrationInterface,
  QueryRunner,
  TableColumn,
  TableForeignKey,
} from 'typeorm';

export default class AlterItemAddGroupRelation1629154896541
  implements MigrationInterface
{
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.addColumn(
      'items',
      new TableColumn({
        name: 'item_group_id',
        type: 'uuid',
      }),
    );

    await queryRunner.createForeignKey(
      'items',
      new TableForeignKey({
        name: 'ItemGroup',
        columnNames: ['item_group_id'],
        referencedColumnNames: ['id'],
        referencedTableName: 'item_group',
        onDelete: 'RESTRICT',
        onUpdate: 'CASCADE',
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropForeignKey('items', 'ItemGroup');
    await queryRunner.dropColumn('items', 'item_group_id');
  }
}
