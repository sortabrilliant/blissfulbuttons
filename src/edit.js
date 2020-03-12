/**
 * WordPress dependencies
 */
import { useCallback } from '@wordpress/element';
import { withInstanceId } from '@wordpress/compose';
import {
	BaseControl,
	PanelBody,
	TextControl,
	ToggleControl,
} from '@wordpress/components';
import {
	InspectorControls,
	PanelColorSettings,
	RichText,
	URLInput,
} from '@wordpress/block-editor';

const NEW_TAB_REL = 'noreferrer noopener';

function BlissfulButtonsEdit( {
	attributes,
	setAttributes,
	className,
	instanceId,
	isSelected,
} ) {
	const {
		accentColor,
		linkTarget,
		placeholder,
		rel,
		text,
		title,
		url,
	} = attributes;
	const onSetLinkRel = useCallback(
		( value ) => {
			setAttributes( { rel: value } );
		},
		[ setAttributes ]
	);

	const onToggleOpenInNewTab = useCallback(
		( value ) => {
			const newLinkTarget = value ? '_blank' : undefined;

			let updatedRel = rel;
			if ( newLinkTarget && ! rel ) {
				updatedRel = NEW_TAB_REL;
			} else if ( ! newLinkTarget && rel === NEW_TAB_REL ) {
				updatedRel = undefined;
			}

			setAttributes( {
				linkTarget: newLinkTarget,
				rel: updatedRel,
			} );
		},
		[ rel, setAttributes ]
	);

	const buttonStyle = {
		'--accent-color': accentColor,
	};

	const linkId = `wp-block-blissful-buttons__inline-link-${ instanceId }`;
	return (
		<div className={ className } title={ title } style={ buttonStyle }>
			<RichText
				placeholder={ placeholder || 'Add text…' }
				value={ text }
				onChange={ ( value ) => setAttributes( { text: value } ) }
				withoutInteractiveFormatting
				className="wp-blissful-buttons__link"
			/>
			<BaseControl
				label="Link"
				className="wp-blissful-buttons__inline-link"
				id={ linkId }
			>
				<URLInput
					className="wp-blissful-buttons__inline-link-input"
					value={ url }
					/* eslint-disable jsx-a11y/no-autofocus */
					// Disable Reason: The rule is meant to prevent enabling auto-focus, not disabling it.
					autoFocus={ false }
					/* eslint-enable jsx-a11y/no-autofocus */
					onChange={ ( value ) => setAttributes( { url: value } ) }
					disableSuggestions={ ! isSelected }
					id={ linkId }
					isFullWidth
					hasBorder
				/>
			</BaseControl>
			<InspectorControls>
				<PanelColorSettings
					title="Color Settings"
					colorSettings={ [
						{
							value: accentColor,
							onChange: ( newColor ) => {
								setAttributes( { accentColor: newColor } );
							},
							label: 'Accent Color',
						},
					] }
				></PanelColorSettings>
				<PanelBody title="Link settings">
					<ToggleControl
						label="Open in new tab"
						onChange={ onToggleOpenInNewTab }
						checked={ linkTarget === '_blank' }
					/>
					<TextControl
						label="Link rel"
						value={ rel || '' }
						onChange={ onSetLinkRel }
					/>
				</PanelBody>
			</InspectorControls>
		</div>
	);
}

export default withInstanceId( BlissfulButtonsEdit );
