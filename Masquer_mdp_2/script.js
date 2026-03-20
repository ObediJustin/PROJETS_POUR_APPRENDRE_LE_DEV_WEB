const checkbox = document.getElementById("toggle-password");
        const password = document.getElementById("pwd");
        
        checkbox.addEventListener("change", function(){
            if(this.checked){
                password.type = "text";
            } else {
                password.type = "password";
            }
        })