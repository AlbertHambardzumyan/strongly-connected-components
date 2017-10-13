$(document).ready(function () {
  var circleFigure1 = [80, 20, 140, 50, 90, 90, 200, 120, 40, 150, 140, 160, 250, 40, 300, 80, 370, 20, 350, 150]

  /** adding new circles and texts for figure_1 */
  var i = 0
  for (var j = 1; j <= 10; j++) {
    d3.select('#figure_1_svg').append('circle').attr('id', 'circleFigure1_' + j).attr('cx', circleFigure1[i++]).attr('cy', circleFigure1[i]).attr('r', 10).style({
      'fill': '#D62728',
      'stroke': '#951B1C',
      'stroke-width': '2'
    })
    d3.select('#figure_1_svg').append('text').attr('id', 'textFigure1_' + j).attr('x', circleFigure1[(i - 1)] - 4).attr('y', circleFigure1[i] + 4).text(j)
    i++
  }
  /** adding new paths */
  /* for(j = 1; j <= 5; j++){
       d3.select('#figure_1_svg').append("path").attr("id", "newPath" + j).attr("d", newPath[j-1]).style({"marker-end" : "url(#Triangle)", "stroke" : "black", "stroke-width" : "2", "fill" : "none"});
   }*/
})

/**<circle id="circle0" cx="80" cy="20" r="12" fill="#1F77B4" stroke="#15537D" stroke-width="2" />
 <text x="76" y="24">0</text>
 <circle id="circle1" cx="140" cy="50" r="12" fill="#FF7F0E" stroke="#B25809" stroke-width="2" />
 <text x="136" y="54">1</text>
 <circle id="circle2" cx="90" cy="90" r="12" fill="#2CA02C" stroke="#217C21" stroke-width="2" />
 <text x="86" y="94">2</text>
 <circle id="circle3" cx="200" cy="120" r="12" fill="#D62728" stroke="#951B1C" stroke-width="2" />
 <text x="196" y="124">3</text>
 <circle id="circle4" cx="40" cy="150" r="12" fill="#9467BD" stroke="#674884" stroke-width="2" />
 <text x="36" y="154">4</text>
 <circle id="circle5" cx="140" cy="160" r="12" fill="#8C564B" stroke="#623C34" stroke-width="2" />
 <text x="136" y="164">5</text>
 <circle id="circle6" cx="250" cy="40" r="12" fill="#E377C2" stroke="#AF5B95" stroke-width="2" />
 <text x="246" y="44">6</text>
 <circle id="circle7" cx="300" cy="80" r="12" fill="#7F7F7F" stroke="#585858" stroke-width="2" />
 <text x="296" y="84">7</text>
 <circle id="circle8" cx="370" cy="20" r="12" fill="#BCBD22" stroke="#8D8E18" stroke-width="2" />
 <text x="366" y="24">8</text>
 <circle id="circle9" cx="350" cy="150" r="12" fill="#17BECF" stroke="#108590" stroke-width="2" />
 <text x="346" y="154">9</text>

 <line x1="91" y1="24" x2="129" y2="46" stroke = "black" stroke-width="2"/>
 <line x1="80" y1="33" x2="82" y2="80" stroke = "black" stroke-width="2"/>
 <line x1="149" y1="59" x2="192" y2="112" stroke = "black" stroke-width="2"/>
 <line x1="133" y1="60" x2="101" y2="84" stroke = "black" stroke-width="2"/>
 <line x1="102" y1="95" x2="187" y2="120" stroke = "black" stroke-width="2"/>
 <line x1="53" y1="150" x2="127" y2="160" stroke = "black" stroke-width="2"/>
 <line x1="259" y1="49" x2="289" y2="73" stroke = "black" stroke-width="2"/>
 <line x1="263" y1="39" x2="357" y2="20" stroke = "black" stroke-width="2"/>
 <line x1="367" y1="32" x2="354" y2="138" stroke = "black" stroke-width="2"/>
 */