# import datetime
# from .db import db


# class Category(db.Model):
#     __tablename__ = 'categories'

#     id = db.Column(db.Integer, primary_key=True)
#     title = db.Column(db.String, nullable=False)
#     created_at = db.Column(db.DateTime, nullable=False, default=datetime.datetime.now())
#     updated_at = db.Column(db.DateTime, nullable=False, default=datetime.datetime.now())

    # memes = db.relationship('Meme', back_populates="category")