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
				'ISC',
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

	post( { answers, install, folderPath } ) {
		if ( answers.publish ) {
			spawn.sync( 'npm', [ 'publish' ], {
				cwd: folderPath || process.cwd(),
				stdio: 'inherit',
			} )
		}

		if ( answers.install ) {
			install()
		}
	}
}
