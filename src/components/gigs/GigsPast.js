import React from "react"

const dateNow = Date.now()/1000;

const GigsPast = ( {gigDate, gigLocation, gigDetails} ) => {

  if (gigDate <= dateNow){

    return (

    <div>

      <div className="gigs-all__gig gigs-all__gig--basic">
        <div className="gigs-all__card gigs-all__card--full">
            <h3 className="">{timeConverter(gigDate)} - {gigLocation}</h3>
        </div>
      </div>

    </div>

    )
  }
  else {
    return 0;
  }
}

function timeConverter(unixTimestamp){
  var a = new Date(unixTimestamp * 1000);
  var months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
  var days = ['Monday','Tuesday','Wednesday','Thursday','Friday','Saturday','Sunday'];
  var year = a.getFullYear();
  var month = months[a.getMonth()];
  var date = a.getDate();
  var day = days[a.getDay()];
  var hour = a.getHours();
  var min = a.getMinutes();
  if (min === 0) {
    min = '00';
  }
  var time = day + ', ' + date + ' ' + month + ' ' + year + ' @ ' + hour + ':' + min;
  return time;
}

export default GigsPast