<?php
/**
 * Plugin Name: Block Shots
 * Plugin URI:  https://sortabrilliant.com/blockshots/
 * Description: The easiest way to take screenshots of your blocks.
 * Author:      sorta brilliant
 * Author URI:  https://sortabrilliant.com/
 * Version:     1.0.1
 * License:     GPL-2.0-or-later
 * License URI: http://www.gnu.org/licenses/gpl-2.0.txt
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
	$asset_file = include __DIR__ . '/build/index.asset.php';

	wp_enqueue_script(
		'block-shots',
		plugins_url( 'build/index.js', __FILE__ ),
		$asset_file['dependencies'],
		$asset_file['version']
	);
}
add_action( 'enqueue_block_editor_assets', __NAMESPACE__ . '\\enqueue_assets' );
