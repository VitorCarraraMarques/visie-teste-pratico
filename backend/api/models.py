from sqlalchemy import Column, DateTime, Integer, String 

from .database import Base 

class Pessoa(Base): 
    __tablename__ = "pessoas"

    id_pessoa = Column(Integer, primary_key=True, nullable=False)
    nome = Column(String, nullable=False)
    rg = Column(String, nullable=False)
    cpf = Column(String, nullable=False)
    data_nascimento = Column(DateTime, nullable=False)
    data_admissao = Column(DateTime, nullable=False)