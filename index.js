function ngaymai(){
    var day=document.getElementById("ngay").value*1;
    var month=document.getElementById("thang").value*1;
    var year=document.getElementById("nam").value*1;
    var nmEL=document.getElementById("hqua").value*1;


    
    switch(month)
    {
        case 4:
        case 6:
        case 9:
        case 11:
            tg = 30;
            break;
        case 2:
            tg = 28 + ((year % 100 != 0 && year % 4 == 0) || (nam % 400 == 0));
            break;
        default:
            tg = 31;
    }

    day = (day%tg)+1;
    if(day==1)
    {
        month = (month%12)+1;
        if(month==1 && day==1){
            year=year+1;
        }
    }
    nmEL=document.getElementById("mai").innerHTML=`<h2 class="mt-5 text-danger text-center">
            Ngày mai là ngày  :
            ${(day + "-" + month + "-" + year )} </h2>`;

}

function ngayhomqua(){
    var day=document.getElementById("ngay").value*1;
    var month=document.getElementById("thang").value*1;
    var year=document.getElementById("nam").value*1;
    var nhqEL=document.getElementById("hqua").value*1;


    
    if(day==1)
    {
        switch(month-1)
        {
            case 4:
            case 6:
            case 9:
            case 11:
                day=30;
                break;
            case 2:
                day=28+((year % 100 != 0 && year % 4 == 0) || (nam % 400 == 0));
                break;
            default:
                day=31;
        }
        if(month==1)
        {
            month=12;
            year--;
        }
        else
        {
            month--;
        }
    }
    else
    {
        day--;
    }
    nhqEL=document.getElementById("hqua").innerHTML=`<h2 class="mt-5 text-danger text-center">
    Ngày hôm qua là ngày  :
    ${(day + "-" + month + "-" + year )} </h>`

}

