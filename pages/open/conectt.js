// מעביר את הנתונים ללוקאל סטורג'
const dom = {
    formus: document.getElementById("formu"),
    formdata: {
      firstname: document.getElementById("first-name"),
      lastname: document.getElementById("last-name"),
      email: document.getElementById("email"),
      A_password: document.getElementById("password"),
    },
  };
  
  const to_over = document.getElementById("to_over");
  to_over.onclick = (event) => {
    event.preventDefault();
    
    if (dom.formus.checkValidity()) {
      const user = {
        lastname: dom.formdata.lastname.value,
        firstname: dom.formdata.firstname.value,
        email: dom.formdata.email.value,
        A_password: dom.formdata.A_password.value,
      };
      
      localStorage.setItem(user.A_password, JSON.stringify(user));         
      window.location.href = "./entery.html";
      dom.formus.reset();
    } else {
      alert("יש למלא את כל השדות");
    }
  };