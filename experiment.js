var macros = ["pro", "carb", "fat"];
var weekdays = ["mon", "tue", "wed", "thu", "fri", "sat", "sun"];
var week = ["one", "two"]

var name = "";

for (var i = 0; i < week.length; i++){
  for (var j = 0; j < weekdays.length; j++) {
    for (var k = 0; k < macros.length; k++) {
      name = "#" + macros[k] + weekdays[j] + week[i];
      console.log(name);
    }
  }
}
