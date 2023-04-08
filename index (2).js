const fetch = require('node-fetch');
const cheerio = require('cheerio');
// إنشاء كائن Date
const currentDate = new Date();
// الحصول على التاريخ الحالي في صيغة النص المطلوبة
const formattedDate = currentDate.toLocaleString('ar-SA');
async function ImageUrl(Url){
// تحديث القيمة الخاصة بـ "ui" بقيمة التاريخ الحالي
const data = "[" + [24, 424, 918, "true", "", "", formattedDate] + "]";

const apiUrl = 'https://postimages.org/json/rr';
const params = `token=61aa06d6116f7331ad7b2ba9c7fb707ec9b182e8&upload_session=H3v0hNqcVmaMnxV3QIiEiX8VeBnPZu7Z&url=${Url}&numfiles=1&gallery=&ui=${data}&optsize=0&expire=0&session_upload=1680912064559`;

let response = await fetch(apiUrl, {
    method: 'POST',
    headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
    },
    body: params
})
let url =await response.json()
url = url.url

  console.log(url)

let res = await fetch(url)
  let body = await res.text()
    const $ = cheerio.load(body);
    const links = $('#code_direct')
   return links.attr('value')
    
  

}
module.exports = ImageUrl;