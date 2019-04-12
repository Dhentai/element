import axios from 'axios';
import { FHMapServer } from 'examples/customOption';
import loadScript from './loadScript';

export default new Promise((res) => {
  axios.get(FHMapServer, {timeout: 1000}).then(({data}) => {
    const reg = /write\('(.*)'\);$/;
    const reg1 = /<script[^>]*?>(.*?)<\/script>/g;
    const reg2 = /<script[^>]*?src="(.+?)"><\/script>/;
    const reg3 = /<script[^>]*?>(.+?)<\/script>/;
    const arr = data.match(reg)[1].match(reg1);
    // console.log(reg1.exec(data.match(reg)[1]));

    let nowIndex = 0;
    (function stepLoadScript() {
      if (nowIndex === arr.length - 1) { // 递归出口
        res();
        return;
      }
      if (arr[nowIndex]) {
        const src = reg2.exec(arr[nowIndex]);
        const content = reg3.exec(arr[nowIndex]);
        nowIndex++;
        if (src) {
          loadScript({url: src[1]}).then(() => stepLoadScript());
        } else if (content) {
          loadScript({content: content[1]}).then(() => stepLoadScript());
        }
      }
    })();
  });
});
