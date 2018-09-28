sample.service('apiService', ['$http', '$q',
    function($http, $q) {
        var serviceUrl = 'http://localhost:8000/';

        return {
            get: function(url) {
                let uri = `${serviceUrl}/${url}`;
                return $http.get(uri).then((resp) => {
                    if (resp.status == 200) {
                        return $q.resolve(resp.data);
                    } else {
                        return $q.reject(resp);
                    }
                });
            },

            post: function(url, body) {
                let uri = `${serviceUrl}/${url}`;
                return $http.post(uri, body).then((resp) => {
                    if (resp.status == 200) {
                        return $q.resolve(resp.data);
                    } else {
                        return $q.reject(resp);
                    }
                });
            },

            del: function(url){
                let uri = `${serviceUrl}/${url}`;
                return $http.delete(uri).then((resp) => {
                    if (resp.status == 200) {
                        return $q.resolve(resp.data);
                    } else {
                        return $q.reject(resp);
                    }
                });
            }
        };
    }
]);