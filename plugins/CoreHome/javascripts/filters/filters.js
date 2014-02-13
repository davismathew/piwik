/*!
 * Piwik - Web Analytics
 *
 * @link http://piwik.org
 * @license http://www.gnu.org/licenses/gpl-3.0.html GPL v3 or later
 */

piwikApp.filter('translate', function() {
    return function(key) {
        return _pk_translate(key);
    }
});

piwikApp.filter('default', function() {
    return function(value, defaultValue) {
        if (!value) {
            return defaultValue;
        }
        return value;
    }
});