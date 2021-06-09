from app.seeds import memes
from random import randint
from faker import Faker
from app.models import db, Meme, User, Review, MemesInCart, Purchase
fake = Faker()

def seed_purchases():

    user = User.query.filter(User.email == 'demo@demo-mail.com').first()

    # memes_in_cart = [20, 5, 15, 1, 11]
    # memes_in_purchase_hist = [18, 3, 10, 9, 7]
    memes_in_purchase_hist = [
        {
            "memeId": 18, 
            "total": 50,
        },
        {
            "memeId": 3, 
            "total": 6,
        },
        {
            "memeId": 10, 
            "total": 3,
        },
        {
            "memeId": 9, 
            "total": 5,
        },
        {
            "memeId": 7, 
            "total": 8,
        }
    ]

    for meme in memes_in_purchase_hist:
        meme_in_purchase_hist = Purchase(
            userId=user.id,
            memeId=meme['memeId'],
            total=meme['total']
        )
        db.session.add(meme_in_purchase_hist)
        db.session.commit()

def undo_purchases():
    db.session.execute('TRUNCATE purchases RESTART IDENTITY CASCADE;')
    db.session.commit()
