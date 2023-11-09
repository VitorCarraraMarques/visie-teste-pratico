import os 

import sqlalchemy
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy.orm import sessionmaker

SQL_USER = "vitormarques" #os.environ.get("DB_USER")
SQL_PASSWORD = "dml0b3JtYXJx"#os.environ.get("DB_PASSWORD")
SQL_HOST = "jobs.visie.com.br"#os.environ.get("DB_HOST")
SQL_PORT = "3306"#os.environ.get("DB_PORT")
SQL_DB = "vitormarques"#os.environ.get("DB_NAME")
SQL_URL = f"mysql+mysqldb://{SQL_USER}:{SQL_PASSWORD}@{SQL_HOST}:{SQL_PORT}/{SQL_DB}"

engine = sqlalchemy.create_engine(SQL_URL)

SessionLocal = sessionmaker(autocommit=False, autoflush=False, bind=engine)

Base = declarative_base()
