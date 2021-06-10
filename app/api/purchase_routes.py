from flask import Blueprint, jsonify, request
from app.models import db, Purchase, Meme
from random import randint
# from flask_login import current_user, login_user

purchase_routes = Blueprint('purchases', __name__)

@purchase_routes.route('/<userId>/')
def purchases(userId):
    # purchases = Purchase.query.all()
    purchases = Purchase.query.filter(Purchase.userId == userId)
    return {purchase.id: purchase.to_dict() for purchase in purchases}

@purchase_routes.route('/<userId>/', methods=['POST'] )
def purchase(userId):
    data_purchase = request.get_json()['purchase']
    # print('DATA_TEST: ', data_purchase)
    new_purchases = {}
    number=f"{randint(1,9)}{randint(0,9)}{randint(0,9)}{randint(0,9)}{randint(0,9)}{randint(0,9)}{randint(0,9)}{randint(0,9)}{randint(0,9)}"
    for key in data_purchase:
        data_sub_purch = data_purchase[key]
        price=data_sub_purch['meme']['price']
        quantity=data_sub_purch['quantity']
        memeId=data_sub_purch['meme']['id']

        meme = Meme.query.get(memeId)

        meme.quantityAvailable = meme.quantityAvailable - quantity

        db.session.commit()

        new_purchase = Purchase(
            userId=userId,
            memeId=memeId,
            price=price,
            quantity=quantity,
            total=price*quantity,
            purchaseId=int(number)
        )
        db.session.add(new_purchase)
        db.session.commit()
        new_purchases[new_purchase.id] = new_purchase.to_dict()
    return new_purchases
