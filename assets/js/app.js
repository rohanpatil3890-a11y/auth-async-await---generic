let logOutBtn = document.getElementById("logOutBtn");


if(localStorage.getItem("loginSuccess")){
    
    Swal.fire({
        title : "Login Successfully",
        icon : "success",
        timer: 2000
    })

    localStorage.removeItem("loginSuccess");
}

if(!localStorage.getItem("token")){
    window.location.href = "index.html";
}



const onclickEvent = () =>{

  localStorage.removeItem("token");
  localStorage.removeItem("userRole");
  window.location.href = "index.html"

}


logOutBtn.addEventListener("click", onclickEvent);













// let logOutBtn = document.getElementById("logOutBtn");

// if (localStorage.getItem("loginSuccess")) {

//     Swal.fire({
//         title: "Login SuccessfullY!",
//         icon: "success",
//         timer: 2000,
//     });

//     localStorage.removeItem("loginSuccess");
// }

// if (!localStorage.getItem("token")) {
//     window.location.href = "index.html";
// }

// async function onLogoutclick() {

//     localStorage.removeItem("token");
//     localStorage.removeItem("userRole");
//     window.location.href = "index.html";

// }

// logOutBtn.addEventListener("click", onLogoutclick);


























// let logOutBtn = document.getElementById("logOutBtn");


// if (!localStorage.getItem("token")) {
//     window.location.href = "index.html";
// }


// async function onLogoutclick() {


//     localStorage.removeItem("token");
//     localStorage.removeItem("userRole");

//     window.location.href = "index.html";
// }

// logOutBtn.addEventListener("click", onLogoutclick);
