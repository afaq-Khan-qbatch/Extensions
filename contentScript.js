const show_element = async (e) => {
	
	let name = document.querySelector("h1[itemprop='name']").innerText;
    let team = document.querySelector("h3[class='cb-font-18 text-gray']").innerText;
    let carrer = document.getElementsByClassName("table cb-col-100 cb-plyr-thead");
    let Ranking = document.getElementsByClassName("cb-col cb-col-25 cb-plyr-rank text-right");

    //getting data from batting table
    var theads = carrer[0].getElementsByTagName('th');
    var matches = carrer[0].getElementsByTagName('tr');
    const test = matches[1].getElementsByTagName('td');
     const odi = matches[2].getElementsByTagName('td');
     const t20 = matches[3].getElementsByTagName('td');
     const arr = [23];
     const obj = {};

     let testObject = {};
     let odiObject = {};
     let t20Object = {};

     //getting data from bowling table
     var theadsBol = carrer[1].getElementsByTagName('th');
     var matchesBol = carrer[1].getElementsByTagName('tr');
     const testBol = matchesBol[1].getElementsByTagName('td');
      const odiBol = matchesBol[2].getElementsByTagName('td');
      const t20Bol = matchesBol[3].getElementsByTagName('td');
      let testObjectBol = {};
      let odiObjectBol = {};
      let t20ObjectBol = {};



    for (var i = 1; i < theads.length; i++) {
        let key = theads[i].innerText;
        testObject[key] = test[i].innerText;
        odiObject[key] = odi[i].innerText;
        t20Object[key] = t20[i].innerText;


    }
    for (var i = 1; i < theadsBol.length; i++) {
        key = theadsBol[i].innerText;
        testObjectBol[key] = testBol[i].innerText;
        odiObjectBol[key] = odiBol[i].innerText;
        t20ObjectBol[key] = t20Bol[i].innerText;
    }


    const playerData = {
        name,
        team,
        batting: {
            test: testObject,
            odi: odiObject,
            t20: t20Object
        },
        bowling: {
            test: testObjectBol,
            odi: odiObjectBol,
            t20: t20ObjectBol
        },
        battingRanking:{
            test: Ranking[3].innerText,
            odi: Ranking[4].innerText,
            t20: Ranking[5].innerText
        },
        bowlingRanking:{
            test: Ranking[6].innerText,
            odi: Ranking[7].innerText,
            t20: Ranking[8].innerText
        }
    }

    chrome.runtime.sendMessage({greeting: "hello"}, function(response) {
        console.log(response.farewell);
    });

    console.log(playerData);
    const data = await fetch('http://localhost:5000/playerRoute/addplayer' ,{
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(playerData),
    });
    console.log(data);
}
show_element();