from app.seeds import memes
from random import randint
from faker import Faker
from app.models import db, Meme, User, Review, MemesInCart
fake = Faker()

def seed_cart():

    user = User.query.filter(User.email == 'demo@demo-mail.com').first()

    memes_in_cart = [20, 5, 15, 1, 11]

    for meme in memes_in_cart:
        meme_in_cart = MemesInCart(
            userId=user.id,
            memeId=meme,
            quantity=randint(1, 5)
        )
        db.session.add(meme_in_cart)
        db.session.commit()

def undo_cart():
    db.session.execute('TRUNCATE reviews RESTART IDENTITY CASCADE;')
    db.session.commit()
