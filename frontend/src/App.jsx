import { useState, useEffect } from "react";
import "./App.css";

const API_URL = "https://house-price-prediction-production-b945.up.railway.app";

function App() {
  const [locations, setLocations] = useState([]);
  const [prediction, setPrediction] = useState(null);

  const [form, setForm] = useState({
    location: "",
    carpet_area_sqft: "",
    floor_num: "",
    bathroom: "",
    balcony: "",
    furnishing: "",
    transaction: "",
    ownership: "",
    facing: "",
  });

  useEffect(() => {
    fetch(`${API_URL}/locations`)
      .then((res) => res.json())
      .then((data) => setLocations(data.locations));
  }, []);

  async function handlePredict() {
    const response = await fetch(`${API_URL}/predict`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        ...form,
        carpet_area_sqft: Number(form.carpet_area_sqft),
        floor_num: Number(form.floor_num),
        bathroom: Number(form.bathroom),
        balcony: Number(form.balcony),
      }),
    });

    const data = await response.json();
    setPrediction(data.predicted_price);
  }

  return (
    <div className="container">

      <div className="title">
        <h1>House Price Prediction</h1>
        <p>Estimate the value of a house using Machine Learning</p>
      </div>

      <div className="form-group">
        <label>Location</label>
        <select
          value={form.location}
          onChange={(e) =>
            setForm({ ...form, location: e.target.value })
          }
        >
          <option value="">Select Location</option>

          {locations.map((loc) => (
            <option key={loc} value={loc}>
              {loc}
            </option>
          ))}
        </select>
      </div>

      <div className="form-group">
        <label>Area (sqft)</label>
        <input
          type="number"
          value={form.carpet_area_sqft}
          onChange={(e) =>
            setForm({
              ...form,
              carpet_area_sqft: e.target.value,
            })
          }
        />
      </div>

      <div className="form-group">
        <label>Floor Number</label>
        <input
          type="number"
          value={form.floor_num}
          onChange={(e) =>
            setForm({
              ...form,
              floor_num: e.target.value,
            })
          }
        />
      </div>

      <div className="form-group">
        <label>Bathrooms</label>
        <input
          type="number"
          value={form.bathroom}
          onChange={(e) =>
            setForm({
              ...form,
              bathroom: e.target.value,
            })
          }
        />
      </div>

      <div className="form-group">
        <label>Balcony</label>
        <input
          type="number"
          value={form.balcony}
          onChange={(e) =>
            setForm({
              ...form,
              balcony: e.target.value,
            })
          }
        />
      </div>

      <div className="form-group">
  <label>Furnishing</label>
  <select
    value={form.furnishing}
    onChange={(e) =>
      setForm({
        ...form,
        furnishing: e.target.value,
      })
    }
  >
    <option value="">Select Furnishing</option>
    <option value="Furnished">Furnished</option>
    <option value="Semi-Furnished">Semi-Furnished</option>
    <option value="Unfurnished">Unfurnished</option>
  </select>
</div>

      <div className="form-group">
  <label>Transaction</label>
  <select
    value={form.transaction}
    onChange={(e) =>
      setForm({
        ...form,
        transaction: e.target.value,
      })
    }
  >
    <option value="">Select Transaction</option>
    <option value="Resale">Resale</option>
    <option value="New Property">New Property</option>
  </select>
</div>

      <div className="form-group">
  <label>Ownership</label>
  <select
    value={form.ownership}
    onChange={(e) =>
      setForm({
        ...form,
        ownership: e.target.value,
      })
    }
  >
    <option value="">Select Ownership</option>
    <option value="Freehold">Freehold</option>
    <option value="Leasehold">Leasehold</option>
    <option value="Co-operative Society">Co-operative Society</option>
    <option value="Power of Attorney">Power of Attorney</option>
  </select>
</div>

      <div className="form-group">
  <label>Facing</label>
  <select
    value={form.facing}
    onChange={(e) =>
      setForm({
        ...form,
        facing: e.target.value,
      })
    }
  >
    <option value="">Select Facing</option>
    <option value="North">North</option>
    <option value="South">South</option>
    <option value="East">East</option>
    <option value="West">West</option>
    <option value="North-East">North-East</option>
    <option value="North-West">North-West</option>
    <option value="South-East">South-East</option>
    <option value="South-West">South-West</option>
  </select>
</div>
      <button onClick={handlePredict}>
        Predict Price
      </button>

      {prediction && (
        <div className="result">
          <h3>Estimated House Price</h3>
          <div className="price">
            ₹ {prediction.toLocaleString()}
          </div>
        </div>
      )}

    </div>
  );
}

export default App;
