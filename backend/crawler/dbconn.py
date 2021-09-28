import sqlite3

class DBConn:
    conn = None
    def __init__(self):
        self.conn = sqlite3.connect("crawled_data.db")
