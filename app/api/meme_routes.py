from flask import Blueprint, jsonify, request
from app.models import db, Meme
from flask_login import current_user, login_user

meme_routes = Blueprint('memes', __name__)

@meme_routes.route('/')
def get_memes():
    memes = Meme.query.all()
    return {meme.id: meme.to_dict() for meme in memes}

@meme_routes.route('/<meme_cats>')
def get_memes_by_cats(meme_cats):
    meme_cats = meme_cats.split('-')
    memes = []
    for meme_cat in meme_cats:
        category_id = meme_cat
        sub_memes = Meme.query.filter(Meme.categoryId == category_id)
        for meme in sub_memes:
            memes.append(meme)
    return { meme.id: meme.to_dict() for meme in memes }
    