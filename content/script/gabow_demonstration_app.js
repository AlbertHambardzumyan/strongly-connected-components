$(document).ready(function () {
  var i = 0, y = 0, timer
  var arrCircle = [1, 2, 3, 4, 5, 6]

  var svg = $('#gabow_demonstration')

  var textAndId_forDfs = ['A', 'B', 'C', 'D', 'E', 'F']
  var textAndId_forBoundary = [0, 1, 2, 4, 4, 5]

  var text_start = true
  var textDfs = true

  svg.mouseenter(function () {

    /** putting first text */
    if (text_start) {
      d3.select('#gabow_demonstration').append('text').attr('id', 'textStart').attr('x', 280).attr('y', 20).text('Started...')
      text_start = false
    }

    timer = setInterval(getCircle, 3000)

    function getCircle () {

      /** putting second text */
      if (textDfs) {
        svg.find('#textStart').remove()
        d3.select('#gabow_demonstration').append('text').attr('id', 'textDfs').attr('x', 280).attr('y', 20).text('DFS...')
        textDfs = false
      }

      /** putting last text and clearing */
      if (i == 12) {
        svg.find('#textDfs').remove()
        d3.select('#gabow_demonstration').append('text').attr('id', 'done').attr('x', 280).attr('y', 20).text('Done...')
        clearInterval(timer)
      }

      /**cases for drawing SCC**/
      if (i == 2) {
        d3.select('#gabow_demonstration').append('path').attr('id', 'newPath' + 'SCC1').attr('d', 'M135,60a25,55 0 1,0 50,0a25,55 0 1,0 -50,0').style({
          'stroke': 'red',
          'stroke-width': '1',
          'fill': 'none',
          'stroke-dasharray': '3,3'
        })
        svg.find('#Boundary1').remove()
      }
      if (i == 4) {
        svg.find('#newPathSCC1').remove()
        svg.find('#Boundary2').remove()
        d3.select('#gabow_demonstration').append('path').attr('id', 'newPath' + 'SCC1').attr('d', 'M135,90a25,80 0 1,0 50,0a25,80 0 1,0 -50,0').style({
          'stroke': 'red',
          'stroke-width': '1',
          'fill': 'none',
          'stroke-dasharray': '3,3'
        })
      }
      if (i == 6) {
        svg.find('#DFS3').remove()
        svg.find('#Boundary3').remove()
        d3.select('#gabow_demonstration').append('path').attr('id', 'newPath' + 'SCC2').attr('d', 'M81,210a19,19 0 1,0 38,0a19,19 0 1,0 -38,0').style({
          'stroke': 'red',
          'stroke-width': '1',
          'fill': 'none',
          'stroke-dasharray': '3,3'
        })
        svg.find('#gabow_circle4').attr({'fill': '#2CA02C', 'stroke': '#217C21'})
      }
      if (i == 9) {
        svg.find('#Boundary5').remove()
        d3.select('#gabow_demonstration').append('path').attr('id', 'newPath' + 'SCC3').attr('d', 'M195,240a25,55 0 1,0 50,0a25,55 0 1,0 -50,0').style({
          'stroke': 'red',
          'stroke-width': '1',
          'fill': 'none',
          'stroke-dasharray': '3,3'
        })
      }
      if (i == 10) {
        svg.find('#DFS4').remove()
        svg.find('#DFS5').remove()
        svg.find('#Boundary4').remove()
        svg.find('#gabow_circle5').attr({'fill': '#2CA02C', 'stroke': '#217C21'})
        svg.find('#gabow_circle6').attr({'fill': '#2CA02C', 'stroke': '#217C21'})
      }
      if (i == 11) {
        svg.find('#DFS0').remove()
        svg.find('#DFS1').remove()
        svg.find('#DFS2').remove()
        svg.find('#Boundary0').remove()
        svg.find('#gabow_circle1').attr({'fill': '#2CA02C', 'stroke': '#217C21'})
        svg.find('#gabow_circle2').attr({'fill': '#2CA02C', 'stroke': '#217C21'})
        svg.find('#gabow_circle3').attr({'fill': '#2CA02C', 'stroke': '#217C21'})
      }

      /**changing colors*/
      if (i != 2 && i != 4 && i != 6) {

        svg.find('#gabow_circle' + arrCircle[y]).attr({'fill': '#D62728', 'stroke': '#951B1C'})
        d3.select('#gabow_demonstration').append('text').attr('id', 'DFS' + y).attr('x', 380 + 20 * y).attr('y', 150).text(textAndId_forDfs[y])
        d3.select('#gabow_demonstration').append('text').attr('id', 'Boundary' + y).attr('x', 380 + 20 * y).attr('y', 170).text(textAndId_forBoundary[y])
        i++
        y++

      }
      else {
        i++
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
