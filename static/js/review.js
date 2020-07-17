window.addEventListener('load', () => {
    const fname = localStorage.getItem('fname');
    const lname = localStorage.getItem('lname');

    document.getElementById('result-name').innerHTML = fname;
    document.getElementById('result-lname').innerHTML = lname;

})