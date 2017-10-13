$(document).ready(function () {
  var i = 0, timer
  var arrCircle = [1, 2, 6, 7, 7, 6, 5, 5, 3, 4, 8, 8, 4, 3, 2, 1, 1, 1, 5, 2, 2, 5, 1, 1, 3, 4, 8, 8, 4, 3, 3, 3, 3, 6, 7, 7, 6, 6]
  var arrFill = ['#2CA02C', '#2CA02C', '#2CA02C', '#2CA02C', '#D62728', '#D62728', '#2CA02C', '#D62728', '#2CA02C', '#2CA02C', '#2CA02C', '#D62728', '#D62728', '#D62728', '#D62728', '#D62728', '#1F77B4', '#2CA02C', '#2CA02C', '#2CA02C', '#D62728', '#D62728', '#D62728', '#D62728', '#2CA02C', '#2CA02C', '#2CA02C', '#D62728', '#D62728', '#D62728', '#D62728', '#D62728', '#D62728', '#2CA02C', '#2CA02C', '#D62728', '#D62728', '#D62728']
  var arrStroke = ['#217C21', '#217C21', '#217C21', '#217C21', '#951B1C', '#951B1C', '#217C21', '#951B1C', '#217C21', '#217C21', '#217C21', '#951B1C', '#951B1C', '#951B1C', '#951B1C', '#951B1C', '#15537D', '#217C21', '#217C21', '#217C21', '#951B1C', '#951B1C', '#951B1C', '#951B1C', '#217C21', '#217C21', '#217C21', '#951B1C', '#951B1C', '#951B1C', '#951B1C', '#951B1C', '#951B1C', '#217C21', '#217C21', '#951B1C', '#951B1C', '#951B1C']

  var newLine = [147, 60, 83, 60, 247, 60, 183, 60, 273, 60, 337, 60, 60, 73, 60, 137, 147, 160, 83, 160, 69, 151, 144, 76, 260, 147, 260, 83, 273, 160, 337, 160, 160, 147, 160, 83]
  var newPath = ['M350 51 Q 315 30 279 47', 'M367 149 Q 385 115 371 80', 'M354 72 Q 335 105 350 139', 'M171 167 Q 205 185 239 168', 'M248 155 Q 215 130 180 150']

  var svg = $('#kosaraju_demonstration')

  var stackCheck = new Array()

  var y = 0
  var textAndId = [7, 6, 5, 8, 4, 3, 2, 1]

  var pass = 1

  var text_start = true
  var textDfs1 = true
  var textDfs2 = true

  svg.mouseenter(function () {

    /** putting first text */
    if (text_start) {
      d3.select('#kosaraju_demonstration').append('text').attr('id', 'textStart').attr('x', 190).attr('y', 20).text('Started...')
      text_start = false
    }

    /** 1-2-6-7  -5  -3-4-8
     7-6  -5      -8-4-3-2-1 */
    /** 1-5-2     3-4-8     6-7
     2-5-1     8-4-3   7-6 */
    timer = setInterval(getCircle, 3000)

    function getCircle () {

      /** putting second text */
      if (textDfs1) {
        svg.find('#textStart').remove()
        d3.select('#kosaraju_demonstration').append('text').attr('id', 'textDfs1').attr('x', 185).attr('y', 20).text('First DFS...')
        textDfs1 = false
      }

      /** putting fourth text */
      if (textDfs2 && pass == 2) {
        svg.find('#reverse').remove()
        d3.select('#kosaraju_demonstration').append('text').attr('id', 'textDfs2').attr('x', 180).attr('y', 20).text('Second DFS...')
        textDfs2 = false
      }

      /** putting fifth text and clearing */
      if (i == 38) {
        svg.find('#textDfs2').remove()
        d3.select('#kosaraju_demonstration').append('text').attr('id', 'done').attr('x', 190).attr('y', 20).text('Done...')
        clearInterval(timer)
      }

      /**checking whether the first dfs finished*/
      var checkSecondPass = true
      for (j = 1; j <= 8; j++) {
        svgElement = svg.find('#circle' + j)
        if (svgElement.attr('fill') != '#D62728') {
          checkSecondPass = false
        }
      }
      /** if so, prepare for second dfs*/
      if (checkSecondPass && pass == 1) {
        second()
        pass++
      }

      /**  cases for deleting from stack*/
      if (pass == 2 && i == 17) {
        svg.find('#circleStack1').remove()
        svg.find('#textStack1').remove()
        /**another way, just overwriting with white  d3.select('#kosaraju_demonstration').append("circle").attr("cx", 450).attr("cy", 230 - 7 * 25).attr("r", 10).style({"fill" : "#ffffff", "stroke" : "#ffffff", "stroke-width" : "3"});  */
      }
      else if (pass == 2 && i == 23) {
        svg.find('#circleStack2').remove()
        svg.find('#textStack2').remove()
      }
      else if (pass == 2 && i == 24) {
        svg.find('#circleStack3').remove()
        svg.find('#textStack3').remove()
      }
      else if (pass == 2 && i == 30) {
        svg.find('#circleStack4').remove()
        svg.find('#textStack4').remove()
      }
      else if (pass == 2 && i == 31) {
        svg.find('#circleStack8').remove()
        svg.find('#textStack8').remove()
      }
      else if (pass == 2 && i == 32) {
        svg.find('#circleStack5').remove()
        svg.find('#textStack5').remove()
      }
      else if (pass == 2 && i == 33) {
        svg.find('#circleStack6').remove()
        svg.find('#textStack6').remove()
      }
      else if (pass == 2 && i == 37) {
        svg.find('#circleStack7').remove()
        svg.find('#textStack7').remove()
      }

      /**cases for drawing SCC**/
      if (pass == 2 && i == 22)
        d3.select('#kosaraju_demonstration').append('path').attr('id', 'newPath' + 'SCC1').attr('d', 'M35 35 L205 35 L35 205 Z').style({
          'stroke': 'red',
          'stroke-width': '1',
          'fill': 'none',
          'stroke-dasharray': '3,3'
        })
      if (pass == 2 && i == 29)
        d3.select('#kosaraju_demonstration').append('path').attr('id', 'newPath' + 'SCC1').attr('d', 'M215 35 L385 35 L385 205 Z').style({
          'stroke': 'red',
          'stroke-width': '1',
          'fill': 'none',
          'stroke-dasharray': '3,3'
        })
      if (pass == 2 && i == 36)
        d3.select('#kosaraju_demonstration').append('path').attr('id', 'newPath' + 'SCC1').attr('d', 'M130,160a80,35 0 1,0 160,0a80,35 0 1,0 -160,0').style({
          'stroke': 'red',
          'stroke-width': '1',
          'fill': 'none',
          'stroke-dasharray': '3,3'
        })

      /**changing colors*/
      svg.find('#circle' + arrCircle[i]).attr({'fill': arrFill[i], 'stroke': arrStroke[i]})
      i++

      /**filling stack*/
      for (var j = 1; j <= 8; j++) {
        var svgElement = svg.find('#circle' + j)
        if ((svgElement.attr('fill') == '#D62728') && (pass == 1)) {
          if (stackCheck[j] != 1) {
            d3.select('#kosaraju_demonstration').append('circle').attr('id', 'circleStack' + textAndId[y]).attr('cx', 450).attr('cy', 230 - y * 25).attr('r', 10).style({
              'fill': '#D62728',
              'stroke': '#951B1C',
              'stroke-width': '2'
            })
            d3.select('#kosaraju_demonstration').append('text').attr('id', 'textStack' + textAndId[y]).attr('x', 446).attr('y', 230 - y * 25 + 4).text(textAndId[y])
            stackCheck[j] = 1
            y++
          }
        }
      }

    }

    /** second dfs preparation*/
    var second = function () {

      /** putting second text */
      svg.find('#textDfs1').remove()
      d3.select('#kosaraju_demonstration').append('text').attr('id', 'reverse').attr('x', 185).attr('y', 20).text('Reversing...')

      /** setting all circles blue */
      for (var j = 1; j <= 8; j++) {
        svg.find('#circle' + j).attr({'fill': '#1F77B4', 'stroke': '#15537D'})
      }

      /** deleting old lines */
      for (j = 1; j <= 9; j++) {
        svg.find('#line' + j).remove()
      }

      /** deleting old paths */
      for (j = 1; j <= 5; j++) {
        svg.find('#path' + j).remove()
      }

      /** adding new lines */
      var temp = 0
      for (j = 1; j <= 9; j++) {
        d3.select('#kosaraju_demonstration').append('line').attr('id', 'newLine' + j).attr('x1', newLine[temp++]).attr('y1', newLine[temp++]).attr('x2', newLine[temp++]).attr('y2', newLine[temp++]).style({
          'marker-end': 'url(#Triangle)',
          'stroke': 'black',
          'stroke-width': '2'
        })
      }

      /** adding new paths */
      for (j = 1; j <= 5; j++) {
        d3.select('#kosaraju_demonstration').append('path').attr('id', 'newPath' + j).attr('d', newPath[j - 1]).style({
          'marker-end': 'url(#Triangle)',
          'stroke': 'black',
          'stroke-width': '2',
          'fill': 'none'
        })

      }
    }

  })

  /*svg.mouseleave(function(){
      clearTimeout(timer);
      i = 0;
  });*/
})
