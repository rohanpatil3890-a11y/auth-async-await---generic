
const cl = console.log;

const signUpForm = document.getElementById("signUpForm");
const SignUpEmail = document.getElementById("signUpEmail");
const SignUppassword = document.getElementById("signUpPassword");
const signUpUser = document.getElementById("signUpUser");

const LoginForm = document.getElementById("LoginForm");
const LoginEmail = document.getElementById("LoginEmail");
const LoginPassword = document.getElementById("LoginPassword");

const loder = document.getElementById("loder");



function snackbar(title, icon) {
    Swal.fire({
        title,
        icon,
        timer: 2000
    })
}


const AUTH_URL = "https://auth-git-main-iamrkjs-projects.vercel.app";

const LOGIN_URL = `${AUTH_URL}/api/auth/login`;

const SIGNUP_URL = `${AUTH_URL}/api/auth/register`;


const makeApiCall = async(apiUrl,method,body) =>{

    loder.classList.remove("d-none");

    body = body? JSON.stringify(body) : null;

    let obj = {
        method : method,
        body : body,
        headers : {
            "Content-type" : "application/json"
        }
    }

    try{

        let res = await fetch(apiUrl,obj)

        let data = await res.json();

        if(!res.ok){

            let err = data.error || data.message || res.statusText || "Something Went wrong";

            throw new Error(err)
        }

        return data

    }
    finally{

    loder.classList.add("d-none");
    }
}

const onsubmitLoginEvent = async(eve) =>{

    eve.preventDefault();

    let obj = {
        email : LoginEmail.value,
        password : LoginPassword.value
    }

    try{
    
        let data = await makeApiCall(LOGIN_URL,"POST",obj);
        localStorage.setItem("token", data.token);
        localStorage.setItem("userRole", data.userRole);
        localStorage.setItem("loginSuccess", true)
        snackbar(data.message, "success");
        LoginForm.reset();
        window.location.href = "dashboard.html"
  
    }
    catch(err){
       snackbar(err, "error");
    }
}


const onsubmitSignUp = async(eve) =>{

    eve.preventDefault();

    let SignUpObj = {
       email : SignUpEmail.value,
       password : SignUppassword.value,
       userRole : signUpUser.value
    }

    try{

        let data = await makeApiCall(SIGNUP_URL,"POST",SignUpObj);

        snackbar(data.message, "success")

       signUpForm.reset();

    }
    catch(err){
          snackbar(err , "error");
    }
}



signUpForm.addEventListener("submit", onsubmitSignUp);
LoginForm.addEventListener("submit", onsubmitLoginEvent);
