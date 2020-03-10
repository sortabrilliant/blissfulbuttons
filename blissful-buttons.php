<?php
/**
 * Plugin Name: Blissful Buttons
 * Plugin URI:  https://sortabrilliant.com/blissfulbuttons
 * Description:
 * Author:      sorta brilliant
 * Author URI:  https://sortabrilliant.com/
 * Version:     1.0.0
 * License:     GPL-2.0-or-later
 * License URI: http://www.gnu.org/licenses/gpl-2.0.txt
 *
 * @package blissful-buttons
 */

namespace SortaBrilliant\BlissfulButtons;

const VERSION = '1.0.0';

/**
 * Enqueue block editor assets.
 *
 * @return void
 */
function editor_script() {
	$asset_filepath = __DIR__ . '/build/index.asset.php';
	$asset_file     = file_exists( $asset_filepath ) ? include $asset_filepath : [
		'dependencies' => [],
		'version'      => VERSION,
	];

	wp_enqueue_script(
		'blissful-buttons',
		plugins_url( 'build/index.js', __FILE__ ),
		$asset_file['dependencies'],
		$asset_file['version']
	);
}
add_action( 'enqueue_block_editor_assets', __NAMESPACE__ . '\\editor_script' );

/**
 * Enqueue block styles.
 *
 * @return void
 */
function block_styles() {
	wp_enqueue_style(
		'blissful-buttons-style',
		plugins_url( 'build/style.css', __FILE__ ),
		[],
		VERSION
	);
}
add_action( 'enqueue_block_assets', __NAMESPACE__ . '\\block_styles', 100 );
