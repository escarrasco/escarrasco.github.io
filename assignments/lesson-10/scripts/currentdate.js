function currentDate() {
    var d = new Date();
    var weekday = new Array(
                                "Sunday",
                                "Monday",
                                "Tuesday",
                                "Wednesday",
                                "Thursday",
                                "Friday",
                                "Saturday"
                             );
  

    var month = new Array(  "January",
                            "February",
                            "March",
                            "April",
                            "May",
                            "June",
                            "July",
                            "August",
                            "September",
                            "Octuber",
                            "November",
                            "December"
                        );
  
    var day = weekday[d.getDay()];
    var m = month[d.getMonth()];
    document.getElementById("currentDate").innerHTML = day + ', ' + d.getDate() + ' ' + m + ' ' + d.getFullYear();
  }