var item = prompt("Enter Your items \n But only 2items available \n 1=Tshirt 2=pant")
if (item == 'tshirt' || item == 'pant') {
    alert('Please Select A Colour')


    var colour = prompt("Enter A colour \n But Only three colour Available ")
    if (colour == 'green' || colour == 'gray' || colour == 'black') {
        alert("please select size")
        var size = prompt("Select a size \n small =100 \n medium = 300 \n Large 500")
        if (size == "m" || size == "s" || size == "L") {
            alert("please enter a quantity")
            var qty = +prompt("Enter A Quantity")
            if (size == "s") {

                alert(`your Amount ${qty * 100}`)

            }
            else if (size == "m") {
                alert(`your Amount ${qty * 300}`)
            }
            else if (size == "L") {
                alert(`your Amount ${qty * 500}`)
            }
            else {
                alert("Size is not Available")
            }
        }
        else {
            alert("Size is not available")
        }
    }
    else {
        alert(" Colour is not Available ")
    }
}
else {
    alert('item is not available')
}