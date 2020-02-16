/**
 * @author alteredq / http://alteredqualia.com/
 *
 * Full-screen textured quad shader
 */

THREE.CopyShader = {

	uniforms: {

		"tDiffuse": { value: null },
		"opacity":  { value: 1.0 }

	},

	vertexShader: [

		"varying vec2 vUv;",

		"void main() {",

			"vUv = uv;",
			"gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );",

		"}"

	].join( "\n" ),

	fragmentShader: [

		"uniform float opacity;",

		"uniform sampler2D tDiffuse;",

		"varying vec2 vUv;",

		"void main() {",

			"vec4 texel = texture2D( tDiffuse, vUv );",
			"gl_FragColor = opacity * texel;",

		"}"

	].join( "\n" )

};

/*
     FILE ARCHIVED ON 00:50:00 Oct 18, 2016 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 20:31:48 Jul 20, 2019.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  LoadShardBlock: 395.755 (3)
  esindex: 0.005
  captures_list: 411.464
  CDXLines.iter: 12.206 (3)
  PetaboxLoader3.datanode: 356.788 (4)
  exclusion.robots: 0.292
  exclusion.robots.policy: 0.28
  RedisCDXSource: 0.498
  PetaboxLoader3.resolve: 30.735
  load_resource: 49.334
*/