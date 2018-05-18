var days;
(function (days) {
    days[days["Sunday"] = 0] = "Sunday";
    days[days["Monday"] = 1] = "Monday";
    days[days["Tuesday"] = 2] = "Tuesday";
    days[days["Wednesday"] = 3] = "Wednesday";
    days[days["Thursday"] = 4] = "Thursday";
    days[days["Friday"] = 5] = "Friday";
    days[days["Saturday"] = 6] = "Saturday";
})(days || (days = {}));
var months;
(function (months) {
    months[months["January"] = 0] = "January";
    months[months["February"] = 1] = "February";
    months[months["March"] = 2] = "March";
    months[months["April"] = 3] = "April";
    months[months["May"] = 4] = "May";
    months[months["June"] = 5] = "June";
    months[months["July"] = 6] = "July";
    months[months["August"] = 7] = "August";
    months[months["September"] = 8] = "September";
    months[months["October"] = 9] = "October";
    months[months["November"] = 10] = "November";
    months[months["December"] = 11] = "December";
})(months || (months = {}));
var earthPhysics;
(function (earthPhysics) {
    earthPhysics[earthPhysics["gravity"] = 9.81] = "gravity";
    earthPhysics[earthPhysics["c"] = Math.pow(3.88, 8)] = "c";
    earthPhysics[earthPhysics["weight"] = 1] = "weight";
})(earthPhysics || (earthPhysics = {}));
//html elements
var pTodayDate = document.getElementById("p--today-date");
var birthButton = document.getElementById("button--birthday");
var getBdate = document.getElementById("input--date-picker");
var result = document.getElementById("p--birthday-message");
//part 1
var today = new Date();
pTodayDate.innerHTML = "Today is " + days[today.getDay()] + ", \n                        " + months[today.getMonth()] + " " + today.getDate() + ", " + today.getFullYear();
//part2
function getBday(bdate) {
    //if today is user's bday
    if ((bdate.getDate() + 1 === today.getDate()) && (bdate.getMonth() === today.getMonth())) {
        return 'Happy Birthday';
    }
    var thisYearsBirthday = new Date();
    thisYearsBirthday.setDate(bdate.getDate());
    thisYearsBirthday.setMonth(bdate.getMonth());
    thisYearsBirthday.setFullYear(today.getFullYear());
    return "Your Birthday will be on " + days[bdate.getDay()] + " " + months[bdate.getMonth()] + " " + (bdate.getDate() + 1) + ", " + thisYearsBirthday.getFullYear();
}
birthButton.onclick = function () {
    //get bday from input
    var userBDay = getBdate.value;
    var userBDayDate = new Date(userBDay);
    //output
    result.innerHTML = getBday(userBDayDate);
};
