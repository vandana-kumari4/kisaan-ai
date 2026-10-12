// ---------- charts ----------
function initCharts(){
  const green='#1DB876', forest='#0B3D2E', sky='#3AAFE0', soil='#A9764A', amber='#D6A32B';
  Chart.defaults.font.family="Inter";
  Chart.defaults.color='#5C6B62';

  new Chart(document.getElementById('chartRevenue'), {
    type:'line',
    data:{labels:['Feb','Mar','Apr','May','Jun','Jul'],
      datasets:[
        {label:'Revenue (₹k)',data:[62,75,68,90,84,102],borderColor:green,backgroundColor:'rgba(29,184,118,.12)',fill:true,tension:.4,pointRadius:0,borderWidth:2.5},
        {label:'Yield (qtl)',data:[40,44,42,52,48,58],borderColor:sky,backgroundColor:'transparent',tension:.4,pointRadius:0,borderWidth:2.5,borderDash:[5,4]}
      ]},
    options:{plugins:{legend:{position:'bottom',labels:{boxWidth:8,usePointStyle:true}}},scales:{y:{grid:{color:'#EEF2EA'}},x:{grid:{display:false}}}}
  });

  new Chart(document.getElementById('chartHealth'), {
    type:'doughnut',
    data:{labels:['Healthy','At Risk','Critical'],datasets:[{data:[74,18,8],backgroundColor:[green,amber,'#D9553F'],borderWidth:0}]},
    options:{cutout:'70%',plugins:{legend:{position:'bottom',labels:{boxWidth:8,usePointStyle:true}}}}
  });

  new Chart(document.getElementById('chartNPK'), {
    type:'radar',
    data:{labels:['Nitrogen','Phosphorus','Potassium','Sulphur','Zinc'],
      datasets:[{label:'Current',data:[72,58,64,45,38],backgroundColor:'rgba(29,184,118,.18)',borderColor:green,pointBackgroundColor:green},
                {label:'Ideal',data:[80,70,75,55,50],backgroundColor:'rgba(58,175,224,.08)',borderColor:sky,borderDash:[4,4],pointBackgroundColor:sky}]},
    options:{plugins:{legend:{position:'bottom',labels:{boxWidth:8,usePointStyle:true}}},scales:{r:{grid:{color:'#EEF2EA'},angleLines:{color:'#EEF2EA'}}}}
  });

  new Chart(document.getElementById('chartWeather'), {
    type:'bar',
    data:{labels:['Mon','Tue','Wed','Thu','Fri','Sat','Sun'],
      datasets:[
        {type:'line',label:'Max Temp °C',data:[34,32,29,27,28,31,33],borderColor:'#D9553F',tension:.4,pointRadius:3,yAxisID:'y'},
        {label:'Rainfall mm',data:[0,2,14,28,10,1,0],backgroundColor:'rgba(58,175,224,.5)',yAxisID:'y1',borderRadius:6}
      ]},
    options:{plugins:{legend:{position:'bottom',labels:{boxWidth:8,usePointStyle:true}}},
      scales:{y:{position:'left',grid:{color:'#EEF2EA'}},y1:{position:'right',grid:{display:false}}}}
  });

  new Chart(document.getElementById('chartMarket'), {
    type:'line',
    data:{labels:Array.from({length:10},(_,i)=>'Day '+(i*3+1)),
      datasets:[{label:'₹/quintal',data:[2080,2110,2095,2150,2130,2180,2205,2190,2225,2240],borderColor:amber,backgroundColor:'rgba(214,163,43,.12)',fill:true,tension:.35,pointRadius:0,borderWidth:2.5}]},
    options:{plugins:{legend:{display:false}},scales:{y:{grid:{color:'#EEF2EA'}},x:{grid:{display:false}}}}
  });

  const mchart = document.getElementById('chartMoisture');
  if(mchart){
    new Chart(mchart, {
      type:'line',
      data:{labels:['12am','4am','8am','12pm','4pm','8pm'],
        datasets:[{label:'Soil Moisture %',data:[58,55,62,70,64,60],borderColor:sky,backgroundColor:'rgba(58,175,224,.15)',fill:true,tension:.4,pointRadius:0,borderWidth:2.5}]},
      options:{plugins:{legend:{display:false}},scales:{y:{min:0,max:100,grid:{color:'#EEF2EA'}},x:{grid:{display:false}}}}
    });
  }
}
