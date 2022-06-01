const moment = require('moment')

function extractDate(str) {
const re = /(0[1-9]|1[0-2])(0[1-9]|[1-2][0-9]|3[0-1])[0-9]{4}/g;
  
    const matchArr = [...str.matchAll(re)];
  
    for (let i = 0; i < matchArr.length; i++) {
      const dateStr = matchArr[i][0];
  
      if(moment(dateStr, "MMDDYYYY", true).isValid()) {
        console.log("Extracted date is: " + dateStr);
      }
    }
  }  
  extractDate("Hdjsh asd2324234jghjsd hjsdg sdhk 12212021 idf32432 32423 d34234jh dfh");