import datetime
from .db import db


class MemesInCart(db.Model):
    __tablename__ = 'memesincart'

    id = db.Column(db.Integer, primary_key=True)
    userId = db.Column(db.Integer, db.ForeignKey('users.id'), nullable=False)
    memeId = db.Column(db.Integer, db.ForeignKey('memes.id'), nullable=False)
    quantity = db.Column(db.Integer, nullable=False)
    created_at = db.Column(db.DateTime, nullable=False, default=datetime.datetime.now())
    updated_at = db.Column(db.DateTime, nullable=False, default=datetime.datetime.now())

    user = db.relationship('User', back_populates='memesInCart')
    meme = db.relationship('Meme', back_populates='memesInCart')

    def to_dict(self):
        return {
            'id': self.id,
            'userId': self.userId,
            'memeId': self.memeId,
            'quantity': self.quantity,
            'meme': self.meme.to_dict()
        }