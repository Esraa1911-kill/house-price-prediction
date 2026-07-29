import json
import joblib
from pathlib import Path

BASE_DIR = Path(__file__).parent.parent.parent

MODEL_PATH = BASE_DIR / "models" / "house_price.pkl"
LOCATIONS_PATH = BASE_DIR / "models" / "locations.json"

model = joblib.load(MODEL_PATH)

with open(LOCATIONS_PATH, "r") as f:
    locations = json.load(f)