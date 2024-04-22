import type { CustomThemeConfig } from '@skeletonlabs/tw-plugin';

export const sageTheme: CustomThemeConfig = {
	name: 'sage',
	properties: {
		// =~= Theme Properties =~=
		'--theme-font-family-base': `system-ui`,
		'--theme-font-family-heading': `system-ui`,
		'--theme-font-color-base': '0 0 0',
		'--theme-font-color-dark': '255 255 255',
		'--theme-rounded-base': '9999px',
		'--theme-rounded-container': '8px',
		'--theme-border-base': '1px',
		// =~= Theme On-X Colors =~=
		'--on-primary': '255 255 255',
		'--on-secondary': 'var(--color-tertiary-500)',
		'--on-tertiary': '255 255 255',
		'--on-success': '0 0 0',
		'--on-warning': '0 0 0',
		'--on-error': '255 255 255',
		'--on-surface': 'var(--color-tertiary-500)',
		// =~= Theme Colors  =~=
		// primary | #7b8e70
		'--color-primary-50': '235 238 234', // #ebeeea
		'--color-primary-100': '229 232 226', // #e5e8e2
		'--color-primary-200': '222 227 219', // #dee3db
		'--color-primary-300': '202 210 198', // #cad2c6
		'--color-primary-400': '163 176 155', // #a3b09b
		'--color-primary-500': '123 142 112', // #7b8e70
		'--color-primary-600': '111 128 101', // #6f8065
		'--color-primary-700': '92 107 84', // #5c6b54
		'--color-primary-800': '74 85 67', // #4a5543
		'--color-primary-900': '60 70 55', // #3c4637
		// secondary | #e5ece1
		'--color-secondary-50': '251 252 251', // #fbfcfb
		'--color-secondary-100': '250 251 249', // #fafbf9
		'--color-secondary-200': '249 250 248', // #f9faf8
		'--color-secondary-300': '245 247 243', // #f5f7f3
		'--color-secondary-400': '237 242 234', // #edf2ea
		'--color-secondary-500': '229 236 225', // #e5ece1
		'--color-secondary-600': '206 212 203', // #ced4cb
		'--color-secondary-700': '172 177 169', // #acb1a9
		'--color-secondary-800': '137 142 135', // #898e87
		'--color-secondary-900': '112 116 110', // #70746e
		// tertiary | #26341e
		'--color-tertiary-50': '222 225 221', // #dee1dd
		'--color-tertiary-100': '212 214 210', // #d4d6d2
		'--color-tertiary-200': '201 204 199', // #c9ccc7
		'--color-tertiary-300': '168 174 165', // #a8aea5
		'--color-tertiary-400': '103 113 98', // #677162
		'--color-tertiary-500': '38 52 30', // #26341e
		'--color-tertiary-600': '34 47 27', // #222f1b
		'--color-tertiary-700': '29 39 23', // #1d2717
		'--color-tertiary-800': '23 31 18', // #171f12
		'--color-tertiary-900': '19 25 15', // #13190f
		// success | #1dd75b
		'--color-success-50': '221 249 230', // #ddf9e6
		'--color-success-100': '210 247 222', // #d2f7de
		'--color-success-200': '199 245 214', // #c7f5d6
		'--color-success-300': '165 239 189', // #a5efbd
		'--color-success-400': '97 227 140', // #61e38c
		'--color-success-500': '29 215 91', // #1dd75b
		'--color-success-600': '26 194 82', // #1ac252
		'--color-success-700': '22 161 68', // #16a144
		'--color-success-800': '17 129 55', // #118137
		'--color-success-900': '14 105 45', // #0e692d
		// warning | #efb034
		'--color-warning-50': '253 243 225', // #fdf3e1
		'--color-warning-100': '252 239 214', // #fcefd6
		'--color-warning-200': '251 235 204', // #fbebcc
		'--color-warning-300': '249 223 174', // #f9dfae
		'--color-warning-400': '244 200 113', // #f4c871
		'--color-warning-500': '239 176 52', // #efb034
		'--color-warning-600': '215 158 47', // #d79e2f
		'--color-warning-700': '179 132 39', // #b38427
		'--color-warning-800': '143 106 31', // #8f6a1f
		'--color-warning-900': '117 86 25', // #755619
		// error | #de3b40
		'--color-error-50': '250 226 226', // #fae2e2
		'--color-error-100': '248 216 217', // #f8d8d9
		'--color-error-200': '247 206 207', // #f7cecf
		'--color-error-300': '242 177 179', // #f2b1b3
		'--color-error-400': '232 118 121', // #e87679
		'--color-error-500': '222 59 64', // #de3b40
		'--color-error-600': '200 53 58', // #c8353a
		'--color-error-700': '167 44 48', // #a72c30
		'--color-error-800': '133 35 38', // #852326
		'--color-error-900': '109 29 31', // #6d1d1f
		// surface | #ffffff
		'--color-surface-50': '255 255 255', // #ffffff
		'--color-surface-100': '255 255 255', // #ffffff
		'--color-surface-200': '255 255 255', // #ffffff
		'--color-surface-300': '255 255 255', // #ffffff
		'--color-surface-400': '255 255 255', // #ffffff
		'--color-surface-500': '255 255 255', // #ffffff
		'--color-surface-600': '230 230 230', // #e6e6e6
		'--color-surface-700': '191 191 191', // #bfbfbf
		'--color-surface-800': '153 153 153', // #999999
		'--color-surface-900': '125 125 125' // #7d7d7d
	}
};
