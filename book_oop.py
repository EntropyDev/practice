"""
Implement a Book reader: 
    - A book can be added/removed
    - A book has title and content/pages
    - A book has active page
    - A library has a list of Books
    - The user has one active book from the library
    - Display the active page of the Active Book
    
"""

class Book:
    def __init__(self, title, content, id):
        self.title = title
        self.content = content
        self.id = id
        self.active_page = 0

    def display_page(self):
        page = self.content[self.active_page]
        return page
    
    def turn_page(self):
        self.active_page += 1
        return self.display_page()
    
class Library:
    def __init__(self, name):
        self.name = name
        self.collection = dict()
        self.counter = 0
        self.active_book = None
    
    def addBook(self, title, content):
        newBook = Book(title, content, self.counter)
        self.collection[self.counter] = newBook
        self.counter += 1

    def remBook(self, id):
        del self.collection[id]
    
    def setActive(self, id):
        self.active_book = id

    def displayActivePage(self):
       return self.collection[self.active_book].display_page() 

    def displayTurnPage(self):
        return self.collection[self.active_book].turn_page()

