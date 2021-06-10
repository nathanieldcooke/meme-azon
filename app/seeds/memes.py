from random import randint
from faker import Faker
from app.models import db, Meme
fake = Faker()

def seed_memes():

    memes = [
        {
            "src": "https://i.pinimg.com/originals/59/ef/2c/59ef2c782417232094936b06a2919621.jpg", 
            "name": "The Struggle", 
            "price": 2,
            "quantityAvailable": 100,
            "description": fake.paragraph(nb_sentences=randint(1,3)),
            "categoryId": 1,
        },
        {
            "src": "https://i.redd.it/gtqwwra5ruh31.jpg", 
            "name": "Flash Back", 
            "price": 5,
            "quantityAvailable": 20,
            "description": fake.paragraph(nb_sentences=randint(1,3)),
            "categoryId": 1,
        },
        {
            "src": "https://www.maketecheasier.com/assets/uploads/2020/08/funny-memes-this-week-eighth-grade.jpg", 
            "name": "Finally", 
            "price": 2,
            "quantityAvailable": 150,
            "description": fake.paragraph(nb_sentences=randint(1,3)),
            "categoryId": 1,
        },
        {
            "src": "https://i.pinimg.com/236x/8e/e1/d7/8ee1d7b8d6ee8d10526c736da2d117d2--funny-texts-gag.jpg", 
            "name": "Too True", 
            "price": 7,
            "quantityAvailable": 15,
            "description": fake.paragraph(nb_sentences=randint(1,3)),
            "categoryId": 1,
        },
        {
            "src": "https://www.lovequotesmessages.com/wp-content/uploads/2018/05/almost_crying_man_sad_meme1.jpg", 
            "name": "Don't Do Drugs", 
            "price": 3,
            "quantityAvailable": 90,
            "description": fake.paragraph(nb_sentences=randint(1,3)),
            "categoryId": 2,
        },
        {
            "src": "https://sayingimages.com/wp-content/uploads/Right-Now-I-Am-Feeling-Funny-Sad-Meme.jpg", 
            "name": "Every Other Day", 
            "price": 1,
            "quantityAvailable": 5,
            "description": fake.paragraph(nb_sentences=randint(1,3)),
            "categoryId": 2,
        },
        {
            "src": "https://1tb.favim.com/preview/7/727/7270/72707/7270743.jpg", 
            "name": "Goals", 
            "price": 8,
            "quantityAvailable": 60,
            "description": fake.paragraph(nb_sentences=randint(1,3)),
            "categoryId": 2,
        },
        {
            "src": "https://www.lovequotesmessages.com/wp-content/uploads/2018/05/banana_sad_meme1.jpg", 
            "name": "Don't Eat Me", 
            "price": 15,
            "quantityAvailable": 23,
            "description": fake.paragraph(nb_sentences=randint(1,3)),
            "categoryId": 2,
        },
        {
            "src": "https://i.quotev.com/img/q/u/18/11/4/ohvufaw7f3.jpg", 
            "name": "Creepy Smile", 
            "price": 1,
            "quantityAvailable": 50,
            "description": fake.paragraph(nb_sentences=randint(1,3)),
            "categoryId": 3,
        },
        {
            "src": "https://static3.srcdn.com/wordpress/wp-content/uploads/2019/05/I-Told-You-Not-To-Touch-My-Oreos.jpg?q=50&fit=crop&w=740&h=417&dpr=1.5", 
            "name": "True Story", 
            "price": 3,
            "quantityAvailable": 40,
            "description": fake.paragraph(nb_sentences=randint(1,3)),
            "categoryId": 3,
        },
        {
            "src": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQWo0VGXmE-lbfM07fb42BHF41KI140wyF3w&usqp=CAU", 
            "name": "Code Just Starts Working", 
            "price": 4,
            "quantityAvailable": 35,
            "description": fake.paragraph(nb_sentences=randint(1,3)),
            "categoryId": 3,
        },
        {
            "src": "https://filmdaily.co/wp-content/uploads/2020/05/anime-memes_10.jpg", 
            "name": "Like Outside Of Work", 
            "price": 15,
            "quantityAvailable": 40,
            "description": fake.paragraph(nb_sentences=randint(1,3)),
            "categoryId": 3,
        },
        {
            "src": "https://external-preview.redd.it/vdPJDLcDBOpcuOzelAsdN9KXbKO-4Apjsj_n8ArBZ1g.jpg?auto=webp&s=97c98b33eb3ca44226566e98fd819234ff305d77", 
            "name": "Bob Ross", 
            "price": 6,
            "quantityAvailable": 10,
            "description": fake.paragraph(nb_sentences=randint(1,3)),
            "categoryId": 4,
        },
        {
            "src": "https://pbs.twimg.com/media/Dcr4OZjW4AE8PbK.jpg", 
            "name": "Snap", 
            "price": 8,
            "quantityAvailable": 50,
            "description": fake.paragraph(nb_sentences=randint(1,3)),
            "categoryId": 4,
        },
        {
            "src": "http://images3.memedroid.com/images/UPLOADED141/569de80590832.jpeg", 
            "name": "Ya Ya", 
            "price": 9,
            "quantityAvailable": 15,
            "description": fake.paragraph(nb_sentences=randint(1,3)),
            "categoryId": 4,
        },
        {
            "src": "https://memeguy.com/photos/images/i-feel-good-65792.jpg", 
            "name": "A Simple Life", 
            "price": 18,
            "quantityAvailable": 80,
            "description": fake.paragraph(nb_sentences=randint(1,3)),
            "categoryId": 4,
        },
        {
            "src": "https://live.staticflickr.com/8362/8418838732_83ab028222_z.jpg", 
            "name": "Meow", 
            "price": 2,
            "quantityAvailable": 17,
            "description": fake.paragraph(nb_sentences=randint(1,3)),
            "categoryId": 5,
        },
        {
            "src": "https://www.memesmonkey.com/images/memesmonkey/ef/ef1265bc5e05c66e00619a3d7a59404d.jpeg", 
            "name": "Whaaaaat", 
            "price": 50,
            "quantityAvailable": 15,
            "description": fake.paragraph(nb_sentences=randint(1,3)),
            "categoryId": 5,
        },
        {
            "src": "https://media.thetab.com/blogs.dir/90/files/2019/12/memedecade.jpg", 
            "name": "... You Lookin At",
            "price": 18,
            "quantityAvailable": 12,
            "description": fake.paragraph(nb_sentences=randint(1,3)),
            "categoryId": 5,
        },
        {
            "src": "https://sayingimages.com/wp-content/uploads/annoyed-what-meme.jpg", 
            "name": "My Man", 
            "price": 26,
            "quantityAvailable": 20,
            "description": fake.paragraph(nb_sentences=randint(1,3)),
            "categoryId": 5,
        },
    ]
    for meme in memes:
        new_meme = Meme(
            src=meme['src'],
            name=meme['name'],
            price=meme['price'],
            quantityAvailable=meme['quantityAvailable'],
            description=meme['description'],
            # categoryId=meme['categoryId'],
        )
        db.session.add(new_meme)
        db.session.commit()

def undo_memes():
    db.session.execute('TRUNCATE memes RESTART IDENTITY CASCADE;')
    db.session.commit()