/**
 *
 *  Defines `utils` service
 *
 *
 *  @author  <%= answers.username %>
 *  @date    <%= answers.date %>
 *
 */
define(['lib/ServiceBase'], function(ServiceBase) {

    class Service extends ServiceBase {
        constructor(features, app) {
            super(features, app);
        }


        _utils($q, $window) {
            'ngInject';

            this.base64ToString = function(str) {
                return decodeURIComponent(escape(atob(str)));
            };

            this.stringTobase64 = function(str) {
                return btoa(unescape(encodeURIComponent(str)));
            };

            this.stopEvent = function(e) {
                if (!e) {
                    return;
                }
                if (e.stopPropagation) {
                    e.stopPropagation();
                }
                if (e.preventDefault) {
                    e.preventDefault();
                }
            };
        }

        execute() {
            this.service('utils', this._utils);
        }
    }

    return Service;

});
