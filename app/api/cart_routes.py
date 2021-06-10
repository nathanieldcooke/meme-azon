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

@cart_routes.route('/<int:id>', methods=['PUT'])
def edit_item_in_my_cart(id):

    data_quantity = request.get_json()['quantity']

    meme_in_cart = MemesInCart.query.get(id)

    meme_in_cart.quantity = data_quantity

    db.session.commit()

    return meme_in_cart.to_dict()


@cart_routes.route('/<int:id>', methods=['DELETE'])
def delete_item_in_my_cart(id):

    meme_in_cart = MemesInCart.query.get(id)

    db.session.delete(meme_in_cart)
    db.session.commit()

    return str(meme_in_cart.id)

@cart_routes.route('/empty/<userId>', methods=['DELETE'])
def delete_items_in_my_cart(userId):

    memes_in_cart = MemesInCart.query.filter(MemesInCart.userId == userId).all()

    for meme_in_cart in memes_in_cart:

        db.session.delete(meme_in_cart)
        db.session.commit()

    return 'all memes in cart deleted for user'