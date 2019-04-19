import scrollbarWidth from 'main/utils/scrollbar-width';

const scrollControl = (container, fix) => {
  if (!isHTMLEl(container)) return;
  const top = container.scrollTop;
  const left = container.scrollLeft;
  if (fix) {
    container.style.overflow = 'hidden';
    container.style.marginRight = '0';
  } else {
    container.style.overflow = 'scroll';
    container.style.marginRight = -scrollbarWidth() + 'px';
    // scrollTo兼容性
    if (container.scrollTo) {
      container.scrollTo(left, top);
    } else {
      container.scrollTop = top;
      container.scrollLeft = left;
    }
  }
};
const isHTMLEl = (node) => {
  return (typeof HTMLElement === 'function') ? node instanceof HTMLElement : node && typeof node === 'object' && node.nodeType === 1 && typeof node.nodeName === 'string';
};

export { scrollControl };
