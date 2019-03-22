# Import dependencies (boilerplate)

import numpy as np
import os
import pandas as pd
import sqlalchemy
from sqlalchemy.ext.automap import automap_base
from sqlalchemy.orm import Session
from sqlalchemy import create_engine, func
from flask_sqlalchemy import SQLAlchemy
from flask import Flask, jsonify, render_template

#################################################
# Database Setup
#################################################
app = Flask(__name__)
engine = sqlalchemy.create_engine("mysql://root:pigsty214@localhost")
uri = "mysql://root:pigsty214@localhost/natural_disasters"
app.config["SQLALCHEMY_DATABASE_URI"] = uri
db = SQLAlchemy(app)

# Reflect an existing database into a new model
Base = automap_base()

# Reflect the tables
Base.prepare(db.engine, reflect=True)

# Save reference to the table
Table = Base.classes.damage_cost

# Create our session (link) from python to the database
session = Session(engine)

#################################################
# Flask Routes
#################################################

@app.route("/")
def welcome():
    """Render HTML"""
    return render_template("index.html")

@app.route("/disasterinfo")
def disasterinfo():
    """Return a list of all damage data"""
    stmt = db.session.query(Table).statement
    print(stmt)
    df = pd.read_sql_query(stmt, db.session.bind)

    # Return a list of the data
    return jsonify(df.to_dict(orient="records"))

@app.route("/damages")
def damages():
    """Render HTML"""
    return render_template("damages.html")

@app.route("/homeless")
def homeless():
    """Render HTML"""
    return render_template("homeless.html")

@app.route("/injuries")
def injuries():
    """Render HTML"""
    return render_template("injuries.html")

if __name__ == "__main__":
    app.run(debug=True)
