/*
  var mbl = document.querySelector('.MBL');
  var visir = document.querySelector('.VISIR');
  var ruv = document.querySelector('.RUV');
*/



// getMBL();
getVISIR();

function getMBL() {

  var request = require('request');
  var cheerio = require('cheerio');
  var hedlines= [];
  request('http://www.mbl.is/frettir/', function(err, resp, body){
    if(!err && resp.statusCode == 200){
      //console.log('running');
      let $ = cheerio.load(body);
      $('a.fgc').each(function(i, val){
        var hl = $(this).attr('title');
        if (typeof hl !== typeof undefined && hl !== false) {
          //hedlines.push(this);
          console.log(hl);
          console.log($(this).attr('href'));
          hedlines.push(hl);

        }
      });
      // console.log(hedlines);
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
  var hedlines= [];
  request('http://www.visir.is/', function(err, resp, body){
    if(!err && resp.statusCode == 200){
      //console.log('running');
      let $ = cheerio.load(body);
      $('.article-item__title').each(function(i, val){


        var link = $(this).attr('href');
        // console.log(link);
        var hl = $(this).text();
        if (hl != '') {

          //hedlines.push(this);
          hedlines.push(hl.trim());
        }

      });
      console.log(hedlines);
      console.log(hedlines.length);
      //addToHTML(hedlines, mbl);
    }
  });









}
