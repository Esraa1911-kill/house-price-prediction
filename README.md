🌐 **Live Demo:** [Check out the live website here](https://house-price-prediction-blush-alpha.vercel.app/)
# House Price Prediction — End-to-End ML Web App

An end-to-end machine learning system designed to predict property prices accurately. The application integrates a trained scikit-learn machine learning pipeline with a high-performance **FastAPI** backend and an interactive **React** frontend.

## 🏗️ Architecture Overview

```text
                 ┌─────────────────┐        ┌──────────────────┐        ┌────────────────────┐
   User Browser  │  React Frontend │  HTTP  │  FastAPI Backend │  load  │  house_price.pkl   │
   ────────────► │  (Vite + React) │ ─────► │  (uvicorn)       │ ─────► │  sklearn Pipeline  │
                 └─────────────────┘        └──────────────────┘        └────────────────────┘
User Input: The user fills out a property specification form on the React web interface.

API Request: The frontend sends a POST request containing the property features to the FastAPI backend.

Inference Pipeline: The backend loads the serialized scikit-learn pipeline (house_price.pkl), processes the request, and returns the predicted price.

🛠️ Tech Stack
Data Science & Modeling: Python, pandas, numpy, scikit-learn (notebooks/)

Backend API: FastAPI, Pydantic, uvicorn, joblib

Frontend UI: React, Vite, JavaScript / CSS

Deployment & Version Control: Git, GitHub

📂 Project Structure
Plaintext
HOUSE-PRICE-PROJECT/
├── backend/
│   ├── app/
│   │   ├── schemas/        # Pydantic data validation schemas (prediction.py)
│   │   ├── services/       # Preprocessing & inference business logic
│   │   └── main.py         # FastAPI entry point & CORS configuration
│   ├── models/
│   │   ├── house_price.pkl # Trained machine learning pipeline
│   │   └── locations.json  # Allowed locations list
│   └── requirements.txt    # Python dependencies
└── frontend/
    ├── src/
    │   ├── assets/         # Images and static assets
    │   ├── App.jsx         # Main application component
    │   └── main.jsx        # React DOM entry point
    ├── public/
    └── package.json        # Node.js dependencies
🚀 Getting Started & Local Setup
1. Clone the Repository
Bash
git clone [https://github.com/Esraa1911-kill/house-price-prediction.git](https://github.com/Esraa1911-kill/house-price-prediction.git)
cd HOUSE-PRICE-PROJECT
2. Backend Setup
Navigate to the backend folder, install dependencies, and start the FastAPI server:

Bash
cd backend
pip install -r requirements.txt
uvicorn app.main:app --reload
API Docs available at: http://localhost:8000/docs

3. Frontend Setup
Open a new terminal, navigate to the frontend folder, and run the app:

Bash
cd frontend
npm install
npm run dev
Access the web application at: http://localhost:5173

👩‍💻 Author
Developed by Esraa (Esraa1911-kill)
Security: Raw datasets, virtual environments, and .env configuration files are excluded from version control via .gitignore.

👩‍💻 Author
Developed by Esraa (Esraa1911-kill)
