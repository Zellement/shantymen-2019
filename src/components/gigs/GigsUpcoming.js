import React from "react"
import { HTMLContent } from '../../components/Content'
import { GiPositionMarker, GiCalendar } from 'react-icons/gi'

const dateNow = Date.now()/1000;

const GigsUpcoming = ( {gigDate, gigLocation, gigDetails} ) => {

  if (gigDate >= dateNow){

    return (

    <div>

      <div className="gigs-all__gig">
        <div className="gigs-all__card">
          <div className="gigs-all__card-content">
            <GiCalendar className="gigs-all__icon" />
            <h3 className="gigs-all__datetime">{timeConverter(gigDate)}</h3>
          </div>
        </div>

        <div className="gigs-all__card gigs-all__card-orange">
          <div className="gigs-all__card-content">
            <GiPositionMarker className="gigs-all__icon" />
            <h3 className="gigs-all__location">{gigLocation}</h3>
          </div>
        </div>

        <HTMLContent className="gigs-all__content" content={gigDetails} />

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

export default GigsUpcoming