from flask import Flask, render_template, request

app = Flask(__name__)


@app.route("/")
def home():
    return render_template("form.html")

@app.route("/review")
def review():
    return render_template("review.html")

@app.route("/thankyou")
def thankyou():
    return render_template("thankyou.html")

# @app.route("/form_data", methods=['GET', 'POST'])
# def process_data():
#     if request.method == 'POST':
#         print("-----------------------------------------")
#         print(request.form)
#         return render_template("validation.html")
#     return render_template("validation.html")


if __name__ == "__main__":
    app.run(host="0.0.0.0", debug=True, port=5000)
