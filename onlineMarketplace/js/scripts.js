var name = $("#name").val();
var address = $("#address").val();
var para = document.createElement("p")

$(document).ready(function() {
  $("#formBox").submit(function(event) {
    event.preventDefault();

    $("#outputName").text($("#name").val());
    $("#outputAddress").text($("#address").val());

  });

  $('input[type="checkbox"]').click(function(){
    if($(this). is(":checked")){
      console.log(this.value);

      var textElement = document.createElement("div");
      textElement.className = "foodItem";
      textElement.innerText = this.value;
      
      $("#outputFood").append(textElement)
      }
      else if($(this). is(":not(:checked)")){
      console.log(this.value)
      }
  })
});