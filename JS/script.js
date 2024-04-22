let h1=document.querySelector(".title");
let inp=document.querySelector("input");
let btn=document.getElementById("srcbtn");
btn.addEventListener("click",async(event)=>{
	event.preventDefault();

	let data = await getdata(url+inp.value ,options);
	h1.innerText="Weather for "+inp.value.toUpperCase();
	// temperature section
	let tem = document.getElementById("temp");
	let mint = document.getElementById("min-temp");
	let maxt= document.getElementById("max-temp");
    tem.innerText= "Temperature is "+data.temp;
    mint.innerText= " Min-Temperature is "+data.min_temp;
    maxt.innerText= "Max-Temperature is "+data.max_temp;
	// Humidity info section
	let humty= document.getElementById("humidity");
	let ws= document.getElementById("wind-speed");
	let fl= document.getElementById("feels-like");
    humty.innerText= "Humidity is "+data.humidity;
    ws.innerText= "wind speed is "+data.wind_speed;
    fl.innerText= "Feels like "+data.feels_like;
	//Wind info section 
	let ws2= document.getElementById("wind-speed2");
	let wind_d= document.getElementById("wind-d");
	let sunr_t= document.getElementById("sunr-t");
    ws2.innerText= "wind speed is "+data.wind_speed;
    wind_d.innerText= "Wind degree "+data.wind_degrees;
    sunr_t.innerText= "Sunrise time is  "+data.sunrise;
})
addEventListener("load",(event)=>{
	 delhi_data(url+"delhi",options);
	 bhopal_data(url+"bhopal",options);
	 jabalpur_data(url+"jabalpur",options);
	 sagour_data(url+"sagar",options);
	 katni_data(url+"katni",options);
	 damoh_data(url+"damoh",options);
});
 async function delhi_data(url,options){
	let del_cp = document.getElementById("del-cp");
	let del_fl = document.getElementById("del-fl");
	let del_hum = document.getElementById("del-hum");
	let del_max = document.getElementById("del-max-t");
	let del_sr = document.getElementById("del-sr");
	let del_ss = document.getElementById("del-ss");
	let del_wd = document.getElementById("del-wd");
	let del_ws = document.getElementById("del-ws");
	let delhi = await getdata(url,options);
	del_cp.innerText= delhi.cloud_pct;
    del_max.innerText = delhi.max_temp;
    del_hum.innerText = delhi.humidity;
    del_ws.innerText = delhi.wind_speed;
    del_fl.innerText = delhi.feels_like;
    del_wd.innerText = delhi.wind_speed;
    del_sr.innerText = delhi.sunrise;
    del_ss.innerText = delhi.sunset;
}
 async function bhopal_data(url,options){
	let bpl_cp = document.getElementById("bpl-cp");
	let bpl_fl = document.getElementById("bpl-fl");
	let bpl_hum = document.getElementById("bpl-hum");
	let bpl_max = document.getElementById("bpl-max-t");
	let bpl_sr = document.getElementById("bpl-sr");
	let bpl_ss = document.getElementById("bpl-ss");
	let bpl_wd = document.getElementById("bpl-wd");
	let bpl_ws = document.getElementById("bpl-ws");
	let bhopal = await getdata(url,options);
	bpl_cp.innerText= bhopal.cloud_pct;
    bpl_max.innerText = bhopal.max_temp;
    bpl_hum.innerText = bhopal.humidity;
    bpl_ws.innerText = bhopal.wind_speed;
    bpl_fl.innerText = bhopal.feels_like;
    bpl_wd.innerText = bhopal.wind_speed;
    bpl_sr.innerText = bhopal.sunrise;
    bpl_ss.innerText = bhopal.sunset;
}
 async function jabalpur_data(url,options){
	let jbl_cp = document.getElementById("jbl-cp");
	let jbl_fl = document.getElementById("jbl-fl");
	let jbl_hum = document.getElementById("jbl-hum");
	let jbl_max = document.getElementById("jbl-max-t");
	let jbl_sr = document.getElementById("jbl-sr");
	let jbl_ss = document.getElementById("jbl-ss");
	let jbl_wd = document.getElementById("jbl-wd");
	let jbl_ws = document.getElementById("jbl-ws");
	let jabalpur = await getdata(url,options);
	jbl_cp.innerText= jabalpur.cloud_pct;
    jbl_max.innerText = jabalpur.max_temp;
    jbl_hum.innerText = jabalpur.humidity;
    jbl_ws.innerText = jabalpur.wind_speed;
    jbl_fl.innerText = jabalpur.feels_like;
    jbl_wd.innerText = jabalpur.wind_speed;
    jbl_sr.innerText = jabalpur.sunrise;
    jbl_ss.innerText = jabalpur.sunset;
}
async function sagour_data(url,options){
	let sgo_cp = document.getElementById("sgo-cp");
	let sgo_fl = document.getElementById("sgo-fl");
	let sgo_hum = document.getElementById("sgo-hum");
	let sgo_max = document.getElementById("sgo-max-t");
	let sgo_sr = document.getElementById("sgo-sr");
	let sgo_ss = document.getElementById("sgo-ss");
	let sgo_wd = document.getElementById("sgo-wd");
	let sgo_ws = document.getElementById("sgo-ws");
	let sagour = await getdata(url,options);
	sgo_cp.innerText= sagour.cloud_pct;
    sgo_max.innerText = sagour.temp;
    sgo_hum.innerText = sagour.humidity;
    sgo_ws.innerText = sagour.wind_speed;
    sgo_fl.innerText = sagour.feels_like;
    sgo_wd.innerText = sagour.wind_speed;
    sgo_sr.innerText = sagour.sunrise;
    sgo_ss.innerText = sagour.sunset;
}
async function katni_data(url,options){
	let ktn_cp = document.getElementById("ktn-cp");
	let ktn_fl = document.getElementById("ktn-fl");
	let ktn_hum = document.getElementById("ktn-hum");
	let ktn_max = document.getElementById("ktn-max-t");
	let ktn_sr = document.getElementById("ktn-sr");
	let ktn_ss = document.getElementById("ktn-ss");
	let ktn_wd = document.getElementById("ktn-wd");
	let ktn_ws = document.getElementById("ktn-ws");
	let katni = await getdata(url,options);
	ktn_cp.innerText= katni.cloud_pct;
    ktn_max.innerText = katni.temp;
    ktn_hum.innerText = katni.humidity;
    ktn_ws.innerText = katni.wind_speed;
    ktn_fl.innerText = katni.feels_like;
    ktn_wd.innerText = katni.wind_speed;
    ktn_sr.innerText = katni.sunrise;
    ktn_ss.innerText = katni.sunset;
}

