import datetime
from .db import db


class Meme(db.Model):
    __tablename__ = 'memes'

    id = db.Column(db.Integer, primary_key = True)
    src = db.Column(db.String, nullable=False)
    name = db.Column(db.String, nullable=False, default='unknown')
    price = db.Column(db.Float, nullable=False)
    quantityAvailable = db.Column(db.Integer, nullable=False)
    description = db.Column(db.String, nullable=False)
    # categoryId = db.Column(db.Integer, db.ForeignKey('categories.id'), nullable=False)
    created_at = db.Column(db.DateTime, nullable=False, default=datetime.datetime.now())
    updated_at = db.Column(db.DateTime, nullable=False, default=datetime.datetime.now())

    # category = db.relationship('Category', back_populates='memes')
    purchases = db.relationship('Purchase', back_populates='meme')
    memesInCart = db.relationship('MemesInCart', back_populates='meme')
    reviews = db.relationship('Review', back_populates='meme')

    def to_dict(self):
        return {
            'id': self.id,
            'src': self.src,
            'name': self.name,
            'price': self.price,
            'quantityAvailable': self.quantityAvailable,
            'description': self.description,
            # 'categoryId': self.categoryId,
            'reviews': {review.id: review.to_dict() for review in self.reviews}
        }