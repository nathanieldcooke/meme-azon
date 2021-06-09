# from app.models import db, Category

# def seed_categories():
#     categories = ['funny', 'sad', 'anime', 'feel-good', 'what!?']
#     for category in categories:
#         new_category = Category(
#             title=category
#         )
#         db.session.add(new_category)
#         db.session.commit()

# def undo_categories():
#     db.session.execute('TRUNCATE categories RESTART IDENTITY CASCADE;')
#     db.session.commit()