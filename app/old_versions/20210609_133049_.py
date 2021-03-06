"""empty message

Revision ID: 269bd1294ea3
Revises: d46eddda4174
Create Date: 2021-06-09 13:30:49.647066

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = '269bd1294ea3'
down_revision = 'd46eddda4174'
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.add_column('purchases', sa.Column('price', sa.Integer(), nullable=False))
    op.add_column('purchases', sa.Column('quantity', sa.Integer(), nullable=False))
    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.drop_column('purchases', 'quantity')
    op.drop_column('purchases', 'price')
    # ### end Alembic commands ###
