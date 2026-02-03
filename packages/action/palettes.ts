export const basePalettes = {
  "github-light": {
    colorBackground: "#ffffff",
    colorDotBorder: "#1b1f230a",
    colorDots: ["#ebedf0", "#f3c1d9", "#ec7fb2", "#d9599a", "#b43f7f"],
    colorEmpty: "#ebedf0",
    colorSnake: "#c77dff",
  },

  "github-dark": {
    colorBackground: "#0c0f14",          // 稍微偏蓝的黑，更日系
    colorDotBorder: "#1b1f230a",
    colorEmpty: "#161b22",

    // 👇 关键：粉 → 玫红 → 紫粉 的渐进
    colorDots: [
      "#161b22",   // empty
      "#2a0f1f",   // 极暗粉影
      "#5a1a3a",   // 暗玫红
      "#a23a6e",   // 主粉
      "#ff79c6",   // 霓虹粉高亮
    ],

    // 👇 蛇：偏紫的粉，比格子更冷一点
    colorSnake: "#c77dff",
  },
};

// aliases
export const palettes = {
  ...basePalettes,
  github: basePalettes["github-light"],
  default: basePalettes["github-light"],
};
