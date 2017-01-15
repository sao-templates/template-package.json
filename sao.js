module.exports = {
	template: 'handlebars',
	enforceCurrentFolder: true,

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
		eslint: {
			message: 'Choose an eslint config:',
			type: 'list',
			choices: [
				'esnext',
				'browser',
				'electron',
			],
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
	},

	post( { answers, log, folderName, install } ) {
		log.success( `package.json is successfully generated in ${ folderName }` );

		if ( answers.install ) {
			install();
		}
	}
};
