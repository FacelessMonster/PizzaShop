

function add_to_cart(id)
{
  var key = "";
  if (id == 1) {
    key = "Hawaiian";
  } if (id == 2) {
    key = "Margarita";
  } if (id == 3) {
    key = "Pepperoni";
  }
  var x = window.localStorage.getItem(key);
  x = x * 1 + 1;
  window.localStorage.setItem(key, x);
  alert("Thank you!");
  
}

function show_cart()
  { var str = "";
    for (var i = 0; i < localStorage.length; i++)
    {
      str += "<tr><td>" + localStorage.key(i) + "</td><td>" + localStorage.getItem(localStorage.key(i)) + "<td></tr><br>";
    }
  document.getElementById("demo").innerHTML = str;
  }
