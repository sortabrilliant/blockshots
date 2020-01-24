/**
 * External dependencies
 */
import { kebabCase } from 'lodash';
import domtoimage from 'dom-to-image-more';

/**
 * Download a PNG.
 *
 * @param {string} dataUrl Canvas element
 * @param {string} filename File name
 */
function download( dataUrl, filename ) {
	const a = document.createElement( 'a' );

	a.download = filename;
	a.href = dataUrl;

	a.style.display = 'none';
	document.body.appendChild( a );
	a.click();
	document.body.removeChild( a );
}

/**
 * Capture the block screenshot.
 *
 * @param {string} id
 * @param {string} name
 */
export function captureBlock( id, name ) {
	const filename = kebabCase( name ) + '-screenshot';
	const block = document.querySelector( `[data-block="${ id }"]` );
	const options = {
		bgcolor: '#ffffff',
	};

	domtoimage.toPng( block, options ).then( ( dataUrl ) => {
		download( dataUrl, filename );
	} ).catch( ( error ) => {
		// eslint-disable-next-line no-console
		console.error( 'Oops, something went wrong!', error );
	} );
}
