module.exports = {
  setupFilesAfterEnv: ['./configs/enzyme'],
  transformIgnorePatterns: ['node_modules/(?!(sucrase)/)'],
  transform: {
    '^.+\\.(js|jsx|ts|tsx|mjs)$': 'babel-jest',
  },  };
