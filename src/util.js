/**
 * External dependencies
 */
import { kebabCase } from 'lodash';
import html2canvas from 'html2canvas';

/**
 * Download a PNG.
 *
 * @param {string} canvas Canvas element
 * @param {string} filename File name
 */
function download( canvas, filename ) {
	const a = document.createElement( 'a' );

	a.download = filename;

	// Convert canvas content to data-uri for link. When download
	// attribute is set the content pointed to by link will be
	// pushed as "download" in HTML5 capable browsers
	a.href = canvas.toDataURL( 'image/png;base64' );

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

	// Hack: Temporarely override styles.
	const style = document.createElement( 'style' );
	document.head.appendChild( style );
	style.sheet.insertRule( `#block-${ id } *::before { border: none; }`, 0 );

	html2canvas( block ).then( ( canvas ) => {
		download( canvas, filename );

		// Remove custom style.
		document.head.removeChild( style );
	} );
}
