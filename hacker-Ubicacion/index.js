function getIP(json) {

    var ipad = json.ip;
    document.getElementById("nmap").innerHTML = ipad;
    document.getElementById("startnmap").innerHTML = ipad;
    link = "https://ipapi.co/"+ipad+"/json/"
    $.getJSON(link, function(data) {
    function androidV(ua) { 
       ua = (ua || navigator.userAgent).toLowerCase();  
       var match = ua.match(/android\s([0-9\.]*)/i); 
       return match ? match[1] : undefined; 
    };          document.getElementById("table").innerHTML = '<tr><th>About</th><th>Information</th></tr><tr><td>Android Version</td><td>'+ androidV() +'</td><tr><td>IP Adress</td><td>'+ data.ip +' (It may vary depending on your network...)</td></tr><tr><td>Country</td><td>'+ data.country_name+'</td></tr><tr><td>Region</td><td>'+ data.region +'</td></tr><tr><td>City</td><td>'+ data.city +' (It may be not exact because of ISP Provider Server location...)</td></tr><tr><td>Country Capital</td><td>'+ data.country_capital +'</td></tr><tr><td>Postal Code</td><td>'+ data.postal +'</td></tr><tr><td>Latitude</td><td>'+ data.latitude +'</td></tr><tr><td>Longitude</td><td>'+ data.longitude +'</td></tr><tr><td>TimeZone</td><td>'+ data.timezone +'</td></tr><tr><td>Phone Code</td><td>'+ data.country_calling_code +'</td></tr><tr><td>Currency</td><td>'+ data.currency_name +'</td></tr><tr><td>ISP</td><td>'+ data.org +'</td></tr><br><br><font style="font-size:20px;">Note :- This information is yours not any random....This is done using IP Address tracking API...';
        });
    }
    