/*----------------Bài 2----------------*/
function demngay(){
    var thang=document.getElementById("txt-thang").value*1;
    var nam=document.getElementById("txt-nam").value*1;
    var demEL=document.getElementById("dem");



    switch(thang)
	{
	case 1: case 3: case 5: case 7: case 8: case 10: case 12:
		demEL=document.getElementById("dem").innerHTML=`<h2 class="mt-5 text-danger text-center">Có 31 ngày </h2>`;
		break;
	case 4: case 6: case 9 : case 11:
		demEL=document.getElementById("dem").innerHTML=`<h2 class="mt-5 text-danger text-center">Có 30 ngày </h2>`;
		break;
	case 2:
		
		if((nam % 4 == 0 && nam % 100 != 0) || (nam % 400 == 0))
		{
			demEL=document.getElementById("dem").innerHTML=`<h2 class="mt-5 text-danger text-center">Có 29 ngày </h2>`;
		}
		else
		{
			demEL=document.getElementById("dem").innerHTML=`<h2 class="mt-5 text-danger text-center">Có 28 ngày </h2>`;
		}
	}
}
/*----------------Bài 3----------------*/
function cachdoc(){
    var nhapSo=document.getElementById("nhap-so").value*1;
    


    var donvi =nhapSo%10;
    console.log("🚀 ~ file: index.js:116 ~ cachdoc ~  donvi",  donvi)


    var chuc=Math.floor(nhapSo%100/10);
    console.log("🚀 ~ file: index.js:119 ~ cachdoc ~ chuc", chuc)

    var tram=Math.floor(nhapSo/100);
    console.log("🚀 ~ file: index.js:123 ~ cachdoc ~ tram", tram)

    switch(tram){
        case 1: doctram=document.getElementById("docso").innerHTML=`<h2 class="mt-5 text-danger text-center">Một trăm </h2>`;
        break;
        case 2: doctram=document.getElementById("docso").innerHTML=`<h2 class="mt-5 text-danger text-center">Hai trăm </h2>`;
        break;
        case 3: doctram=document.getElementById("docso").innerHTML=`<h2 class="mt-5 text-danger text-center">Ba trăm </h2>`;
        break;
        case 4: doctram=document.getElementById("docso").innerHTML=`<h2 class="mt-5 text-danger text-center">Bốn trăm </h2>`;
        break;
        case 5:  doctram=document.getElementById("docso").innerHTML=`<h2 class="mt-5 text-danger text-center">Năm trăm </h2>`;
        break;
        case 6:  doctram=document.getElementById("docso").innerHTML=`<h2 class="mt-5 text-danger text-center">Sáu trăm </h2>`;
        break;
        case 7:  doctram=document.getElementById("docso").innerHTML=`<h2 class="mt-5 text-danger text-center">Bảy trăm </h2>`;
        break;
        case 8:  doctram=document.getElementById("docso").innerHTML=`<h2 class="mt-5 text-danger text-center">Tám trăm </h2>`;
        break;
        case 9:  doctram=document.getElementById("docso").innerHTML=`<h2 class="mt-5 text-danger text-center">Chín trăm </h2>`;break;
    }

    if(chuc % 10 == 0 && donvi != 0){
        docchuc=document.getElementById("sochuc").innerHTML=`<h2 class="mt-5 text-danger text-center">lẻ </h2>`;
      }
      switch(chuc){
        case 1:docchuc=document.getElementById("sochuc").innerHTML=`<h2 class="mt-5 text-danger text-center">mười </h2>`;break;
        case 2: docchuc=document.getElementById("sochuc").innerHTML=`<h2 class="mt-5 text-danger text-center">hai mươi </h2>`;break;
        case 3:docchuc=document.getElementById("sochuc").innerHTML=`<h2 class="mt-5 text-danger text-center">ba mươi </h2>`;break;
        case 4: docchuc=document.getElementById("sochuc").innerHTML=`<h2 class="mt-5 text-danger text-center">bốn mươi</h2>`;break;
        case 5: docchuc=document.getElementById("sochuc").innerHTML=`<h2 class="mt-5 text-danger text-center">năm mươi </h2>`;break;
        case 6:docchuc=document.getElementById("sochuc").innerHTML=`<h2 class="mt-5 text-danger text-center">sáu mươi </h2>`;break;
        case 7: docchuc=document.getElementById("sochuc").innerHTML=`<h2 class="mt-5 text-danger text-center">bảy mươi</h2>`;break;
        case 8:docchuc=document.getElementById("sochuc").innerHTML=`<h2 class="mt-5 text-danger text-center">tám mươi </h2>`;break;
        case 9: docchuc=document.getElementById("sochuc").innerHTML=`<h2 class="mt-5 text-danger text-center">chín mươi </h2>`;break;
      }

      switch(donvi){
        case 1:docvi=document.getElementById("sodonvi").innerHTML=`<h2 class="mt-5 text-danger text-center">một </h2>`;break;
        case 2: docvi=document.getElementById("sodonvi").innerHTML=`<h2 class="mt-5 text-danger text-center">hai  </h2>`;break;
        case 3:docvi=document.getElementById("sodonvi").innerHTML=`<h2 class="mt-5 text-danger text-center">ba</h2>`;break;
        case 4:docvi=document.getElementById("sodonvi").innerHTML=`<h2 class="mt-5 text-danger text-center">bốn </h2>`;break;
        case 5:docvi=document.getElementById("sodonvi").innerHTML=`<h2 class="mt-5 text-danger text-center">năm  </h2>`;break;
        case 6:docvi=document.getElementById("sodonvi").innerHTML=`<h2 class="mt-5 text-danger text-center">sáu </h2>`;break;
        case 7: docvi=document.getElementById("sodonvi").innerHTML=`<h2 class="mt-5 text-danger text-center">bảy </h2>`;break;
        case 8:docvi=document.getElementById("sodonvi").innerHTML=`<h2 class="mt-5 text-danger text-center">tám  </h2>`;break;
        case 9:docvi=document.getElementById("sodonvi").innerHTML=`<h2 class="mt-5 text-danger text-center">chín  </h2>`;break;
      }


 }

 /*----------------Bài 4----------------*/
 function timKC(){
    var hoten1=document.getElementById("txt-tenmot").value;
    var x1=document.getElementById("toado-x1").value*1;
    var y1=document.getElementById("toado-y1").value*1;

    var hoten2=document.getElementById("txt-tenhai").value;
    var x2=document.getElementById("toado-x2").value*1;
    var y2=document.getElementById("toado-y2").value*1;

    var hoten3=document.getElementById("txt-tenba").value*1;
    var x3=document.getElementById("toado-x3").value*1;
    var y3=document.getElementById("toado-y3").value*1;


    var x4=document.getElementById("toado-x4").value*1;
    var y4=document.getElementById("toado-y4").value*1;

    var KC1 = Math.sqrt((x4-x1)*(x4-x1) +(y4-y1)*(y4-y1));
    console.log("🚀 ~ file: index.js:195 ~ timKC ~ KC1", KC1)

    var KC2 = Math.sqrt((x4-x2)*(x4-x2) +(y4-y2)*(y4-y2));
    console.log("🚀 ~ file: index.js:198 ~ timKC ~ KC2 ", KC2 )

    var KC3 = Math.sqrt((x4-x3)*(x4-x3) +(y4-y3)*(y4-y3));
    console.log("🚀 ~ file: index.js:201 ~ timKC ~  KC3",  KC3)

    if(KC1>=KC2 && KC1>=KC3){

        KCxanhat=document.getElementById("tim").innerHTML=`<h2 class="mt-5 text-danger text-center">
            Sinh viên có khoảng cách xa nhất là: ${hoten1} </h2>`;
    }
    else if(KC2>=KC1 && KC2>=KC1){
        KCxanhat=document.getElementById("tim").innerHTML=`<h2 class="mt-5 text-danger text-center">
        Sinh viên có khoảng cách xa nhất là:  ${hoten2} </h2>`;
    }
    else{
        KCxanhat=document.getElementById("tim").innerHTML=`<h2 class="mt-5 text-danger text-center">
        Sinh viên có khoảng cách xa nhất là:  ${hoten3} </h2>`;
    }
    

 }




