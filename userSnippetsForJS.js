{
// jQuery Snippets here
//
	//JqfadeToggle Snippet:
	"jqfadeToggle": {
		"prefix": "jqfadeToggle",
		"body": [
			"$(${1:selector}).fadeToggle();"
		],
	},
	// jQuery Traversing - Ancestors
	"jqParent": {
		"prefix": "jqParent",
		"body": [
			"$(${1:selector}).parent();"
		],
	},
	
	"jqParents": {
		"prefix": "jqParents",
		"body": [
			"$(${1:selector}).parents(selector);"
		],
	},

	"jqParentsUntil": {
		"prefix": "jqParentsUntil",
		"body": [
			"$(${1:selector}).parentsUntil(selector);"
		],
	},

	// jQuery Traversing - Descendants

	"jqChildren": {
		"prefix": "jqChildren",
		"body": [
			"$(${1:selector}).children();"
		],
	},

	"jqFind": {
		"prefix": "jqFind",
		"body": [
			"$(${1:selector}).find(selector);"
		],
	},

	// jQuery Traversing - Siblings

	"jqSiblings": {
		"prefix": "jqSiblings",
		"body": [
			"$(${1:selector}).siblings();"
		],
	},
	"jqNext": {
		"prefix": "jqNext",
		"body": [
			"$(${1:selector}).next();"
		],
	},
	"jqNextAll": {
		"prefix": "jqNextAll",
		"body": [
			"$(${1:selector}).nextAll();"
		],
	},
	"jqNextUntil": {
		"prefix": "jqNextUntil",
		"body": [
			"$(${1:selector}).nextUntil(selector);"
		],
	},

	"jqPrev": {
		"prefix": "jqPrev",
		"body": [
			"$(${1:selector}).prev();"
		],
	},
	"jqPrevAll": {
		"prefix": "jqPrevAll",
		"body": [
			"$(${1:selector}).prevAll();"
		],
	},
	"jqPrevUntil": {
		"prefix": "jqPrevUntil",
		"body": [
			"$(${1:selector}).prevUntil(selector);"
		],
	},

	// jQuery Traversing - Filtering

	"jqFirst": {
		"prefix": "jqFirst",
		"body": [
			"$(${1:selector}).first();"
		],
	},
	"jqLast": {
		"prefix": "jqLast",
		"body": [
			"$(${1:selector}).last();"
		],
	},
	"jqEq": {
		"prefix": "jqEq",
		"body": [
			"$(${1:selector}).eq(selector);"
		],
	},
	"jqFilter": {
		"prefix": "jqFilter",
		"body": [
			"$(${1:selector}).filter(selector);"
		],
	},
	"jqNot": {
		"prefix": "jqNot",
		"body": [
			"$(${1:selector}).not();"
		],
	},

}
