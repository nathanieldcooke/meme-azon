from app.seeds import memes
from random import randint
from faker import Faker
from app.models import db, Meme, User, Review, MemesInCart, Purchase, purchase
fake = Faker()

def seed_purchases():

    user = User.query.filter(User.email == 'demo@demo-mail.com').first()

    # memes_in_cart = [20, 5, 15, 1, 11]
    # memes_in_purchase_hist = [18, 3, 10, 9, 7]
    memes_in_purchase_hist = [
        {
            "memeId": 18,
            "price": 50,
            "quantity": 2,
            "total": 100,
            "purchaseId": 153941764
        },
        {
            "memeId": 3, 
            "price": 2,
            "quantity": 4,
            "total": 8,
            "purchaseId": 153941764
        },
        {
            "memeId": 10, 
            "price": 3,
            "quantity": 1,
            "total": 3,
            "purchaseId": 153941764
        },
        {
            "memeId": 9, 
            "price": 1,
            "quantity": 16,
            "total": 16,
            "purchaseId": 153941764
        },
        {
            "memeId": 7,
            "price": 8,
            "quantity": 3, 
            "total": 24,
            "purchaseId": 153941764
        },
        {
            "memeId": 11,
            "price": 4,
            "quantity": 3, 
            "total": 14,
            "purchaseId": 977637769
        },
        {
            "memeId": 14,
            "price": 8,
            "quantity": 2, 
            "total": 16,
            "purchaseId": 977637769
        },
    ]

    for meme in memes_in_purchase_hist:
        meme_in_purchase_hist = Purchase(
            userId=user.id,
            memeId=meme['memeId'],
            price=meme['price'],
            quantity=meme['quantity'],
            total=meme['total'],
            purchaseId=meme['purchaseId']
        )
        db.session.add(meme_in_purchase_hist)
        db.session.commit()

def undo_purchases():
    db.session.execute('TRUNCATE purchases RESTART IDENTITY CASCADE;')
    db.session.commit()
