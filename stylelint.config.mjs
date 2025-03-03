import plugins from '@innovixx/stylelint-config/config/plugins/index.mjs';
import rules from '@innovixx/stylelint-config/config/rules/index.mjs';
import extendsConfig from '@innovixx/stylelint-config/config/extends/index.mjs';

export default {
	extends: [
		...extendsConfig.extends,
	],
	ignoreFiles: [
		'src/styles/colors/index.module.scss',
		'src/styles/queries/index.module.scss',
	],
	plugins: [
		...plugins.plugins,
	],
	rules: {
		...rules.rules,
	},
};
