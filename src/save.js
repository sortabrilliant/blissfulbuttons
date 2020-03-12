/**
 * WordPress dependencies
 */
import { RichText } from '@wordpress/block-editor';

export default function save( { attributes } ) {
	const {
		backgroundColor,
		linkTarget,
		rel,
		text,
		textColor,
		title,
		url,
	} = attributes;

	const buttonStyle = {
		backgroundColor,
		color: textColor,
	};

	return (
		<div>
			<RichText.Content
				tagName="a"
				className="wp-blissful-buttons__link"
				href={ url }
				title={ title }
				style={ buttonStyle }
				value={ text }
				target={ linkTarget }
				rel={ rel }
			/>
		</div>
	);
}
