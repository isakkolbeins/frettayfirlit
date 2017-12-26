/*
  var mbl = document.querySelector('.MBL');
  var visir = document.querySelector('.VISIR');
  var ruv = document.querySelector('.RUV');
*/

var hedlines = [];

getMBL();
getVISIR();
console.log(hedlines);
//var f = getVISIR();
//console.log(f);

function getMBL() {

  var request = require('request');
  var cheerio = require('cheerio');
  //var hedlines= [];
  request('http://www.mbl.is/frettir/', function(err, resp, body){
    if(!err && resp.statusCode == 200){
      console.log('running MBL');
      let $ = cheerio.load(body);
      $('a.fgc').each(function(i, val){
        var hl = $(this).attr('title');
        var link = $(this).attr('href');
        if (typeof hl !== typeof undefined && hl !== false) {
          window.hedlines.push(hl , 'http://www.mbl.is/frettir/' + link);
        }
      });
      // console.log(hedlines.length);
      //addToHTML(hedlines, mbl);
    }
  });
}
/*
function addToHTML(hl, site){
  for (var i = 0; i < hl.length; i++) {
    //var link = document.createElement('a');
    site.appendChild(hl[i]);
  }

}
*/


function getVISIR() {
  var request = require('request');
  var cheerio = require('cheerio');
  //var hedlines= [];
  request('http://www.visir.is/', function(err, resp, body){
    if(!err && resp.statusCode == 200){
      console.log('running VISIR');
      let $ = cheerio.load(body);
      $('.article-item__title a').each(function(i, val){
        var link = $(this).attr('href');
        var hl = $(this).text();

        if (hl != ''
            && link.startsWith('/g/')
            && !window.hedlines.includes('http://www.visir.is' + link)) {

          // Safnar - 0 fyrirsögn - 1 link osfv.
          window.hedlines.push(hl.trim(),'http://www.visir.is' + link);
        }

      });
    }
  });


}
