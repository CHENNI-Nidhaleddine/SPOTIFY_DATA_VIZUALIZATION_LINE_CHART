let songs=['Shape of You','Despacito','Something Just Like This','HUMBLE.','Unforgettable']
let vars=['var A','var B','var C',' var D','var E']

document.getElementById("alea").addEventListener("click", function (event) {
  var data = get_data(1);
  draw_diagram(data, document.getElementById("fish").checked);
});

document.getElementById("reel").addEventListener("click", function (event) {
  var data = get_data(2);
  draw_diagram(data, document.getElementById("fish").checked);
});

document.getElementById("fish").addEventListener("click", function (event) {
  var data = get_data(document.getElementById("alea").checked ? 1 : 2);
  draw_diagram(data, document.getElementById("fish").checked);
});

function draw_diagram(data, fisheye) {
  document.getElementById("svg1").innerHTML = " ";
  document.getElementById("svg2").innerHTML = " ";

  var svg = d3.select(".svg1"),
    margin = { top: 20, right: 0, bottom: 110, left: 7 },
    margin2 = { top: 430, right: 0, bottom: 30, left: 7 },
    margin3 = { top: 0, bottom: 500, left: 100, right: 990 },
    width = +svg.attr("width") - margin.left - margin.right,
    height = +svg.attr("height") - margin.top - margin.bottom,
    height2 = +svg.attr("height") - margin2.top - margin2.bottom;
  var svg2 = d3.select(".svg2");

  var x = d3.scaleUtc().domain(d3.extent(data.dates)).range([0, width]),
    x2 = d3.scaleUtc().domain(d3.extent(data.dates)).range([0, width]),
    y = d3.scaleLinear().range([height, 0]),
    y2 = d3.scaleLinear().range([height2, 0]);

  var xAxis = d3.axisBottom(x),
    xAxis2 = d3.axisBottom(x2),
    yAxis = d3.axisLeft(y);
  var brush = d3
    .brushX()
    .extent([
      [0, 0],
      [width, height2],
    ])
    .on("brush end", brushed);

  var zoom = d3
    .zoom()
    .scaleExtent([1, Infinity])
    .translateExtent([
      [0, 0],
      [width, height],
    ])
    .extent([
      [0, 0],
      [width, height],
    ])
    .on("zoom", zoomed);

  var line = d3
    .line()
    .defined((d) => !isNaN(d))
    .x((d, i) => x(data.dates[i]))
    .y((d) => y(d));

  var line2 = d3
    .line()
    .defined((d) => !isNaN(d))
    .x((d, i) => x2(data.dates[i]))
    .y((d) => y2(d));

  svg
    .append("defs")
    .append("clipPath")
    .attr("id", "clip")
    .append("rect")
    .attr("width", width)
    .attr("height", height);

  var focus = svg
    .append("g")
    .attr("class", "focus")
    .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

  var context = svg
    .append("g")
    .attr("class", "context")
    .attr("transform", "translate(" + margin2.left + "," + margin2.top + ")");

  x.domain(d3.extent(data.dates));
  y.domain([
    d3.min(data.series, (d) => d3.min(d.values)),
    d3.max(data.series, (d) => d3.max(d.values)),
  ]).nice();

  x2.domain(x.domain());
  y2.domain(y.domain());

  var path1 = focus
    .append("path")
    .datum(data.series[0].values)
    .attr("class", "line1 line")
    .attr("d", line);
  var path2 = focus
    .append("path")
    .datum(data.series[1].values)
    .attr("class", "line2 line")
    .attr("d", line);
  var path3 = focus
    .append("path")
    .datum(data.series[2].values)
    .attr("class", "line3 line")
    .attr("d", line);
    var path4 = focus
    .append("path")
    .datum(data.series[3].values)
    .attr("class", "line4 line")
    .attr("d", line);
    var path5 = focus
    .append("path")
    .datum(data.series[4].values)
    .attr("class", "line5 line")
    .attr("d", line);
  focus
    .append("g")
    .attr("class", "axis axis--x")
    .attr("transform", "translate(0," + height + ")")
    .call(xAxis);

  svg2
    .append("g")
    .attr("class", "axis axis--y")
    .attr("transform", "translate(" + 49 + "," + margin.top + ")")
    .call(yAxis);

  
  context
    .append("path")
    .datum(data.series[0].values)
    .attr("class", "line1 line")
    .attr("d", line2);
  context
    .append("path")
    .datum(data.series[1].values)
    .attr("class", "line2 line")
    .attr("d", line2);
  context
    .append("path")
    .datum(data.series[2].values)
    .attr("class", "line3 line")
    .attr("d", line2);
    context
    .append("path")
    .datum(data.series[3].values)
    .attr("class", "line4 line")
    .attr("d", line2);
    context
    .append("path")
    .datum(data.series[4].values)
    .attr("class", "line5 line")
    .attr("d", line2);

  context
    .append("g")
    .attr("class", "axis axis--x")
    .attr("transform", "translate(0," + height2 + ")")
    .call(xAxis2);

  context
    .append("g")
    .attr("class", "brush")
    .call(brush)
    .call(brush.move, x.range());

  svg
    .append("rect")
    .attr("class", "zoom")
    .attr("width", width)
    .attr("height", height)
    .attr("transform", "translate(" + margin.left + "," + margin.top + ")")
    .call(zoom);

  function brushed() {
    if (d3.event.sourceEvent && d3.event.sourceEvent.type === "zoom") return; // ignore brush-by-zoom
    var s = d3.event.selection || x2.range();
    x.domain(s.map(x2.invert, x2));
    focus.select(".line1").attr("d", line);
    focus.select(".line2").attr("d", line);
    focus.select(".line3").attr("d", line);
    focus.select(".line4").attr("d", line);
    focus.select(".line5").attr("d", line);

    focus.select(".axis--x").call(xAxis);
    svg
      .select(".zoom")
      .call(
        zoom.transform,
        d3.zoomIdentity.scale(width / (s[1] - s[0])).translate(-s[0], 0)
      );
  }

  function zoomed() {
    if (d3.event.sourceEvent && d3.event.sourceEvent.type === "brush") return; // ignore zoom-by-brush
    var t = d3.event.transform;
    x.domain(t.rescaleX(x2).domain());
    focus.select(".line1").attr("d", line);
    focus.select(".line2").attr("d", line);
    focus.select(".line3").attr("d", line);
    focus.select(".line4").attr("d", line);
    focus.select(".line5").attr("d", line);

    focus.select(".axis--x").call(xAxis);
    context.select(".brush").call(brush.move, x.range().map(t.invertX, t));
  }

  function mouseover(name, i) {
    switch (i) {
      case 0:
        d3.selectAll("path.line").classed("fadeout", true);
        d3.selectAll("path.line1")
          .classed("highlight", true)
          .classed("fadeout", false);
        break;
      case 1:
        d3.selectAll("path.line").classed("fadeout", true);
        d3.selectAll("path.line2")
          .classed("highlight", true)
          .classed("fadeout", false);
        break;
      case 2:
        d3.selectAll("path.line").classed("fadeout", true);
        d3.selectAll("path.line3")
          .classed("highlight", true)
          .classed("fadeout", false);
          break;
      case 3:
            d3.selectAll("path.line").classed("fadeout", true);
            d3.selectAll("path.line4")
              .classed("highlight", true)
              .classed("fadeout", false);
              break;
      case 4:
                d3.selectAll("path.line").classed("fadeout", true);
                d3.selectAll("path.line5")
                  .classed("highlight", true)
                  .classed("fadeout", false);
        break;
    }
  }

  function mouseout(name) {
    d3.selectAll("path.line")
      .classed("highlight", false)
      .classed("fadeout", false);
  }

  var legend = svg
    .append("g")
    .attr("class", "legend")
    .attr(
      "transform",
      "translate(" +
        700+
        "," +
        (+svg.attr("height") - margin3.bottom + 20) +
        ")"
    );
   

  data.series.map((d, i) => {
    let list_={
      'song1':songs[0],
      'song2':songs[1],
      'song3':songs[2],
      'song4':songs[3],
      'song5':songs[4],
      'var1':vars[0],
      'var2':vars[1],
      'var3':vars[2],
      'var4':vars[3],
      'var5':vars[4],
    }
    let legendItem = svg
      .selectAll(".legend")
      .datum(list_[d.name])
      .append("g")
      .attr("transform", function (d) {
        return "translate(0," + i * 13 + ")";
      })
      .attr("class", "legend" + i + "")
      .on("mouseover", (d) => mouseover(d, i))
      .on("touchstart", (d) => mouseover(d, i))
      .on("mouseout", mouseout)
      .on("touchend", mouseout);

    legendItem
      .append("rect")
      .attr("width", 12)
      .attr("height", 12)
      .attr("x", 40)
      .attr("y", -20)
      // .attr("position",relative)
      // .attr("zIndex",99)
      .attr("fill", function (d) {
        let color;
        switch (i) {
          case 0:
            color = "#488F31";
            break;
          case 1:
            color = "#A5A73F";
            break;
          case 2:
            color = "#F4BD6A";
            break;
          case 3:
              color = "#EB8050";
              break;
          case 4:
                color = "#D43D51";
            break;
        }
        return color;
      });

    legendItem
      .append("text")
      .attr("x", 60)
      .attr("y", -10)
      .text(function (d) {
        return d;
      });
  });
  if (fisheye) {
    var fisheye = d3.fisheye.circular().radius(200).distortion(2);

    svg.on("mousemove", function () {
      fisheye.focus(d3.mouse(this));
    });

    svg.on("mousemove", function () {
      fisheye.focus(d3.mouse(this));

      path1.attr("d", function (d) {
        let line1 = line(d).split(",");
        line1.slice(1, line1.length).forEach(function (p, i) {
          let x_y = p.split("L");
          let x_y_fish = fisheye({
            x: parseFloat(x_y[1]),
            y: parseFloat(x_y[0]),
          });
          x_y = [x_y_fish.y.toString(), x_y_fish.x.toString()].join("L");
          if (i == line1.length - 2) {
            x_y = x_y_fish.x.toString();
          }
          line1[i + 1] = x_y;
        });
        line1 = line1.join(",");
        return line1;
      });

      path2.attr("d", function (d) {
        let line1 = line(d).split(",");
        line1.slice(1, line1.length).forEach(function (p, i) {
          let x_y = p.split("L");
          let x_y_fish = fisheye({
            x: parseFloat(x_y[1]),
            y: parseFloat(x_y[0]),
          });
          x_y = [x_y_fish.y.toString(), x_y_fish.x.toString()].join("L");
          if (i == line1.length - 2) {
            x_y = x_y_fish.x.toString();
          }
          line1[i + 1] = x_y;
        });
        line1 = line1.join(",");
        console.log(line1);
        return line1;
      });

      path3.attr("d", function (d) {
        let line1 = line(d).split(",");
        line1.slice(1, line1.length).forEach(function (p, i) {
          let x_y = p.split("L");
          let x_y_fish = fisheye({
            x: parseFloat(x_y[1]),
            y: parseFloat(x_y[0]),
          });
          x_y = [x_y_fish.y.toString(), x_y_fish.x.toString()].join("L");
          if (i == line1.length - 2) {
            x_y = x_y_fish.x.toString();
          }
          line1[i + 1] = x_y;
        });
        line1 = line1.join(",");
        return line1;
      });

      path4.attr("d", function (d) {
        let line1 = line(d).split(",");
        line1.slice(1, line1.length).forEach(function (p, i) {
          let x_y = p.split("L");
          let x_y_fish = fisheye({
            x: parseFloat(x_y[1]),
            y: parseFloat(x_y[0]),
          });
          x_y = [x_y_fish.y.toString(), x_y_fish.x.toString()].join("L");
          if (i == line1.length - 2) {
            x_y = x_y_fish.x.toString();
          }
          line1[i + 1] = x_y;
        });
        line1 = line1.join(",");
        return line1;
      });

      path5.attr("d", function (d) {
        let line1 = line(d).split(",");
        line1.slice(1, line1.length).forEach(function (p, i) {
          let x_y = p.split("L");
          let x_y_fish = fisheye({
            x: parseFloat(x_y[1]),
            y: parseFloat(x_y[0]),
          });
          x_y = [x_y_fish.y.toString(), x_y_fish.x.toString()].join("L");
          if (i == line1.length - 2) {
            x_y = x_y_fish.x.toString();
          }
          line1[i + 1] = x_y;
        });
        line1 = line1.join(",");
        return line1;
      });
    });
  }
}

var data = get_data(1);
draw_diagram(data, document.getElementById("fish").checked);
