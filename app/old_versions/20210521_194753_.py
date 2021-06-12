"""empty message

Revision ID: 69817e4c6871
Revises: ffdc0a98111c
Create Date: 2021-05-21 19:47:53.951530

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = '69817e4c6871'
down_revision = 'ffdc0a98111c'
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.add_column('users', sa.Column('avatar', sa.String(length=360), nullable=True))
    op.add_column('users', sa.Column('bio', sa.Text(), nullable=True))
    op.add_column('users', sa.Column('created_at', sa.DateTime(), nullable=False))
    op.add_column('users', sa.Column('firstname', sa.String(length=50), nullable=False))
    op.add_column('users', sa.Column('lastname', sa.String(length=50), nullable=False))
    op.add_column('users', sa.Column('updated_at', sa.DateTime(), nullable=False))
    op.drop_constraint('users_username_key', 'users', type_='unique')
    op.drop_column('users', 'username')
    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.add_column('users', sa.Column('username', sa.VARCHAR(length=40), autoincrement=False, nullable=False))
    op.create_unique_constraint('users_username_key', 'users', ['username'])
    op.drop_column('users', 'updated_at')
    op.drop_column('users', 'lastname')
    op.drop_column('users', 'firstname')
    op.drop_column('users', 'created_at')
    op.drop_column('users', 'bio')
    op.drop_column('users', 'avatar')
    # ### end Alembic commands ###