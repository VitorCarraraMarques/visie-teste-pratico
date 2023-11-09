from fastapi import Depends, FastAPI, HTTPException, Response, status
from fastapi.middleware.cors import CORSMiddleware
from sqlalchemy.orm import Session 

from . import crud, models, schemas
from .database import SessionLocal, engine 

models.Base.metadata.create_all(bind=engine)

app = FastAPI()

origins = ['http://localhost:3000']

app.add_middleware(
    CORSMiddleware,
    allow_origins = origins, 
    allow_credentials = True, 
    allow_methods = ["*"],
    allow_headers = ["*"],
)

def get_db():
    db = SessionLocal()
    try: 
        yield db 
    finally:
        db.close()


@app.get("/api/pessoas/")
def get_all_people(db: Session = Depends(get_db)):
    db_pessoas = crud.find_all(db)
    if db_pessoas is None: 
        raise HTTPException(status_code=status.HTTP_404_NOT_FOUND, detail="Não há pessoas no banco de dados")
    return db_pessoas

@app.get("/api/pessoas/{id}")
def get_person_by_id(id: int, db: Session = Depends(get_db)):
    db_pessoa = crud.find_by_id(db, id)
    if db_pessoa is None: 
        raise HTTPException(status_code=status.HTTP_404_NOT_FOUND, detail="Pessoa não encontrada")
    return db_pessoa

@app.post("/api/pessoas/")
def add_person(request: schemas.PessoaRequest, db: Session = Depends(get_db)):
    pessoa = crud.save(db, models.Pessoa(**request.dict()))
    return schemas.PessoaResponse.from_orm(pessoa)

@app.put("/api/pessoas/{id}")
def update_person(id: int, request: schemas.PessoaRequest, db: Session = Depends(get_db)):
    if not crud.exists_by_id(db, id):
        raise HTTPException(status_code=404, detail="Pessoa não encontrada")
    pessoa = crud.save(db, models.Pessoa(id_pessoa=id, **request.dict()))
    return schemas.PessoaResponse.from_orm(pessoa)

@app.delete("/api/pessoas/{id}")
def delete_person_by_id(id: int, db: Session = Depends(get_db)):
    if not crud.exists_by_id(db, id):
        raise HTTPException(status_code=status.HTTP_404_NOT_FOUND, detail="Pessoa não encontrada")
    crud.delete_by_id(db, id)
    return Response(status_code=status.HTTP_204_NO_CONTENT)