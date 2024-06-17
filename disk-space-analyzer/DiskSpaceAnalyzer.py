# DiskSpaceAnalyzer.py
import os
import subprocess

class DiskSpaceAnalyzer:
    def __init__(self):
        self.root_dir = '/'

    def analyze_disk_space(self):
        # Use `du` command to analyze disk space
        output = subprocess.check_output(['du', '-ah', self.root_dir])
        return output.decode('utf-8')

    def get_largest_directories(self):
        # Use `du` command to get largest directories
        output = subprocess.check_output(['du', '-ah', self.root_dir, '|', 'ort', '-rh', '|', 'head', '-20'])
        return output.decode('utf-8')

    def get_largest_files(self):
        # Use `find` command to get largest files
        output = subprocess.check_output(['find', self.root_dir, '-type', 'f', '-size', '+100M', '-exec', 'ls', '-lh', '{}', ';'])
        return output.decode('utf-8')
