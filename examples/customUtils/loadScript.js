export default function(option) {
  return new Promise((res, rej) => {
    option = option || {};
    const script = document.createElement('script');
    if (script.readyState) {
      script.onreadystatechange = function() {
        if (script.readyState === 'loaded' || script.readyState === 'complete') {
          script.onreadystatechange = null; // 避免重复执行
          typeof (option.callback) === 'function' && option.callback();
          res();
        }
      };
    } else {
      script.onload = function() {
        typeof (option.callback) === 'function' && option.callback();
        res();
      };
    }
    script.onerror = () => {rej();};

    option.url && (script.src = option.url);
    option.content && (script.type = 'text/javascript') && (script.textContent = option.content);
    document.body.appendChild(script);
    option.content && res();
  });
}