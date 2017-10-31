// ==UserScript==
// @name         Quick exit upwork filter
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  immediately exit upwork selection if requirements aren't met
// @author       Dustin Byers
// @match        https://www.upwork.com/ab/*
// @grant        none
// ==/UserScript==

;(function() {
  console.log('running script')

  let test = true
  let element
  document.addEventListener('click', beans)

  function beans(e) {
    element = e.path[0].parentElement
    window.setTimeout(handleClick, 2000)
  }

  function handleClick() {
    console.log('CLICK')
    console.log('event: ', element)
    let noGood = document.getElementsByClassName(
      'text-danger glyphicon vertical-align-middle air-icon-exclamation-circle'
    )
    console.log('length: ', noGood.length)

    if (document.hasChildNodes(noGood) && noGood.length > 0) {
      console.log('hit click exit')
      let exit = document.getElementsByClassName('close-overlay-button m-0')[0]

      exit.click()
      element.style.display = 'none'
    }
  }
})()
