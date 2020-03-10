/**
 * WordPress dependencies
 */
import { registerBlockStyle } from '@wordpress/blocks';

registerBlockStyle( 'core/button', [
	{
		name: 'soft',
		label: 'Soft',
	},
	{
		name: 'iyf',
		label: 'In Your Face',
	},
	{
		name: 'offset',
		label: 'Offset',
	},
] );
