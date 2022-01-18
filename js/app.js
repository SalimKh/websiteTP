function initAnimation() {
  document.getElementById("planete1").animate(
    [
      // keyframes
      { transform: "translate(0%, -50%)" },
      { transform: "translate(190%, -100%)" },
      { transform: "translate(380%, -50%)" },
      { transform: "translate(190%, 40%)" },
      { transform: "translate(0%, -50%)" },
    ],
    {
      // timing options
      duration: 20000,
      iterations: Infinity,
    }
  );

  document.getElementById("planete2").animate(
    [
      // keyframes
      { transform: "translate(0%, -50%)" },
      { transform: "translate(-190%, 40%)" },
      { transform: "translate(-380%, -50%)" },
      { transform: "translate(-190%, -100%)" },
      { transform: "translate(0%, -50%)" },
    ],
    {
      // timing options
      duration: 20000,
      iterations: Infinity,
    }
  );
}
