module.exports = {
	stylesheet: ['https://cdnjs.cloudflare.com/ajax/libs/github-markdown-css/2.10.0/github-markdown.min.css', 'css/style.css'],
	body_class: 'markdown-body',
	marked_options: {
		headerIds: false,
		smartypants: true,
	},
	pdf_options: {
		format: 'A4',
		margin: '20mm',
		printBackground: true,
	},
	stylesheet_encoding: 'utf-8',
	dest: 'Curriculum-Vitae.pdf',
};