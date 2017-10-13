$(document).ready(function () {
  var click
  var arr = new Array()
  var selected = true

  var refer
  var previousPage = 'overview'
  var func1 = function (a) {
    $('.page').css('display', 'none')
    $('#' + a + '1').css('display', 'inline')
    $('#menuTab a').css('opacity', '.6')
    $('#' + a).css('opacity', '1')
    document.getElementById('back').style.visibility = 'visible'
  }

  /** from overview to resources**/
  $('#overview1 a.ref').click(function (event) {
    refer = event.currentTarget.id
    var j = 'resources'
    selected = false
    click = j
    previousPage = 'overview'

    func1(j)
  })

  /** from complexity  to overview**/
  $('#complexity1 a.toOverview').click(function (event) {
    refer = event.currentTarget.id
    var j = 'overview'
    selected = false
    click = j
    previousPage = 'complexity'

    func1(j)
  })

  /** from complexity  to resources**/
  $('#complexity1 a.ref').click(function (event) {
    refer = event.currentTarget.id
    var j = 'resources'
    selected = false
    click = j
    previousPage = 'complexity'

    func1(j)
  })

  /** from applications  to resources**/
  $('#applications1 a.ref').click(function (event) {
    refer = event.currentTarget.id
    var j = 'resources'
    selected = false
    click = j
    previousPage = 'applications'

    func1(j)
  })

  /** go back*/
  $('#back').click(function () {
    func1(previousPage)

    this.style.visibility = 'hidden'
    location.href = '#' + refer
  })

  $('#menuTab a').click(function (event) {
    var j = event.currentTarget.id
    selected = false
    click = j

    // if(j == "try_it_out")
    //  myGraph();
    $('.page').css('display', 'none')
    $('#' + j + '1').css('display', 'inline')
    $('#menuTab a').css('opacity', '.6')
    $('#' + j).css('opacity', '1')
  })

  $('#menuTab a').mouseenter(function (event) {
    var j = event.currentTarget.id
    $('#' + j).css('opacity', '1').mouseleave(function (event) {
      var j = event.currentTarget.id
      if (j == 'overview' && selected) {
      }
      else if (click != j) {
        $('#' + j).css('opacity', '0.6')
      }
    })

  })

  $('#overview1 li a').click(function (event) {
    var j = event.currentTarget.id
    click = j
    $('#' + j).css('opacity', '1')
    arr[j] = true
  })

  $('#overview1 li a').mouseenter(function (event) {
    var j = event.currentTarget.id
    $('#' + j).css('opacity', '1').mouseleave(function (event) {
      var j = event.currentTarget.id
      if (!arr[j]) {
        $('#' + j).css('opacity', '0.6')
      }
    })

  })
})