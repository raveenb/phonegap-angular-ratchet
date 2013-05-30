# phonegap-angular-ratchet

A sample PhoneGap app with Angular JS, Ratchet UI and FastClick

PhoneGap apps need special care and attention to perform at their best. Existing full stack frameworks and UI kits tend to be heavier and result in slower and laggy(non snappy) apps when run on the phones.

AngularJS appears to give the right kind of flexibitly for folks who come from Python Djano and Ruby on Rails. jQuery Mobile seems too huge and constraining when compared to AngularJS and its alternatives like DojoJS, BackboneJS and EmberJS.

Ratchet is very lightweight when compared to Bootstrap which is not so well suited for Mobile environment and tends to run slower. Alternatives here include the up and coming Topcoat from Adobe. Ratchet has almost no JS unlike Bootstrap which has jQuery dependency too.

Desktop browsers are click based while Mobile environment is touch based. There is 300ms difference between a touch event and a click event. Touch events are available after ~4ms while click events are available ~300ms after the touch event, this is to handle the double tap event. As a result porting web+click based apps to mobile become laggy in mobile+touch environment. FastClick is a simple library to help with this. Its deliveres the click event when on web+click env, and touch event when on mobile+touch env.

I got some real good advice on all these from Chistophe Coenraets Blog @ http://coenraets.org/blog/ I have followed most of his 10 pt advice on making a cool and snappy PhoneGap App. You should check it out.

## How to use this repo

1. Install PhoneGap if you dont have already assuming you have npm and node already installed
    <pre>
    npm install -g cordova
    </pre>
1. Create a PhoneGap App
    <pre>
    cordova create [AppName] io.domainName.appName [AppName] 
    
    cd [AppName]
    </pre>
1. Clone this repo 
    <pre>
    git clone https://github.com/raveenb/phonegap-angular-ratchet/
    </pre>
1. Syncronize AppName and PhoneGap
    <pre>
    mv www www-orig
    
    mv phonegap-angular-ratchet www
    </pre>
1. Test AppName on PhoneGap Ripple
    <pre>
    cordova platform add ios
    
    cordova ripple ios 9000 # at this point the browser should open with the app running, ripple awesome!
    </pre>
1. Build App for Native (iOS in this case)
    <pre>
    cd platforms/ios

    open [AppName].xcodeproj
    </pre>
    build for simulators and test
    
    build for your device and test
    

* PhoneGap - http://phonegap.com/
* AngularJS - http://angularjs.org/
* jQuery - http://jquery.com/
* jQueryMobile - http://jquerymobile.com/
* Ratchet - http://maker.github.io/ratchet/
* TopCoat - http://topcoat.io/
* BootStrap - http://twitter.github.io/bootstrap/
* FastClick - https://github.com/ftlabs/fastclick
* Ripple - http://ripple.incubator.apache.org/

## License

Licensed under MIT license

Copyright (c) 2012 Raveen Beemsingh

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
