# House Price Prediction — End-to-End ML Web Application

An end-to-end machine learning system designed to predict property prices accurately. The application integrates a trained scikit-learn machine learning pipeline with a high-performance **FastAPI** backend and an interactive **React (TypeScript + Vite)** frontend.

---

## 🏗️ Architecture Overview

```text
                 ┌─────────────────┐        ┌──────────────────┐        ┌────────────────────┐
   User Browser  │  React Frontend │  HTTP  │  FastAPI Backend │  load  │  house_price.pkl   │
   ────────────► │   (Vite, TS)    │ ─────► │  (uvicorn)       │ ─────► │  sklearn Pipeline   │
                 └─────────────────┘        └──────────────────┘        └────────────────────┘
User Input: The user fills out a property specification form on the React web interface.

API Request: The frontend sends a POST request containing the property features to the FastAPI backend.

Inference Pipeline: The backend loads the serialized scikit-learn pipeline (which handles data imputation, feature scaling, one-hot encoding, and the predictive model natively), processes the request, and returns the predicted price.

🛠️ Tech Stack
Data Science & Modeling: Python, pandas, numpy, scikit-learn, matplotlib, seaborn (notebooks/)

Backend API: FastAPI, Pydantic, uvicorn, joblib

Frontend UI: React, TypeScript, Vite, React Router, CSS / Styling

Deployment & Version Control: Git, GitHub, Cloud Hosting

📂 Project Structure
Plaintext
house-price-prediction/
├── notebooks/
│   ├── house_price_model.ipynb   # Data cleaning, EDA, training, evaluation, and model export
│   └── data/                     # Raw datasets (excluded from version control)
├── backend/
│   ├── app/
│   │   ├── main.py               # FastAPI entry point, CORS configuration, startup hooks
│   │   ├── api/                  # API routing modules
│   │   ├── core/                 # Application configuration & core settings
│   │   ├── schemas/              # Pydantic validation models
│   │   └── services/             # Preprocessing and inference logic
│   ├── models/                   # Saved model pipeline (.pkl)
│   ├── requirements.txt          # Python dependencies
│   └── .env.example              # Environment variables template
└── frontend/
    ├── src/
    │   ├── api/                  # API communication layer
    │   ├── components/           # UI forms, result cards, and components
    │   ├── pages/                # Application views (Home, Results, etc.)
    │   └── App.tsx               # Main application component
    └── package.json              # Node.js dependencies
🚀 Getting Started & Local Setup
To run this project locally on your machine, follow these steps:

1. Clone the Repository
Bash
git clone [https://github.com/Esraa1911-kill/house-price-prediction.git](https://github.com/Esraa1911-kill/house-price-prediction.git)
cd house-price-prediction
2. Backend Setup
Navigate to the backend directory, set up a virtual environment, and install dependencies:

Bash
cd backend
python -m venv .venv
# Activate virtual environment:
# Windows:
.venv\Scripts\activate
# macOS / Linux:
# source .venv/bin/activate

pip install -r requirements.txt
cp .env.example .env
Start the FastAPI development server:

Bash
uvicorn app.main:app --reload
API Interactive Docs available at: http://localhost:8000/docs

3. Frontend Setup
Open a new terminal window, navigate to the frontend directory, and run the app:

Bash
cd frontend
npm install
cp .env.example .env
npm run dev
Access the web application at: http://localhost:5173

⚙️ Environment Variables
Backend (backend/.env)
MODEL_PATH — Path to the trained pipeline .pkl file (Default: models/house_price.pkl)

ALLOWED_ORIGINS — Permitted CORS origins (Default: http://localhost:5173)

Frontend (frontend/.env)
VITE_API_BASE_URL — Base URL of the backend API (Default: http://localhost:8000)

🔌 API Reference
GET /health
Description: Checks system health and server status.

Response: {"status": "ok"}

POST /predict
Description: Receives property features and returns the predicted price.

Example curl Request:

Bash
curl -X POST http://localhost:8000/predict \
  -H "Content-Type: application/json" \
  -d '{
    "location": "Sample Location",
    "area": 1200,
    "bedrooms": 3,
    "bathrooms": 2
  }'
💡 Notes & Best Practices
Version Consistency: Ensure the scikit-learn version in backend/requirements.txt matches the version used during model training inside the notebook to avoid compatibility issues with joblib.load().

Security: Raw datasets, virtual environments, and .env configuration files are excluded from version control via .gitignore.

👩‍💻 Author
Developed by Esraa (Esraa1911-kill)
