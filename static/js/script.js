const form=document.getElementById('form');
        const fname=document.getElementById('fname');
        const lname=document.getElementById('lname');
        const birthdate=document.getElementById('birthdate');
        const address=document.getElementById('address');
        const city=document.getElementById('city');
        const state=document.getElementById('state');
        const country=document.getElementById('country');
        const zipcode=document.getElementById('zipcode');
        const phone=document.getElementById('phone');
        const email=document.getElementById('email');
        const email2=document.getElementById('email2');
        const errorElement = document.getElementById('error');

        form.addEventListener('submit', (e) => {
            let messages = []

            if(fname.length === '' || fname.value == null) {

                messages.push("Name is required");
            }
            
            if (messages.length > 0 ) {
                e.preventDefault()
                errorElement.innerText = messages.join(",")
            }

            function phonenumber(phone) {
                var phone = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
                if(phone.value.match(phone)) {
                  return true;
                }
                else {
                  messages.push("Please enter a valid phone number");
                  
                }
              }

            if (messages.length > 0 ) {
                e.preventDefault()
                errorElement.innerText = messages.join(",")
            }

            
        })
            
                
                
/* 
        function checkInputs() {
          const fnameValue = fname.value.trim();
          const lnameValue = lname.value.trim();
          const birthdateValue = birthdate.value.trim();
          const eduValue = edu.value.trim();
          const heightftValue = heightft.value.trim();
          const heightinValue = heightin.value.trim();
          const addressValue = address.value.trim();
          const cityValue = city.value.trim();
          const stateValue = state.value.trim();
          const countryValue = country.value.trim();
          const zipcodeValue = zipcode.value.trim();
          const phoneValue = phone.value.trim();
          const emailValue = email.value.trim();
          const email2Value = email2.value.trim();

                    if(fnameValue === '') {
                        //show error
                        //add error class
                        setErrorFor(fname, 'First name cannot be blank');

                    } else {
                        // add success class
                        setSuccessFor(fname);
                    }
                }
                
        function setErrorFor(input, message) {
          const formControl = input.parentElement;
          const small = formControl.querySelector('small');
          formControl.className = 'form-control error';
          small.innerText = message;
        }

        function setSuccessFor(input) {
          const formControl = input.parentElement;
          formControl.className = 'form-control success';
        }
        */