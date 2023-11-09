import datetime 
from pydantic import BaseModel 

class PessoaBase(BaseModel): 
    nome: str 
    rg: str 
    cpf: str 
    data_admissao: datetime.date
    data_nascimento: datetime.date

class PessoaRequest(PessoaBase):
    ...

class PessoaResponse(PessoaBase):
    id_pessoa: int 

    class Config: 
        orm_mode = True 