/**
 * Internal dependencies
 */
import edit from './edit';
import save from './save';
import metadata from './block.json';

/**
 * WordPress dependencies
 */
import { registerBlockType } from '@wordpress/blocks';

const { name, category, attributes } = metadata;

registerBlockType( name, {
	title: 'Blissful Buttons',
	description: 'Boring buttons don’t get clicked',
	keywords: [ 'link', 'button' ],
	icon: 'button',
	example: {
		attributes: {
			className: 'is-style-offset',
			text: 'Blissful Button',
		},
	},
	supports: {
		align: true,
		alignWide: true,
	},
	styles: [
		{ name: 'default', label: 'Default', isDefault: true },
		{ name: 'offset', label: 'Offset' },
		{ name: 'soft', label: 'Soft' },
	],
	category,
	attributes,
	edit,
	save,
} );
