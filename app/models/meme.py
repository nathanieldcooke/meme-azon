import datetime
from .db import db
class Meme(db.Model):
    __tablename__ = 'memes'

    id = db.Column(db.Integer, primary_key = True)
    src = db.Column(db.String, nullable=False)
    name = db.Column(db.String, nullable=False, default='unknown')
    price = db.Column(db.FLoat, nullable=False)
    quantityAvailable = db.Column(db.Integer, nullable=False)
    description = db.Column(db.String, nullable=False)
    categoryId = db.Column(db.Integer, db.ForeignKey('categories.id'), nullable=False)
    created_at = db.Column(db.DateTime, nullable=False, default=datetime.datetime.now())
    updated_at = db.Column(db.DateTime, nullable=False, default=datetime.datetime.now())
