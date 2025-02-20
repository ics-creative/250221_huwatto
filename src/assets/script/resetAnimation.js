/**
 * アニメーションをリセットします
 */
export const resetAnimation = () => {
  const activatedElements = document.querySelectorAll(".isActive");
  window.scroll(0, 0);
  activatedElements.forEach((element) => {
    element.classList.remove("isActive");
  });
};
