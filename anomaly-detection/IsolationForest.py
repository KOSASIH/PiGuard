# IsolationForest.py
import numpy as np
from sklearn.ensemble import IsolationForest

class IsolationForestModel:
    def __init__(self):
        self.model = IsolationForest(contamination=0.1)

    def fit(self, data):
        self.model.fit(data)

    def predict(self, data):
        return self.model.predict(data)
