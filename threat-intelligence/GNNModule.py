# GNNModule.py
import torch
import torch.nn as nn
import torch_geometric.nn as pyg_nn
import torch_geometric.data as pyg_data

class GNNModule(nn.Module):
    def __init__(self):
        super(GNNModule, self).__init__()
        self.conv1 = pyg_nn.GraphConv(16, 16)
        self.conv2 = pyg_nn.GraphConv(16, 16)

    def forward(self, data):
        x, edge_index = data.x, data.edge_index
        x = torch.relu(self.conv1(x, edge_index))
        x = torch.relu(self.conv2(x, edge_index))
        return x
