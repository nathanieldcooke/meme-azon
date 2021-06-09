import datetime
from .db import db


class Purchase(db.Model):
    __tablename__ = 'purchases'

    id = db.Column(db.Integer, primary_key=True)
    userId = db.Column(db.Integer, db.ForeignKey('users.id'), nullable=False)
    memeId = db.Column(db.Integer, db.ForeignKey('memes.id'), nullable=False)
    price = db.Column(db.Integer, nullable=False)
    quantity = db.Column(db.Integer, nullable=False)
    total = db.Column(db.Integer, nullable=False)
    purchaseId = db.Column(db.Integer, nullable=False)
    created_at = db.Column(db.DateTime, nullable=False, default=datetime.datetime.now())
    updated_at = db.Column(db.DateTime, nullable=False, default=datetime.datetime.now())

    user = db.relationship('User', back_populates='purchases')
    meme = db.relationship('Meme', back_populates='purchases')

    def to_dict(self):
        return {
            'id': self.id,
            'userId': self.userId,
            'memeId': self.memeId,
            'price': self.price,
            'quantity': self.quantity,
            'total': self.total,
            'purchaseId': self.purchase_id,
            'meme': self.meme.to_dict(),
            'user': self.user.to_dict(),
        }