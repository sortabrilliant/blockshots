/**
 * Internal dependencies
 */
import BlockShotPlugin from './plugin';

/**
 * WordPress dependencies
 */
import { registerPlugin } from '@wordpress/plugins';

registerPlugin( 'sorta-brilliant-block-shorts', {
	render: BlockShotPlugin,
} );
