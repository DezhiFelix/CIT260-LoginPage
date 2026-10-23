from flask import Flask, render_template

app = Flask(__name__)  

@app.route('/')
def login():
    return render_template("login.html")

@app.route("/student/")
def student_dashboard():
    return render_template( 
        "student_dashboard.html")    


@app.route("/faculty/")
def faculty_dashboard():
    return render_template(
        "faculty_dashboard.html")


@app.route("/register/")
def register():
    return render_template(
        "registration.html"
    )


@app.route("/confirmation/")
def confirmation():
    return render_template(
        "confirmation.html"
    )


if __name__ == '__main__':
    app.run(debug=True)