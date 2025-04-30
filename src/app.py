from flask import Flask, render_template, request, jsonify
app = Flask(__name__)

tasks = []

@app.get('/')
def index():
    return render_template('index.html', tasks=tasks)

@app.post('/task')
def add_task():
    data = request.get_json()

    tasks.append(data)

    return jsonify({
        "status": "success",
        "message": "Data stored successfully",
        "task": data
    }), 201

if __name__ == '__main__':
    app.run(debug=True, host='0.0.0.0')