async function damoh_data(url,options){
	let dmo_cp = document.getElementById("dmo-cp");
	let dmo_fl = document.getElementById("dmo-fl");
	let dmo_hum = document.getElementById("dmo-hum");
	let dmo_max = document.getElementById("dmo-max-t");
	let dmo_sr = document.getElementById("dmo-sr");
	let dmo_ss = document.getElementById("dmo-ss");
	let dmo_wd = document.getElementById("dmo-wd");
	let dmo_ws = document.getElementById("dmo-ws");
	let damoh = await getdata(url,options);
	dmo_cp.innerText= damoh.cloud_pct;
    dmo_max.innerText = damoh.temp;
    dmo_hum.innerText = damoh.humidity;
    dmo_ws.innerText = damoh.wind_speed;
    dmo_fl.innerText = damoh.feels_like;
    dmo_wd.innerText = damoh.wind_speed;
    dmo_sr.innerText = damoh.sunrise;
    dmo_ss.innerText = damoh.sunset;
}
// api handling
const url = "https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=";
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '090caa4195msh7dfe649db8b3bebp141e34jsn54f2c8249b79',
		'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
	}};
async function getdata(url,options){
try {
	const response = await fetch(url, options);
	let result = await response.json();
	console.log(result);
    return result;
} catch (error) {
	return error;
}
}