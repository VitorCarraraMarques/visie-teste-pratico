from sqlalchemy.orm import Session 

from . import models, schemas 

def find_all(db: Session):
    return db.query(models.Pessoa).all() 

def find_by_id(db: Session, id: int):
    return db.query(models.Pessoa).filter(models.Pessoa.id_pessoa == id).first()

def save(db: Session, pessoa: models.Pessoa):
    if pessoa.id_pessoa:
        db.merge(pessoa)
    else:
        db.add(pessoa)
    db.commit()
    return pessoa 

def exists_by_id(db: Session, id: int):
    return db.query(models.Pessoa).filter(models.Pessoa.id_pessoa == id).first() is not None 

def delete_by_id(db: Session, id: int): 
    pessoa = db.query(models.Pessoa).filter(models.Pessoa.id_pessoa == id).first() 
    if pessoa is not None: 
        db.delete(pessoa)
        db.commit() 

