

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
  { var keys = [];
    var vals = [];
    var order = [];
    for (var i = 0; i < localStorage.length; i++)
    {
      keys.push(localStorage.key(i));
      vals.push(localStorage.getItem(localStorage.key(i)));
      order.push([localStorage.key(i), localStorage.getItem(localStorage.key(i))]);
    }
  alert(order);
  }
