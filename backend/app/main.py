from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

from app.schemas.prediction import PredictionRequest
from app.services.inference import model, locations
from app.services.preprocessing import prepare_input

app = FastAPI(
    title="House Price Prediction API"
)

app.add_middleware(
    CORSMiddleware,
    allow_origins=[
        "http://localhost:5173",
        "https://house-price-prediction-blush-alpha.vercel.app",
    ],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)
@app.get("/")
def home():
    return {"message": "Welcome to House Price Prediction API"}

@app.get("/health")
def health():
    return {"status": "ok"}

@app.get("/locations")
def get_locations():
    return {
        "locations": locations
    }

@app.post("/predict")
def predict(data: PredictionRequest):
    df = prepare_input(data)
    prediction = model.predict(df)

    return {
        "predicted_price": float(prediction[0])
    }