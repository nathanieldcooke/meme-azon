import datetime
from .db import db


class Review(db.Model):
    __tablename__ = 'reviews'

    id = db.Column(db.Integer, primary_key = True)
    userId = db.Column(db.Integer, db.ForeignKey('users.id'), nullable=False)
    memeId = db.Column(db.Integer, db.ForeignKey('memes.id'), nullable=False)
    body = db.Column(db.String, nullable=False)
    rating = db.Column(db.Float, nullable=False)
    created_at = db.Column(db.DateTime, nullable=False, default=datetime.datetime.now())
    updated_at = db.Column(db.DateTime, nullable=False, default=datetime.datetime.now())

    user = db.relationship('User', back_populates='reviews')
    meme = db.relationship('Meme', back_populates='reviews')