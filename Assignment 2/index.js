const json_list = [
    ["Nav", "Deep", "Singh", "nav@gmail.com", 9876543210, "Manager", "Mohali"],
    ["Dev", "Roy", "Kapoor", "dev@gmail.com", 9764523865, "Developer", "Delhi"],
    ["Riya", " ", "Mathur", "riya@gmail.com", 9786354567, "Trainee", "Mumbai" ]
];

document.getElementById("load").addEventListener("click", function () {

    document.getElementById("load").innerHTML = "Refresh Data";
    document.getElementById("divison").style.visibility = "visible";

    for(let i=1; i<=json_list.length; i++) {
        //i = i+1;
        for(let j=0; j<json_list[0].length; j++) {
            switch(j) {

                case 0 :
                    document.getElementById("fname_row" + i).innerHTML = json_list[i-1][j];
                    break;

                case 1 :
                    document.getElementById("mname_row" + i).innerHTML = json_list[i-1][j];
                    break;

                case 2 :
                    document.getElementById("lname_row" + i).innerHTML = json_list[i-1][j];
                    break;

                case 3 :
                    document.getElementById("email_row" + i).innerHTML = json_list[i-1][j];
                    break;

                case 4 :
                    document.getElementById("phone_row" + i).innerHTML = json_list[i-1][j];
                    break;

                case 5 :
                    document.getElementById("role_row" + i).innerHTML = json_list[i-1][j];
                    break;

                case 6 :
                    document.getElementById("address_row" + i).innerHTML = json_list[i-1][j];
                    break;
            }
        //i = i-1;
        }
    }

    for(let no=1; no<=json_list.length; no++) {
      document.getElementById("row"+no).style.visibility = "visible";
      document.getElementById("edit_button"+no).style.display = "block";
      document.getElementById("save_button"+no).style.display = "none";
      document.getElementById("delete_button"+no).style.display = "block";
      document.getElementById("cancel_button"+no).style.display = "none";
    }
});


function edit_row(no) {

 document.getElementById("edit_button"+no).style.display = "none";
 document.getElementById("save_button"+no).style.display = "block";
 document.getElementById("delete_button"+no).style.display = "none";
 document.getElementById("cancel_button"+no).style.display = "block";

 let fname = document.getElementById("fname_row"+no);
 let mname = document.getElementById("mname_row"+no);
 let lname = document.getElementById("lname_row"+no);
 let email = document.getElementById("email_row"+no);
 let phone = document.getElementById("phone_row"+no);
 let role = document.getElementById("role_row"+no);
 let address = document.getElementById("address_row"+no);

 let fname_data = fname.innerHTML;
 let mname_data = mname.innerHTML;
 let lname_data = lname.innerHTML;
 let email_data = email.innerHTML;
 let phone_data = phone.innerHTML;
 let role_data = role.innerHTML;
 let address_data = address.innerHTML;

 fname.innerHTML = "<input type='text' id='fname_text"+no+"' value='"+fname_data+"'>";
 mname.innerHTML = "<input type='text' id='mname_text"+no+"' value='"+mname_data+"'>";
 lname.innerHTML = "<input type='text' id='lname_text"+no+"' value='"+lname_data+"'>";
 email.innerHTML = "<input type='text' id='email_text"+no+"' value='"+email_data+"'>";
 phone.innerHTML = "<input type='text' id='phone_text"+no+"' value='"+phone_data+"'>";
 role.innerHTML = "<input type='text' id='role_text"+no+"' value='"+role_data+"'>";
 address.innerHTML = "<input type='text' id='address_text"+no+"' value='"+address_data+"'>";

 document.getElementById("cancel_button"+no).addEventListener("click", function () {                            //cancel button functionality

   document.getElementById("fname_row"+no).innerHTML = fname_data;
   document.getElementById("mname_row"+no).innerHTML = mname_data;
   document.getElementById("lname_row"+no).innerHTML = lname_data;
   document.getElementById("email_row"+no).innerHTML = email_data;
   document.getElementById("phone_row"+no).innerHTML = phone_data;
   document.getElementById("role_row"+no).innerHTML = role_data;
   document.getElementById("address_row"+no).innerHTML = address_data;

   document.getElementById("edit_button"+no).style.display = "block";
   document.getElementById("save_button"+no).style.display = "none";
   document.getElementById("delete_button"+no).style.display = "block";
   document.getElementById("cancel_button"+no).style.display = "none";
 });
}

function delete_row(no) {
 document.getElementById("row"+no).style.visibility = "hidden";
}

function save_row(no) {

 let fname_val=document.getElementById("fname_text"+no).value;
 let mname_val=document.getElementById("mname_text"+no).value;
 let lname_val=document.getElementById("lname_text"+no).value;
 let email_val=document.getElementById("email_text"+no).value;
 let phone_val=document.getElementById("phone_text"+no).value;
 let role_val=document.getElementById("role_text"+no).value;
 let address_val=document.getElementById("address_text"+no).value;

 document.getElementById("fname_row"+no).innerHTML = fname_val;
 document.getElementById("mname_row"+no).innerHTML = mname_val;
 document.getElementById("lname_row"+no).innerHTML = lname_val;
 document.getElementById("email_row"+no).innerHTML = email_val;
 document.getElementById("phone_row"+no).innerHTML = phone_val;
 document.getElementById("role_row"+no).innerHTML = role_val;
 document.getElementById("address_row"+no).innerHTML = address_val;

 document.getElementById("edit_button"+no).style.display = "block";
 document.getElementById("save_button"+no).style.display = "none";
 document.getElementById("delete_button"+no).style.display = "block";
 document.getElementById("cancel_button"+no).style.display = "none";
}
