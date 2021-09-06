
function show_element(e){
	if(!e){
	 var e = window.event;
	}
	
	let name = document.querySelector("h1[itemprop='name']").innerText;
    let team = document.querySelector("h3[class='cb-font-18 text-gray']").innerText;
    let carrer = document.getElementsByClassName("table cb-col-100 cb-plyr-thead");
    let Ranking = document.getElementsByClassName("cb-col cb-col-25 cb-plyr-rank text-right");

    console.log("name ====>>>> " , name);
    console.log("team ====>>>> " , team);
    console.log("battingCarrer ====>>>> " , carrer[0]);
    console.log("bowlingCarrer ====>>>> " , carrer[1]);
    console.log("testBatRanking ====>>>> " , Ranking[3].innerText);
    console.log("odiBatRanking ====>>>> " , Ranking[4].innerText);
    console.log("t20BatRanking ====>>>> " , Ranking[5].innerText);
    console.log("testBolRanking ====>>>> " , Ranking[6].innerText);
    console.log("odiBolRanking ====>>>> " , Ranking[7].innerText);
    console.log("t20BolRanking ====>>>> " , Ranking[8].innerText);
	
}
function getFocus(){
    show_element();
}
getFocus();