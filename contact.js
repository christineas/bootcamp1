//mengambil inputan dari form yang ada di contact.html
function submitHandler() {
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let phone = document.getElementById("phone").value;
    let subject = document.getElementById("subject").value;
    let message = document.getElementById("message").value;

    if (name == ""){
        return alert("Please fill your name!")
    }
    else if (email == "") {
        return alert("Please fill your email!")
    }
    else if (phone == "") {
        return alert("Please fill your phone number!")
    }
    else if (subject == "") {
        return alert("Please select your subject!")
    }
    else if (message == "") {
        return alert("Please fill your message!")
    }

    // Menangkap isi dari inputan, ditampung ke data
    const data = {
        name, email, phone, subject, message
    }

    //alamat email yang dituju
    const yourEmail = "christineangelinasalim@gmail.com"

    let a = document.createElement("a");   
    a.href = `http://mail.google.com/mail?view=cm&fs=1&to=${yourEmail}&su=${subject}&body=${message} `  
    a.click();

    console.log(data);
}

// const form = document.querySelector("form")
// form.addEventListener("submit", ()=> {
//     console.log()
// })
// == (digunakan dengan tidak cek tipe data)
// === (digunakan dengan cek tipe data)
