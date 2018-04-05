window.onload = function() {
  var chart1 = new CanvasJS.Chart("chartContainer1", {
    animationEnabled: true,
    zoomEnabled: true,
    theme: "light",
    title: {
      text: "Wzrost Użytkowników Internetu"
    },
    axisX: {
      title: "Rok",
      valueFormatString: "####",
      interval: 2
    },
    axisY: {
      logarithmic: true, //change it to false
      title: "Użytkownicy Internetu (Log)",
      titleFontColor: "#2196f3",
      lineColor: "#2196f3",
      gridThickness: 0,
      lineThickness: 1,
      includeZero: false,
      labelFormatter: addSymbols
    },
    axisY2: {
      title: "Użytkownicy Internetu",
      titleFontColor: "#747474",
      logarithmic: false, //change it to true
      lineColor: "#747474",
      gridThickness: 0,
      lineThickness: 1,
      labelFormatter: addSymbols
    },
    legend: {
      verticalAlign: "top",
      fontSize: 16,
      dockInsidePlotArea: true
    },
    data: [
      {
        type: "line",
        xValueFormatString: "####",
        showInLegend: true,
        name: "Skala Logarytmiczna",
        color: "#2196f3",
        dataPoints: [
          { x: 1994, y: 25437639 },
          { x: 1995, y: 44866595 },
          { x: 1996, y: 77583866 },
          { x: 1997, y: 120992212 },
          { x: 1998, y: 188507628 },
          { x: 1999, y: 281537652 },
          { x: 2000, y: 414794957 },
          { x: 2001, y: 502292245 },
          { x: 2002, y: 665065014 },
          { x: 2003, y: 781435983 },
          { x: 2004, y: 913327771 },
          { x: 2005, y: 1030101289 },
          { x: 2006, y: 1162916818 },
          { x: 2007, y: 1373226988 },
          { x: 2008, y: 1575067520 },
          { x: 2009, y: 1766403814 },
          { x: 2010, y: 2023202974 },
          { x: 2011, y: 2231957359 },
          { x: 2012, y: 2494736248 },
          { x: 2013, y: 2728428107 },
          { x: 2014, y: 2956385569 },
          { x: 2015, y: 3185996155 },
          { x: 2016, y: 3424971237 }
        ]
      },
      {
        type: "line",
        xValueFormatString: "####",
        axisYType: "secondary",
        showInLegend: true,
        name: "Skala Liniowa",
        color: "#747474",
        dataPoints: [
          { x: 1994, y: 25437639 },
          { x: 1995, y: 44866595 },
          { x: 1996, y: 77583866 },
          { x: 1997, y: 120992212 },
          { x: 1998, y: 188507628 },
          { x: 1999, y: 281537652 },
          { x: 2000, y: 414794957 },
          { x: 2001, y: 502292245 },
          { x: 2002, y: 665065014 },
          { x: 2003, y: 781435983 },
          { x: 2004, y: 913327771 },
          { x: 2005, y: 1030101289 },
          { x: 2006, y: 1162916818 },
          { x: 2007, y: 1373226988 },
          { x: 2008, y: 1575067520 },
          { x: 2009, y: 1766403814 },
          { x: 2010, y: 2023202974 },
          { x: 2011, y: 2231957359 },
          { x: 2012, y: 2494736248 },
          { x: 2013, y: 2728428107 },
          { x: 2014, y: 2956385569 },
          { x: 2015, y: 3185996155 },
          { x: 2016, y: 3424971237 }
        ]
      }
    ]
  });

  var chart2 = new CanvasJS.Chart("chartContainer2", {
    animationEnabled: true,
    exportEnabled: true,
    theme: "light2", // "light1", "light2", "dark1", "dark2"
    title: {
      text: "Tytuł"
    },
    data: [
      {
        type: "bar", //change type to bar, line, area, pie, etc
        //indexLabel: "{y}", //Shows y value on all Data Points
        indexLabelFontColor: "#5A5757",
        indexLabelPlacement: "outside",
        dataPoints: [
          { x: 10, y: 71 },
          { x: 20, y: 55 },
          { x: 30, y: 50 },
          { x: 40, y: 65 },
          { x: 50, y: 92, indexLabel: "Najwyższy" },
          { x: 60, y: 68 },
          { x: 70, y: 38 },
          { x: 80, y: 71 },
          { x: 90, y: 54 },
          { x: 100, y: 60 },
          { x: 110, y: 36 },
          { x: 120, y: 49 },
          { x: 130, y: 21, indexLabel: "Najniższy" }
        ]
      }
    ]
  });
  setTimeout(_ => {
    chart1.render();
    chart2.render();
  }, 1300);

  function addSymbols(e) {
    var suffixes = ["", "K", "M", "B"];

    var order = Math.max(Math.floor(Math.log(e.value) / Math.log(1000)), 0);
    if (order > suffixes.length - 1) order = suffixes.length - 1;

    var suffix = suffixes[order];
    return CanvasJS.formatNumber(e.value / Math.pow(1000, order)) + suffix;
  }
};
