"""empty message

Revision ID: 2ebdf18fd559
Revises: 15ce0533c2e7
Create Date: 2021-06-09 09:02:07.535708

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = '2ebdf18fd559'
down_revision = '15ce0533c2e7'
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.drop_constraint('memes_categoryId_fkey', 'memes', type_='foreignkey')
    op.drop_column('memes', 'categoryId')
    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.add_column('memes', sa.Column('categoryId', sa.INTEGER(), autoincrement=False, nullable=False))
    op.create_foreign_key('memes_categoryId_fkey', 'memes', 'categories', ['categoryId'], ['id'])
    # ### end Alembic commands ###
