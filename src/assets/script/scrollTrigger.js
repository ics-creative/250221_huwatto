/**
 * IntersectionObserverを初期化する
 * @param target {HTMLElement} 監視対象の要素
 * @param options {IntersectionObserverInit} IntersectionObserverオプション
 */
const setupIntersectionObserver = (target, options) => {
  const callback = (entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        // トリガーされた要素にisActiveクラスを追加
        entry.target.classList.add("isActive");
        // アニメーションは1度だけなので、発火したら監視を解除する
        // デモは繰り返し再生できるようにするため、コメントアウトしています
        // observer.unobserve(entry.target);
      }
    });
  };
  const observer = new IntersectionObserver(callback, options);
  observer.observe(target);
};

/**
 * 画面中央で発火するスクロールトリガー
 * @param target {HTMLElement} トリガーしたい要素
 */
export const setupBasic = (target) => {
  const options = {
    root: document,
    rootMargin: "-50% 0px",
    threshold: 0,
  };
  setupIntersectionObserver(target, options);
};

/**
 * 画面下部で発火するスクロールトリガー
 * @param target {HTMLElement} トリガーしたい要素
 */
export const setupAdvanced = (target) => {
  const options = {
    root: document,
    rootMargin: "-80% 0px -20%",
    threshold: 0,
  };
  setupIntersectionObserver(target, options);
};
