function handleSubmit() {
    const fname = document.getElementById('fname').value;
    const lname = document.getElementById('lname').value;
    const birthdate = document.getElementById('birthdate').value;
    const heightft = document.getElementById('ft').value;
    const heightin = document.getElementById('in').value;
    const edu = document.getElementById('edu').value;
    const address = document.getElementById('address').value;
    const city = document.getElementById('city').value;
    const state = document.getElementById('state').value;
    const zipcode = document.getElementById('zip').value;
    const phone = document.getElementById('phone').value;
    const email = document.getElementById('email').value;


    localStorage.setItem("fname", fname);
    localStorage.setItem("lname", lname);
    localStorage.setItem("birthdate", birthdate);
    localStorage.setItem("ft", heightft);
    localStorage.setItem("in", heightin);
    localStorage.setItem("edu", edu);
    localStorage.setItem("address", address);
    localStorage.setItem("city", city);
    localStorage.setItem("state", state);
    localStorage.setItem("zip", zipcode);
    localStorage.setItem("phone", phone);
    localStorage.setItem("email", email);



    return false;
} 