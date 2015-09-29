var app = angular.module('eCommerce', ['ngMaterial', 'ngRoute'])

.config(function($routeProvider, $mdThemingProvider, $mdIconProvider){
  $routeProvider
  .when('/home',{
    templateUrl: '/templateHtml/home.html'
  })
  .when('/management',{
    templateUrl: '/templateHtml/management.html'
  })
  .otherwise({
    redirectTo: '/home'
  }),



  $mdThemingProvider.theme('default')
              .primaryPalette('deep-purple', {
                'default': '300',
                'hue-1': '100',
                'hue-2': '600',
                'hue-3': '900'
              })
              .backgroundPalette('blue-grey', {
                'default': '50',
                'hue-1': '100',
                'hue-2': '600',
                'hue-3': 'A100'
              })
              .accentPalette('brown', {
                'default': '300',
                'hue-1': '100',
                'hue-2': '600',
                'hue-3': 'A100'
              });


})
