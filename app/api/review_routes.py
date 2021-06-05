from flask import Blueprint, jsonify, request
from app.models import db, Review
# from flask_login import current_user, login_user

review_routes = Blueprint('reviews', __name__)

@review_routes.route('/')
def reviews():
    reviews = Review.query.all()
    return {review.id: review.to_dict() for review in reviews}

@review_routes.route('/', methods=['POST'])
def add_review():
    
    data_userId = request.get_json()['userId']
    data_memeId = request.get_json()['memeId']
    data_body = request.get_json()['body']
    data_rating = request.get_json()['rating']

    review = Review(
        userId=data_userId,
        memeId=data_memeId,
        body=data_body,
        rating=data_rating,
    )

    db.session.add(review)
    db.session.commit()

    return review.to_dict()

@review_routes.route('/<id>', methods=['PUT'])
def edit_item_in_my_cart(id):

    data_body = request.get_json()['body']
    data_rating = request.get_json()['rating']

    review = Review.query.get(id)
    review.body = data_body
    review.rating = data_rating

    db.session.commit()

    return review.to_dict()


@review_routes.route('/<reviewId>', methods=['DELETE'])
def delete_item_in_my_cart(reviewId):

    review = Review.query.get(reviewId)

    db.session.delete(review)
    db.session.commit()

    return str(review.id)