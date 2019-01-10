

function add_to_cart(id)
{
  var key = 'product_' + id;
  var x = window.localStorage.getItem('product_' + id);
  x = x * 1 + 1;
  window.localStorage.setItem(key, x);
  alert("Thank you!")
}

function show_cart()
  { var str = "";
    for (var i = 0; i < localStorage.length; i++)
    {str+="product_" + localStorage.key(i) + "; quantities: " + localStorage.getItem(localStorage.key(i));
    }
  alert(str)  
  }
