<?php
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the
 * installation. You don't have to use the web site, you can
 * copy this file to "wp-config.php" and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * MySQL settings
 * * Secret keys
 * * Database table prefix
 * * ABSPATH
 *
 * @link https://codex.wordpress.org/Editing_wp-config.php
 *
 * @package WordPress
 */

// ** MySQL settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define('DB_NAME', 'liber676_libertyvice');

/** MySQL database username */
define('DB_USER', 'liber676');

/** MySQL database password */
define('DB_PASSWORD', 'SamusAran42@@');

/** MySQL hostname */
define('DB_HOST', 'localhost');

/** Database Charset to use in creating database tables. */
define('DB_CHARSET', 'utf8mb4');

/** The Database Collate type. Don't change this if in doubt. */
define('DB_COLLATE', '');

/**#@+
 * Authentication Unique Keys and Salts.
 *
 * Change these to different unique phrases!
 * You can generate these using the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}
 * You can change these at any point in time to invalidate all existing cookies. This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define('AUTH_KEY',         'CCf#g=?Fe _kd0ehx8)TihyLg5!8c+p07Q8.<+EP^Loce>grh9[u4mw6axe.O2_G');
define('SECURE_AUTH_KEY',  'eZ`q[l<%HQlgJ*MW:S<}9A[oN3]ZZ8~+#moen7n)U/%%o&<b)V)$_aki=$qW)QYj');
define('LOGGED_IN_KEY',    '+Se2^-Vls_iQA]-_:#pTiZO:JV3E9upFyk-i*YhFr_C^{Sn[:T^w(OCwFv&@7mA)');
define('NONCE_KEY',        'sl,urn_l|KM#@;KcZSy=vo<`uEf>v1&X!D]{fC|%q8e+||S5x>v=1D#3ecUsCclY');
define('AUTH_SALT',        'x%hJTg9`Kj0#.dyl[nQ?4gp4t1|]Q~AU%Bj&v>P<g,1Mnk$woYinXWHM#u#`5o$6');
define('SECURE_AUTH_SALT', 'Dxu+x#)gC@b2R!as1z(,m{ `#$5h@W*x(d@:>6dCRSv~ltkXKi`?`3b}L!YI,q3l');
define('LOGGED_IN_SALT',   '[|catSOK9qDox;8s=%ItVS96vJ)u$YAMm/@.t$;VY._jwc,viCC?i==f$vr=?F2S');
define('NONCE_SALT',       'VK<sYN|]n8=ZB9Jjj&T$+QYz1X;X(c}5zvdJQ=bij1Q|pg32ZL82%Ku^hw;Hk4DX');

/**#@-*/

/**
 * WordPress Database Table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix  = 'wp_';

/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 *
 * For information on other constants that can be used for debugging,
 * visit the Codex.
 *
 * @link https://codex.wordpress.org/Debugging_in_WordPress
 */
define('WP_DEBUG', false);

/* That's all, stop editing! Happy blogging. */

/** Absolute path to the WordPress directory. */
if ( !defined('ABSPATH') )
	define('ABSPATH', dirname(__FILE__) . '/');

/** Sets up WordPress vars and included files. */
require_once(ABSPATH . 'wp-settings.php');
