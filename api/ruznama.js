var date = new Date()
var month = date.getMonth() + 1
var day = date.getDate()
var cure = day + "." + month;



if (cure == "7.3") {

  fetch("api/3.json")
                .then(response => response.json())
                .then(data => {
                    for (var i = 0; i<data.array.length; i++){
                        let vdate = data.array[i].date;
                        let vfajr = data.array[i].times.fajr;
                        let vsunrise = data.array[i].times.sunrise;
                        let vdhuhr = data.array[i].times.dhuhr;
                        let vasr = data.array[i].times.asr;
                        let vmaghrib = data.array[i].times.maghrib;
                        let vnight = data.array[i].times.night;
                        
                            document.querySelector("#tb1").innerHTML += `
                                <tr>
                                    <td>${vdate}</td>
                                    <td>${vfajr}</td>
                                    <td>${vsunrise}</td>
                                    <td>${vdhuhr}</td>
                                    <td>${vasr}</td>
                                    <td>${vmaghrib}</td>
                                    <td>${vnight}</td>
                                </tr>`;
                    }
                })
  
};