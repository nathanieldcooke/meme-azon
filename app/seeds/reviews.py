from random import randint
from faker import Faker
from app.models import db, Meme, User, Review
fake = Faker()

def seed_reviews():

    memes = Meme.query.all()
    users = User.query.all()

    for meme in memes:
        for _i in range(randint(2, 5)):
            user = users.pop(0)
            new_review = Review(
                userId=user.id,
                memeId=meme.id,
                body=fake.paragraph(nb_sentences=randint(1,4)),
                rating=randint(2,5),
            )
            users.append(user)

            db.session.add(new_review)
            db.session.commit()

def undo_reviews():
    db.session.execute('TRUNCATE reviews RESTART IDENTITY CASCADE;')
    db.session.commit()
