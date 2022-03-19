function axios(url,opts,data){
  return new Promise((resolve, reject) =>{
    let xhr = new XMLHttpRequest();
    opts = opts ? opts : {};
    let method = opts.method || 'GET';
    xhr.open(method, url, true);// 第三个参数表示同步还是异步，true为异步，默认异步
    xhr.timeout = opts.timeout || 6000;
    xhr.onreadystatechange = function () {
      if(xhr.readyState == 4){
        if(xhr.status == 200){
          console.log('xhr',xhr)
          resolve(xhr.responseText)
        }else{
          reject(xhr.responseText)
        }
      }
    }
    let postData = method === 'POST' ? JSON.stringify(data) : null;
    let headers = opts.headers || {};
    // 处理请求头
    for(let key in headers){
      xhr.setRequestHeader(key,headers[key])
    }
    xhr.send(postData);
  })
}

// let url = '';
let data = {}
// let opts = {
  // method:'POST',
  // headers:{'Content-Type': 'application/json'}
// }


async function request(url,opts){
  opts = opts ? opts : {};
  let data = await axios(url)
  // debugger;
  console.log(data);
}

request(url);