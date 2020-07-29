<?php
/**
 * Plugin Name:       Block Shots
 * Plugin URI:        https://sortabrilliant.com/blockshots/
 * Description:       The easiest way to take screenshots of your blocks.
 * Version:           1.0.2
 * Requires at least: 5.0
 * Requires PHP:      5.6
 * Author:            sorta brilliant
 * Author URI:        https://sortabrilliant.com/
 * License:           GPL-2.0-or-later
 * License URI:       http://www.gnu.org/licenses/gpl-2.0.txt
 *
 * @package BlockShots
 */

namespace SortaBrilliant\BlockShots;

/**
 * Enqueue the "Block Editor" assets.
 *
 * @return void
 */
function enqueue_assets() {
	$asset_filepath = __DIR__ . '/build/index.asset.php';
	$asset_file     = file_exists( $asset_filepath ) ? include $asset_filepath : [
		'dependencies' => [],
		'version'      => false,
	];

	wp_enqueue_script(
		'block-shots',
		plugins_url( 'build/index.js', __FILE__ ),
		$asset_file['dependencies'],
		$asset_file['version']
	);
}
add_action( 'enqueue_block_editor_assets', __NAMESPACE__ . '\\enqueue_assets' );
