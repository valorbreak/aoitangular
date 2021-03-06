'use strict';

/**
 * @ngdoc service
 * @name dotafetchApp.redditdota
 * @description
 * # redditdota
 * Service in the dotafetchApp.
 */
angular.module('dotafetchApp')
  .service('redditDota', function redditdota($http) {
    // AngularJS will instantiate a singleton by calling "new" on this function

    // return a public API
    return({
      getDotaFront : getDotaFront
    });

    function getDotaFront(){
      var request = $http({
        method: 'get',
        url: 'http://www.reddit.com/r/DotA2.json',
        params: {
          action: 'get'
        }
      });

      // I transform the error response, unwrapping the application dta from
      // the API response payload.
      function handleError( response ) {

        // The API response from the server should be returned in a
        // nomralized format. However, if the request was not handled by the
        // server (or what not handles properly - ex. server error), then we
        // may have to normalize it on our end, as best we can.
        if (! angular.isObject( response.data ) || ! response.data.message) {
          return( $q.reject( 'An unknown error occurred.' ) );
        }

        // Otherwise, use expected error message.
        return( $q.reject( response.data.message ) );

      }


      // I transform the successful response, unwrapping the application data
      // from the API response payload.
      function handleSuccess( response ) {
        return( response.data );
      }

      return( request.then( handleSuccess, handleError ) );

    }

  });
