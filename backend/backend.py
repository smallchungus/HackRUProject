from flask import Flask, jsonify, request
from flask_cors import CORS
import subprocess
#from prody import *
#import numpy as np


backend = Flask(__name__)
CORS(backend)

@backend.route('/model/', methods=['post'])
def receive_data():
    data = request.json
    protein = data['protein/peptide'][0]
    peptide = data['protein/peptide'][1]
    #model protein
    cmd = "curl -X POST --data \""+protein+"\" https://api.esmatlas.com/foldSequence/v1/pdb/ > protein.pdb"
    subprocess.run(cmd, shell=True, check=True)
    #model peptide
    cmd = "curl -X POST --data \""+peptide+"\" https://api.esmatlas.com/foldSequence/v1/pdb/ > peptide.pdb"
    subprocess.run(cmd, shell=True, check=True)
    
    #ClustENMD
    #pdb = parsePDB('protein.pdb', compressed=False)
    #clustenm = ClustENM()
    #clustenm.setAtoms(pdb)
    #clustenm.writePDBFixed()
    #clustenm.run(n_modes=3, n_gens=5, maxclust=tuple(range(20, 120, 20)), sim=True, solvent='imp', t_steps_i=0, t_steps_g=0, platform='CUDA')
    #clustenm.writeParameters()
    #saveEnsemble(clustenm)
    #clustenm.writePDB()
    
    return jsonify(message="Hello, World!")

if __name__ == '__main__':
    backend.run(debug=True)
    