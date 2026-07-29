import pandas as pd


def prepare_input(data):
    df = pd.DataFrame([{
        "location_grouped": data.location,
        "carpet_area_sqft": data.carpet_area_sqft,
        "floor_num": data.floor_num,
        "Bathroom": data.bathroom,
        "Balcony": data.balcony,
        "Car Parking": 0,
        "Furnishing": data.furnishing,
        "Transaction": data.transaction,
        "Ownership": data.ownership,
        "facing": data.facing
    }])

    return df