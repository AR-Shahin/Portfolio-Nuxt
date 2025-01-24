module.exports = {
    apps: [
      {
        name: "nuxt3-app",
        script: "npm",
        args: "start",
        env: {
          NODE_ENV: "production",
          PORT: 3005,
        },
      },
    ],
  };
  