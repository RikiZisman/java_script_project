      // הפונקציה בודקת את הסיסמא של המשתמש אם היא נכונה
      //  זה פותח לשלוש שניות עיגולים מסתובבים ואם לא היא מתרה על כך

      document.getElementById("send_a_password").onclick = () => {
        const currentmail = document.getElementById("v").value;
        const storedUser = localStorage.getItem(currentmail);
      
        if (storedUser) {
          const user = JSON.parse(storedUser);
          const enteredPassword = user.password;
      
          if (enteredPassword === user.password) {
            document.querySelector(".container").style.display = "block";
      
            setTimeout(() => {
              document.querySelector(".container").style.display = "none";
              // Redirect to the desired page
              window.location.href = "../enterance/en.html";
            }, 2000); // Display for 3 seconds before redirecting
          } else {
            alert("Incorrect password");
          }
        } else {
          alert("User not registered");
        }
      };