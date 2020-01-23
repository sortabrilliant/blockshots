/**
 * Internal dependencies
 */
import { captureBlock } from './util';

/**
 * WordPress dependencies
 */
import { withSelect } from '@wordpress/data';
import { Fragment, Component } from '@wordpress/element';
import { compose } from '@wordpress/compose';
import { PluginBlockSettingsMenuItem } from '@wordpress/edit-post';

class BlockShotPlugin extends Component {
	render() {
		const { blockId, blockName } = this.props;

		return (
			<Fragment>
				<PluginBlockSettingsMenuItem
					icon="camera"
					label="Take a BlockShot"
					onClick={ () => captureBlock( blockId, blockName ) }
				/>
			</Fragment>
		);
	}
}

export default compose( [
	withSelect( ( select ) => {
		const selectedBlock = select( 'core/block-editor' ).getSelectedBlock();

		if ( ! selectedBlock ) {
			return {};
		}

		return {
			blockId: selectedBlock.clientId,
			blockName: selectedBlock.name,
		};
	} ),
] )( BlockShotPlugin );
