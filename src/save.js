/**
 * WordPress dependencies
 */
import { RichText } from '@wordpress/block-editor';

export default function save( { attributes } ) {
	const { linkTarget, rel, text, accentColor, title, url } = attributes;

	const buttonStyle = {
		'--accent-color': accentColor,
	};

	return (
		<div style={ buttonStyle }>
			<RichText.Content
				tagName="a"
				className="wp-blissful-buttons__link"
				href={ url }
				title={ title }
				value={ text }
				target={ linkTarget }
				rel={ rel }
			/>
		</div>
	);
}
