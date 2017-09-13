const spawn = require( 'cross-spawn' )

module.exports = {
	template: 'handlebars',
	showTip: true,

	prompts: {
		projectName: {
			message: 'Project name:',
			role: 'folder:name',
		},
		author: {
			message: 'Author:',
			role: 'git:email',
			store: true,
		},
		license: {
			message: 'Choose a LICENSE:',
			type: 'list',
			choices: [
				'MIT',
			],
		},
		install: {
			message: 'Install dependencies:',
			type: 'confirm',
			default: false,
		},
		publish: {
			message: 'Publish to npm:',
			type: 'confirm',
			default: true,
		}
	},

	post( { answers, install } ) {
		if ( answers.publish ) {
			spawn.sync( 'npm', [ 'publish' ], {
				cwd: process.cwd(),
				stdio: 'inherit',
			} )
		}

		if ( answers.install ) {
			install()
		}
	}
}
