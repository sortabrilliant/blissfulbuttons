<?php
/**
 * Plugin Name: Blissful Buttons
 * Plugin URI:  https://sortabrilliant.com/blissfulbuttons
 * Description: Boring buttons don't get clicked.
 * Author:      sorta brilliant
 * Author URI:  https://sortabrilliant.com/
 * Version:     1.0.1
 * License:     GPL-2.0-or-later
 * License URI: http://www.gnu.org/licenses/gpl-2.0.txt
 *
 * @package blissful-buttons
 */

namespace SortaBrilliant\BlissfulButtons;

/**
 * Registers the block and required assets.
 *
 * @return void
 */
function register_block() {
	if ( ! function_exists( 'register_block_type' ) ) {
		return;
	}

	$asset_filepath = __DIR__ . '/build/index.asset.php';
	$asset_file     = file_exists( $asset_filepath ) ? include $asset_filepath : [
		'dependencies' => [],
		'version'      => false,
	];

	wp_register_script(
		'blissful-buttons',
		plugins_url( 'build/index.js', __FILE__ ),
		$asset_file['dependencies'],
		$asset_file['version']
	);

	wp_register_style(
		'blissful-buttons-editor-style',
		plugins_url( 'build/editor.css', __FILE__ ),
		[],
		$asset_file['version']
	);

	wp_register_style(
		'blissful-buttons-style',
		plugins_url( 'build/style.css', __FILE__ ),
		[],
		$asset_file['version']
	);

	register_block_type( 'sortabrilliant/blissful-buttons', [
		'editor_script'   => 'blissful-buttons',
		'editor_style'    => 'blissful-buttons-editor-style',
		'style'           => 'blissful-buttons-style',
	] );
}
add_action( 'init', __NAMESPACE__ . '\\register_block' );
