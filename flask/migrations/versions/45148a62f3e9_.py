"""empty message

Revision ID: 45148a62f3e9
Revises: 
Create Date: 2024-03-12 16:04:10.199889

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = '45148a62f3e9'
down_revision = None
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.create_table('album_table',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('name', sa.String(), nullable=True),
    sa.Column('year', sa.Integer(), nullable=True),
    sa.PrimaryKeyConstraint('id', name=op.f('pk_album_table'))
    )
    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.drop_table('album_table')
    # ### end Alembic commands ###
