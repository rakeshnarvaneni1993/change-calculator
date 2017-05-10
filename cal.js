var amount = $("#amount");
amount.change(function(){
$("#change>span").html("")
$("#otherAmount").change(function(){
  var actualAmmount = $(amount).val()
  var change = this.value- actualAmmount;
  changeCal(change);
})
  var givenAmount = $("ul>li>button")

    givenAmount.on("click",function(target){
      var actualAmmount = $(amount).val()
      var change = (this.value - actualAmmount).toFixed(2)
      $("#changeDisplay").html(change)

      if(this.value == "nextdollar"){
        change = ((Math.floor(actualAmmount)+1)-actualAmmount).toFixed(2)
        $("#changeDisplay").html(change)
      }
      if(this.value == "exactdollar"){
        $("#changeDisplay").html(0)
        $("#change>span").html("")
      }
      changeCal(change);
    })

    function changeCal(change){
      if(change/20 >= 1){
        $("#20").html(Math.floor(change/20))
        change = change-a*20;
      }
      if(change/10 >= 1){
        var a = Math.floor(change/10)
        $("#10").html(a)
        change = change-a*10;
      }
      if(change/5 >= 1){
        var a = Math.floor(change/5)
        $("#5").html(a)
        change = change-a*5;
      }
      if(change/1 >= 1){
        var a = Math.floor(change/1)
        $("#1").html(a)
        change = change-1*a;
      }
      if(change/0.25 >= 1){
        var a = Math.floor(change/0.25)
        $("#quarter").html(a)
        change = (change-0.25*a).toFixed(2);
      }
      if(change/0.1 >= 1){
        var a = Math.floor(change/0.1)
        $("#dime").html(a)
        change = (change-0.1*a).toFixed(2);
      }
      if(change/0.05 >= 1){
        var a = Math.floor(change/0.05)
        $("#nickel").html(a)
        change = (change-0.05*a).toFixed(2);
      }
      if(change/0.01 >= 1){
        var a = Math.floor(change/0.01)
        $("#penny").html(a)
        change = (change-0.01*a).toFixed(2);
      }
    }
  // console.log($("ul>li:nth-child(2)").children().val())
})
