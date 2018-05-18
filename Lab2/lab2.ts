enum days{
    Sunday,
    Monday,
    Tuesday,
    Wednesday,
    Thursday,
    Friday,
    Saturday
}
enum months {
    January,
    February,
    March,
    April,
    May,
    June,
    July,
    August,
    September,
    October,
    November,
    December
}
enum earthPhysics {
    gravity = 9.81,
    c = Math.pow(3.88, 8),
    weight = 1
}
//html elements
let pTodayDate = document.getElementById("p--today-date");
let birthButton = document.getElementById("button--birthday");
let getBdate = document.getElementById("input--date-picker");
let result = document.getElementById("p--birthday-message");

//part 1
let today : Date = new Date();
pTodayDate.innerHTML = `Today is ${days[today.getDay()]}, 
                        ${months[today.getMonth()]} ${today.getDate()}, ${today.getFullYear()}`;
//part2
function getBday(bdate : Date) : string {
    //if today is user's bday
    if((bdate.getDate() + 1 === today.getDate()) && (bdate.getMonth() === today.getMonth())) {
        return 'Happy Birthday';
    }
        let thisYearsBirthday = new Date();
        thisYearsBirthday.setDate(bdate.getDate());
        thisYearsBirthday.setMonth(bdate.getMonth());
        thisYearsBirthday.setFullYear(today.getFullYear());
        return `Your Birthday will be on ${days[bdate.getDay()]} ${months[bdate.getMonth()]} ${bdate.getDate() + 1 }, ${thisYearsBirthday.getFullYear()}`
}
birthButton.onclick = function() {
    //get bday from input
    let userBDay : string = getBdate.value;
    let userBDayDate : Date = new Date(userBDay);
    //output
    result.innerHTML = getBday(userBDayDate);
}



