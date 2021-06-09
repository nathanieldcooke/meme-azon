from flask.cli import AppGroup
from .users import seed_users, undo_users
# from .categories import seed_categories, undo_categories
from .memes import seed_memes, undo_memes
from .reviews import seed_reviews, undo_reviews
from .cart import seed_cart, undo_cart

# Creates a seed group to hold our commands
# So we can type `flask seed --help`
seed_commands = AppGroup('seed')

# Creates the `flask seed all` command
@seed_commands.command('all')
def seed():
    # seed_categories()
    seed_users()
    seed_memes()
    seed_reviews()
    seed_cart()
    # Add other seed functions here

# Creates the `flask seed undo` command
@seed_commands.command('undo')
def undo():
    # undo_categories()
    undo_users()
    undo_memes()
    undo_reviews()
    undo_cart()
    # Add other undo functions here
