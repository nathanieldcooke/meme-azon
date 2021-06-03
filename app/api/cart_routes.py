from flask import Blueprint, jsonify, request
from app.models import db, MemesInCart
# from flask_login import current_user, login_user

cart_routes = Blueprint('carts', __name__)

@cart_routes.route('/<int:id>')
def my_cart(id):
    memesInCart = MemesInCart.query.filter(MemesInCart.userId == id)
    return {meme.id: meme.to_dict() for meme in memesInCart}


@cart_routes.route('/', methods=['POST'])
def add_to_my_cart():

    data_userId = request.get_json()['userId']
    data_memeId = request.get_json()['memeId']
    data_quantity = request.get_json()['quantity']

    memeInCart = MemesInCart(
        userId=data_userId,
        memeId=data_memeId,
        quantity=data_quantity
    )

    db.session.add(memeInCart)
    db.session.commit()

    return memeInCart.to_dict()

@cart_routes.route('/', methods=['PATCH'])
def edit_item_in_my_cart():

    data_userId = request.get_json()['userId']
    data_memeId = request.get_json()['memeId']
    data_quantity = request.get_json()['quantity']

    meme_in_cart = MemesInCart.query.filter(MemesInCart.userId == data_userId, MemesInCart.memeId == data_memeId).first()

    meme_in_cart.quantity = data_quantity

    db.session.commit()

    return meme_in_cart.to_dict()


@cart_routes.route('/<userId>/<memeId>', methods=['DELETE'])
def delete_item_in_my_cart(userId, memeId):

    data_userId = userId
    data_memeId = memeId

    meme_in_cart = MemesInCart.query.filter(MemesInCart.userId == data_userId, MemesInCart.memeId == data_memeId).first()

    db.session.delete(meme_in_cart)
    db.session.commit()

    return meme_in_cart.to_dict()