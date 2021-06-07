from random import randint
from faker import Faker
from werkzeug.security import generate_password_hash
from app.models import db, User
fake = Faker()

# Adds a demo user, you can add other users here if you want
def seed_users():

    demo = User(
        firstname="Demo", 
        lastname="User", 
        email='demo@demo-mail.com',
        password='password54321!'
    )

    db.session.add(demo)
    db.session.commit()

    for _i in range(20):
        new_user = User(
        firstname=fake.first_name(), 
        lastname=fake.last_name(), 
        email=fake.free_email(),
        password='password',
        avatar=fake.image_url()
        )
        db.session.add(new_user)
        db.session.commit()

# Uses a raw SQL query to TRUNCATE the users table.
# SQLAlchemy doesn't have a built in function to do this
# TRUNCATE Removes all the data from the table, and resets
# the auto incrementing primary key
def undo_users():
    db.session.execute('TRUNCATE users RESTART IDENTITY CASCADE;')
    db.session.commit()
