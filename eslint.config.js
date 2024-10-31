import pluginVue from 'eslint-plugin-vue'
import vueTsEslintConfig from '@vue/eslint-config-typescript'
import pluginVitest from '@vitest/eslint-plugin'
import skipFormatting from '@vue/eslint-config-prettier/skip-formatting'
import pluginJestDom from 'eslint-plugin-jest-dom'
import pluginTestingLibrary from 'eslint-plugin-testing-library'

export default [
  {
    name: 'app/files-to-lint',
    files: ['**/*.{ts,mts,tsx,vue}'],
  },

  {
    name: 'app/files-to-ignore',
    ignores: ['**/dist/**', '**/dist-ssr/**', '**/coverage/**'],
  },

  ...pluginVue.configs['flat/essential'],
  ...vueTsEslintConfig(),

  {
    ...pluginVitest.configs.recommended,
    files: ['src/**/__tests__/*'],
  },

  {
    files: ['src/**/__tests__/*'],
    ...pluginTestingLibrary.configs['flat/vue'],
  },

  {
    files: ['src/**/__tests__/*'],
    ...pluginJestDom.configs['flat/recommended'],
  },
  skipFormatting,
]
