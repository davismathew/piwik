/*!
 * Piwik - Web Analytics
 *
 * @link http://piwik.org
 * @license http://www.gnu.org/licenses/gpl-3.0.html GPL v3 or later
 */

piwikApp.directive('piwikFocusAnywhereButHere', function($document){
    return {
        restrict: 'A',
        link: function(scope, element, attr, ctrl) {

            function onClickOutsideElement (event) {
                if (element.has(event.target).length === 0) {
                    scope.$apply(attr.piwikFocusAnywhereButHere);
                }
            }

            function onEscapeHandler (event) {
                if (event.which === 27) {
                    scope.$apply(attr.piwikFocusAnywhereButHere);
                }
            }

            $document.on('keyup', onEscapeHandler);
            $document.on('mouseup', onClickOutsideElement);
            scope.$on('$destroy', function() {
                $document.off('mouseup', onClickOutsideElement);
                $document.off('keyup', onEscapeHandler);
            });
        }
    }
});

piwikApp.directive('piwikAutocompleteMatched', function() {
    return function(scope, element, attrs) {
        var searchTerm;

        scope.$watch(attrs.autocompleteMatched, function(value) {
            searchTerm = value;
            updateText();
        });

        function updateText () {
            if (!searchTerm) {
                return;
            }
            var content = element.text();
            var startTerm = content.toLowerCase().indexOf(searchTerm);
            if (-1 !== startTerm) {
                var word = content.substr(startTerm, searchTerm.length);
                content = content.replace(word, '<span class="autocompleteMatched">' + word + '</span>');
                element.html(content);
            };
        }
    };
});