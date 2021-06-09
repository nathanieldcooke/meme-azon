from flask import Blueprint, jsonify, request
from app.models import db, Purchase
# from flask_login import current_user, login_user

purchase_routes = Blueprint('purchases', __name__)

@purchase_routes.route('/')
def reviews():
    purchases = Purchase.query.all()
    return {purchase.id: purchase.to_dict() for purchase in purchases}