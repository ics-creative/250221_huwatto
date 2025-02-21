const segmenterJa = new Intl.Segmenter("ja", { granularity: "grapheme" });
/**
 * 文字を個別に分解してindexをふったうえでspanタグで囲みます
 * @param selector {string}
 */
export const splitText = (selector) => {
  document.querySelectorAll(selector).forEach((element) => {
    const text = element.textContent.trim();
    const graphemeSegments = segmenterJa.segment(text);
    element.innerHTML = ""; // 元のテキストをクリア
    Array.from(graphemeSegments).forEach(({ segment }, index) => {
      const span = document.createElement("span");
      span.textContent = segment;
      span.classList.add("char");
      span.style.setProperty("--index", String(index));
      span.style.display = "inline-block";
      element.appendChild(span);
    });
  });
};

/**
 * 文字を個別に分解してindexをふったうえでspanタグを2重に囲みます
 * @param selector {string} querySelectorによる要素指定
 */
export const splitTextDoubleSpan = (selector) => {
  document.querySelectorAll(selector).forEach((element) => {
    const text = element.textContent.trim();
    const graphemeSegments = segmenterJa.segment(text);
    element.innerHTML = ""; // 元のテキストをクリア
    Array.from(graphemeSegments).forEach(({ segment }, index) => {
      const span = document.createElement("span");
      const span2 = document.createElement("span");
      span.textContent = segment;
      span.style.display = "inline-block";
      span.classList.add("char");
      span2.style.display = "inline-block";
      span2.style.setProperty("--index", String(index));
      // 入れ子にする
      span2.appendChild(span);
      element.appendChild(span2);
    });
  });
};
