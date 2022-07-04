function edit_row(no) {

 document.getElementById("edit_button"+no).style.display = "none";
 document.getElementById("save_button"+no).style.display = "block";

 var fname = document.getElementById("fname_row"+no);
 var mname = document.getElementById("mname_row"+no);
 var lname = document.getElementById("lname_row"+no);
 var email = document.getElementById("email_row"+no);
 var phone = document.getElementById("phone_row"+no);
 var role = document.getElementById("role_row"+no);
 var address = document.getElementById("address_row"+no);

 var fname_data = fname.innerHTML;
 var mname_data = mname.innerHTML;
 var lname_data = lname.innerHTML;
 var email_data = email.innerHTML;
 var phone_data = phone.innerHTML;
 var role_data = role.innerHTML;
 var address_data = address.innerHTML;


 fname.innerHTML = "<input type='text' id='fname_text"+no+"' value='"+fname_data+"'>";
 mname.innerHTML = "<input type='text' id='mname_text"+no+"' value='"+mname_data+"'>";
 lname.innerHTML = "<input type='text' id='lname_text"+no+"' value='"+lname_data+"'>";
 email.innerHTML = "<input type='text' id='email_text"+no+"' value='"+email_data+"'>";
 phone.innerHTML = "<input type='text' id='phone_text"+no+"' value='"+phone_data+"'>";
 role.innerHTML = "<input type='text' id='role_text"+no+"' value='"+role_data+"'>";
 address.innerHTML = "<input type='text' id='address_text"+no+"' value='"+address_data+"'>";
}

function save_row(no) {

 var fname_val=document.getElementById("fname_text"+no).value;
 var mname_val=document.getElementById("mname_text"+no).value;
 var lname_val=document.getElementById("lname_text"+no).value;
 var email_val=document.getElementById("email_text"+no).value;
 var phone_val=document.getElementById("phone_text"+no).value;
 var role_val=document.getElementById("role_text"+no).value;
 var address_val=document.getElementById("address_text"+no).value;

 document.getElementById("fname_row"+no).innerHTML = fname_val;
 document.getElementById("mname_row"+no).innerHTML = mname_val;
 document.getElementById("lname_row"+no).innerHTML = lname_val;
 document.getElementById("email_row"+no).innerHTML = email_val;
 document.getElementById("phone_row"+no).innerHTML = phone_val;
 document.getElementById("role_row"+no).innerHTML = role_val;
 document.getElementById("address_row"+no).innerHTML = address_val;

 document.getElementById("edit_button"+no).style.display="block";
 document.getElementById("save_button"+no).style.display="none";
 document.getElementById("delete_button"+no).style.display="block";
}

function delete_row(no) {
 document.getElementById("row"+no).outerHTML="";
}
