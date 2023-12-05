document.querySelectorAll(".tween-up").forEach((el) => {
  gsap.fromTo(
    el,
    { transform: "translateY(50%)", opacity: 0 },
    {
      transform: "translateY(0px)",
      opacity: 1,
      duration: 1,
      // スクロールトリガーの登録
      scrollTrigger: {
        trigger: el,
        start: "top 60%",
        ease: "expo",
      },
    }
  );
});

document.querySelectorAll(".tween-left").forEach((el) => {
  gsap.fromTo(
    el,
    { transform: "translateX(40%)", opacity: 0 },
    {
      transform: "translateX(0px)",
      opacity: 1,
      duration: 1,
      // スクロールトリガーの登録
      scrollTrigger: {
        trigger: el,
        start: "top 70%",
        ease: "expo",
      },
    }
  );
});

document.querySelectorAll(".tween-right").forEach((el) => {
  gsap.fromTo(
    el,
    { transform: "translateX(-50%)", opacity: 0 },
    {
      transform: "translateX(0px)",
      opacity: 1,
      duration: 1,
      // スクロールトリガーの登録
      scrollTrigger: {
        trigger: el,
        start: "top 60%",
        ease: "expo",
      },
    }
  );
});