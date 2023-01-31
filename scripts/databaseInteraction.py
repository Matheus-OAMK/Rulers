import mysql.connector
import json

# Connect to the MySQL database
cnx = mysql.connector.connect(user='root',
                              password='1201260BHf',
                              host='127.0.0.1',
                              database='rulersdb')

# Create a cursor object
cursor = cnx.cursor()

# Execute a SELECT statement
cursor.execute("SELECT * FROM cards")

# Fetch all rows of the result set
rows = cursor.fetchall()

# Convert the rows to a list of dictionaries
data = [dict(zip([key[0] for key in cursor.description], row)) for row in rows]

# Close the cursor and connection
cursor.close()
cnx.close()
# Write the data to a JSON file
with open("../cards-data-TEST.json", "w") as outfile:
    json.dump(data, outfile)
