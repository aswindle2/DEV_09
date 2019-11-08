$(function() {
  $("#userSignInput").on("keyup", function(e) {
    var signLength = $(this).val().length;
    $("#tiles").text(signLength);
    updatePrice(signLength);
  })
})

  $("#userFontInput").on("click", function(e) {
    $('table').append($(this).prop(':checked'));
    var inputFont = $(this).is(':checked');
    
    updatePrice($('#userSignInput').val().length, inputFont)
  });
  $("#userColorInput").on("click", function(e){
    $('table').append($(this).prop(':checked'));
    var inputColor = $(this).is(':checked');
    
    updatePrice($('#userColorInput').val().length,    inputColor)
 
});

  $("#confirmOrder").on("click", function(e){
   event.preventDefault();
    
    var previewMsg = $("#userSignInput").val();
    previewMsg +=  <a href = "#" id = "cancelPreview">Cancel Order</a>;
    $('previewScreen').append(previewMsg);
    $('#previewScreen').animate({'right': '0px'},     250);
})

  $("#cancelOrder").on("click", function(e){
   event.preventDefault();
    
  $('previewScreen').toggle()
    .animate({'right': '0px'}, 250);
})
function updatePrice(signLength, fontUpgrade) {
  var costPerTile = 5;
  
  if{fontUpgrade}{
    console.log('upgrading your tile cost');
    costPerTile = 6;
  }
  else{
    costPerTile=5;
  }
  
  
  var subTotal = signLength * costPerTile;
  
  if(signLength !=0){ shipping = 7;}
  else{(shipping= 0;)}
  
  var shipping = 7;
  var grandTotal = subTotal + shipping;

  $("#subTotal").text("$" + subTotal);
  $("#shipping").text("$" + shipping);
  $("grandTotal").text("S" + grandTotal);

  return grandTotal;
}
