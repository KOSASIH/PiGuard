# GNNModel.py
import torch
import torch.nn as nn
import torch_geometric.nn as pyg_nn
import torch_geometric.data as pyg_data

class GNNModel(nn.Module):
    def __init__(self):
        super(GNNModel, self).__init__()
        self.conv1 = pyg_nn.GraphConv(16, 16)
        self.conv2 = pyg_nn.GraphConv(16, 16)
        self.fc1 = nn.Linear(16, 8)
        self.fc2 = nn.Linear(8, 2)

    def forward(self, x, edge_index):
        x = torch.relu(self.conv1(x, edge_index))
        x = torch.relu(self.conv2(x, edge_index))
        x = torch.relu(self.fc1(x))
        x = self.fc2(x)
        return x
