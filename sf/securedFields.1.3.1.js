
(function ( exports ) {

    /* THE BEGIN */

    var origin = "http://127.0.0.1:8887";
    var originKey = "pub.v2.8115300407614262.aHR0cDovLzEyNy4wLjAuMTo4ODg3.8C7rZcharLDNAMGIcypjT0o9nOyCnzF8-wuI_KpRk_U";
    var genTime = "2018-10-01T19:26:27Z";
    var checkoutShopperUrl = "https://checkoutshopper-test.adyen.com/checkoutshopper/";
    var baseRequest = {
        token: originKey
    };

    var adyen = window.adyen = window.adyen || {};
    adyen.hooks = adyen.hooks || {};

    var noop = function () {
    };

    var shared = {}, __define = noop, __require = noop;


    /* THE MIDDLE */
    "use strict";

    var chckt = window.chckt = window.chckt || {};

    chckt.cardBrand = null;

    chckt.nonConsolidatedCard = '';

    var noop = function(){return function(){};};

    var shared = {}, define = noop, require = noop;

    var _b$dl = false;
    var __logVal = false;// log events in the (number, date, cvc) validation process
    var __logVal2 = false;// log events in the new (number, date, cvc) validation process

    var __logIOSEvents = false;
/* global shared, __define, __require */
function makeAMD(exports){

    "use strict";

    var modules = exports.__modules = {};

    function __require(name, optionalCallback){

        if(!name){
            return function(){
            };
        }

        if(typeof name === "string"){
            if(!modules.hasOwnProperty(name)){
                throw new Error("Adyen Sequencing Exception. Module '" + name + "' is not yet defined");
            }
            return modules[name];
        }

        var result = [];

        while(name.length > 0){
            result.push(__require(name.shift()));
        }

        if(typeof optionalCallback === "function"){
            optionalCallback.apply({}, result);
        }

        return result;
    }

    function __define(name, deps, item){
        var args = __require(deps);
        if(typeof item === "function"){
            modules[name] = item.apply({}, args);
        }else{
            modules[name] = item;
        }
    }

    exports.__require = __require;
    exports.__define = __define;

}

makeAMD(shared);

define = shared.__define || define;
require = shared.__require || require;

define( 'cardType', [], function () {
    "use strict";

    var shortestPermittedCardLength;

    var CardType = {};
    CardType.__NO_BRAND = 'noBrand';

    CardType.cards = [];

    var mc = {cardType: "mc", startingRules: [51, 52, 53, 54, 55, 22, 23, 24, 25, 26, 27], permittedLengths : [16], pattern:/^(5[1-5][0-9]{0,14}|2[2-7][0-9]{0,14})$/, securityCode: "CVC"};
    CardType.cards.push(mc);

    var visadankort = {cardType: "visadankort", startingRules: [4571], permittedLengths: [16], pattern:/^(4571)[0-9]{0,12}$/};
    CardType.cards.push(visadankort);

    var visa = {cardType: "visa", startingRules : [4], permittedLengths: [13, 16, 19], pattern:/^4[0-9]{0,18}$/, securityCode : "CVV"};
    // var visa = {cardType: "visa", startingRules : [4], permittedLengths: [13, 16, 19], pattern:/^(4\d|5[0678]|6[024]|7[034]|97)(\d)\d{0,16}$/, securityCode : "CVV"};// new, from android v2
    CardType.cards.push(visa);

    var amex = {cardType: "amex", startingRules: [34,37], permittedLengths: [15], pattern:/^3[47][0-9]{0,13}$/, securityCode: "CID"};
    CardType.cards.push(amex);

    var vias = {cardType: "vias", startingRules : [9], permittedLengths: [16]};
    CardType.cards.push(vias);

    var diners = {cardType: "diners", startingRules: [36], permittedLengths: [14], pattern:/^(36)[0-9]{0,12}$/};
    CardType.cards.push(diners);

    var maestrouk = {cardType: "maestrouk", startingRules: [6759], permittedLengths: [16, 18, 19], pattern:/^(6759)[0-9]{0,15}$/};
    CardType.cards.push(maestrouk);

    var solo = {cardType: "solo", startingRules: [6767], permittedLengths: [16, 18, 19], pattern:/^(6767)[0-9]{0,15}$/};
    CardType.cards.push(solo);

    var laser = {cardType: "laser", startingRules: [6304, 6706, 677117, 677120], permittedLengths: [16, 17, 18, 19], pattern: /^(6304|6706|6709|6771)[0-9]{12,15}$/, cvcIsOptional: true};//TODO Confirm pattern
    CardType.cards.push(laser);

    var discover = {cardType: "discover", startingRules: [6011, 644, 645, 646, 647, 648, 649, 65], permittedLengths : [16], pattern:/^(6011[0-9]{0,12}|(644|645|646|647|648|649)[0-9]{0,13}|65[0-9]{0,14})$/};
    CardType.cards.push(discover);

    var jcb = {cardType: "jcb", startingRules: [3528, 3529, 353, 354, 355, 356, 357, 358], permittedLengths: [16,19], pattern:/^(352[8,9]{1}[0-9]{0,15}|35[4-8]{1}[0-9]{0,16})$/, securityCode: "CAV"};
    CardType.cards.push(jcb);

    var bcmc = {cardType: "bcmc", startingRules: [6703, 479658, 606005], permittedLengths: [16, 17, 18, 19], pattern:/^((6703)[0-9]{0,15}|(479658|606005)[0-9]{0,13})$/};
    CardType.cards.push(bcmc);

    var bijcard = {cardType: "bijcard", startingRules: [5100081], permittedLengths: [16], pattern:/^(5100081)[0-9]{0,9}$/};
    CardType.cards.push(bijcard);

    var dankort = {cardType: "dankort", startingRules: [5019], permittedLengths: [16], pattern:/^(5019)[0-9]{0,12}$/};
    CardType.cards.push(dankort);

    var hipercard = {cardType: "hipercard", startingRules: [606282], permittedLengths: [16], pattern:/^(606282)[0-9]{0,10}$/};
    CardType.cards.push(hipercard);

    var maestro = {cardType: "maestro", startingRules: [50, 56, 57, 58, 6], permittedLengths: [16, 17, 18, 19], pattern:/^(5[0|6-8][0-9]{0,17}|6[0-9]{0,18})$/, cvcIsOptional: true};// NOTE: this pattern doesn't recognise 50... as a maestro card, so added the '0|'
    CardType.cards.push(maestro);

    var elo = {cardType: "elo", startingRules: [506699, 50670, 50671, 50672, 50673, 50674, 50675, 50676, 506770, 506771, 506772, 506773, 506774, 506775, 506776, 506777, 506778, 401178, 438935, 451416, 457631, 457632, 504175, 627780, 636297, 636368, 651653, 506728, 509096, 509083, 509082, 655001, 650487, 509081, 509074, 509066, 431274, 438935, 457631, 457632, 506744, 506747, 506748, 506753, 509069, 650906, 506730, 509067, 655003, 509068], permittedLengths: [16], pattern:/^((((506699)|(506770)|(506771)|(506772)|(506773)|(506774)|(506775)|(506776)|(506777)|(506778)|(401178)|(438935)|(451416)|(457631)|(457632)|(504175)|(627780)|(636368)|(636297))[0-9]{0,10})|((50676)|(50675)|(50674)|(50673)|(50672)|(50671)|(50670))[0-9]{0,11})$/};
    CardType.cards.push(elo);

    var uatp = {cardType: "uatp", startingRules: [1], permittedLengths: [15], pattern:/^1[0-9]{0,14}$/, cvcIsOptional: true};
    CardType.cards.push(uatp);

    var cup = {cardType: "cup", startingRules: [62], permittedLengths: [14, 15, 16, 17, 18, 19], pattern:/^(62)[0-9]{0,17}$/};
    CardType.cards.push(cup);

    var cartebancaire = {cardType: "cartebancaire", startingRules: [4, 5, 6], permittedLengths: [16], pattern:/^[4-6][0-9]{0,15}$/};
    // var cartebancaire = {cardType: "cartebancaire", startingRules: [4, 5, 6], permittedLengths: [16], pattern:/^(18|3[07]|4\d|5[0-68]|6[2379]|92)(\d)\d{0,13}$/};// new, from android v2
    CardType.cards.push(cartebancaire);

    var visaalphabankbonus = {cardType: "visaalphabankbonus", startingRules: [450903], permittedLengths: [16], pattern:/^(450903)[0-9]{0,10}$/};
    CardType.cards.push(visaalphabankbonus);

    var mcalphabankbonus = {cardType: "mcalphabankbonus", startingRules: [510099], permittedLengths: [16], pattern:/^(510099)[0-9]{0,10}$/};
    CardType.cards.push(mcalphabankbonus);

    var hiper = {cardType: "hiper", startingRules: [637095, 637599, 637609, 637612], permittedLengths: [16], pattern:/^(637095|637599|637609|637612)[0-9]{0,10}$/};
    CardType.cards.push(hiper);

    var oasis = {cardType: "oasis", startingRules: [982616], permittedLengths: [16], pattern:/^(982616)[0-9]{0,10}$/, cvcIsOptional: true};
    CardType.cards.push(oasis);

    var karenmillen = {cardType: "karenmillen", startingRules: [98261465], permittedLengths: [16], pattern:/^(98261465)[0-9]{0,8}$/, cvcIsOptional: true};
    CardType.cards.push(karenmillen);

    var warehouse = {cardType: "warehouse", startingRules: [982633], permittedLengths: [16], pattern:/^(982633)[0-9]{0,10}$/, cvcIsOptional: true};
    CardType.cards.push(warehouse);

    var mir = {cardType: "mir", startingRules: [220], permittedLengths: [16, 17, 18, 19], pattern:/^(220)[0-9]{0,16}$/};
    CardType.cards.push(mir);

    var codensa = {cardType: "codensa", startingRules: [590712], permittedLengths: [16], pattern:/^(590712)[0-9]{0,10}$/};
    CardType.cards.push(codensa);


    CardType.detectCard = function(pCardNumber, pAvailableCards){

        var matchedCards, i, len;

        if(pAvailableCards){

            // Filter CardType.cards down to those that are found in pAvailableCards
            matchedCards = CardType.cards.filter(function(card){
                return pAvailableCards.includes(card.cardType);
            }).filter(function(card){
                // Further filter them to those with a regEx pattern that matches pCardNumber
                return (card.hasOwnProperty('pattern') && pCardNumber.match(card.pattern));
            });

            // If we have matched cards: if there's only one - return it; else return the one with the longest startingRule
            if(matchedCards.length){

                if(matchedCards.length === 1){
                    return matchedCards[0];
                }

                // Find longest rule for each matched card & store it as a property on the card
                for(i = 0, len = matchedCards.length; i < len; i++){

                    if(!matchedCards[i].longestRule){
                        var longestRule = matchedCards[i].startingRules.reduce(function (a, b) { return a > b ? a : b; });
                        // What we actually store is how many chars are in the rule
                        matchedCards[i].longestRule = String(longestRule).length;
                    }
                }

                // Based on each matched cards longest rule - find the card with the longest one!
                var cardWithLongestRule = matchedCards.reduce(function(a, b){ return a.longestRule >= b.longestRule ? a : b; });

                return cardWithLongestRule;

            }

            return {cardType : CardType.__NO_BRAND};
        }

        return {cardType : CardType.__NO_BRAND};
    };

    CardType.detectCardLength = function(pCard, pUnformattedVal){

        var maxLength, shortenedNewValue, lengthDiff = 0, reachedValidLength = false, trimTrailingSpace = false;

        // Find the longest of the permitted card number lengths for this card brand
        var maxPermittedLength = (pCard.cardType !== CardType.__NO_BRAND)? pCard.permittedLengths[pCard.permittedLengths.length - 1] : 0;

        // If the input value is longer than it's max permitted length then shorten it to that length
        if(maxPermittedLength && pUnformattedVal > maxPermittedLength){

            lengthDiff = pUnformattedVal.length - maxPermittedLength;

            if(lengthDiff > 0){

                pUnformattedVal = pUnformattedVal.substring( 0, ( pUnformattedVal.length - lengthDiff ) );
                shortenedNewValue = pUnformattedVal;
            }
        }

        // If cardNumber has reached one of the cardBrand's 'permitted lengths' - mark it as 'valid'
        pCard.permittedLengths.forEach(function(pItem){

            if(pUnformattedVal.length === pItem){

                reachedValidLength = true;
            }
        });

        // If cardNumber is as long as the cardBrand's maximum permitted length then set the maxLength var
        if(pUnformattedVal.length === maxPermittedLength){

            // Set maxlength to max + the right amount of spaces (one for every 4 digits, but not on the last block)
            var div = Math.floor(pUnformattedVal.length / 4);
            var mod = pUnformattedVal.length % 4;
            var numSpaces = (mod > 0)? div : div - 1;

            maxLength = maxPermittedLength + numSpaces;

            if(pCard.cardType.toLowerCase() === 'amex'){
                maxLength = maxPermittedLength + 2;// = 17 = 15 digits with space after 4th & 10th
            }

            // If cardNumber is the length of the longest of cardBrand's 'permitted lengths'
            // - set the flag to trim the trailing space when we format the string
            trimTrailingSpace = true;
        }

        return {
            shortenedNewValue : shortenedNewValue,
            maxLength : maxLength,
            reachedValidLength : reachedValidLength,
            trimTrailingSpace : trimTrailingSpace
        };
    };

    CardType.getShortestPermittedCardLength = function(){

        if(!shortestPermittedCardLength){

            var permittedLengthsArray = [];

            CardType.cards.forEach( function(pItem){

                permittedLengthsArray = permittedLengthsArray.concat(pItem.permittedLengths);

            });

            shortestPermittedCardLength = Math.min.apply(null, permittedLengthsArray);
        }

        return shortestPermittedCardLength;
    };

    CardType.getCardByBrand = function(pBrand){

        var cardType = CardType.cards.filter(function(card){
            return card.cardType === pBrand;
        });

        return cardType[0];
    };

    return CardType;
} );
/* global define */
define( 'luhnCheck', [], function () {

    "use strict";
    var that = {};

    var luhnCache = {};

    /**
     *
     * @param pNum [String] - unformatted number
     * @returns Boolean
     */
    that.checkNumber = function(pNum){

        var CardNumber = pNum;

        if ( isNaN( parseInt( CardNumber, 10 ) ) ) {
            return false;
        }

        var no_digit = CardNumber.length;
        var oddoeven = no_digit & 1;
        var sum = 0;

        if (typeof luhnCache[CardNumber] === "undefined") {

            for ( var count = 0; count < no_digit; count++ ) {
                var digit = parseInt( CardNumber.charAt( count ), 10 );
                if ( ! ( ( count & 1 ) ^ oddoeven ) ) {
                    digit *= 2;
                    if ( digit > 9 ){
                        digit -= 9;
                    }
                }
                sum += digit;
            }

            if ( sum % 10 === 0 ) {
                luhnCache[CardNumber] = true;
            } else {
                luhnCache[CardNumber] = false;
            }
        }

        var luhnCacheTries = 0;

        for (var i in luhnCache) {
            if (luhnCache.hasOwnProperty(i) && i.length === no_digit) {
                luhnCacheTries++;
            }
        }

        return luhnCache[CardNumber];
    };

    return that;
} );
define( 'Constants', [], function () {

    "use strict";
    var constants = {};

    // Constants matching the data-hosted-ids used in the html to identify hosted input field holders
    // These coincide with the ids of the inputs in the iframe html
    constants.__HOSTED_NUMBER_FIELD_STR = 'encryptedCardNumber';//'hostedCardNumberField';
    constants.__HOSTED_DATE_FIELD_STR = 'encryptedExpiryDate';//'hostedExpiryDateField';
    constants.__HOSTED_MONTH_FIELD_STR = 'encryptedExpiryMonth';//'hostedExpiryMonthField';
    constants.__HOSTED_YEAR_FIELD_STR = 'encryptedExpiryYear';//'hostedExpiryYearField';
    constants.__HOSTED_CVC_FIELD_STR = 'encryptedSecurityCode';//'hostedSecurityCodeField';

    constants.__EXPIRY_MONTH_STR = 'expiryMonth';
    constants.__EXPIRY_YEAR_STR = 'expiryYear';

    return constants;
} );
'use strict';


/* global __define */
define('Util', [], function () {

    var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

    var Util = {};

    Util._isArray = function (prop) {
        return (typeof prop === 'undefined' ? 'undefined' : _typeof(prop)) === "object" && prop !== null && Object.prototype.toString.call(prop) === "[object Array]";
    };

    Util._contains = function (haystack, needle) {
        if (typeof haystack === "undefined") {
            return false;
        }
        if (typeof haystack === "string") {
            return haystack.indexOf(needle) > -1;
        }
        if (Util._isArray(haystack)) {
            for (var c = haystack.length; c-- > 0;) {
                if (haystack[c] === needle) {
                    return true;
                }
            }
        }
        return haystack.hasOwnProperty && haystack.hasOwnProperty(needle);
    };

    Util._capitaliseFirstLetter = function ( string ) {
        return string.charAt( 0 ).toUpperCase() + string.slice( 1 );
    };

    return Util;
});
/* global adyen, __define, __require, _a$isValidExpiryDate */
define( 'DOM', ['Util'], function (Util) {
    "use strict";
    var DOM = {};

    DOM._select = function ( root, selector ) {

        if(!root){
            return [];
        }

        // Convert NodeList to array
        if(typeof root.querySelectorAll === "function"){
            return [].slice.call( root.querySelectorAll( selector ) );
        }

        // ELSE... IE8 - to convert StaticNodeList to array, from: https://jsperf.com/nodelist-to-array-ie8-compatible
        var arr = [];
        var n = root.querySelectorAll( selector );
        for(var z = n.length; z--;){
            arr.unshift(n[z]);
        }
        return arr;
    };

    DOM._selectOne = function ( root, selector ) {

        if(!root){
            return undefined;
        }

        return root.querySelector( selector );
    };

    DOM._closest = function ( node, selectorString ) {

        // Closest function that CAN match on attribute
        // New fny re. https://gomakethings.com/climbing-up-and-down-the-dom-tree-with-vanilla-javascript/
        // Element.matches() polyfill
        if (!Element.prototype.matches) {
            Element.prototype.matches =
                Element.prototype.matchesSelector ||
                Element.prototype.mozMatchesSelector ||
                Element.prototype.msMatchesSelector ||
                Element.prototype.oMatchesSelector ||
                Element.prototype.webkitMatchesSelector ||
                function(s) {
                    var matches = (this.document || this.ownerDocument).querySelectorAll(s),
                        i = matches.length;
                    while (--i >= 0 && matches.item(i) !== this) {}
                    return i > -1;
                };
        }

        // Get closest match
        for ( ; node && node !== document; node = node.parentNode ) {
            if ( node.matches( selectorString ) ){
                return node;
            }
        }

        return null;
    };

    DOM._hasClass = function (node, cssClass) {
        if (!node || !node.className) {
            return false;
        }
        return Util._contains(node.className.split(/\s+/), cssClass);
    };

    DOM._createEncryption = function(pNode, pRandomBytes){

        var options = {enableValidations : true};

        options.randomBytes = pRandomBytes || null;

        // Create Encryption object directly, since we're only dealing with a single field, and store the result on the node
        var encryptionObj = pNode.cse = pNode.cse || adyen.createEncryption(options);
        return encryptionObj;
    };

    DOM._getEncryptedData = function ( pNode, pCseKey, pGenTime ) {

        var res = {}, data = {};

        var attr = pNode.getAttribute('data-encrypted-name');

        if( !attr || attr === '' ){
            res.error = '"data-encrypted-name" attribute not set on node';
            return res;
        }

        data[attr] = pNode.value;

        // Create Encryption object
        var encryptionObj = pNode.cse; // = pNode.cse || DOM._createEncryption(pNode);
        if(!encryptionObj){
            encryptionObj = DOM._createEncryption(pNode);
        }

        var validationResult = encryptionObj.validate(data);// result of validation on field, before we add the generationtime

        data.generationtime = pGenTime;

        try{

            // Call encryptionObj.encrypt() to get form data as serialised, encrypted JSON
            var encryption = encryptionObj.encrypt( data );

            if (encryption === "false" || encryption === false) {
                if(_b$dl && window.console && window.console.log){
                    window.console.log('### DOM::_getEncryptedFormData:: CSE FAILED!!!!: validationResult=',validationResult);
                }

                // FOR NUMBER THE FAILURE IS A COMBINATION OF NOT LONG ENOUGH (10 - 20 CHARS) & FAILED LUHN CHECK

                if(validationResult.hasOwnProperty('luhn')){

                    res.luhn = false;

                }else if(validationResult.hasOwnProperty('cvc')){

                    res.cvc = false;

                }else if(validationResult.hasOwnProperty('year')){

                    res.date = false;
                }

                res.encryptionSuccess = false;

            }else{

                if(_b$dl && window.console && window.console.log){
                    window.console.log('### DOM::_getEncryptedFormData:: encryptionSuccess!!!!');
                }

                res.encryptionSuccess = true;

                res[pCseKey] = encryption;
            }

        }catch (e) {

            if(_b$dl && window.console && window.console.log){
                window.console.log('### DOM::_getEncryptedFormData:: Encryption error:',e);
            }

            // re. https://github.com/bitwiseshiftleft/sjcl/issues/206
            // & https://github.com/bitwiseshiftleft/sjcl/issues/77
            // & https://github.com/bitwiseshiftleft/sjcl/wiki/Symmetric-Crypto#seeding-the-generator
            var errStr = String(e);
            if(errStr && errStr.toLowerCase().indexOf("not ready") > -1 && errStr.toLowerCase().indexOf("seeded") > -1){
                if(window.console && window.console.warn){
                    window.console.warn('### DOM::_getEncryptedData:: IE error!!!!! Not enough entropy generated to allow encryption process');
                }
            }
        }

        return res;
    };


    DOM._getAttribute = function ( node, attribute ) {

        if(!node){
            return;
        }
        return node.getAttribute( attribute ) || '';
    };

    DOM._on = function ( node, event, callback, useCapture ) {
        if ( typeof node.addEventListener === "function" ) {
            node.addEventListener( event, callback, useCapture );
        } else {
            if ( node.attachEvent ) {
                node.attachEvent( "on" + event, callback );
            } else {
                throw new Error( ": Unable to bind " + event + "-event" );
            }
        }
    };

    DOM._getEventTarget = function ( e ) {
        //http://www.quirksmode.org/js/events_properties.html
        if ( !e ) {
            e = window.event || {};
        }
        var targ = e.target || e.srcElement || {};
        if ( targ.nodeType === 3 ) {// defeat Safari bug
            targ = targ.parentNode;
        }
        return targ;
    };

    DOM._getNodeAndId = function(e){

        var node = DOM._getEventTarget(e);
        var nodeId = DOM._getAttribute(node, 'id');

        return {node: node, id : nodeId};
    };

    return DOM;
} );
/* global define, require, adyen, console*/
define('fireEvent',
    [],
    function(){

        "use strict";

        var decorator = function(that, pWho){

            /**
             * @function Takes an HTML node & fires an event of a specified type on it
             * @param pElem - HTML node
             * @param pEventType - event to fire on the HTML node
             */
            that.fireEvent = function(pElem, pEventType){

                var event;
                try{
                    // Chrome, Edge (14)
                    event = new Event(pEventType);
                }catch(e){
                    // IE >= 10
                    if(document.createEvent){
                        event = document.createEvent('Event');
                        event.initEvent(pEventType, false, false);
                    }else{
                        pElem.fireEvent('on' + pEventType);
                        return;
                    }
                }
                pElem.dispatchEvent(event);
            };

            return that;
        };

        return decorator;
    });
/* global adyen, define, require, __logVal, __logVal2, _b$dl */
define( 'validationUtils', [], function () {
    "use strict";

    function isIE () {
        var myNav = navigator.userAgent.toLowerCase();
        return (myNav.indexOf('msie') !== -1) ? parseInt(myNav.split('msie')[1]) : false;
    }

    var Utils = {};

    Utils.__DELETE_OR_BACKSPACE = 'delete';
    Utils.__X_KEY = 'xKeyPressed';
    Utils.__IS_ANDROID = /(android)/i.test(navigator.userAgent);
    Utils.__IS_IE = isIE();
    Utils.__IS_IPHONE = /(iphone)/i.test(navigator.userAgent);

    if(_b$dl && window.console && window.console.log){
        window.console.log('### validationUtils:::: isAndroid=',Utils.__IS_ANDROID);
        window.console.log('### validationUtils:::: isIE=',Utils.__IS_IE);
        window.console.log('### validationUtils:::: __IS_IPHONE=',Utils.__IS_IPHONE);
    }

    //////////////////////// KEY HANDLING ////////////////////////////

    // number, date, cvc
    Utils.handleKeyPress = function(e){

        if( (__logVal || __logVal2) && window.console && window.console.log){
            window.console.log('### validationUtils::handleKeyPress::(line:20):: e=',e);
        }

        if (e.key !== undefined) {

            return __getKeyCode(e.key, 'key');

        } else if (e.code !== undefined && e.code !== '') {

            return __getKeyCode(e.code, 'code');

        } else if (e.keyCode >= 0) {

            return __getKeyCode(e.keyCode, 'keyCode');

        }else if (e.which !== undefined) {

            return __getKeyCode(e.which, 'which');

        }

        // Cannot detect key press
        return false;
    };

    // private
    var __getKeyCode = function(pKeyVal, pKeyType){

        switch(pKeyType){

            case 'key':
            case 'code':

                if(pKeyVal === 'Backspace' || pKeyVal === 'Delete'){
                    return Utils.__DELETE_OR_BACKSPACE;
                }

                if(pKeyVal === 'ArrowLeft'){
                    return 'leftarrow';
                }

                if(pKeyVal === 'ArrowRight'){
                    return 'rightarrow';
                }

                if(pKeyVal === ' ' || pKeyVal === 'Space'){
                    return 'space';
                }

                if(pKeyVal === 'Shift' || pKeyVal === 'ShiftRight' || pKeyVal === 'ShiftLeftt'){
                    return 'shift';
                }

//                if(pKeyVal === 'x' || pKeyVal === 'KeyX'){
//                    return Utils.__X_KEY;
//                }

               // if(pKeyVal === '/' || pKeyVal === 'Slash'){
               //     return 'slash';
               // }

                // With some combinations of Android & Chrome versions KeyboardEvent .key registers as 'Unidentified'
                // &/or .code registers as an empty string whilst both .keyCode & .which get the value 229.
                // re. https://www.outsystems.com/blog/javascript-events-unmasked-how-to-create-input-mask-for-mobile.html
                // So map it to a identifiable string
                if(pKeyVal === 'Unidentified'){
                    return 'androidkeystroke';
                }

                return pKeyVal;

            case 'keyCode':
            case 'which':

                if(pKeyVal === 8 || pKeyVal === 46){
                    return Utils.__DELETE_OR_BACKSPACE;
                }

                if(pKeyVal === 37){
                    return 'leftarrow';
                }

                if(pKeyVal === 39){
                    return 'rightarrow';
                }

                if(pKeyVal === 32){
                    return 'space';
                }

                if(pKeyVal === 16){
                    return 'shift';
                }

                if(pKeyVal === 229){
                    return 'androidkeystroke';
                }

//                if(pKeyVal === 88){
//                    return Utils.__X_KEY;
//                }

               // if(pKeyVal === 191){
               //     return 'slash';
               // }

                return String.fromCharCode(pKeyVal);

            default:
                return pKeyVal;
        }
    };
    //------------------------ end KEY PRESS HANDLING ---------------------------


    /////////////////// CARET & SELECTION DETECTION ////////////////////////////

    // number

    // Concatenates current input value with the key just pressed, taking into account caret position
    Utils.getNextValue = function(pNode, pCurrentVal, pKeyPressed, pSelection){

        var valPart1, valPart2;

        var nextValue = pCurrentVal + pKeyPressed;

        var caretPos = Utils.getCaretPos(pNode);

        if(caretPos !== pNode.value.length){

            valPart1 = pCurrentVal.substring(0, caretPos);

            valPart2 = pCurrentVal.substring(caretPos + pSelection.length);// pSelection.length = 0 if nothing selected

            if(__logVal && window.console && window.console.log){
                window.console.log('### validationUtils::__getNextValue:: valPart1=',valPart1);
                window.console.log('### validationUtils::__getNextValue:: valPart2=',valPart2);
            }

            nextValue = valPart1 + pKeyPressed  + valPart2;
        }

        return nextValue;
    };

    // number , date
    Utils.getCaretPos = function(pNode, pGetEnd){

        var selectionPos = (pGetEnd === true)? 'selectionEnd' : 'selectionStart';

//        var endPoint = (pGetEnd === true)? 'startToEnd' : 'EndToStart';
        var endPoint = 'EndToStart';// IE8 always 'EndToStart'

        if(selectionPos in pNode){

            // EVERYONE ELSE - inc. IE9+
            return pNode[selectionPos];

        }else if(document.selection){

            // ONLY IE8

            pNode.focus();

            var r = document.selection.createRange();
            if (r === null) {
                return 0;
            }

            var re = pNode.createTextRange(),
                rc = re.duplicate();
            re.moveToBookmark(r.getBookmark());
            rc.setEndPoint(endPoint, re);

            return rc.text.length;
            //--
        }

        return 0;
    };


    // number
    // Place caret in particular position
    // OR, if pSelectionEnd specified & different to pSelectionStart, create selection
    Utils.setSelectionRange = function(pNode, pSelectionStart, pSelectionEnd) {

        var range, selectionEnd = pSelectionEnd || pSelectionStart;

        if (pNode.setSelectionRange) {
            // EVERYONE ELSE - inc. IE9+
            pNode.focus();
            pNode.setSelectionRange(pSelectionStart, selectionEnd);
        }
        else if (pNode.createTextRange) {
            // IE8
            range = pNode.createTextRange();
            range.collapse(true);
            range.moveEnd('character', selectionEnd);
            range.moveStart('character', pSelectionStart);
            range.select();
        }
//        else{
//            pNode.focus();
//            range = document.createRange();
//            range.setStart(pNode, pSelectionStart);
//            range.setEnd(pNode, selectionEnd);
//            var sel = window.getSelection();
//            sel.removeAllRanges();
//            sel.addRange(range);
//        }
    };

    // number
    // Detect if input has selected text - returning either number (to act as boolean) or selected text
    Utils.hasSelectedText = function(pNode, pReturnSelection){

        var text = '';

        if('selectionStart' in pNode){
            // EVERYONE ELSE - inc. IE9+
            text = pNode.value.substring(pNode.selectionStart, pNode.selectionEnd);
            //            return pNode.selectionStart !== pNode.selectionEnd;

//        }else if (typeof window.getSelection !== "undefined"){
//
//            text = window.getSelection().toString();

        }else if(document.selection){
            // IE8
            text = document.selection.createRange().text;
        }

        return (pReturnSelection)? text : text.length;
    };
    //------------------ END CARET & SELECTION DETECTION ---------------------------

    return Utils;
} );
/* global define, require, __logVal2, chckt, _b$dl*/
define( 'validationsCCNumber', ['validationUtils', 'cardType', 'luhnCheck'], function (ValUtils, CardType, LuhnCheck) {
    "use strict";

    var ccNum = {};

    //-- new vars for new validation
    var __isValidCardNumber = false;
    var __deleteKeyPressed = false;
    var __action = '';
    var __SEPARATOR = ' ';
    var __isAmex = false;
    var __oldValue = '';
    var __oldCursor;
    var __newCursorPosition = 0;
    var __oldBinValue = '';

    var mask = function(value) {

            if(__logVal2 && window.console && window.console.log){
                window.console.log('\n### validationsCCNumber2::mask:: value=',value);
                window.console.log('### validationsCCNumber2::mask:: __isAmex=',__isAmex);
            }

            var repStr = '$1' + __SEPARATOR;
            var repStr2 = '$1' + __SEPARATOR + '$2' + __SEPARATOR;

            // Regular cards
            var result = value.replace(/(\d{4})/g, repStr);

            if(__isAmex){

                if(value.length >= 8){

                    // Only put space after first 4 digits i.e. not global
                    result = value.replace(/(\d{4})/, repStr);
                }

                if(value.length >= 10){

                    result = value.replace(/(\d{4})(\d{6})/g, repStr2);
                }
            }

            return result;
        },

        unmask = function(value) {

            var output = value.replace(/[^\d]/g, ''); // Remove every non-digit character
            return output;
        },

        // Check how many separators the string has before the cursor position
        checkSeparator = function(position) {

            var numSeps = 0;

            // Regular cards
            if(!__isAmex){

                numSeps = Math.floor(position / 5);// 5 = separator position

            }else{

                if(position >= 5 ){
                    numSeps = 1;
                }
                if(position >= 12 ){
                    numSeps = 2;
                }
            }

            if(__logVal2 && window.console && window.console.log){
                window.console.log('\n### validationsCCNumber2::checkSeparator:: position=',position);
                window.console.log('### validationsCCNumber2::checkSeparator:: __isAmex=',__isAmex);
                window.console.log('### validationsCCNumber2::checkSeparator:: numSeps=',numSeps);
            }
            return numSeps;
        },

        lastChar = function(str){
            return str.charAt(str.length - 1);
        },

        stripLastChar = function(str){
            return str.substr(0, str.length - 1);
        };

    /////////////////////// KEYDOWN LISTENER //////////////////////////////////////
    ccNum.keyDownCCNumber = function(e, pNode){

        __oldValue = pNode.value;
        __oldCursor = ValUtils.getCaretPos(pNode, true);

        var keyPressed = ValUtils.handleKeyPress(e);
        __deleteKeyPressed = (keyPressed === ValUtils.__DELETE_OR_BACKSPACE);

        // __isValidCardNumber = false;

        __action = keyPressed;

        if(__logVal2 && window.console && window.console.log){
            window.console.log('\n--------------------');
            window.console.log('### validationsCCNumber2::keyDownCCNumber:: __oldValue=',__oldValue);
            window.console.log('### validationsCCNumber2::keyDownCCNumber:: __oldValue.length=',__oldValue.length);
            window.console.log('### validationsCCNumber2::keyDownCCNumber:: __oldCursor=',__oldCursor);
            window.console.log('### validationsCCNumber2::keyDownCCNumber:: __deleteKeyPressed=',__deleteKeyPressed);
        }
    };
    //-------------------------- end KEYDOWN LISTENER --------------------------------


    /////////////////////// INPUT LISTENER - primary validation routine //////////////////////////////////////
    ccNum.inputCC = function(e, pNode, pCardGroupTypes){

        __isValidCardNumber = false;

        var currentVal = pNode.value,
            currentValueStripped = unmask(currentVal),
            newValue,
            reachedValidLength = false,
            trimTrailingSpace = false;

        __newCursorPosition = void 0;

        var cardGroupTypes = pCardGroupTypes || [];

        var commObj = {};

        if(__logVal2 && window.console && window.console.log){
            window.console.log('\n### validationsCCNumber2::inputCC:: currentVal=',currentVal);
            window.console.log('### validationsCCNumber2::inputCC:: currentValueStripped=',currentValueStripped);
        }


        // CARD BRAND DETECTION
        var card;

        // If we're dealing with a non-consolidated card i.e. securedFields decidcated to a single txVariant then just retrieve that single card object
        if(chckt.nonConsolidatedCard !== ''){

            card = CardType.getCardByBrand(chckt.nonConsolidatedCard);

        }else{

            // Sending in first part of value for brand detection means that brand detection still works if the shopper has
            // pasted in a number that is too long for the brand - we can then use detected brand to truncate the number
            card = CardType.detectCard(currentValueStripped.substr(0,7), cardGroupTypes);

            if(__logVal2 && window.console && window.console.log) {
                window.console.log( '### validationsCCNumber2::inputCC:: DETECTING CARD BASED ON=', currentValueStripped.substr( 0, 7 ) );
            }
        }


        __isAmex = (card.cardType.toLowerCase() === 'amex');

        if(__logVal2 && window.console && window.console.log){
            window.console.log('### validationsCCNumber2::inputCC:: card2.cardType=',card.cardType);
            window.console.log('### validationsCCNumber2::inputCC:: __isAmex=',__isAmex);
        }

        // REFORMAT VALUE
        newValue = mask(currentValueStripped);

        if(__logVal2 && window.console && window.console.log){
            window.console.log('### validationsCCNumber2::inputCC:: newValue (masked)=',newValue, ' length=',newValue.length);
        }


        // SET NEW CURSOR POS
        __newCursorPosition = __oldCursor - checkSeparator(__oldCursor) + checkSeparator(__oldCursor + (newValue.length - __oldValue.length)) + (unmask(newValue).length - unmask(__oldValue).length);

        if(__logVal2 && window.console && window.console.log){
            window.console.log('\n### validationsCCNumber2::inputCC:: __newCursorPosition=',__newCursorPosition);
        }


        // Reset maxLength var
        pNode.maxLength = 24;

        // CARD NUMBER MAX LENGTH DETECTION
        if(card.cardType !== CardType.__NO_BRAND){

            var cardLengthObj = CardType.detectCardLength(card, currentValueStripped);

            newValue = (cardLengthObj.shortenedNewValue)? mask(cardLengthObj.shortenedNewValue) : newValue;
            pNode.maxLength = cardLengthObj.maxLength || pNode.maxLength;
            reachedValidLength = cardLengthObj.reachedValidLength;
            trimTrailingSpace = cardLengthObj.trimTrailingSpace;

            // Give feedback: brand found
            commObj = __errorOnField(false, pNode, '', commObj);
            commObj = __setCardBrand(card.cardType, pNode, pCardGroupTypes, card.cvcIsOptional || false, commObj);
            commObj = __setCVCElement(card.cardType, pNode, pCardGroupTypes, card.securityCode, commObj);

        }else{

            // NEW FNY:
            // No brand detected - but maybe it will pass luhn check...

            commObj = __clearBrandAndCVC(pNode, cardGroupTypes, commObj);

            commObj = __errorOnField(false, pNode, '', commObj);

            // ...so if number is as long as the minimum possible card number length
            if( currentValueStripped.length >= CardType.getShortestPermittedCardLength() ){

                reachedValidLength = true;
            }
        }

        // If card number is at the correct length we declare it 'valid'.
        // This will make it eligible for encryption (though it may yet fail the Luhn check in the encryption process)
        if(reachedValidLength){
            __isValidCardNumber = true;
            if(__logVal2 && window.console && window.console.log){
                window.console.log('### validationsCCNumber2::inputCC:: __isValidCardNumber=',__isValidCardNumber);
            }
        }

        // WRITE NEW VALUE TO INPUT FIELD, possibly stripping off last 'separator' char
        if(newValue !== ""){

            // If we're deleting from the end of the string and the value after formatting ends in the separator...
            // ...delete the separator
            if(__deleteKeyPressed && __newCursorPosition === newValue.length && lastChar(newValue) === __SEPARATOR){
                if(__logVal2 && window.console && window.console.log){
                    window.console.log('### validationsCCNumber2::inputCC:: del/ends in sep/cursor at end');
                }

                newValue = stripLastChar(newValue);
            }

            // If our search for card brand has revealed that the card number is the length of the
            // longest of the cardBrand's 'permitted lengths' and the value after formatting ends in the separator...
            // ...delete the separator
            if(trimTrailingSpace && lastChar(newValue) === __SEPARATOR){
                newValue = stripLastChar(newValue);
            }

            if(__logVal2 && window.console && window.console.log){
                window.console.log('### validationsCCNumber2::inputCC:: (OUTCOME 1) set new value=',newValue);
            }

            pNode.value = newValue;

        } else {
            if(__logVal2 && window.console && window.console.log){
                window.console.log('### validationsCCNumber2::inputCC:: (OUTCOME 2) clear field');
            }
            pNode.value = "";

            commObj = __errorOnField(false, pNode, '', commObj);
            commObj = __clearBrandAndCVC(pNode, cardGroupTypes, commObj);

            commObj.action = __action;
        }


        // FINALISE & SET CURSOR POSITION
        if(__newCursorPosition < 0){

            // Some deleting from start of string scenarios can lead __newCursorPosition to be < 0
            __newCursorPosition = 0;
            if(__logVal2 && window.console && window.console.log){
                window.console.log('### validationsCCNumber2::inputCC:: __newCursorPosition < 0, correcting to=',__newCursorPosition);
            }
        }

        // If __newCursorPosition isn't 0
        // OR it is because we've been deleting (in which case we might be wanting to leave cursor at start of input)
        if(__newCursorPosition || __deleteKeyPressed && __newCursorPosition === 0 ){

            if(__logVal2 && window.console && window.console.log){
                window.console.log('### validationsCCNumber2::inputCC:: SETTING CURSOR POS =',__newCursorPosition);
            }

            // Set new cursor position
            ValUtils.setSelectionRange(pNode, __newCursorPosition);
        }

        // Make sure no number info is propagated to the mainWindow
        if(__action.length === 1 && typeof parseInt(__action) === 'number'){
            __action = 'numberKeyPressed';
        }

        commObj.action = __action;

        // Add BIN to commObj
        var binValue = unmask(newValue).substr(0,6);
        if(__oldBinValue !== binValue){
            commObj.binValue = binValue;
            __oldBinValue = binValue;
        }

        if(__logVal2 && window.console && window.console.log){
            window.console.log('### validationsCCNumber2::inputCC:: RETURNING COMM OBJ = ',commObj);
        }

        return commObj;
    };
    //-------------------------- end INPUT LISTENER --------------------------------


    /////////////////////// KEYUP LISTENERS - specific for IE & Android //////////////////////////////////////

    // IE9 Runs an 'input' event listener for IE9 when delete key pressed
    // re. https://developer.mozilla.org/en-US/docs/Web/Events/input
    // --> [2] IE 9 does not fire an input event when the user deletes characters from an input (e.g. by pressing Backspace or Delete, or using the "Cut" operation).
    //
    // IE8 No input event - so run 'input' event listener from onKeyUp event instead EXCEPT for arrow keys & SHIFT key
    // (if arrow keys/shift trigger input event then formatting occurs and cursor is always forced to unwanted position)

    ccNum.keyUpCCNumberIE = function(e, pNode, pCardGroupTypes){

        // IE9
        if(__deleteKeyPressed && ValUtils.__IS_IE && ValUtils.__IS_IE === 9){
            return ccNum.inputCC(e, pNode, pCardGroupTypes);
        }

        // IE8
        if(ValUtils.__IS_IE && ValUtils.__IS_IE === 8){

            var keyPressed = ValUtils.handleKeyPress(e);

            if(keyPressed === 'leftarrow' || keyPressed === 'rightarrow' || keyPressed === 'shift'){
                return null;
            }

            return ccNum.inputCC(e, pNode, pCardGroupTypes);
        }

        return null;
    };


    // ONLY ADDED IF userAgent IS ANDROID
    // Needed for certain combinations of Android & Chrome re. https://github.com/text-mask/text-mask/issues/300
    // ("The caret moves incorrectly when passing over mask characters")
    ccNum.keyUpCCNumber = function(e, pNode){

        if(__newCursorPosition === pNode.value.length){

            if(__logVal2 && window.console && window.console.log){
                window.console.log('### validationsCCNumber2::keyUpCCNumber:: setting cursor pos =',__newCursorPosition);
            }
            ValUtils.setSelectionRange(pNode, __newCursorPosition);
        }
    };
    //-------------------------- end KEYUP LISTENER --------------------------------


    /////////////////// EXPOSED FUNCTIONS ///////////////////////////////////
    ccNum.isValidLength = function(pNode, pCardGroupTypes){

        var unformattedVal = unmask(pNode.value);

        var card = CardType.detectCard(unformattedVal, pCardGroupTypes);

        if(__logVal2 && window.console && window.console.log){
            window.console.log('@@@ validationsCCNumber2::isValidLength:: card.cardType=',card.cardType);
        }
        var reachedValidLength = false;

        if(card.cardType !== CardType.__NO_BRAND){

            // If cardNumber has reached one of the cardBrand's 'permitted lengths' - mark it as valid
            card.permittedLengths.forEach(function(pItem){

                if(unformattedVal.length === pItem){

                    reachedValidLength = true;
                }
            });

        }else{

            // No brand detected - but maybe it will pass luhn check...
            // ...so if number is as long as the minimum possible card number length
            if( unformattedVal.length >= CardType.getShortestPermittedCardLength() ){
                reachedValidLength = true;
            }

        }

        return reachedValidLength;
    };

    ccNum.doLuhnCheck = function(pNode, pCardGroupTypes){

        var commObj;

        var unformattedVal = unmask(pNode.value);

        var reachedValidLength = ccNum.isValidLength(pNode, pCardGroupTypes);

        // Do if we have a cardBrand &/or a number at a valid length)
        if(reachedValidLength){

            if(_b$dl && window.console && window.console.log){
                window.console.log('\n@@@ validationsCCNumber2::doLuhnCheck:: PERFORMING LUHN CHECK');
            }

            var res = LuhnCheck.checkNumber(unformattedVal);

            var checkError = (res)? '' : 'luhn check failed';

            commObj = {action : 'luhnCheck', error : checkError, valid : res};
        }

        return commObj;
    };

    // EXPOSED GETTER
    ccNum.getIsValidCardNumber = function(){
        return __isValidCardNumber;
    };


    ////////////////////////// UTILITIES /////////////////////////////////////////////
    var __errorOnField = function(pIsError, pNode, pStr, pCommObj){

        var obj = Object.assign({}, pCommObj);

        obj.error = pStr;

        return obj;
    };

    var __clearBrandAndCVC = function(pNode, pCardGroupTypes, pCommObj){

        var obj = Object.assign({}, pCommObj);

        obj = __setCardBrand(null, pNode, pCardGroupTypes, false, obj);
        obj = __setCVCElement(null, pNode, pCardGroupTypes, null, obj);

        return obj;
    };

    var __setCardBrand = function(pCardType, pNode, pCardGroupTypes, pCvcIsOptional, pCommObj){

        var obj = Object.assign({}, pCommObj);

        if(!pCardGroupTypes || pCardGroupTypes.length === 1){

            return obj;
        }

        var imageSrc = 'card@2x.png';

        if(pCardType !== null){
            imageSrc = pCardType + '@2x.png';
        }

        obj.brand = pCardType || 'card';
        obj.imageSrc = imageSrc;
        obj.cvcIsOptional = pCvcIsOptional;

        return obj;
    };

    var __setCVCElement = function(pCardType, pNode, pCardGroupTypes, pSecurityCodeText, pCommObj){

        var obj = Object.assign({}, pCommObj);

        if(!pCardGroupTypes || pCardGroupTypes.length === 1){

            return obj;
        }

        obj.maxLength = 3;// TODO: use this value to impose a maxLength on the <input> element?
        obj.cvcText = (pSecurityCodeText)? pSecurityCodeText : 'Security_code';

        if(pCardType === 'amex'){
            obj.maxLength = 4;
        }

        return obj;
    };

    return ccNum;
} );
/* global define, require, genTime, __logVal2 */
define( 'validationsCCDate', ['validationUtils'], function (ValUtils) {
    "use strict";

    var __deleteKeyPressed = false;
    var __action = '';

    var __isValidExpiryDate = false;

    var __SEPARATOR = '/';
    var __oldValue = '';
    var __oldCursor;
    var __newCursorPosition = 0;

    var __setCursorPosFlag = 0;

    var __slashKeyPressed = false;


    var mask = function(value) {

        var monthVal = value.substr(0,2);
        var yearVal = value.substr(2,4);

        if ( __logVal2 && window.console && window.console.log ) {
            window.console.log( '### validationsCCDate2::mask:: monthVal=',monthVal );
            window.console.log( '### validationsCCDate2::mask:: yearVal=',yearVal );
        }

        return (monthVal.length)? monthVal + __SEPARATOR + yearVal : '';
    };

    var unmask = function(value) {

        // Create month & year values
        var tempArr = value.split(__SEPARATOR);

        // Various delete/edit scenarios can create a tempArr with empty slots, so remove them
        var dateArr = [];
        tempArr.forEach(function(pItem){
            if(pItem !== ''){
                var strippedStr = pItem.replace(/[^\d]/g, '');
                dateArr.push(strippedStr);
            }
        });

        // Has both month and year entries...
        if(dateArr.length === 2){

            // ...but month entry is single digit (probably due to a delete action)
            if(dateArr[0].length === 1){

                // Take first digit from year & add it to month
                var firstYrDigit = dateArr[1].substr(0,1);
                dateArr[0] = dateArr[0] + firstYrDigit;
                // Actually strip first digit from year
                dateArr[1] = dateArr[1].substr(1);

                if ( __logVal2 && window.console && window.console.log ) {
                    window.console.log( '### validationsCCDate2::unmask:: M & Y but M is single digit' );
                }

                __setCursorPosFlag = 2;
            }
        }

        return dateArr;
    };

    // Check how many separators the string has before the cursor position
    var checkSeparator = function(position) {

        var numSeps = Math.floor(position / 3);// 3 = separator position

        if(__logVal2 && window.console && window.console.log){
            window.console.log('\n### validationsCCDate2::checkSeparator:: num of Seps=',numSeps);
        }
        return numSeps;
    };

    var lastChar = function(str){
        return str.charAt(str.length - 1);
    };

    var stripLastChars = function(str, pStripLen){

        var stripLen = pStripLen || 1;
        return str.substr(0, str.length - stripLen);
    };

    var getNewCursorPosition = function(pNewValue){

        return __oldCursor - checkSeparator(__oldCursor) + checkSeparator(__oldCursor + (pNewValue.length - __oldValue.length)) + (unmask(pNewValue).join('').length - unmask(__oldValue).join('').length);
    };

    var ccDate = {};


    /////////////////////// KEYDOWN LISTENER ////////////////////////////////////////
    ccDate.keyDownDate = function(e, pNode){

        __oldValue = pNode.value;
        __oldCursor = ValUtils.getCaretPos(pNode, true);

        var keyPressed = ValUtils.handleKeyPress(e);
        __deleteKeyPressed = (keyPressed === ValUtils.__DELETE_OR_BACKSPACE);

        __action = keyPressed;

        if ( __logVal2 && window.console && window.console.log ) {
            window.console.log( '\n### validationsCCDate2::keyDownDate:: keyPressed=',keyPressed );
        }
    };
    //-------------------------- end KEYDOWN LISTENER --------------------------------


    /////////////////////// INPUT LISTENER - primary validation routine //////////////////////////////////////
    ccDate.inputDate = function(e, pNode){

        var currentVal = pNode.value,
            currentValueArr = unmask(currentVal),
            newValue;

        __newCursorPosition = void 0;

        __isValidExpiryDate = false;

        // Detect if we have just one digit in the input and the shopper presses '/'
        __slashKeyPressed = false;
        if(__oldValue.length === 1 && lastChar(currentVal) === __SEPARATOR){
            __slashKeyPressed = true;
        }

        var resObj = {};

        var currentDate = getCurrentDate(genTime);


        if (__logVal2 &&  window.console && window.console.log ) {
            window.console.log( '\n### validationsCCDate2::inputDate:: __oldValue=',__oldValue );
            window.console.log( '### validationsCCDate2::inputDate:: currentVal=',currentVal );
            window.console.log( '### validationsCCDate2::inputDate:: __isValidExpiryDate=',__isValidExpiryDate );
            window.console.log( '### validationsCCDate2::inputDate:: currentValueArr=',currentValueArr );
        }


        var typedMonth, typedYear, fullYear, dateNum, monthNum, yearNum;

        typedMonth = currentValueArr[0] || '';
        typedYear = currentValueArr[1] || '';


        // Various situations can lead to this, e.g. User has just deleted the /, effectively creating a typedMonth with 3 or 4 chars
        if(typedMonth.length > 2){

            if (__logVal2 &&  window.console && window.console.log ) {
                window.console.log( '###FLAG!!! validationsCCDate2::inputDate:: typedMonth.length > 2' );
            }

            // Take last digits and any existing typedYear, then trim back to 2 digits
            typedYear = typedMonth.substr(2) + typedYear;
            typedYear = typedYear.substr(0, 2);

            // Take first 2 digits
            typedMonth = typedMonth.substr(0, 2);

            if ( __logVal2 && window.console && window.console.log ) {
                window.console.log( '### validationsCCDate2::inputDate:: typedMonth.length > 2 new typedMonth=',typedMonth );
                window.console.log( '### validationsCCDate2::inputDate:: typedMonth.length > 2 new typedYear=',typedYear );
            }
        }

        dateNum = Number(typedMonth);


        // If month is 2 - 9, prefix with 0
        // (if 0, do nothing | if 1 wait to see what the next char is)
        if(typedMonth.length === 1){

            if ( __logVal2 && window.console && window.console.log ) {
                window.console.log( '### FLAG!!! validationsCCDate2::inputDate:: typedMonth.length === 1' );
                window.console.log( '### validationsCCDate2::inputDate:: dateNum=',dateNum );
            }

            if( (dateNum >= 2 && dateNum <= 9) ||
                __slashKeyPressed // This is for situation where e.g. user has only typed '1', or deleted and left a single digit in the months 'field'
                                    // typing '/' (or arguably any key that isn't a number) should go to ==> 01/
            ){

                typedMonth = '0' + dateNum;

                if ( __logVal2 && window.console && window.console.log ) {
                    window.console.log( '### validationsCCDate2::inputDate:: ypedMonth.length === 1 new typedMonth=',typedMonth );
                }

            }
        }


        if(typedMonth.length === 2){

            if ( __logVal2 && window.console && window.console.log ) {
                window.console.log( '###FLAG!!! validationsCCDate2::inputDate:: typedMonth.length === 2' );
            }

            if(dateNum === 0){
                typedMonth = '01';// don't allow 00 as a month
            }

            if(dateNum > 12){

                if ( __logVal2 && window.console && window.console.log ) {
                    window.console.log( '###FLAG!!! validationsCCDate2::inputDate:: dateNum > 12' );
                }

                // Take last digit and any existing typedYear, then trim back to 2 digits
                typedYear = typedMonth.substr(1) + typedYear;
                typedYear = typedYear.substr(0, 2);

                // Take first digit and prefix with 0
                typedMonth = '0' + typedMonth.substr(0, 1);

                if(__logVal2 && window.console && window.console.log){
                    window.console.log('### validationsCCDate2::inputDate:: dateNum > 12 adj typedMonth=',typedMonth);
                    window.console.log('### validationsCCDate2::inputDate:: dateNum > 12 adj typedYear=',typedYear);
                }
            }
        }

        if ( __logVal2 && window.console && window.console.log ) {
            window.console.log( '### validationsCCDate2::inputDate:: typedYear=',typedYear );
        }

        if(typedYear){

            // Create new date from month & year to check if card is more than 3 months out of date
            if(typedYear.length === 2){

                var currentYear = currentDate.getFullYear();

                fullYear = '20' +  typedYear;

                yearNum = Number(fullYear);
                monthNum = Number(typedMonth);

                var expDate = new Date(yearNum, monthNum - 1);
                var minDate = currentDate.setMonth(currentDate.getMonth() - 3);

                // Check card isn't more than 3 months out of date
                if( expDate.getTime() < minDate){

                    if(__logVal2 && window.console && window.console.log){
                        window.console.log('### validationsCCDate2::inputDate:: CARD TOO OLD!!');
                        window.console.log('### validationsCCDate2::inputDate:: CARD TOO OLD typedMonth=',typedMonth);
                        window.console.log('### validationsCCDate2::inputDate:: CARD TOO OLD typedYear=',typedYear);
                    }

                    // Show invalid date - reformat & display the result
                    // Without this if you type e.g. 01/3 > select the 0 and type 2 it displays 21/3
                    newValue = mask(typedMonth + typedYear);
                    pNode.value = newValue;

                    resObj = __errorOnField(true, pNode, 'validateExpiryDate: card too old', resObj);
                    resObj.action = __safeAction(__action);
                    return resObj;
                }

                if ( __logVal2 && window.console && window.console.log ) {
                    window.console.log( '### validationsCCDate2::inputDate:: currentYear=',currentYear );
                    window.console.log( '### validationsCCDate2::inputDate:: yearNum=',yearNum );
                }

                // Check expiry date isn't more than 15 years in future (CSE will do this if we don't)
                if(yearNum > currentYear + 15){

                    // Show invalid date - reformat & display the result
                    // Without this if you type e.g. 01/3 > select the 0 and type 2 it displays 21/3
                    newValue = mask(typedMonth + typedYear);
                    pNode.value = newValue;

                    resObj = __errorOnField(true, pNode, 'validateExpiryDate: expiryDate too far in future', resObj);
                    resObj.action = __safeAction(__action);

                    return resObj;
                }
            }
        }


        // REFORMAT VALUE
        newValue = mask(typedMonth + typedYear);

        if( __logVal2 && window.console && window.console.log){
            window.console.log('\n### validationsCCDate2::inputDate:: newValue (masked)=',newValue, ' length=',newValue.length);
        }

        // NewValue is a single month digit i.e. shopper just typed '1' or '0' (which has been masked to '1/' or '0/')
        if(newValue.length === 2 && lastChar(newValue) === __SEPARATOR){

            // Restore to a single digit
            newValue = stripLastChars(newValue, 1);
            if ( __logVal2 && window.console && window.console.log ) {
                window.console.log( '### validationsCCDate2::inputDate:: newValue was single month digit so recalc newValue=',newValue );
            }
        }


        // GET NEW CURSOR POS - TODO not currently used
        __newCursorPosition = getNewCursorPosition(newValue);

        if(__logVal2 && window.console && window.console.log){
            window.console.log('\n### validationsCCDate2::inputDate:: __newCursorPosition=',__newCursorPosition);
            window.console.log('### validationsCCDate2::inputDate:: currentVal.length=',currentVal.length);
        }


        // WRITE NEW VALUE TO INPUT FIELD, possibly stripping off last 'separator' char
        if(newValue !== ""){

            // If we're deleting from the end of the string
            if(__deleteKeyPressed && ValUtils.getCaretPos(pNode) === currentVal.length){

                if(__logVal2 && window.console && window.console.log){
                    window.console.log('### validationsCCNumber2::inputDate:: deleting from end');
                    window.console.log('### validationsCCNumber2::inputDate:: ValUtils.getCaretPos(pNode)=',ValUtils.getCaretPos(pNode));
                }

                // If just deleted the separator...
                if(ValUtils.getCaretPos(pNode) === 2){

                    if ( __logVal2 && window.console && window.console.log ) {
                        window.console.log( '### validationsCCDate2::inputDate:: just deleted separator' );
                    }

                    // ...remove the re-added separator AND the character before that
                    newValue = stripLastChars(newValue, 2);

                    __newCursorPosition = getNewCursorPosition(newValue);

                    if(__logVal2 && window.console && window.console.log){
                        window.console.log('\n### validationsCCDate2::inputDate:: __newCursorPosition recalc=',__newCursorPosition);
                    }
                }
            }

            if(__logVal2 && window.console && window.console.log){
                window.console.log('### validationsCCDate2::inputDate:: set new value=',newValue);
            }
        }


        resObj = __errorOnField(false, pNode, '', resObj);

        pNode.value = newValue;

        if(__setCursorPosFlag){

            // Set new cursor position
            __newCursorPosition = __setCursorPosFlag;
            ValUtils.setSelectionRange(pNode, __newCursorPosition);
            __setCursorPosFlag = 0;
            if ( __logVal2 && window.console && window.console.log ) {
                window.console.log( '### validationsCCDate2::inputDate:: Setting cursor pos' );
            }
        }

        // If we've made it this far the date must be valid if we have 2 digits on either side of a '/'
        if(newValue.length === 5){
            __isValidExpiryDate = true;
        }


        // Split the inputted date into the (hidden) fields that the CSE expects
        currentValueArr = unmask(newValue);
        var hiddenMonthStr = (currentValueArr[0] && currentValueArr[0].length === 2)? currentValueArr[0] : '';
        var hiddenYearStr = (currentValueArr[1] && currentValueArr[1].length === 2)? '20' + currentValueArr[1] : '';
        __setHiddenDateFields(pNode, hiddenMonthStr,  hiddenYearStr);

        if(__logVal2 && window.console && window.console.log){
            window.console.log('### validationsCCDate2::inputDate:: __setHiddenDateFields month=',hiddenMonthStr);
            window.console.log('### validationsCCDate2::inputDate:: __setHiddenDateFields year=', hiddenYearStr);
        }

        __deleteKeyPressed = false;// Extra reset - due to some browser's not firing key down events for every key

        resObj.action = __safeAction(__action);

        return resObj;
    };
    //-------------------------- end INPUT LISTENER --------------------------------


    /////////////////////// KEYUP LISTENERS - specific for IE & Android //////////////////////////////////////

    // IE9 Runs an 'input' event listener for IE9 when delete key pressed
    // re. https://developer.mozilla.org/en-US/docs/Web/Events/input
    // --> [2] IE 9 does not fire an input event when the user deletes characters from an input (e.g. by pressing Backspace or Delete, or using the "Cut" operation).
    //
    // IE8 No input event - so run 'input' event listener from onKeyUp event instead EXCEPT for arrow keys & SHIFT key
    // (if arrow keys/shift trigger input event then formatting occurs and cursor is always forced to unwanted position)
    ccDate.keyUpDateIE = function(e, pNode){

        // IE9
        if(__deleteKeyPressed && ValUtils.__IS_IE && ValUtils.__IS_IE === 9){
            return ccDate.inputDate(e, pNode);
        }

        // IE8
        if(ValUtils.__IS_IE && ValUtils.__IS_IE === 8){

            var keyPressed = ValUtils.handleKeyPress(e);

            if(keyPressed === 'leftarrow' || keyPressed === 'rightarrow' || keyPressed === 'shift'){
                return null;
            }

            return ccDate.inputDate(e, pNode);
        }

        return null;
    };

    // ONLY ADDED IF userAgent IS ANDROID
    // Needed for certain combinations of Android & Chrome re. https://github.com/text-mask/text-mask/issues/300
    // ("The caret moves incorrectly when passing over mask characters")
    ccDate.keyUpDateAndroid = function(e, pNode){

        if(__newCursorPosition === pNode.value.length){

            if(__logVal2 && window.console && window.console.log){
                window.console.log('### validationsCCDate2::keyUpDateAndroid:: setting cursor pos =',__newCursorPosition);
            }
            ValUtils.setSelectionRange(pNode, __newCursorPosition);
        }
    };



    ccDate.getIsValidExpiryDate = function(){
        return __isValidExpiryDate;
    };


    var getCurrentDate = function(pGenTime){

        var currentDate = new Date(pGenTime);

        //IE8
        if(isNaN(currentDate)){

            if ( __logVal2 && window.console && window.console.log ) {
                window.console.log( '###FLAG!!! validationsCCDate2::getCurrentDate:: IE8 currentDate is NaN' );
            }

            var d = genTime.substring(0, genTime.length - 1);
            var a = d.split("T");
            d = a[0].split("-");
            var t = a[1].split(":");
            currentDate = new Date(d[0],(d[1]-1),d[2],t[0],t[1],t[2]);
        }

        return currentDate;
    };

    var __errorOnField = function(pIsError, pNode, pStr, pCommObj){

        var obj = Object.assign({}, pCommObj);

        obj.error = pStr;

        return obj;
    };

    // Split the inputted date into the (hidden) fields that the CSE expects
    var __setHiddenDateFields = function(pNode, pMonth, pYear){

        // Split the inputted date into the (hidden) fields that the CSE expects
        var allInputs = pNode.parentNode.getElementsByTagName('input');

        // Iterate over HTMLCollection
        [].forEach.call(allInputs, function(pEl) {

            if(pEl.getAttribute('data-encrypted-name') === 'expiryMonth'){
                pEl.value = pMonth;
            }

            if(pEl.getAttribute('data-encrypted-name') === 'expiryYear' && typeof pYear !== 'undefined'){
                pEl.value = pYear;
            }
        });
    };

    // Make sure no number info is propagated to the mainWindow
    var __safeAction = function(pAction, pStr){

        var suffix = pStr || 'date';

        if(pAction.length === 1 && typeof parseInt(pAction) === 'number'){
            return suffix + 'KeyPressed';
        }

        return pAction;
    };


    return ccDate;
} );

// if ( window.console && window.console.log ) {
//
//     var sepOldCurs = checkSeparator(__oldCursor);
//
//     var oldValLen = __oldValue.length;
//     var newValLen = newValue.length;
//     var newValLenMinusOldValLen = (newValue.length - __oldValue.length);
//
//     var oldCursurPlusNewValLenMinusOldValLen = __oldCursor + newValLenMinusOldValLen;
//
//     var checkSepOldCursurPlusNewValLenMinusOldValLen = checkSeparator(oldCursurPlusNewValLenMinusOldValLen);
//
//     var unmaskedNewVal = unmask(newValue);
//     window.console.log( '### validationsCCDate2::inputDate:: unmaskedNewVal=',unmaskedNewVal );
//     window.console.log( '### validationsCCDate2::inputDate:: unmaskedNewVal.length=',unmask(newValue).join('').length );
//
//     var unmaskNewVal = unmask(newValue).join('').length;
//     var unmaskOldVal = unmask(__oldValue).join('').length;
//     var unmaskNewMinusUnmaskOld = unmaskNewVal - unmaskOldVal;
//
//     window.console.log( '\n### validationsCCDate2::inputDate:: ' );
//     window.console.log( '### validationsCCDate2::inputDate:: *** __oldCursor=',__oldCursor );
//
//     window.console.log( '### validationsCCDate2::inputDate:: *** checkSeparator(__oldCursor)=',sepOldCurs );
//
//     window.console.log( '### validationsCCDate2::inputDate:: newValLen=',newValLen );
//     window.console.log( '### validationsCCDate2::inputDate:: oldValLen=',oldValLen );
//     window.console.log( '### validationsCCDate2::inputDate:: newValLenMinusOldValLen=',newValLenMinusOldValLen );
//     window.console.log( '### validationsCCDate2::inputDate:: *** checkSepOldCursurPlusNewValLenMinusOldValLen=',checkSepOldCursurPlusNewValLenMinusOldValLen );
//
//     window.console.log( '### validationsCCDate2::inputDate:: unmaskOldVal=',unmaskOldVal );
//     window.console.log( '### validationsCCDate2::inputDate:: unmaskNewVal=',unmaskNewVal );
//     window.console.log( '### validationsCCDate2::inputDate:: *** unmaskNewMinusUnmaskOld=',unmaskNewMinusUnmaskOld);
//
//     window.console.log( '### validationsCCDate2::inputDate:: new cursor pos =',__oldCursor + '-' + sepOldCurs + '+' + checkSepOldCursurPlusNewValLenMinusOldValLen + '+' + unmaskNewMinusUnmaskOld);
//
// }
/* global define, require, genTime, __logVal2 */
define( 'validationsCCMonth', ['validationUtils'], function (ValUtils) {
    "use strict";

    var __deleteKeyPressed = false;
    var __action = '';

    var __isValidExpiryMonth = false;

    var __oldValue = '';


    var unmask = function(value) {

        var output = value.replace(/[^\d]/g, ''); // Remove every non-digit character
        return output;
    };


    var ccDate = {};


    /////////////////////// KEYDOWN LISTENER ////////////////////////////////////////
    ccDate.keyDownMonth = function(e, pNode){

        __oldValue = pNode.value;

        var keyPressed = ValUtils.handleKeyPress(e);
        __deleteKeyPressed = (keyPressed === ValUtils.__DELETE_OR_BACKSPACE);

        __action = keyPressed;

        if ( __logVal2 && window.console && window.console.log ) {
            window.console.log( '\n### validationsCCMonth2::keyDownMonth:: keyPressed=',keyPressed );
        }
    };
    //-------------------------- end KEYDOWN LISTENER --------------------------------


    /////////////////////// INPUT LISTENER - primary validation routine //////////////////////////////////////
    ccDate.inputMonth = function(e, pNode){

        var currentVal = pNode.value,
            currentValueStripped = unmask(currentVal),
            newValue;

        __isValidExpiryMonth = false;


        var resObj = {};


        if ( __logVal2 && window.console && window.console.log ) {
            window.console.log( '\n### validationsCCMonth2::inputMonth:: __oldValue=',__oldValue );
            window.console.log( '### validationsCCMonth2::inputMonth:: currentVal=',currentVal );
            window.console.log( '### validationsCCMonth2::inputMonth:: __isValidExpiryMonth=',__isValidExpiryMonth );
            window.console.log( '### validationsCCMonth2::inputMonth:: currentValueStripped=',currentValueStripped );
        }


        var typedMonth = currentValueStripped;
        var dateNum = Number(typedMonth);


        // If month is 2 - 9, prefix with 0
        // (if 0, do nothing | if 1 wait to see what the next char is)
        if(typedMonth.length === 1){

            if ( __logVal2 && window.console && window.console.log ) {
                window.console.log( '### FLAG!!! validationsCCMonth2::inputMonth:: typedMonth.length === 1' );
                window.console.log( '### validationsCCMonth2::inputMonth:: dateNum=',dateNum );
            }

            if( (dateNum >= 2 && dateNum <= 9) ){

                typedMonth = '0' + dateNum;

                if ( __logVal2 && window.console && window.console.log ) {
                    window.console.log( '### validationsCCMonth2::inputMonth:: ypedMonth.length === 1 new typedMonth=',typedMonth );
                }
            }
        }


        if(typedMonth.length === 2){

            if ( __logVal2 && window.console && window.console.log ) {
                window.console.log( '###FLAG!!! validationsCCMonth2::inputMonth:: typedMonth.length === 2' );
            }

            if(dateNum === 0){
                typedMonth = '01';// don't allow 00 as a month
            }

            if(dateNum > 12){

                if ( __logVal2 && window.console && window.console.log ) {
                    window.console.log( '###FLAG!!! validationsCCMonth2::inputMonth:: dateNum > 12' );
                }

                // Take first digit and prefix with 0
                typedMonth = '0' + typedMonth.substr(0, 1);

                if(__logVal2 && window.console && window.console.log){
                    window.console.log('### validationsCCMonth2::inputMonth:: dateNum > 12 adj typedMonth=',typedMonth);
                }
            }
        }


        // REFORMAT VALUE
        newValue = typedMonth;

        if( __logVal2 && window.console && window.console.log){
            window.console.log('\n### validationsCCMonth2::inputCC:: newValue (masked)=',newValue, ' length=',newValue.length);
        }


        resObj = __errorOnField(false, pNode, '', resObj);

        pNode.value = newValue;


        // If we've made it this far the date must be valid if we have 2 digits
        if(newValue.length === 2){
            __isValidExpiryMonth = true;
        }


        resObj.action = __safeAction(__action, 'month');

        return resObj;
    };
    //-------------------------- end INPUT LISTENER --------------------------------


    /////////////////////// KEYUP LISTENERS - specific for IE & Android //////////////////////////////////////

    // IE9 Runs an 'input' event listener for IE9 when delete key pressed
    // re. https://developer.mozilla.org/en-US/docs/Web/Events/input
    // --> [2] IE 9 does not fire an input event when the user deletes characters from an input (e.g. by pressing Backspace or Delete, or using the "Cut" operation).
    //
    // IE8 No input event - so run 'input' event listener from onKeyUp event instead EXCEPT for arrow keys & SHIFT key
    // (if arrow keys/shift trigger input event then formatting occurs and cursor is always forced to unwanted position)
    ccDate.keyUpMonthIE = function(e, pNode){

        // IE9
        if(__deleteKeyPressed && ValUtils.__IS_IE && ValUtils.__IS_IE === 9){
            return ccDate.inputMonth(e, pNode);
        }

        // IE8
        if(ValUtils.__IS_IE && ValUtils.__IS_IE === 8){

            var keyPressed = ValUtils.handleKeyPress(e);

            if(keyPressed === 'leftarrow' || keyPressed === 'rightarrow' || keyPressed === 'shift'){
                return null;
            }

            return ccDate.inputMonth(e, pNode);
        }

        return null;
    };


    ccDate.getIsValidExpiryMonth = function(){
        return __isValidExpiryMonth;
    };

    var __errorOnField = function(pIsError, pNode, pStr, pCommObj){

        var obj = Object.assign({}, pCommObj);

        obj.error = pStr;

        return obj;
    };

    // Make sure no number info is propagated to the mainWindow
    var __safeAction = function(pAction, pStr){

        var suffix = pStr || 'date';

        if(pAction.length === 1 && typeof parseInt(pAction) === 'number'){
            return suffix + 'KeyPressed';
        }

        return pAction;
    };


    return ccDate;
} );
/* global define, require, genTime, __logVal2 */
define( 'validationsCCYear', ['validationUtils'], function (ValUtils) {
    "use strict";

    var __deleteKeyPressed = false;
    var __action = '';

    var __isValidExpiryYear = false;

    var __oldValue = '';


    var unmask = function(value) {

        var output = value.replace(/[^\d]/g, ''); // Remove every non-digit character
        return output;
    };


    var lastChar = function(str){
        return str.charAt(str.length - 1);
    };

    var stripLastChars = function(str, pStripLen){

        var stripLen = pStripLen || 1;
        return str.substr(0, str.length - stripLen);
    };

    var ccDate = {};


    /////////////////////// KEYDOWN LISTENER ////////////////////////////////////////
    ccDate.keyDownYear = function(e, pNode){

        __oldValue = pNode.value;

        var keyPressed = ValUtils.handleKeyPress(e);
        __deleteKeyPressed = (keyPressed === ValUtils.__DELETE_OR_BACKSPACE);

        __action = keyPressed;

        if ( __logVal2 && window.console && window.console.log ) {
            window.console.log( '\n### validationsCCYear2::keyDownYear:: keyPressed=',keyPressed );
        }
    };
    //-------------------------- end KEYDOWN LISTENER --------------------------------


    /////////////////////// INPUT LISTENER - primary validation routine //////////////////////////////////////
    ccDate.inputYear = function(e, pNode){

        var currentVal = pNode.value,
            currentValueStripped = unmask(currentVal),
            newValue;


        __isValidExpiryYear = false;

        var resObj = {};

        var currentDate = getCurrentDate(genTime);


        if ( __logVal2 && window.console && window.console.log ) {
            window.console.log( '\n### validationsCCYear2::inputYear:: __oldValue=',__oldValue );
            window.console.log( '### validationsCCYear2::inputYear:: currentVal=',currentVal );
            window.console.log( '### validationsCCYear2::inputYear:: __isValidExpiryYear=',__isValidExpiryYear );
            window.console.log( '### validationsCCYear2::inputYear:: currentValueStripped=',currentValueStripped );
        }


        var fullYear, yearNum;

        var typedYear = currentValueStripped;


        if ( __logVal2 && window.console && window.console.log ) {
            window.console.log( '### validationsCCYear2::inputYear:: typedYear=',typedYear );
        }

        if(typedYear){

            if(typedYear.length === 2){

                var currentYear = currentDate.getFullYear();

                fullYear = '20' +  typedYear;

                yearNum = Number(fullYear);

                if ( __logVal2 && window.console && window.console.log ) {
                    window.console.log( '### validationsCCYear2::inputYear:: currentYear=',currentYear );
                    window.console.log( '### validationsCCYear2::inputYear:: yearNum=',yearNum );
                }

                // Without knowing the month, we can only check whether the year is 2 years before the current date
                // (if the current date is January - we can't just check year - 1 since the card is valid back to 3 months before current date)
                if(yearNum <= currentDate.getFullYear() - 2 ){

                    resObj = __errorOnField(true, pNode, 'validateExpiryDate: card too old', resObj);
                    resObj.action = __safeAction(__action, 'year');
                    return resObj;
                }

                // Check expiry date isn't more than 15 years in future (CSE will do this if we don't)
                if(yearNum > currentYear + 15){
                    resObj = __errorOnField(true, pNode, 'validateExpiryDate: expiryDate too far in future', resObj);
                    resObj.action = __safeAction(__action);
                    return resObj;
                }
            }
        }


        // REFORMAT VALUE
        newValue = typedYear;

        if( __logVal2 && window.console && window.console.log){
            window.console.log('\n### validationsCCYear2::inputYear:: newValue=',newValue, ' length=',newValue.length);
        }


        resObj = __errorOnField(false, pNode, '', resObj);

        pNode.value = newValue;


        // If we've made it this far the date must be valid if we have 2 digits
        if(newValue.length === 2){
            __isValidExpiryYear = true;
        }

        var hiddenYearStr = (fullYear)? fullYear : '';
        __setHiddenDateFields(pNode, hiddenYearStr);

        if(__logVal2 && window.console && window.console.log){
            window.console.log('### validationsCCYear2::inputYear:: __setHiddenDateFields year=', hiddenYearStr);
        }

        resObj.action = __safeAction(__action, 'year');

        return resObj;
    };
    //-------------------------- end INPUT LISTENER --------------------------------


    /////////////////////// KEYUP LISTENERS - specific for IE & Android //////////////////////////////////////

    // IE9 Runs an 'input' event listener for IE9 when delete key pressed
    // re. https://developer.mozilla.org/en-US/docs/Web/Events/input
    // --> [2] IE 9 does not fire an input event when the user deletes characters from an input (e.g. by pressing Backspace or Delete, or using the "Cut" operation).
    //
    // IE8 No input event - so run 'input' event listener from onKeyUp event instead EXCEPT for arrow keys & SHIFT key
    // (if arrow keys/shift trigger input event then formatting occurs and cursor is always forced to unwanted position)
    ccDate.keyUpYearIE = function(e, pNode){

        // IE9
        if(__deleteKeyPressed && ValUtils.__IS_IE && ValUtils.__IS_IE === 9){
            return ccDate.inputYear(e, pNode);
        }

        // IE8
        if(ValUtils.__IS_IE && ValUtils.__IS_IE === 8){

            var keyPressed = ValUtils.handleKeyPress(e);

            if(keyPressed === 'leftarrow' || keyPressed === 'rightarrow' || keyPressed === 'shift'){
                return null;
            }

            return ccDate.inputYear(e, pNode);
        }

        return null;
    };


    ccDate.getIsValidExpiryYear = function(){
        return __isValidExpiryYear;
    };

    var getCurrentDate = function(pGenTime){

        var currentDate = new Date(pGenTime);

        //IE8
        if(isNaN(currentDate)){

            if ( __logVal2 && window.console && window.console.log ) {
                window.console.log( '###FLAG!!! validationsCCYear2::getCurrentDate:: IE8 currentDate is NaN' );
            }

            var d = genTime.substring(0, genTime.length - 1);
            var a = d.split("T");
            d = a[0].split("-");
            var t = a[1].split(":");
            currentDate = new Date(d[0],(d[1]-1),d[2],t[0],t[1],t[2]);
        }

        return currentDate;
    };

    var __errorOnField = function(pIsError, pNode, pStr, pCommObj){

        var obj = Object.assign({}, pCommObj);

        obj.error = pStr;

        return obj;
    };

    // Split the inputted date into the (hidden) fields that the CSE expects
    // var __setHiddenDateFields = function(pNode, pMonth, pYear){
    var __setHiddenDateFields = function(pNode, pYear){

        var hiddenYearEl = document.getElementById('expiryYear');

        if(typeof pYear !== 'undefined'){
            hiddenYearEl.value = pYear;
        }
    };

    // Make sure no number info is propagated to the mainWindow
    var __safeAction = function(pAction, pStr){

        var suffix = pStr || 'date';

        if(pAction.length === 1 && typeof parseInt(pAction) === 'number'){
            return suffix + 'KeyPressed';
        }

        return pAction;
    };


    return ccDate;
} );
/* global define, require, chckt, __logVal2*/
define( 'validationsCCSecurityCode', ['validationUtils'], function (ValUtils) {
    "use strict";

    var __oldValue;
    var __deleteKeyPressed = false;
    var __action = '';

    var __isValidCvcNumber = true;

    var __recurringCardIndicator;


    var unmask = function(value) {

        var output = value.replace(/[^\d]/g, ''); // Remove every non-digit character
        return output;
    };

    var ccCVC = {};

    /////////////////////// KEYDOWN LISTENER ////////////////////////////////////////
    ccCVC.keyDownCVC = function(e, pNode){

        __oldValue = pNode.value;
        // __oldCursor = ValUtils.getCaretPos(pNode, true);

        var keyPressed = ValUtils.handleKeyPress(e);
        __deleteKeyPressed = (keyPressed === ValUtils.__DELETE_OR_BACKSPACE);

        __action = keyPressed;
    };
    //-------------------------- end KEYDOWN LISTENER --------------------------------


    /////////////////////// INPUT LISTENER - primary validation routine //////////////////////////////////////
    ccCVC.inputCVC = function(e, pNode){

        var currentVal = pNode.value,
            currentValueStripped = unmask(currentVal),
            newValue;

        var resObj = ccCVC.testCVC(pNode);

        if ( __logVal2 && window.console && window.console.log ) {
            window.console.log( '\n### validationsCCSecurityCode2::inputCVC:: currentVal=',currentVal );
            window.console.log( '### validationsCCSecurityCode2::inputCVC:: __isValidCvcNumber=',__isValidCvcNumber );
            window.console.log( '### validationsCCSecurityCode2::inputCVC:: currentValueStripped=',currentValueStripped );
        }

        newValue = currentValueStripped;
        pNode.value = newValue;

        return resObj;
    };

    // Called from chckt.keyUpCVC AND also from secureFields_config.js when 'cardBrand' message comes thru
    ccCVC.testCVC = function(pNode){

        __isValidCvcNumber = false;// set this again (for when this fn is called direct from secureFields.js)

        var commObj = {};

        var reg;

        if(__logVal2 && window.console && window.console.log){
            window.console.log('### validationcCCSecurityCode2::testCVC:: x chckt.cardBrand=',chckt.cardBrand);
        }

        // Strips the recurring card indicator e.g. _r1 (Needed in the case this is the CVC field in a recurring card PM)
        var cardBrand = (chckt.cardBrand)? chckt.cardBrand : '';
        var rIndex = cardBrand.indexOf(__recurringCardIndicator);
        cardBrand =  (rIndex > -1) ? cardBrand.substring(0, rIndex) : cardBrand;

        if(__logVal2 && window.console && window.console.log){
            window.console.log('### validationcCCSecurityCode2::testCVC:: altered cardBrand=',cardBrand);
        }

        switch (cardBrand){

        case null:
        case '':
        case 'card':
            reg =  /^\d{3,4}$/;
            break;

        case 'amex':
            reg = /^\d{4}$/;
            break;

//            case consolidated card but not 'amex'
//              OR single card but not 'amex':
        default :
            reg = /^\d{3}$/;
        }

        // __lastValidCVC = pNode.value;// Store last valid result re. Android/Chrome allowing letters

        if(reg.test(pNode.value) ){

            __isValidCvcNumber = true;
        }

        commObj = __errorOnField(pNode, '', commObj);
        commObj.action = 'keyPressed';

        return commObj;
    };


    /////////////////////// KEYUP LISTENERS - specific for IE //////////////////////////////////////

    // IE9 Runs an 'input' event listener for IE9 when delete key pressed
    // re. https://developer.mozilla.org/en-US/docs/Web/Events/input
    // --> [2] IE 9 does not fire an input event when the user deletes characters from an input (e.g. by pressing Backspace or Delete, or using the "Cut" operation).
    //
    // IE8 No input event - so run 'input' event listener from onKeyUp event instead EXCEPT for arrow keys & SHIFT key
    // (if arrow keys/shift trigger input event then formatting occurs and cursor is always forced to unwanted position)
    ccCVC.keyUpCVCNumberIE = function(e, pNode){

        // IE9
        if(__deleteKeyPressed && ValUtils.__IS_IE && ValUtils.__IS_IE === 9){
            return ccCVC.inputCVC(e, pNode);
        }

        // IE8
        if(ValUtils.__IS_IE && ValUtils.__IS_IE === 8){

            var keyPressed = ValUtils.handleKeyPress(e);

            if(keyPressed === 'leftarrow' || keyPressed === 'rightarrow' || keyPressed === 'shift'){
                return null;
            }

            return ccCVC.inputCVC(e, pNode);
        }

        return null;
    };

    //-------------------------- end KEYUP LISTENER --------------------------------



    ccCVC.getIsValidCvcNumber = function(){
        return __isValidCvcNumber;
    };

    ccCVC.setRecurringCardIndicator = function(pRecurringCardIndicator){

        __recurringCardIndicator = pRecurringCardIndicator;
    };


    var __errorOnField = function(pNode, pStr, pCommObj){

        var obj = Object.assign({}, pCommObj);

        obj.error = pStr;

        return obj;
    };

    return ccCVC;
} );
/* global define, _b$dl */
define( 'processStyles', [], function () {

    "use strict";
    var Utils = {};

    var __noop = function(){};

    var __acceptedStyleDefinitions = {
        background: "background",
        color : "color",
        display: "display",
        font : "font",
        fontFamily : "font-family",
        fontSize : "font-size",
        fontSizeAdjust : "font-size-adjust",
        fontSmoothing: "font-smoothing",
        fontStretch : "font-stretch",
        fontStyle : "font-style",
        fontVariant : "font-variant",
        fontVariantAlternates : "font-variant-alternates",
        fontVariantCaps: "font-variant-caps",
        fontVariantEastAsian : "font-variant-east-asian",
        fontVariantLigatures : "font-variant-ligatures",
        fontVariantNumeric : "font-variant-numeric",
        fontWeight : "font-weight",
        letterSpacing: "letter-spacing",
        lineHeight : "line-height",
        mozOsxFontSmoothing : "moz-osx-font-smoothing",
        mozTransition : "moz-transition",
        outline : "outline",
        opacity : "opacity",
        textShadow : "text-shadow",
        transition : "transition",
        webkitFontSmoothing : "webkit-font-smoothing",
        webkitTransition: "webkit-transition"
    };

    var __styleSelectors = {
        base : ".input-field",
        error : ".chckt-input-field--error",
        validated : ".chckt-input-field--validated",
        placeholder : {
            0 : ".input-field::placeholder",
            1 : ".input-field::-webkit-input-placeholder",
            2 : ".input-field:placeholder-shown"
        },
        "::msclear" : {
            0: ".input-field::ms-clear"
        }
    };

    Utils.process = function(pCssStyles){

        // Check if styles have been sent and push them to stylesheet
        if (pCssStyles) {

            //Check style object for URLs, if no URLs are found, render the styles
            var hasURLS = __checkForURLS(pCssStyles);

            (!hasURLS)? __renderStyles(pCssStyles) : __noop();
        }
    };

    // This function checks if merchants are passing in any unwanted urls (XSS protection)
    var __checkForURLS = function(styleObject) {

        var urlPattern = /(http|ftp|https):\/\/[\w-]+(\.[\w-]+)+([\w.,@?^=%&amp;:\/~+#-]*[\w@?^=%&amp;\/~+#-])?/;
        var urlsHaveBeenFound = false;

        for (var i in styleObject) {

            if(styleObject.hasOwnProperty(i)){// keeps JSHint happy

                var baseValue = styleObject[i];

                if (baseValue) {

                    for (var o in baseValue) {

                        if(baseValue.hasOwnProperty(o)){// keeps JSHint happy

                            var value = baseValue[o];

                            if ( urlPattern.test(value) === true ) {
                                urlsHaveBeenFound = true;
                            }
                        }
                    }
                }
            }
        }

        if (urlsHaveBeenFound === true) {
            if(_b$dl && window.console && window.console.log){
                window.console.log('@@@ secureFields::__checkForURLS:: URL HAS BEEN FOUND');
            }
            return true;
        } else {
            return false;
        }
    };

    // This function takes the styles from a style Object and transforms them into a css property
    var __renderStyles = function(styleObject) {

        //Get keys and values from style Object then check which style we are dealing with (and if it is an accepted style)

        var __objectBaseKeys = Object.keys(styleObject); //Use this to render the base, error etc.

        for (var i = 0; i < __objectBaseKeys.length; i++){

            var stylingKey = __objectBaseKeys[i],
                customStyles = [],
                objectKeys = Object.keys(styleObject[stylingKey]),
                objectValues = [];

            for(var prop in styleObject[stylingKey]){

                if(styleObject[stylingKey].hasOwnProperty(prop)){

                    objectValues.push(styleObject[stylingKey][prop]);
                }
            }

            // Base styles key + prop
            for (var o = 0;  o < objectKeys.length; o++) {

                // Build stylesheet from base styles:
                var objectKeyName = objectKeys[ o ];
                var objectValue = objectValues[ o ];

                var cssValue = __acceptedStyleDefinitions[ objectKeyName ];

                // Check if cssValue is accepted;
                if ( cssValue ) {
                    var combinedCss = cssValue + ":" + objectValue + ";";
                    customStyles.push( combinedCss );
                    // window.console.log("customStyles for " + __styleSelectors[stylingKey] + " now consists of " + customStyles);
                } else {
                    if(_b$dl && window.console && window.console.log){
                        window.console.log('@@@ secureFields::__renderStyles:: This style value is not accepted: ',objectKeyName);
                    }
                }
            }

            // Check if the base selector has a value in our selectors array and if customstyles is set, if so, render css for this key
            if (__styleSelectors[stylingKey] && customStyles) {
                __pushStylesToSheet(customStyles, __styleSelectors[stylingKey]);
            }
        }
    };

    var __pushStylesToSheet = function(cssRules, cssSelector) {

        // First join all styles into 1 string
        var cssString = cssRules.join("");

        //Create the stylesheet
        var sheet = (function() {
            // Create the <style> tag
            var style = document.createElement("style");

            // Add a media (and/or media query) here if you'd like!
            // style.setAttribute("media", "screen")
            // style.setAttribute("media", "only screen and (max-width : 1024px)")

            // WebKit hack :(
            style.appendChild(document.createTextNode(""));

            // Add the <style> element to the page
            document.head.appendChild(style);

            return style.sheet;
        })();

        __addCSSRule(sheet, cssSelector, cssString);
    };

    // Function to add a rule to the stylesheet we created
    var __addCSSRule = function(sheet, selector, rules){

        if (typeof selector === "object") {

            for ( var key in selector ) {

                if (selector[key]) {

                    if ( sheet.insertRule ) {

                        try{

                            // Works in Chrome $ Safari
                            sheet.insertRule( selector[ key ] + ' {' + rules + '}', 0 );

                        }catch(error){}// Firefox & IE9, 10, 11 & Edge: if selector[ key ] is ".input-field::placeholder" Firefox & IE don't accept the pseudo selector "::placeholder"

                    } else {

                        // IE 8
                        sheet.addRule( selector[ key ], rules, -1 );
                    }
                }
            }
        } else {
            if(sheet.insertRule){

                try{

                    sheet.insertRule(selector + "{" + rules + "}", 0);

                }catch(error){}

            } else{
                //IE 8
                sheet.addRule(selector, rules, -1);
            }
        }
    };

    return Utils;
} );
/* global define, _b$dl */
define( 'processPlaceholders', ['Constants'], function (Constants) {

    "use strict";
    var Utils = {};

    var fourDigitCvcPlaceholder;
    var threeDigitCvcPlaceholder;


    Utils.process = function(pElem, pFieldType, pPlaceholders){

        // Work with default from iframe.html
        if(pFieldType === Constants.__HOSTED_CVC_FIELD_STR){

            storeCVCPlaceholders(pElem.placeholder);
        }

        // Check if placeholder text has been sent and render it in input
        if (pPlaceholders) {

            if( pPlaceholders[pFieldType] && pPlaceholders[pFieldType].length){

                pElem.placeholder = pPlaceholders[pFieldType];

                // If we've been sent a placeholder for the cvc field store it as a 3 & 4 digit value
                if(pFieldType === Constants.__HOSTED_CVC_FIELD_STR && pPlaceholders.hasOwnProperty(Constants.__HOSTED_CVC_FIELD_STR)){

                    storeCVCPlaceholders(pPlaceholders[pFieldType]);
                }
            }
        }
    };


    var storeCVCPlaceholders = function(pVal){

        var plcStr = pVal + '1234';// pad the value, just in case

        fourDigitCvcPlaceholder = plcStr.substr(0,4);
        threeDigitCvcPlaceholder = fourDigitCvcPlaceholder.substr(0,3);
    };

    Utils.setCvcPlaceholder = function(pElem, pBrand){

        if(pBrand === 'amex'){

            pElem.placeholder = fourDigitCvcPlaceholder;
            return;
        }

        pElem.placeholder = threeDigitCvcPlaceholder;
    };


    return Utils;
} );
/* global define */
define( 'setErrors', [], function () {

    "use strict";
    var Utils = {};

    // Adds/removes/maintains errors on input fields
    Utils.set = function(pNode, pSetErrors, pIsInErrorState){

        var isInErrorState = (typeof pIsInErrorState === 'undefined')? pSetErrors : pIsInErrorState;

        // Add errors
        if ( pSetErrors && pNode.className.indexOf( 'js-chckt-input-field-error' ) === -1) {

            pNode.className += " chckt-input-field--error";
            pNode.className += " js-chckt-input-field-error";
            return;
        }

        // Maintain errors if they haven't been explicitly cleared
        if(isInErrorState){
            return;
        }

        // Clear errors
        var newClassName;

        if ( pNode.className.indexOf( 'js-chckt-input-field-error' ) > -1 ) {

            newClassName = pNode.className.replace('chckt-input-field--error','');
            pNode.className = newClassName.trim();

            newClassName = pNode.className.replace('js-chckt-input-field-error','');
            pNode.className = newClassName.trim();
        }
    };

    Utils.setValidated = function(pNode, pSetValidation){

        // Add errors
        if ( pSetValidation && pNode.className.indexOf( 'js-chckt-input-field-validated' ) === -1) {

            pNode.className += " chckt-input-field--validated";
            pNode.className += " js-chckt-input-field-validated";
            return;
        }
    };

    return Utils;
} );
/* global define, _b$dl, __logIOSEvents */
define( 'encryptedCardNumberInput', ['Constants', 'DOM', 'validationsCCNumber', 'validationUtils'], function (Constants, DOM, ValidationsCCNum, ValUtils) {

    "use strict";
    var Utils = {};

    var __cardGroupTypes;
    var __elem;
    var __id;// aka fieldType i.e. 'encryptedCardNumber'

    var __isActiveIECutEvent = false;

    var __iosClick = false;// for forcing mouseUp, click events when only touchstart/touchend fire in iOS
    var __iosFocus = false;// registers when focus event fires. Used in mouseUp to force a __focus action if it hasn't happened naturally (which is 2nd & sub times)

    var processValidationFeedbackFn;
    var tellMainWindowFn;

    var storeFocusFn;

    Utils.setup = function(pId, pSharedScope, pCardGroupTypes){

        __cardGroupTypes = pCardGroupTypes;

        __id = pId;

        processValidationFeedbackFn = pSharedScope.processValidationsObj;
        tellMainWindowFn = pSharedScope.tellMainWindow;

        storeFocusFn = pSharedScope.storeFocus;

        // Hide other elements
        var hideElem = document.getElementById( Constants.__HOSTED_DATE_FIELD_STR );
        hideElem.parentNode.removeChild(hideElem);
        hideElem = document.getElementById( Constants.__HOSTED_MONTH_FIELD_STR );
        hideElem.parentNode.removeChild(hideElem);
        hideElem = document.getElementById( Constants.__HOSTED_YEAR_FIELD_STR );
        hideElem.parentNode.removeChild(hideElem);
        hideElem = document.getElementById( Constants.__EXPIRY_MONTH_STR );
        hideElem.parentNode.removeChild(hideElem);
        hideElem = document.getElementById( Constants.__EXPIRY_YEAR_STR );
        hideElem.parentNode.removeChild(hideElem);

        hideElem = document.getElementById( Constants.__HOSTED_CVC_FIELD_STR );
        hideElem.parentNode.removeChild(hideElem);

        // Show matching element
        __elem = document.getElementById( Constants.__HOSTED_NUMBER_FIELD_STR );
        __elem.style.display = 'block';

//        if(_b$dl && window.console && window.console.log){
//            window.console.log('\n@@@ hostedCardNumbrFieldInput __elem=',__elem);
//        }

        DOM._on(__elem, 'keydown', __keyDown, false);
        DOM._on(__elem, 'input', __input, false);


        // ANDROID SPECIFIC LISTENERS
        if(ValUtils.__IS_ANDROID){
            DOM._on(__elem, 'keyup', __keyUpAndroid, false);
        }
        //--


        // IE SPECIFIC LISTENERS
        if(ValUtils.__IS_IE && ValUtils.__IS_IE <= 9){
            DOM._on(__elem, 'keyup', __keyUpIE, false);
            DOM._on(__elem, 'cut', __cutIE, false);
            DOM._on(document, 'selectionchange', __selectionChangeIE, false);
        }

        if(ValUtils.__IS_IE && ValUtils.__IS_IE === 8){
            DOM._on(__elem, 'paste', __pasteIE8, false);
        }
        //--


        // iOS SPECIFIC LISTENERS
        //
        // iOS / Safari problem:
        // 1. - Blur event never fires on input field
        // 2. - The focus event on an element only ever fires the first time, presumably because it never actually blurs, re. 1.
        // Fixes to rectify the above (based around listening to other events) are hampered by:
        // 3. - Sometimes the touchstart / touchend events don't fire
        // 4. - Sometimes only the touchstart / touchend events fire (due to the user triggering a touchmove between the start & end, I think)
        if(ValUtils.__IS_IPHONE){

            DOM._on(__elem, 'touchstart', __touchStart_iOS, false);
            // DOM._on(__elem, 'touchmove', __touchMove_iOS, false);
            DOM._on(__elem, 'touchend', __touchEnd_iOS, false);

            DOM._on(__elem, 'mouseup', __mouseUp_iOS, false);
            DOM._on(__elem, 'mousedown', __mouseDown_iOS, false);

            DOM._on(__elem, 'click', __click_iOS, false);

            DOM._on(__elem, 'keyup', __keyUp_iOS, false);
        }
        //--


        DOM._on(__elem, 'focus', __focus, false);
        DOM._on(__elem, 'blur', __blur, false);


        return __elem;
    };


    var __keyDown = function(e){

        ValidationsCCNum.keyDownCCNumber(e, __elem);
    };

    var __input = function(e){

        var commObj = ValidationsCCNum.inputCC(e, __elem, __cardGroupTypes);

        if(commObj){

            processValidationFeedbackFn(commObj, {node : __elem, id : __id});
        }
    };

    // Extra cursor position check for Android devices
    var __keyUpAndroid = function(e){

        ValidationsCCNum.keyUpCCNumber(e, __elem, __cardGroupTypes);
    };

    // IE9 Runs an 'input' event listener for IE9 when delete key pressed
    // re. https://developer.mozilla.org/en-US/docs/Web/Events/input
    // --> [2] IE 9 does not fire an input event when the user deletes characters from an input (e.g. by pressing Backspace or Delete, or using the "Cut" operation).
    //
    // IE8 No input event - so run 'input' event listener from onKeyUp event instead
    // (see ValidationsCCNum.keyUpCCNumberIE for comments about excluding arrow & shift keys)
    var __keyUpIE = function(e){

        var commObj = ValidationsCCNum.keyUpCCNumberIE(e, __elem, __cardGroupTypes);

        if(commObj){

            processValidationFeedbackFn(commObj, {node : __elem, id : __id});
        }
    };

    // Cut doesn't fire an event in IE<=9 - so force an input event
    var __cutIE = function(e){

        __isActiveIECutEvent = true;

        // Make async so that __elem.value has time to register it's change
        setTimeout(function(){

            var commObj = ValidationsCCNum.inputCC(e, __elem, __cardGroupTypes);

            if(commObj){

                processValidationFeedbackFn(commObj, {node : __elem, id : __id});
            }

            __isActiveIECutEvent = false;
        },0);
    };

    // IE 8 & 9 - detect clicking on the erase text, "x" in the text field
    // If the field is cleared - force an input event
    var __selectionChangeIE = function(e){

        // Don't do anthing if a 'cut' event has been detected
        if(__isActiveIECutEvent){
            return;
        }

        var el = document.activeElement;

        if(el === __elem && el.value === ''){

            if ( window.console && window.console.log ) {
                window.console.log( '### hostedCardNumberFieldInput2::__selectionChangeIE:: EMPTY STRING' );
            }

            var commObj = ValidationsCCNum.inputCC(e, __elem, __cardGroupTypes);

            if(commObj){

                processValidationFeedbackFn(commObj, {node : __elem, id : __id});
            }
        }
    };

    var __pasteIE8 = function(e){

        // Make async so that __elem.value has time to register it's change
        setTimeout(function(){

            var commObj = ValidationsCCNum.inputCC(e, __elem, __cardGroupTypes);

            if(commObj){

                processValidationFeedbackFn(commObj, {node : __elem, id : __id});
            }
        },0);
    };


    var __touchStart_iOS = function(e){

        if (__logIOSEvents &&  window.console && window.console.log ) {
            window.console.log( '\n### encryptedCardNumberInput::__touchStart_iOS:: ' );
        }

        __iosClick = false;

        __iosFocus = false;// for when only touchstart/touchend fire
    };

    // var __touchMove_iOS = function(e){
    //     if (__logIOSEvents &&  window.console && window.console.log ) {
    //         window.console.log( '### encryptedCardNumberInput::__touchMove_iOS:: ' );
    //     }
    // };

    var __touchEnd_iOS = function(e){

        if (__logIOSEvents &&  window.console && window.console.log ) {
            window.console.log( '### encryptedCardNumberInput::__touchEnd_iOS:: ' );
        }

        setTimeout(function(){

            if(!__iosClick){

                if (__logIOSEvents &&  window.console && window.console.log ) {
                    window.console.log( '### encryptedCardNumberInput::__touchEnd_iOS:: forcing click event' );
                }

                __mouseUp_iOS();
                __click_iOS(e);
            }

        }, 400);
    };

    var __mouseDown_iOS = function(e) {

        if (__logIOSEvents &&  window.console && window.console.log ) {
            window.console.log( '### encryptedCardNumberInput::__mouseDown_iOS:: ' );
        }

        __iosFocus = false;// for when touchstart doesn't fire
    };

    var __mouseUp_iOS = function(e){

        if (__logIOSEvents &&  window.console && window.console.log ) {
            window.console.log( '### encryptedCardNumberInput::__mouseUp_iOS:: ' );
        }

        if(!__iosFocus){
            if (__logIOSEvents &&  window.console && window.console.log ) {
                window.console.log( '### encryptedCardNumberInput::mouseup::no focus set - so set focus ' );
            }
            __focus();

        }else{
            if (__logIOSEvents &&  window.console && window.console.log ) {
                window.console.log( '### encryptedCardNumberInput::mouseup::focus set - so do nothing ' );
            }
        }
    };

    var __click_iOS = function(e){

        if (__logIOSEvents &&  window.console && window.console.log ) {
            window.console.log( '### encryptedCardNumberInput::__click_iOS:: ' );
        }

        __iosClick = true;

        tellMainWindowFn({action : 'click'}, __id);
    };

    // If number is at a valid length start performing luhn check on key up.
    // Fixes the issue where user enters valid set of card details and so pay button becomes enabled. Then they add another digit to the card number and click 'pay'.
    // In iOS Safari the usual blur event doesn't fire to run the luhn check and trigger an error which disables the pay button
    var __keyUp_iOS = function(e){

        if( ValidationsCCNum.isValidLength(__elem, __cardGroupTypes) ){

            doLuhnCheck();
        }
    };

    var __focus = function(e){

        if (__logIOSEvents && window.console && window.console.log ) {
            window.console.log( '### encryptedCardNumberInput::__focus:: __elem=',__elem );
        }

        __iosFocus = true;

        storeFocusFn(true);

        tellMainWindowFn({action : 'focus', focus : true}, __id);
    };

    var __blur = function(e){

        if (__logIOSEvents && window.console && window.console.log ) {
            window.console.log( '### encryptedCardNumberInput::__blur:: __elem=',__elem );
        }

        storeFocusFn(false);

        tellMainWindowFn({action : 'focus', focus : false}, __id);

        doLuhnCheck();

        // Check for partially completed field - if field is filled but not valid and there isn't another error already in place
        if( __elem.value.length && !ValidationsCCNum.getIsValidCardNumber() && !DOM._hasClass(__elem, 'js-chckt-input-field-error') ){

            processValidationFeedbackFn({error:'incomplete field', action : 'blur'}, {node : __elem, id : __id});
        }
    };

    var doLuhnCheck = function(){

        // Perform luhn check
        var commObj = ValidationsCCNum.doLuhnCheck(__elem, __cardGroupTypes);

        // The luhn check represents an extra event that fires AFTER the encryption (since it is (mainly) called from a blur event, which fires after keyup)
        // But because it's not an encryption event SF treats it as a regular event - it sees a validation object with no
        // errors and therefore checks if we have a valid field which we can then encrypt: meaning we can end up encrypting the field twice
        // So... we only propagate this event if there is something INVALID to report i.e. we have an error
        if(commObj && commObj.error.length){

            processValidationFeedbackFn(commObj, {node : __elem, id : __id});
        }
    };

    return Utils;
} );
/* global define, _b$dl */
define( 'encryptedExpiryDateInput', ['Constants', 'DOM', 'validationsCCDate', 'validationUtils'], function (Constants, DOM, ValidationsCCDate, ValUtils) {

    "use strict";
    var Utils = {};

    var __elem;
    var __id;// aka fieldType

    var __isActiveIECutEvent = false;

    var __iosClick = false;// for forcing mouseUp, click events when only touchstart/touchend fire in iOS
    var __iosFocus = false;// registers when focus event fires. Used in mouseUp to force a __focus action if it hasn't happened naturally (which is 2nd & sub times)

    var processValidationFeedbackFn;
    var tellMainWindowFn;
    var storeFocusFn;

    Utils.setup = function(pId, pSharedScope){

        __id = pId;

        processValidationFeedbackFn = pSharedScope.processValidationsObj;
        tellMainWindowFn = pSharedScope.tellMainWindow;
        storeFocusFn = pSharedScope.storeFocus;

        var hideElem = document.getElementById( Constants.__HOSTED_NUMBER_FIELD_STR );
        hideElem.parentNode.removeChild(hideElem);

        hideElem = document.getElementById( Constants.__HOSTED_CVC_FIELD_STR );
        hideElem.parentNode.removeChild(hideElem);

        hideElem = document.getElementById( Constants.__HOSTED_MONTH_FIELD_STR );
        hideElem.parentNode.removeChild(hideElem);
        hideElem = document.getElementById( Constants.__HOSTED_YEAR_FIELD_STR );
        hideElem.parentNode.removeChild(hideElem);

        // Show
        __elem = document.getElementById( Constants.__HOSTED_DATE_FIELD_STR );
        __elem.style.display = 'block';

        DOM._on(__elem, 'keydown', __keyDown, false);
        DOM._on(__elem, 'input', __input, false);


        // ANDROID SPECIFIC LISTENERS
        if(ValUtils.__IS_ANDROID){
            DOM._on(__elem, 'keyup', __keyUpAndroid, false);
        }
        //--


        // IE SPECIFIC LISTENERS
        if(ValUtils.__IS_IE && ValUtils.__IS_IE <= 9){
            DOM._on(__elem, 'keyup', __keyUpIE, false);
            DOM._on(__elem, 'cut', __cutIE, false);
            DOM._on(document, 'selectionchange', __selectionChangeIE, false);
        }

        if(ValUtils.__IS_IE && ValUtils.__IS_IE === 8){
            DOM._on(__elem, 'paste', __pasteIE8, false);
        }
        //--


        // iOS SPECIFIC LISTENERS
        // see encryptedCardNumberInput.js for explanation of "why?"
        if(ValUtils.__IS_IPHONE){

            DOM._on(__elem, 'touchstart', __touchStart_iOS, false);
            DOM._on(__elem, 'touchend', __touchEnd_iOS, false);
            DOM._on(__elem, 'mousedown', __mouseDown_iOS, false);
            DOM._on(__elem, 'mouseup', __mouseUp_iOS, false);
            DOM._on(__elem, 'click', __click_iOS, false);
        }
        //--


        DOM._on(__elem, 'focus', __focus, false);
        DOM._on(__elem, 'blur', __blur, false);

        return __elem;
    };


    var __keyDown = function(e){

        ValidationsCCDate.keyDownDate(e, __elem);
    };

    var __input = function(e){

        var commObj = ValidationsCCDate.inputDate(e, __elem);

        if(commObj){

            processValidationFeedbackFn(commObj, {node : __elem, id : __id});
        }
    };


    // Extra cursor position check for Android devices
    var __keyUpAndroid = function(e){

        ValidationsCCDate.keyUpDateAndroid(e, __elem);
    };

    // IE9 Runs an 'input' event listener for IE9 when delete key pressed
    // re. https://developer.mozilla.org/en-US/docs/Web/Events/input
    // --> [2] IE 9 does not fire an input event when the user deletes characters from an input (e.g. by pressing Backspace or Delete, or using the "Cut" operation).
    //
    // IE8 No input event - so run 'input' event listener from onKeyUp event instead
    // (see ValidationsCCNum.keyUpCCNumberIE for comments about excluding arrow & shift keys)
    var __keyUpIE = function(e){

        var commObj = ValidationsCCDate.keyUpDateIE(e, __elem);

        if(commObj){

            processValidationFeedbackFn(commObj, {node : __elem, id : __id});
        }
    };

    // Cut doesn't fire an event in IE<=9 - so force an input event
    var __cutIE = function(e){

        __isActiveIECutEvent = true;

        // Make async so that __elem.value has time to register it's change
        setTimeout(function(){

            var commObj = ValidationsCCDate.inputDate(e, __elem);

            if(commObj){

                processValidationFeedbackFn(commObj, {node : __elem, id : __id});
            }

            __isActiveIECutEvent = false;
        },0);
    };

    // IE 8 & 9 - detect clicking on the erase text, "x" in the text field
    // If the field is cleared - force an input event
    var __selectionChangeIE = function(e){

        // Don't do anything if a 'cut' event has been detected
        if(__isActiveIECutEvent){
            return;
        }

        var el = document.activeElement;

        if(el === __elem && el.value === ''){

            if ( window.console && window.console.log ) {
                window.console.log( '### hostedCardNumberFieldInput2::__selectionChangeIE:: EMPTY STRING' );
            }

            var commObj = ValidationsCCDate.inputDate(e, __elem);

            if(commObj){

                processValidationFeedbackFn(commObj, {node : __elem, id : __id});
            }
        }
    };

    var __pasteIE8 = function(e){

        // Make async so that __elem.value has time to register it's change
        setTimeout(function(){

            var commObj = ValidationsCCDate.inputDate(e, __elem);

            if(commObj){

                processValidationFeedbackFn(commObj, {node : __elem, id : __id});
            }
        },0);
    };


    var __touchStart_iOS = function(e){

        if (__logIOSEvents && window.console && window.console.log ) {
            window.console.log( '\n### encryptedExpiryDateInput::__touchStart_iOS:: ' );
        }

        __iosClick = false;

        __iosFocus = false;// for when only touchstart/touchend fire
    };

    var __touchEnd_iOS = function(e){

        if (__logIOSEvents &&  window.console && window.console.log ) {
            window.console.log( '### encryptedExpiryDateInput::__touchEnd_iOS:: ' );
        }

        setTimeout(function(){

            if(!__iosClick){

                if (__logIOSEvents &&  window.console && window.console.log ) {
                    window.console.log( '### encryptedCardNumberInput::__touchEnd_iOS:: forcing click event' );
                }

                __mouseUp_iOS();
                __click_iOS(e);
            }

        }, 400);
    };

    var __mouseDown_iOS = function(e) {

        if (__logIOSEvents &&  window.console && window.console.log ) {
            window.console.log( '### encryptedExpiryDateInput::__mouseDown_iOS:: ' );
        }

        __iosFocus = false;// for when touchstart doesn't fire
    };

    var __mouseUp_iOS = function(e){

        if (__logIOSEvents &&  window.console && window.console.log ) {
            window.console.log( '### encryptedExpiryDateInput::__mouseUp_iOS:: ' );
        }

        if(!__iosFocus){
            if (__logIOSEvents &&  window.console && window.console.log ) {
                window.console.log( '### encryptedCardNumberInput::mouseup::no focus set - so set focus ' );
            }
            __focus();

        }else{
            if (__logIOSEvents &&  window.console && window.console.log ) {
                window.console.log( '### encryptedCardNumberInput::mouseup::focus set - so do nothing ' );
            }
        }
    };

    var __click_iOS = function(e){

        if (__logIOSEvents &&  window.console && window.console.log ) {
            window.console.log( '### encryptedExpiryDateInput::__click_iOS:: ' );
        }

        __iosClick = true;

        tellMainWindowFn({action : 'click'}, __id);
    };


    var __focus = function(e){

        if (__logIOSEvents && window.console && window.console.log ) {
            window.console.log( '### encryptedExpiryDateInput::__focus:: __elem=',__elem );
        }

        __iosFocus = true;

        storeFocusFn(true);

        tellMainWindowFn({action : 'focus', focus : true}, __id);
    };

    var __blur = function(e){

        if (__logIOSEvents &&  window.console && window.console.log ) {
            window.console.log( '### encryptedExpiryDateInput::__blur:: ' );
        }

        storeFocusFn(false);

        tellMainWindowFn({action : 'focus', focus : false}, __id);

        // Check for partially completed field - if field is filled but not valid and there isn't another error already in place
        if( __elem.value.length && !ValidationsCCDate.getIsValidExpiryDate() && !DOM._hasClass(__elem, 'js-chckt-input-field-error') ){

            if ( window.console && window.console.log ) {
                window.console.log( '### hostedExpiryDateFieldInput2::__blur:: expiry date field not complete' );
            }

            processValidationFeedbackFn({error:'incomplete field', action : 'blur'}, {node : __elem, id : __id});
        }
    };


    return Utils;
} );
/* global define, _b$dl */
define( 'encryptedExpiryMonthInput', ['Constants', 'DOM', 'validationsCCMonth', 'validationUtils'], function (Constants, DOM, ValidationsCCMonth, ValUtils) {

    "use strict";
    var Utils = {};

    var __elem;
    var __id;// aka fieldType

    var __isActiveIECutEvent = false;

    var __iosClick = false;// for forcing mouseUp, click events when only touchstart/touchend fire in iOS
    var __iosFocus = false;// registers when focus event fires. Used in mouseUp to force a __focus action if it hasn't happened naturally (which is 2nd & sub times)

    var processValidationFeedbackFn;
    var tellMainWindowFn;
    var storeFocusFn;

    Utils.setup = function(pId, pSharedScope){

        __id = pId;

        processValidationFeedbackFn = pSharedScope.processValidationsObj;
        tellMainWindowFn = pSharedScope.tellMainWindow;
        storeFocusFn = pSharedScope.storeFocus;


        var hideElem = document.getElementById( Constants.__HOSTED_NUMBER_FIELD_STR );
        hideElem.parentNode.removeChild(hideElem);

        hideElem = document.getElementById( Constants.__HOSTED_DATE_FIELD_STR );
        hideElem.parentNode.removeChild(hideElem);
        hideElem = document.getElementById( Constants.__HOSTED_YEAR_FIELD_STR );
        hideElem.parentNode.removeChild(hideElem);
        hideElem = document.getElementById( Constants.__EXPIRY_MONTH_STR );
        hideElem.parentNode.removeChild(hideElem);
        hideElem = document.getElementById( Constants.__EXPIRY_YEAR_STR );
        hideElem.parentNode.removeChild(hideElem);

        hideElem = document.getElementById( Constants.__HOSTED_CVC_FIELD_STR );
        hideElem.parentNode.removeChild(hideElem);

        // Show
        __elem = document.getElementById( Constants.__HOSTED_MONTH_FIELD_STR );
        __elem.style.display = 'block';


        DOM._on(__elem, 'keydown', __keyDown, false);
        DOM._on(__elem, 'input', __input, false);


        // IE SPECIFIC LISTENERS
        if(ValUtils.__IS_IE && ValUtils.__IS_IE <= 9){
            DOM._on(__elem, 'keyup', __keyUpIE, false);
            DOM._on(__elem, 'cut', __cutIE, false);
            DOM._on(document, 'selectionchange', __selectionChangeIE, false);
        }

        if(ValUtils.__IS_IE && ValUtils.__IS_IE === 8){
            DOM._on(__elem, 'paste', __pasteIE8, false);
        }
        //--


        // iOS SPECIFIC LISTENERS
        // see encryptedCardNumberInput.js for explanation of "why?"
        if(ValUtils.__IS_IPHONE){

            DOM._on(__elem, 'touchstart', __touchStart_iOS, false);
            DOM._on(__elem, 'touchend', __touchEnd_iOS, false);
            DOM._on(__elem, 'mousedown', __mouseDown_iOS, false);
            DOM._on(__elem, 'mouseup', __mouseUp_iOS, false);
            DOM._on(__elem, 'click', __click_iOS, false);
        }
        //--

        DOM._on(__elem, 'focus', __focus, false);
        DOM._on(__elem, 'blur', __blur, false);

        return __elem;
    };

    var __keyDown = function(e){

        ValidationsCCMonth.keyDownMonth(e, __elem);
    };

    var __input = function(e){

        var commObj = ValidationsCCMonth.inputMonth(e, __elem);

        if(commObj){

            processValidationFeedbackFn(commObj, {node : __elem, id : __id});
        }
    };


    // IE9 Runs an 'input' event listener for IE9 when delete key pressed
    // re. https://developer.mozilla.org/en-US/docs/Web/Events/input
    // --> [2] IE 9 does not fire an input event when the user deletes characters from an input (e.g. by pressing Backspace or Delete, or using the "Cut" operation).
    //
    // IE8 No input event - so run 'input' event listener from onKeyUp event instead
    // (see ValidationsCCNum.keyUpCCNumberIE for comments about excluding arrow & shift keys)
    var __keyUpIE = function(e){

        var commObj = ValidationsCCMonth.keyUpMonthIE(e, __elem);

        if(commObj){

            processValidationFeedbackFn(commObj, {node : __elem, id : __id});
        }
    };

    // Cut doesn't fire an event in IE<=9 - so force an input event
    var __cutIE = function(e){

        __isActiveIECutEvent = true;

        // Make async so that __elem.value has time to register it's change
        setTimeout(function(){

            var commObj = ValidationsCCMonth.inputMonth(e, __elem);

            if(commObj){

                processValidationFeedbackFn(commObj, {node : __elem, id : __id});
            }

            __isActiveIECutEvent = false;
        },0);
    };

    // IE 8 & 9 - detect clicking on the erase text, "x" in the text field
    // If the field is cleared - force an input event
    var __selectionChangeIE = function(e){

        // Don't do anything if a 'cut' event has been detected
        if(__isActiveIECutEvent){
            return;
        }

        var el = document.activeElement;

        if(el === __elem && el.value === ''){

            if ( window.console && window.console.log ) {
                window.console.log( '### hostedCardNumberFieldInput2::__selectionChangeIE:: EMPTY STRING' );
            }

            var commObj = ValidationsCCMonth.inputMonth(e, __elem);

            if(commObj){

                processValidationFeedbackFn(commObj, {node : __elem, id : __id});
            }
        }
    };

    var __pasteIE8 = function(e){

        // Make async so that __elem.value has time to register it's change
        setTimeout(function(){

            var commObj = ValidationsCCMonth.inputMonth(e, __elem);

            if(commObj){

                processValidationFeedbackFn(commObj, {node : __elem, id : __id});
            }
        },0);
    };

    var __touchStart_iOS = function(e){

        if (__logIOSEvents && window.console && window.console.log ) {
            window.console.log( '\n### encryptedExpiryMonthInput::__touchStart_iOS:: ' );
        }

        __iosClick = false;

        __iosFocus = false;// for when only touchstart/touchend fire
    };

    var __touchEnd_iOS = function(e){

        if (__logIOSEvents &&  window.console && window.console.log ) {
            window.console.log( '### encryptedExpiryMonthInput::__touchEnd_iOS:: ' );
        }

        setTimeout(function(){

            if(!__iosClick){

                if (__logIOSEvents &&  window.console && window.console.log ) {
                    window.console.log( '### encryptedCardNumberInput::__touchEnd_iOS:: forcing click event' );
                }

                __mouseUp_iOS();
                __click_iOS(e);
            }

        }, 400);
    };

    var __mouseDown_iOS = function(e) {

        if (__logIOSEvents &&  window.console && window.console.log ) {
            window.console.log( '### encryptedExpiryMonthInput::__mouseDown_iOS:: ' );
        }

        __iosFocus = false;// for when touchstart doesn't fire
    };

    var __mouseUp_iOS = function(e){

        if (__logIOSEvents &&  window.console && window.console.log ) {
            window.console.log( '### encryptedExpiryMonthInput::__mouseUp_iOS:: ' );
        }

        if(!__iosFocus){
            if (__logIOSEvents &&  window.console && window.console.log ) {
                window.console.log( '### encryptedCardNumberInput::mouseup::no focus set - so set focus ' );
            }
            __focus();

        }else{
            if (__logIOSEvents &&  window.console && window.console.log ) {
                window.console.log( '### encryptedCardNumberInput::mouseup::focus set - so do nothing ' );
            }
        }
    };

    var __click_iOS = function(e){

        if (__logIOSEvents &&  window.console && window.console.log ) {
            window.console.log( '### encryptedExpiryMonthInput::__click_iOS:: ' );
        }

        __iosClick = true;

        tellMainWindowFn({action : 'click'}, __id);
    };


    var __focus = function(e){

        if (__logIOSEvents && window.console && window.console.log ) {
            window.console.log( '### encryptedExpiryMonthInput::__focus:: __elem=',__elem );
        }

        __iosFocus = true;

        storeFocusFn(true);

        tellMainWindowFn({action : 'focus', focus : true}, __id);
    };

    var __blur = function(e){

        if (__logIOSEvents &&  window.console && window.console.log ) {
            window.console.log( '### encryptedExpiryMonthInput::__blur:: ' );
        }

        storeFocusFn(false);

        tellMainWindowFn({action : 'focus', focus : false}, __id);

        // Check for partially completed field - if field is filled but not valid and there isn't another error already in place
        if( __elem.value.length && !ValidationsCCMonth.getIsValidExpiryMonth() && !DOM._hasClass(__elem, 'js-chckt-input-field-error') ){

            processValidationFeedbackFn({error:'incomplete field', action : 'blur'}, {node : __elem, id : __id});
        }
    };

    return Utils;
} );
/* global define, _b$dl */
define( 'encryptedExpiryYearInput', ['Constants', 'DOM', 'validationsCCYear', 'validationUtils'], function (Constants, DOM, ValidationsCCYear, ValUtils) {

    "use strict";
    var Utils = {};

    var __elem;
    var __id;// aka fieldType

    var __isActiveIECutEvent = false;

    var __iosClick = false;// for forcing mouseUp, click events when only touchstart/touchend fire in iOS
    var __iosFocus = false;// registers when focus event fires. Used in mouseUp to force a __focus action if it hasn't happened naturally (which is 2nd & sub times)

    var processValidationFeedbackFn;
    var tellMainWindowFn;
    var storeFocusFn;

    Utils.setup = function(pId, pSharedScope){

        __id = pId;

        processValidationFeedbackFn = pSharedScope.processValidationsObj;
        tellMainWindowFn = pSharedScope.tellMainWindow;
        storeFocusFn = pSharedScope.storeFocus;

        var hideElem = document.getElementById( Constants.__HOSTED_NUMBER_FIELD_STR );
        hideElem.parentNode.removeChild(hideElem);

        hideElem = document.getElementById( Constants.__HOSTED_DATE_FIELD_STR );
        hideElem.parentNode.removeChild(hideElem);
        hideElem = document.getElementById( Constants.__HOSTED_MONTH_FIELD_STR );
        hideElem.parentNode.removeChild(hideElem);
        hideElem = document.getElementById( Constants.__EXPIRY_MONTH_STR );
        hideElem.parentNode.removeChild(hideElem);

        hideElem = document.getElementById( Constants.__HOSTED_CVC_FIELD_STR );
        hideElem.parentNode.removeChild(hideElem);

        // Show
        __elem = document.getElementById( Constants.__HOSTED_YEAR_FIELD_STR );
        __elem.style.display = 'block';


        DOM._on(__elem, 'keydown', __keyDown, false);
        DOM._on(__elem, 'input', __input, false);


        // IE SPECIFIC LISTENERS
        if(ValUtils.__IS_IE && ValUtils.__IS_IE <= 9){
            DOM._on(__elem, 'keyup', __keyUpIE, false);
            DOM._on(__elem, 'cut', __cutIE, false);
            DOM._on(document, 'selectionchange', __selectionChangeIE, false);
        }

        if(ValUtils.__IS_IE && ValUtils.__IS_IE === 8){
            DOM._on(__elem, 'paste', __pasteIE8, false);
        }
        //--


        // iOS SPECIFIC LISTENERS
        // see encryptedCardNumberInput.js for explanation of "why?"
        if(ValUtils.__IS_IPHONE){

            DOM._on(__elem, 'touchstart', __touchStart_iOS, false);
            DOM._on(__elem, 'touchend', __touchEnd_iOS, false);
            DOM._on(__elem, 'mousedown', __mouseDown_iOS, false);
            DOM._on(__elem, 'mouseup', __mouseUp_iOS, false);
            DOM._on(__elem, 'click', __click_iOS, false);
        }
        //--


        DOM._on(__elem, 'focus', __focus, false);
        DOM._on(__elem, 'blur', __blur, false);

        return __elem;
    };

    var __keyDown = function(e){

        ValidationsCCYear.keyDownYear(e, __elem);
    };

    var __input = function(e){

        var commObj = ValidationsCCYear.inputYear(e, __elem);

        if(commObj){

            processValidationFeedbackFn(commObj, {node : __elem, id : __id});
        }
    };


    // IE9 Runs an 'input' event listener for IE9 when delete key pressed
    // re. https://developer.mozilla.org/en-US/docs/Web/Events/input
    // --> [2] IE 9 does not fire an input event when the user deletes characters from an input (e.g. by pressing Backspace or Delete, or using the "Cut" operation).
    //
    // IE8 No input event - so run 'input' event listener from onKeyUp event instead
    // (see ValidationsCCNum.keyUpCCNumberIE for comments about excluding arrow & shift keys)
    var __keyUpIE = function(e){

        var commObj = ValidationsCCYear.keyUpYearIE(e, __elem);

        if(commObj){

            processValidationFeedbackFn(commObj, {node : __elem, id : __id});
        }
    };

    // Cut doesn't fire an event in IE<=9 - so force an input event
    var __cutIE = function(e){

        __isActiveIECutEvent = true;

        // Make async so that __elem.value has time to register it's change
        setTimeout(function(){

            var commObj = ValidationsCCYear.inputYear(e, __elem);

            if(commObj){

                processValidationFeedbackFn(commObj, {node : __elem, id : __id});
            }

            __isActiveIECutEvent = false;
        },0);
    };

    // IE 8 & 9 - detect clicking on the erase text, "x" in the text field
    // If the field is cleared - force an input event
    var __selectionChangeIE = function(e){

        // Don't do anything if a 'cut' event has been detected
        if(__isActiveIECutEvent){
            return;
        }

        var el = document.activeElement;

        if(el === __elem && el.value === ''){

            if ( window.console && window.console.log ) {
                window.console.log( '### hostedCardNumberFieldInput2::__selectionChangeIE:: EMPTY STRING' );
            }

            var commObj = ValidationsCCYear.inputYear(e, __elem);

            if(commObj){

                processValidationFeedbackFn(commObj, {node : __elem, id : __id});
            }
        }
    };

    var __pasteIE8 = function(e){

        // Make async so that __elem.value has time to register it's change
        setTimeout(function(){

            var commObj = ValidationsCCYear.inputYear(e, __elem);

            if(commObj){

                processValidationFeedbackFn(commObj, {node : __elem, id : __id});
            }
        },0);
    };


    var __touchStart_iOS = function(e){

        if (__logIOSEvents && window.console && window.console.log ) {
            window.console.log( '\n### encryptedExpiryYearInput::__touchStart_iOS:: ' );
        }

        __iosClick = false;

        __iosFocus = false;// for when only touchstart/touchend fire
    };

    var __touchEnd_iOS = function(e){

        if (__logIOSEvents &&  window.console && window.console.log ) {
            window.console.log( '### encryptedExpiryYearInput::__touchEnd_iOS:: ' );
        }

        setTimeout(function(){

            if(!__iosClick){

                if (__logIOSEvents &&  window.console && window.console.log ) {
                    window.console.log( '### encryptedCardNumberInput::__touchEnd_iOS:: forcing click event' );
                }

                __mouseUp_iOS();
                __click_iOS(e);
            }

        }, 400);
    };

    var __mouseDown_iOS = function(e) {

        if (__logIOSEvents &&  window.console && window.console.log ) {
            window.console.log( '### encryptedExpiryYearInput::__mouseDown_iOS:: ' );
        }

        __iosFocus = false;// for when touchstart doesn't fire
    };

    var __mouseUp_iOS = function(e){

        if (__logIOSEvents &&  window.console && window.console.log ) {
            window.console.log( '### encryptedExpiryYearInput::__mouseUp_iOS:: ' );
        }

        if(!__iosFocus){
            if (__logIOSEvents &&  window.console && window.console.log ) {
                window.console.log( '### encryptedCardNumberInput::mouseup::no focus set - so set focus ' );
            }
            __focus();

        }else{
            if (__logIOSEvents &&  window.console && window.console.log ) {
                window.console.log( '### encryptedCardNumberInput::mouseup::focus set - so do nothing ' );
            }
        }
    };

    var __click_iOS = function(e){

        if (__logIOSEvents &&  window.console && window.console.log ) {
            window.console.log( '### encryptedExpiryYearInput::__click_iOS:: ' );
        }

        __iosClick = true;

        tellMainWindowFn({action : 'click'}, __id);
    };

    var __focus = function(e){

        if (__logIOSEvents && window.console && window.console.log ) {
            window.console.log( '### encryptedExpiryYearInput::__focus:: __elem=',__elem );
        }

        __iosFocus = true;

        storeFocusFn(true);

        tellMainWindowFn({action : 'focus', focus : true}, __id);
    };

    var __blur = function(e){

        if (__logIOSEvents &&  window.console && window.console.log ) {
            window.console.log( '### encryptedExpiryYearInput::__blur:: ' );
        }

        storeFocusFn(false);

        tellMainWindowFn({action : 'focus', focus : false}, __id);

        // Check for partially completed field - if field is filled but not valid and there isn't another error already in place
        if( __elem.value.length && !ValidationsCCYear.getIsValidExpiryYear() && !DOM._hasClass(__elem, 'js-chckt-input-field-error') ){

            processValidationFeedbackFn({error:'incomplete field', action : 'blur'}, {node : __elem, id : __id});
        }
    };

    return Utils;
} );
/* global define, _b$dl */
define( 'encryptedSecurityCodeInput', ['Constants', 'DOM', 'validationsCCSecurityCode', 'validationUtils'], function (Constants, DOM, ValidationsCCSecurityCode, ValUtils) {

    "use strict";
    var Utils = {};

    var __elem;
    var __id;

    var __isActiveIECutEvent = false;

    var __iosClick = false;
    var __iosFocus = false;

    var processValidationFeedbackFn;
    var tellMainWindowFn;

    var storeFocusFn;

    // var startTime = new Date();
    //
    // function getET(){
    //
    //     var nt = new Date();
    //     var et = nt - startTime;
    //
    //     startTime = new Date();
    //
    //     return et;
    // }

    Utils.setup = function(pId, pSharedScope, pCardGroupTypes, pRecurringCardIndicator){

        __id = pId;

        ValidationsCCSecurityCode.setRecurringCardIndicator(pRecurringCardIndicator);

        processValidationFeedbackFn = pSharedScope.processValidationsObj;
        tellMainWindowFn = pSharedScope.tellMainWindow;

        storeFocusFn = pSharedScope.storeFocus;

        var hideElem = document.getElementById( Constants.__HOSTED_NUMBER_FIELD_STR );
        hideElem.parentNode.removeChild(hideElem);

        hideElem = document.getElementById( Constants.__HOSTED_DATE_FIELD_STR );
        hideElem.parentNode.removeChild(hideElem);
        hideElem = document.getElementById( Constants.__HOSTED_MONTH_FIELD_STR );
        hideElem.parentNode.removeChild(hideElem);
        hideElem = document.getElementById( Constants.__HOSTED_YEAR_FIELD_STR );
        hideElem.parentNode.removeChild(hideElem);
        hideElem = document.getElementById( Constants.__EXPIRY_MONTH_STR );
        hideElem.parentNode.removeChild(hideElem);
        hideElem = document.getElementById( Constants.__EXPIRY_YEAR_STR );
        hideElem.parentNode.removeChild(hideElem);

        // Show
        __elem = document.getElementById( Constants.__HOSTED_CVC_FIELD_STR );
        __elem.style.display = 'block';


        DOM._on(__elem, 'keydown', __keyDown, false);
        DOM._on(__elem, 'input', __input, false);


        // IE SPECIFIC LISTENERS
        if(ValUtils.__IS_IE && ValUtils.__IS_IE <= 9){
            DOM._on(__elem, 'keyup', __keyUpIE, false);
            DOM._on(__elem, 'cut', __cutIE, false);
            DOM._on(document, 'selectionchange', __selectionChangeIE, false);
        }

        if(ValUtils.__IS_IE && ValUtils.__IS_IE === 8){
            DOM._on(__elem, 'paste', __pasteIE8, false);
        }
        //--


        // iOS SPECIFIC LISTENERS
        // see encryptedCardNumberInput.js for explanation of "why?"
        if(ValUtils.__IS_IPHONE){

            DOM._on(__elem, 'touchstart', __touchStart_iOS, false);//used
            DOM._on(__elem, 'touchmove', __touchMove_iOS, false);
            DOM._on(__elem, 'touchend', __touchEnd_iOS, false);//used
            DOM._on(__elem, 'mousedown', __mouseDown_iOS, false);//used
            DOM._on(__elem, 'mouseup', __mouseUp_iOS, false);//used
            DOM._on(__elem, 'click', __click_iOS, false);//used
        }
        //--


        DOM._on(__elem, 'focus', __focus, false);
        DOM._on(__elem, 'blur', __blur, false);


        return __elem;
    };


    var __keyDown = function(e){

        ValidationsCCSecurityCode.keyDownCVC(e, __elem);
    };

    var __input = function(e){

        var commObj;

        commObj = ValidationsCCSecurityCode.inputCVC(e, __elem);
        if(commObj){

            processValidationFeedbackFn(commObj, {node : __elem, id : __id});
        }
    };

    // IE9 Will run an 'input' event listener for IE9 when delete key pressed
    //
    // IE8 No input event - so run 'input' event listener from onKeyUp event instead
    //
    // See ValidationsCCSecurityCode2.keyUpCVCNumberIE for full explanation
    var __keyUpIE = function(e){

        var commObj = ValidationsCCSecurityCode.keyUpCVCNumberIE(e, __elem);

        if(commObj){

            processValidationFeedbackFn(commObj, {node : __elem, id : __id});
        }
    };

    // Cut doesn't fire an event in IE<=9 - so force an input event
    var __cutIE = function(e){

        if ( window.console && window.console.log ) {
            window.console.log( '### hostedCardNumberFieldInput2::__cutIE' );
        }

        __isActiveIECutEvent = true;

        // Make async so that __elem.value has time to register it's change
        setTimeout(function(){

            if ( window.console && window.console.log ) {
                window.console.log( '### hostedCardNumberFieldInput2::__cutIE after timeout' );
            }

            var commObj = ValidationsCCSecurityCode.inputCVC(e, __elem);

            if(commObj){

                processValidationFeedbackFn(commObj, {node : __elem, id : __id});
            }

            __isActiveIECutEvent = false;
        },0);
    };

    // IE 8 & 9 - detect clicking on the erase text, "x", in the text field
    // If the field is cleared - force an input event
    var __selectionChangeIE = function(e){

        // Don't do anthing if a 'cut' event has been detected
        if(__isActiveIECutEvent){
            return;
        }

        var el = document.activeElement;

        if(el === __elem && el.value === ''){

            var commObj = ValidationsCCSecurityCode.inputCVC(e, __elem);

            if(commObj){

                processValidationFeedbackFn(commObj, {node : __elem, id : __id});
            }
        }
    };

    var __pasteIE8 = function(e){

        // Make async so that __elem.value has time to register it's change
        setTimeout(function(){

            var commObj = ValidationsCCSecurityCode.inputCVC(e, __elem);

            if(commObj){

                processValidationFeedbackFn(commObj, {node : __elem, id : __id});
            }
        },0);
    };


    var __touchStart_iOS = function(e){

        if (__logIOSEvents && window.console && window.console.log ) {
            window.console.log( '### encryptedSecurityCodeInput::__touchStart_iOS:: ' );
        }

        __iosClick = false;

        __iosFocus = false;// for when only touchstart/touchend fire
    };

    var __touchMove_iOS = function(e){
        if (__logIOSEvents &&  window.console && window.console.log ) {
            window.console.log( '### encryptedSecurityCodeInput::__touchMove_iOS:: ' );
        }
    };

    var __touchEnd_iOS = function(e){

        if (__logIOSEvents && window.console && window.console.log ) {
            window.console.log( '### encryptedSecurityCodeInput::__touchEnd_iOS:: ' );
        }

        setTimeout(function(){

            if(!__iosClick){

                if (__logIOSEvents && window.console && window.console.log ) {
                    window.console.log( '### encryptedSecurityCodeInput::__touchEnd_iOS:: forcing click event' );
                }

                __mouseUp_iOS();
                __click_iOS(e);
            }

        }, 400);
    };

    var __mouseDown_iOS = function(e) {

        if (__logIOSEvents && window.console && window.console.log ) {
            window.console.log( '### encryptedSecurityCodeInput::__mouseDown_iOS:: ' );
        }

        __iosFocus = false;// for when touchstart doesn't fire
    };

    var __mouseUp_iOS = function(e){

        if (__logIOSEvents && window.console && window.console.log ) {
            window.console.log( '### encryptedSecurityCodeInput::__mouseUp_iOS:: ' );
        }

        if(!__iosFocus){
            if (__logIOSEvents && window.console && window.console.log ) {
                window.console.log( '### encryptedSecurityCodeInput::mouseup::no focus set - so set focus ' );
            }
            __focus();
        }else{
            if (__logIOSEvents && window.console && window.console.log ) {
                window.console.log( '### encryptedSecurityCodeInput::mouseup::focus set - so do nothing ' );
            }
        }
    };

    var __click_iOS = function(e){

        if (__logIOSEvents &&  window.console && window.console.log ) {
            window.console.log( '### encryptedSecurityCodeInput::__click_iOS:: ' );
        }

        __iosClick = true;

        tellMainWindowFn({action : 'click'}, __id);
    };

    var __focus = function(e){

        if (__logIOSEvents && window.console && window.console.log ) {
            window.console.log( '### encryptedSecurityCodeInput::__focus:: __elem=',__elem );
        }

        __iosFocus = true;

        storeFocusFn(true);

        tellMainWindowFn({action : 'focus', focus : true}, __id);
    };

    var __blur = function(e){

        if (__logIOSEvents && window.console && window.console.log ) {
            window.console.log( '### encryptedSecurityCodeInput::__blur:: __elem=',__elem );
        }

        storeFocusFn(false);

        tellMainWindowFn({action : 'focus', focus : false}, __id);

        // Check for partially completed field - if field is filled but not valid and there isn't another error already in place
        if( __elem.value.length && !ValidationsCCSecurityCode.getIsValidCvcNumber() && !DOM._hasClass(__elem, 'js-chckt-input-field-error') ){

            processValidationFeedbackFn({error:'incomplete field', action : 'blur'}, {node : __elem, id : __id});
        }
    };


    return Utils;
} );
/* global define, require, chckt, origin, originKey, _b$dl, checkoutShopperUrl, adyen, __logIOSEvents */
define( 'securedFields_config',
    [ 'Constants', 'DOM', 'validationUtils', 'processStyles', 'processPlaceholders', 'validationsCCSecurityCode', 'fireEvent'],
    function ( Constants, DOM, ValUtils, ProcessStyles, ProcessPlaceholders, ValidationsCCSecurityCode, FireEvent ) {

        "use strict";

        ///////////////////////////////////////////////////////////////////////////////////////////////////////////////
        ////////////////// SECURED FIELDS FUNCTIONALITY PART 1: INIT/CONFIG/SPECIAL MESSAGES //////////////////////////
        ///////////////////////////////////////////////////////////////////////////////////////////////////////////////
        var secureFieldsConfig = function(pSharedScope, pSfStateObj){

            var __cardGroupTypes, __recurringCardIndicator;

            // Object we can decorate with extra functionalites.
            var that = {};

            // Decorate
            FireEvent(that);

            var inputEl;

            /**
             * @function: Run as soon as module is 'required' (this happens in the wrapper)
             *              Check origin of iframe & add listener for "message" event
             */
            var __init = function(){

                ////// CHECK WHERE IFRAME IS HOSTED ////////
                var permittedSrc,
                    docOrigin = document.location.origin || (document.location.protocol + "//" + document.location.host),
                    pathName = document.location.pathname,
                    fullDocURL = docOrigin + pathName;


                ////////// COMMENT IN FOR IE TESTING //////////////////////////////////
                // e.g. 192.168.56.1 (Terminal > ifconfig > vboxnet0 > inet)
//            var checkoutShopperUrl = 'http://192.168.56.1:8080/checkoutshopper/';
                //---------------------------------------------------------------------


                // HTTPS check, for live SF only, for origin of page requesting securedFields

                //TODO###### FOR QUICK LOCAL TESTING FROM xamples_csfOnly/sf DIR - COMMENT OUT CODE BELOW ####################
                if(checkoutShopperUrl.indexOf('-live') > -1 && origin.indexOf('https') === -1){
                    if(window.console && window.console.error){
                        window.console.error('ERROR: page asking for SecuredFields is not using https, origin=',origin);
                    }
                }

                // Set the appropriate value for what is considered a correct hosting URL and check that a it matches the document origin & pathname
                // If it doesn't match then we return from this function and no further action can be taken
                // (checkoutShopperUrl is initialised when this file asset is served)
                /*
                permittedSrc = checkoutShopperUrl + 'assets/html/' + originKey + '/securedFields.' + '1.3.1' + '.html';

                if(permittedSrc !== fullDocURL){
                    if(window.console && window.console.error){
                        window.console.error('ERROR: secureFields::init:: Invalid hosting of SecuredFields file.  Document origin: ',docOrigin, 'Permitted src=',permittedSrc,'Actual src=',fullDocURL);
                    }
                    return;
                }
                */

                if(_b$dl && window.console && window.console.log){
                    window.console.log('\n@@@@@@@@@@@@@@@@@@@@@@@@@@@@');
                    window.console.log('\n@@@ secureFields::init:: File origin check: ok');
                }

                //TODO#######################################################################################################
                //--- end CHECK WHERE IFRAME IS HOSTED ------

                if (window.addEventListener){
                    window.addEventListener("message", __mainWindowPostMessageListener, false);
                } else {
                    window.attachEvent("onmessage", __mainWindowPostMessageListener);
                }
            };

            // Listener for all postMessages from checkoutSecureFields
            var __mainWindowPostMessageListener = function(event) {

                if(_b$dl && window.console && window.console.log){
                    window.console.log('\n@@@@@@@@@@@@@@@@@@@@@@@@@@@@@');
                    window.console.log('@@@ secureFields::__mainWindowPostMessageListener:: event.origin =',event.origin);
                    window.console.log('@@@ secureFields::__mainWindowPostMessageListener:: (page) origin =',origin);
                }

                ////////////////////// DO POSTMESSAGE ORIGIN CHECK ////////////////////////////////////////////////////////
                pSfStateObj.eventSource = event.source;

                pSfStateObj.eventOrigin = event.origin || event.originalEvent.origin;

                // origin is a 'global' var now secureFields is served as a 'wrapped' asset in WEB-INF: see wrapper.js.begin.txt & CheckoutAssetServlet.java
                // and represents the only allowed origin that we will accept postMessages from
                if ( pSfStateObj.eventOrigin !== origin ) {
                    // if(window.console && window.console.warn){
                    //     window.console.warn("WARNING: securedFields:: postMessage not allowed: event origin (",pSfStateObj.eventOrigin,") doesn't match permitted origin:",origin);
                    // }
                    return;
                }

                // HTTPS check, for live SF, for postMessage event origin
//            if(checkoutShopperUrl.indexOf('-live') > -1 && pSfStateObj.eventOrigin.indexOf('https') === -1){
//                if(window.console && window.console.warn){
//                    window.console.warn('WARNING: Window communicating through postMessage is not using https, eventOrigin=',pSfStateObj.eventOrigin);
//                }
//            }
                //--------------- end POSTMESSAGE ORIGIN CHECK -----------------------------------------------------------

                // VERIFY DATA
                if(typeof event.data !== 'string'){
                    if(window.console && window.console.error){
                        window.console.error("ERROR: securedFields:: postMessage config data is incorrect: type 1");
                    }
                    return;
                }

                var csfCommObj;

                try{
                    csfCommObj = JSON.parse(event.data);

                }catch(e){

                    // VERIFY DATA
                    if(window.console && window.console.error){
                        window.console.error("ERROR: securedFields:: postMessage config data is incorrect: type 2");
                    }
                    return;
                }

                var specialMsg = (csfCommObj.hasOwnProperty('focus') ||
                    csfCommObj.hasOwnProperty('brand') ||
                    csfCommObj.hasOwnProperty('setValue') ||
                    csfCommObj.hasOwnProperty('_b$dl') ||
                    csfCommObj.hasOwnProperty('click'))? true : false;

                ///////////////// MAIN 'CONFIG' MESSAGE /////////////////////////////////////////
                var handleConfigMsg = function(){

                    var hasEncryption = false;

                    if(csfCommObj.sfLogAtStart === true){
                        _b$dl = true;
                    }

                    if(_b$dl && window.console && window.console.log){
                        window.console.log('\n@@@@@@@@@@@@@@@@@@@@@@@@@@@@@');
                        window.console.log('@@@ secureFields::__mainWindowPostMessageListener:: handleConfigMsg csfCommObj=',csfCommObj);
                    }

                    // VERIFY DATA
                    if(!csfCommObj.hasOwnProperty('txVariant') || !csfCommObj.hasOwnProperty('fieldType') || !csfCommObj.hasOwnProperty('cardGroupTypes') || !csfCommObj.hasOwnProperty('sfLogAtStart') || !csfCommObj.hasOwnProperty('numKey')){
                        if(window.console && window.console.error){
                            window.console.error("ERROR: securedFields:: postMessage config data is incorrect: type 3");
                        }
                        return;
                    }

                    __recurringCardIndicator = (csfCommObj.recurringCardIndicator)? csfCommObj.recurringCardIndicator : '_r';

                    pSfStateObj.fieldType = csfCommObj.fieldType;
                    pSfStateObj.txVariant = csfCommObj.txVariant;
                    pSfStateObj.numKey = csfCommObj.numKey;

                    __cardGroupTypes = __processCardGroups(pSfStateObj.txVariant, csfCommObj.cardGroupTypes);

                    if ( _b$dl && window.console && window.console.log ) {
                        window.console.log( '### securedFields_config::handleConfigMsg:: __cardGroupTypes=',__cardGroupTypes );
                        window.console.log( '### securedFields_config::handleConfigMsg:: pSfStateObj.txVariant=',pSfStateObj.txVariant );
                    }


                    // Show the specific input in the iframe this instance of secureFields needs to concentrate on. Hide others
                    // Also sets up keyboard event listeners (keydown, keypress, keyup, paste, input).
                    // Plus a listener for blur (for date fields)
                    var input = require(csfCommObj.fieldType + 'Input');// NOTE: not a async operation
                    inputEl = input.setup(csfCommObj.fieldType, pSharedScope, __cardGroupTypes, __recurringCardIndicator);

                    // IE 10, 9 & * don't support window.crypto.getRandomValues
                    // Because of this the encryption process (sjcl.js in adyen.encrypt.0_1_20.js) relies on generating
                    // entropy through mouse movement - which is slow to do in our small iframes (you have to 'scrub'
                    // back and forth about 8 times before enough entropy is generated to allow the encryption to proceed)
                    // So... create some randomness to pass to the encryption process
                    var randomBytes = [];
                    if(ValUtils.__IS_IE && ValUtils.__IS_IE <= 10){

                        // for(var i = 0; i<10; i++){
                        //     randomBytes.push(Math.random() * Math.random() * new Date().getTime());
                        // }

                        for (var i = 0; i < 16; i++) {
                            // "On some browsers, this is cryptographically random"
                            // re. https://github.com/bitwiseshiftleft/sjcl/blob/master/core/random.js
                            randomBytes.push(Math.random()*0x100000000|0);
                        }

//                    if(window.console && window.console.log){
//                        window.console.log('### securedFields_config::handleConfigMsg:: randomBytes=',randomBytes);
//                    }
                    }

                    var encType = typeof adyen.createEncryption;

                    if( (adyen && adyen.cse && adyen.cse.available) && encType === 'function'){
                        hasEncryption = true;
                    }

                    if ( _b$dl && window.console && window.console.log ) {
                        window.console.log( '### securedFields_config::handleConfigMsg:: hasEncryption=',hasEncryption );
                    }

                    if(!hasEncryption){
                        if ( window.console && window.console.warn ) {
                            window.console.warn( 'WARNING: securedFields:: the encryption algorithm is not present. It will not be possible to encrypt input fields' );
                        }
                    }

                    if(hasEncryption){

                        // Create encryption object
                        // Doing it up front has 2 benefits:
                        // Firstly we can set up behaviour tracking & secondly it gives the deviceFingerprinting aspect of the
                        // encryption time to initiate - meaning we don't have to allow for an asynchronous operation
                        // when we call DOM._getEncryptedData
                        var encryptionObj, hiddenElemMonth, hiddenElemYear;

                        // For separate year field it is just the 'expiryYear' field we encrypt
                        // Whilst for combined date field - it is both the hidden 'expiryMonth' & 'expiryYear' fields we encrypt
                        // For everything else it is the inputEl returned from the input.setup process
                        if(csfCommObj.fieldType === Constants.__HOSTED_DATE_FIELD_STR || csfCommObj.fieldType === Constants.__HOSTED_YEAR_FIELD_STR){

                            hiddenElemYear = document.getElementById( Constants.__EXPIRY_YEAR_STR );
                            encryptionObj = DOM._createEncryption(hiddenElemYear, (randomBytes.length)? randomBytes : null);

                            if(csfCommObj.fieldType === Constants.__HOSTED_DATE_FIELD_STR){

                                hiddenElemMonth = document.getElementById( Constants.__EXPIRY_MONTH_STR );
                                encryptionObj = DOM._createEncryption(hiddenElemMonth, (randomBytes.length)? randomBytes : null);
                            }

                        }else{

                            encryptionObj = DOM._createEncryption(inputEl, (randomBytes.length)? randomBytes : null);
                        }


                        // Set up behaviour tracking on number input
                        if(csfCommObj.fieldType === Constants.__HOSTED_NUMBER_FIELD_STR && typeof encryptionObj.monitor === 'function'){
                            encryptionObj.monitor('number', inputEl);
                        }
                    }


                    // Check if styles have been sent and push them to stylesheet
                    ProcessStyles.process(csfCommObj.pmConfig.sfStyles);

                    ProcessPlaceholders.process(inputEl, csfCommObj.fieldType, csfCommObj.pmConfig.placeholders);

                    // Reset placeholder - now we've established what the 3 & 4 digit values for it are
                    if(csfCommObj.fieldType === Constants.__HOSTED_CVC_FIELD_STR){

                        ProcessPlaceholders.setCvcPlaceholder(inputEl, pSfStateObj.txVariant);
                    }

                    if(csfCommObj.sfLogAtStart === true){
                        _b$dl = false;
                    }


                    if(hasEncryption){

                        // After successful configuration - send message that CSF can uses for its iframe loaded count
                        pSharedScope.tellMainWindow({action : 'config'}, csfCommObj.fieldType);
                    }
                };

                /////////// 'SPECIAL' MESSAGES (ARRIVE AFTER INITIAL 'CONFIG' MESSAGE) //////////
                var handleSpecialMsg = function(){

                    // VERIFY DATA
                    if( (!csfCommObj.hasOwnProperty('txVariant') || !csfCommObj.hasOwnProperty('fieldType') || !csfCommObj.hasOwnProperty('numKey') ) &&
                        (!csfCommObj.hasOwnProperty('focus') ||
                            !csfCommObj.hasOwnProperty('brand') ||
                            !csfCommObj.hasOwnProperty('setValue') ||
                            !csfCommObj.hasOwnProperty('click') ||
                            !csfCommObj.hasOwnProperty('_b$dl')) ){
                        if(window.console && window.console.error){
                            window.console.error("ERROR: securedFields:: postMessage special data is incorrect: type 4");
                        }
                        return;
                    }

                    // Dedicated message to set focus on a specific secureField
                    if(csfCommObj.focus){

                        if(!checkNumKey(csfCommObj.numKey)){
                            return;
                        }

                        __respondToFocusMessage(csfCommObj.fieldType);
                    }


                    // iOS thing re. iOS/Safari blur & focus bug
                    if(csfCommObj.click){

                        if (__logIOSEvents && window.console && window.console.log ) {
                            window.console.log( '\n### securedFields_config::handleSpecialMsg:: CLICK MSG pSfStateObj.txVariant=',pSfStateObj.txVariant );
                            window.console.log( '### securedFields_config::handleSpecialMsg:: CLICK MSG pSfStateObj.fieldType=',pSfStateObj.fieldType );
                            window.console.log( '### securedFields_config::handleSpecialMsg:: CLICK MSG pSharedScope.hasFocus=',pSharedScope.hasFocus );
                            window.console.log( '### securedFields_config::handleSpecialMsg:: CLICK MSG csfCommObj=',csfCommObj );
                            window.console.log( '### securedFields_config::handleSpecialMsg:: CLICK MSG inputEl=',inputEl );
                        }

                        if(pSfStateObj.fieldType === csfCommObj.fieldType){

                            if(pSharedScope.hasFocus){

                                if (__logIOSEvents && window.console && window.console.log ) {
                                    window.console.log( '### securedFields_config::handleSpecialMsg:: Field types match, has focus - RESET VALUE & SET CARET POS\n' );
                                }

                                //####### NOTE: Re-setting the value of the input seems to be key to making the caret shift when clicking between filled fields in iOS
                                var val = inputEl.value;

                                var caretPos = ValUtils.getCaretPos(inputEl);

                                inputEl.value = val;

                                ValUtils.setSelectionRange(inputEl, caretPos);
                                //------- end NOTE ---------------------------------------------------

                                if (__logIOSEvents && window.console && window.console.log ) {
                                    window.console.log( '### securedFields_config::handleSpecialMsg:: caretPos=',caretPos );
                                }

                            }else{
                                if (__logIOSEvents && window.console && window.console.log ) {
                                    window.console.log( '### securedFields_config::handleSpecialMsg:: Field types match BUT DOES\'T have focus - DO NOTHING\n' );
                                }
                            }

                        }else{

                            if(!pSharedScope.hasFocus){

                                if (__logIOSEvents && window.console && window.console.log ) {
                                    window.console.log( '### securedFields_config::handleSpecialMsg:: Field types DON\'T match, BUT DOESN\'T have focus - DO NOTHING\n' );
                                }

                            }else{

                                if (__logIOSEvents && window.console && window.console.log ) {
                                    window.console.log( '### securedFields_config::handleSpecialMsg:: Field types DON\'T match, BUT DOES have focus - DO SOMETHING!\n' );
                                }

                                that.fireEvent(inputEl, 'blur');
                                pSharedScope.hasFocus = false;
                            }
                        }
                    }


                    // Dedicated message to tell (cvc) field which card brand is selected...
                    if(csfCommObj.brand){

                        if(!checkNumKey(csfCommObj.numKey)){
                            return;
                        }

                        var cvcElem = document.getElementById( Constants.__HOSTED_CVC_FIELD_STR);
                        var cvcValidityObj = __respondToBrandMessage(csfCommObj.brand, cvcElem);

                        // Respond to changed brand by (re)setting the placeholder text
                        ProcessPlaceholders.setCvcPlaceholder(cvcElem, csfCommObj.brand);

                        // If we've retested the CVC validity now we know the card brand - process the result if the cvc is still valid for this new brand
                        if(cvcValidityObj){
                            pSharedScope.processValidationsObj(cvcValidityObj, {node: cvcElem, id : Constants.__HOSTED_CVC_FIELD_STR});
                        }
                    }

                    // Dedicated msg to write value into specified input & trigger paste/input event: Used for testing
                    if(csfCommObj.setValue){

                        if(!checkNumKey(csfCommObj.numKey)){
                            return;
                        }

                        inputEl.value = csfCommObj.setValue;

                        that.fireEvent(inputEl, 'paste');
                        that.fireEvent(inputEl, 'input');
                    }


                    if(csfCommObj.hasOwnProperty('_b$dl')){

                        if(!checkNumKey(csfCommObj.numKey)){
                            return;
                        }

                        _b$dl = csfCommObj._b$dl;
                    }
                };

                (specialMsg)? handleSpecialMsg() : handleConfigMsg();

                if(_b$dl && window.console && window.console.log){
                    window.console.log('\n@@@ secureFields::__mainWindowPostMessageListener handleSpecialMsg csfCommObj=',csfCommObj);
                }
            };

            var checkNumKey = function(pNumKey){

                if( Number(pNumKey) !== pSfStateObj.numKey ){
                    if(window.console && window.console.error){
                        window.console.error("ERROR: securedFields:: postMessage special data is incorrect: type 5");
                    }
                    return false;
                }

                return true;
            };

            // Utility for 'config' process
            var __processCardGroups = function(pTxVariant, pCardGroups){

                var cardGroupTypes = pCardGroups.slice();

                // If it's not the consolidated card type...
                if(pTxVariant !== 'card'){

                    // ...it's a single, standalone card e.g. 'visa', 'mc', 'amex'...
                    // ...so make sure the __cardGroupTypes array just contains that single value as we only want to
                    // validate CC number against a single card brand
                    cardGroupTypes = [pTxVariant];

                    //TODO - investigate what the ramifications are of stripping the recurringCardIndicator here
                    chckt.cardBrand = pTxVariant;// Also set the cardBrand (so cvc knows how many digits represents a valid cvc)

                    // Store card brand w/o recurring indicator so validation algorithm can use it to extract the correct card object
                    var rIndex = pTxVariant.indexOf(__recurringCardIndicator);
                    chckt.nonConsolidatedCard = (rIndex > -1) ? pTxVariant.substring(0, rIndex) : pTxVariant;
                }

                // Strip any markers off the card names (indicates a recurring card) - e.g. mc_r1 => mc
                cardGroupTypes = cardGroupTypes.map(function(pItem){

                    var rIndex = pItem.indexOf(__recurringCardIndicator);
                    return (rIndex > -1) ? pItem.substring(0, rIndex) : pItem;
                });

                return cardGroupTypes;
            };

            // 'Special' message handler
            var __respondToFocusMessage = function(pFieldType){

                if(_b$dl && window.console && window.console.log){
                    window.console.log('@@@ secureFields::__respondToFocusMessage:: FOCUS event pFieldType=',pFieldType);
                    window.console.log('@@@ secureFields::__respondToFocusMessage:: FOCUS event document.getElementById(pFieldType)=',document.getElementById(pFieldType));
                }
                document.getElementById(pFieldType).focus();
            };

            // 'Special' message handler - tell (CVC) field which card brand is selected...
            // ... sent from CSF whenever card brand changes
            var __respondToBrandMessage = function(pBrand, pCvcElem){

                // ... but we're only interested IF we're dealing with multiple card brands i.e. the consolidated card type...
                if(pSfStateObj.txVariant === 'card'){

                    chckt.cardBrand = pBrand;

                    if(_b$dl && window.console && window.console.log){
                        window.console.log('@@@ secureFields::__respondToBrandMessage:: chckt.cardBrand=',chckt.cardBrand);
                    }

                    // If we've just detected brand (by inputting in the number field) - the user might have already
                    // entered the CVC - so retest the CVC validity now we know the card brand & return the result (It will be broadcast back to CSF, if necessary)
                    if(pCvcElem && pCvcElem.value.length > 2){
                        return ValidationsCCSecurityCode.testCVC(pCvcElem, '');
                    }
                }

                return null;
            };

            __init();
        };

        return secureFieldsConfig;
    } );
/* global define, chckt, _b$dl, genTime */
define( 'securedFields_interactions',
    [ 'Constants', 'DOM', 'setErrors', 'validationsCCNumber', 'validationsCCDate', 'validationsCCMonth', 'validationsCCYear', 'validationsCCSecurityCode', 'Util'],
    function ( Constants, DOM, SetErrors, ValidationsCCNum, ValidationsCCDate, ValidationsCCMonth, ValidationsCCYear, ValidationsCCSecurityCode, Util ) {

        "use strict";

        ///////////////////////////////////////////////////////////////////////////////////////////////////////////////
        ////////////// SECURED FIELDS FUNCTIONALITY PART 2: PROCESS OBJECT SENT FROM VALIDATION ALGORITHMS ////////////
        ///////////////////////////////////////////////////////////////////////////////////////////////////////////////
        var secureFieldsInteractions = function(pSharedScope, pSfStateObj){

            var that= {};

            var __fieldHasError = false,
                __hasValidNumberField = false,
                __numField_isInErrorState = false,
                __noop = function(){};


            that.processValidationsObj = function(commObj, nodeObj){

                if(_b$dl && window.console && window.console.log){
                    window.console.log('\n@@@ securedFields_interactions::processValidationsObj:: 1 (start of fn) commObj=',commObj);
                }
                if(!commObj.hasOwnProperty('noop') && !commObj.hasOwnProperty('error')){
                    if(_b$dl && window.console && window.console.log){
                        window.console.log('### securedFields_interactions::processValidationsObj:: commObj HAS NO ERROR PROPERTY!!');
                    }
                }

                // CHECK FOR NOOP
                var isNoop = (commObj.noop === true);

                if(isNoop){

                    // Clear errors (if applicable)
                    SetErrors.set(nodeObj.node, false, __fieldHasError);

                    if(_b$dl && window.console && window.console.log){
                        window.console.log('@@@ securedFields_interactions::processValidationsObj:: 2 (end of fn) noop!!');
                    }
                    return;
                }

                // CHECK FOR BIN VALUE
                if(commObj.hasOwnProperty('binValue')){

                    // Create simpler commObj
                    var nuCommObj = {action: 'binValue', binValue: commObj.binValue};
                    pSharedScope.tellMainWindow(nuCommObj, nodeObj.id);
                }

                // CHECK FOR ERRORS
                __fieldHasError = (commObj.error !== ''); // true if error prop isn't an empty string

                // SET OR CLEAR ERRORS (depends on value of __fieldHasError)
                SetErrors.set(nodeObj.node, __fieldHasError);

                // HAS ERRORS - Report & Exit
                if(__fieldHasError){

                    if(_b$dl && window.console && window.console.log){
                        window.console.log('@@@ securedFields_interactions::processValidationsObj:: 3 (end of fn) errors!! nodeObj.id=',nodeObj.id);
                    }

                    if(nodeObj.id === Constants.__HOSTED_NUMBER_FIELD_STR){

                        __numField_isInErrorState = true;
                    }

                    pSharedScope.tellMainWindow(commObj, nodeObj.id);
                    return;
                }

                ///// NO ERRORS - CHECK IF FIELD IS VALID (i.e. complete & w/o errors) AND CAN NOW BE ENCRYPTED ////

                if(_b$dl && window.console && window.console.log){
                    window.console.log('@@@ securedFields_interactions::processValidationsObj:: 4 (past errors, checking field validity)');
                }

                // c. Agent(s)
                var handleValidField = function(pValidFieldType, pFieldType){

                    var encryptedObj, encryptedYearObj;

                    // Always pass on commObj for number field in case it contains brand info
                    var brandObj = (pValidFieldType === Constants.__HOSTED_NUMBER_FIELD_STR)? commObj : null;

                    switch(pValidFieldType){

                    case Constants.__HOSTED_NUMBER_FIELD_STR:
                    case Constants.__HOSTED_CVC_FIELD_STR:
                    case Constants.__HOSTED_MONTH_FIELD_STR:

                        encryptedObj = __makeSecureField(nodeObj.node, nodeObj.id, null, brandObj);

                        if(encryptedObj){

                            if(encryptedObj.type === Constants.__HOSTED_NUMBER_FIELD_STR){

                                if(encryptedObj.encryptionSuccess){

                                    // Local flags for detecting number field moving from valid to invalid state re.limiting brand messages
                                    __hasValidNumberField = true;
                                    __numField_isInErrorState = false;
                                    // if ( window.console && window.console.log ) {
                                    //     window.console.log( '### securedFields_interactions::handleValidField:: SET VALID STYLE' );
                                    // }
                                    // SetErrors.setValidated(nodeObj.node, true);

                                }
                                else{
                                    // Luhn check failed
//                                      __fieldHasError = true;
                                    // SET ERRORS
//                                      SetErrors.set(nodeObj.node, __fieldHasError);

                                    // Luhn check failed - but we may have brand info that needs to be propagated
                                    if(encryptedObj.hasBrandInfo){

                                        if(_b$dl && window.console && window.console.log){
                                            window.console.log('### securedFields_interactions::handleValidField::(line:113):: Failed luhn check contains brand info encryptedObj=',encryptedObj);
                                        }

                                        return handleInvalidField(pFieldType, encryptedObj);
                                    }
                                }
                            }

                            // Send encryption object - will either be a successful encryption object
                            // OR an object created in response to an error we wish to report
                            (encryptedObj)? pSharedScope.tellMainWindow(encryptedObj, encryptedObj.type) : __noop();
                        }

                        break;

                    case Constants.__HOSTED_YEAR_FIELD_STR:

                        // NOTE: this has a different process to __HOSTED_MONTH_FIELD_STR for 2 reasons:
                        // 1. The year input actual sends its value to another hidden field 'expiryYear' where the input year is padded with '20' - and it is this hidden field which we find & encrypt
                        // 2. The returned encryptedYearObj may end up not containing an encrypted blob & instead have an errorNode property (in the case, not currently occurring, that the CSE validates
                        // the date differently e.g. has alternate defn to what constitutes an out-of-date card)

                        encryptedYearObj = agentUtil_EncryptYearField(nodeObj.node, Constants.__HOSTED_YEAR_FIELD_STR);

                        // Send year object - will either be a successful encryption object OR an error we wish to report
                        (encryptedYearObj)? pSharedScope.tellMainWindow(encryptedYearObj, encryptedYearObj.type) : __noop();

                        break;

                    case Constants.__HOSTED_DATE_FIELD_STR:

                        // Date field - find hidden inputs: expiryMonth & expiryYear & encrypt them
                        var expiryMonth = DOM._selectOne(nodeObj.node.parentNode, '#' + Constants.__EXPIRY_MONTH_STR);
                        var encryptedMonthObj = __makeSecureField(expiryMonth, 'month', nodeObj.node);

                        // Store month object
                        (encryptedMonthObj)? pSharedScope.storedEncryptedMonthObj = encryptedMonthObj : __noop();

//                        if ( window.console && window.console.log ) {
//                            window.console.log( '### securedFields_interactions::handleValidField:: pSharedScope.storedEncryptedMonthObj=',pSharedScope.storedEncryptedMonthObj );
//                        }

                        // Create year object
                        encryptedYearObj = agentUtil_EncryptYearField(nodeObj.node, 'year');

                        // Send year object, first collecting the encrypted month object along the way
                        // The returned encryptedYearObj will either be a successful encryption object OR an unencrypted object with an errorNode property (in the case, not currently occurring, that
                        // the CSE validates the date differently e.g. has alternate defn to what constitutes an out-of-date card)
                        (encryptedYearObj)? sendEncryptedDateFieldObject(encryptedYearObj) : __noop();
                        break;
                    }
                };//handleValidField

                // Field is not yet complete
                var handleInvalidField = function(pFieldType, pCommObj){

                    if ( _b$dl && window.console && window.console.log ) {
                        window.console.log( '### securedFields_interactions::handleInvalidField:: pCommObj=',pCommObj );
                    }

                    if(pFieldType === Constants.__HOSTED_DATE_FIELD_STR){

                        pSharedScope.storedEncryptedMonthObj = null;

                        if ( window.console && window.console.log ) {
                            window.console.log( '### securedFields_interactions::handleInvalidField:: pSharedScope.storedEncryptedMonthObj=',pSharedScope.storedEncryptedMonthObj );
                        }
                    }

                    // Routine for hostedCardNumberField to try to minimise 'brand' related postMessages to CSF
                    if(pFieldType === Constants.__HOSTED_NUMBER_FIELD_STR){

                        var wasValidNumberField = (__hasValidNumberField)? true : false;
                        if(wasValidNumberField){
                            __hasValidNumberField = false;
                        }

                        var wasInErrorState = (__numField_isInErrorState)? true : false;
                        if(wasInErrorState){
                            __numField_isInErrorState = false;
                        }

                        if ( _b$dl && window.console && window.console.log ) {
                            window.console.log( '### securedFields_interactions::handleInvalidField:: wasInErrorState=',wasInErrorState );
                            window.console.log( '### securedFields_interactions::handleInvalidField:: wasValidNumberField=',wasValidNumberField );
                        }

                        // Only inform CSF of brand if it has changed
                        // OR if we did have a valid number field and now it is not (otherwise we wouldn't be in this fn)
                        // OR the number field was in an error state and now it is not
                        if(pCommObj.brand !== chckt.cardBrand || wasValidNumberField || wasInErrorState){

                            if(_b$dl && window.console && window.console.log){
                                window.console.log('\n@@@ securedFields_interactions::handleInvalidField:: SETTING brand =',pCommObj.brand);
                            }
                            chckt.cardBrand = pCommObj.brand;

                        }else{

                            if(_b$dl && window.console && window.console.log){
                                window.console.log('@@@ securedFields_interactions::handleInvalidField:: RETURNING cos brand has not changed. pCommObj.brand=',pCommObj.brand, 'chckt.cardBrand=',chckt.cardBrand);
                            }
                            return;
                        }
                    }

                    pSharedScope.tellMainWindow(pCommObj, pFieldType);

                };//handleInvalidField

                // a. Situation
                var isValidField = __checkFieldValidity(commObj, nodeObj.node, nodeObj.id);

                // b. Decision using Agent(c)
                (isValidField)? handleValidField(isValidField, nodeObj.id) : handleInvalidField(nodeObj.id, commObj);

            };//that.processValidationsObj


            // Util for handleValidField Agent to avoid code duplication
            var agentUtil_EncryptYearField = function(pNode, pFieldType){

                // Year field - find hidden inputs: expiryYear & encrypt it
                var expiryYear = DOM._selectOne(pNode.parentNode, '#' + Constants.__EXPIRY_YEAR_STR);
                var encryptedYearObj = __makeSecureField(expiryYear, pFieldType, pNode);

                // Currently any date related error from the Encryption will be on the 'year' field
                if(encryptedYearObj && encryptedYearObj.errorNode){

                    __fieldHasError = true;
                    SetErrors.set(encryptedYearObj.errorNode, __fieldHasError);
                }

                return encryptedYearObj;
            };

            var sendEncryptedDateFieldObject = function(pEncryptedYearObj){

                // The blob array of the encrypted year object
                var yearObjBlobArray = pEncryptedYearObj[Constants.__HOSTED_DATE_FIELD_STR];

                // Extract the object holding the month encrypted blob from the stored month object's blob array
                var storedMonthBlobObj = pSharedScope.storedEncryptedMonthObj[Constants.__HOSTED_DATE_FIELD_STR][0];

                // Add the month blob to the front of the year object's blob array
                yearObjBlobArray.unshift(storedMonthBlobObj);

                // Send the adjusted year object, now with a blob array containg both month & year blobs
                pSharedScope.tellMainWindow(pEncryptedYearObj, Constants.__HOSTED_DATE_FIELD_STR);
            };

            var __checkFieldValidity = function(pCommObj, pNode, pId){

                // ... see if we're dealing with a valid card number/date/cvc
                switch(pId){

                case Constants.__HOSTED_NUMBER_FIELD_STR:

                    if( ValidationsCCNum.getIsValidCardNumber() ){
                        // Let the encryption process do the Luhn check
                        return pId;
                    }
                    break;

                case Constants.__HOSTED_DATE_FIELD_STR:

                    if( ValidationsCCDate.getIsValidExpiryDate() ){
                        return pId;
                    }
                    break;

                case Constants.__HOSTED_CVC_FIELD_STR:

                    if( ValidationsCCSecurityCode.getIsValidCvcNumber() ){
                        return pId;
                    }
                    break;

                case Constants.__HOSTED_MONTH_FIELD_STR:

                    if( ValidationsCCMonth.getIsValidExpiryMonth() ){
                        return pId;
                    }
                    break;

                case Constants.__HOSTED_YEAR_FIELD_STR:

                    if( ValidationsCCYear.getIsValidExpiryYear() ){
                        return pId;
                    }
                    break;
                }

                return false;
            };

            //////////////////// CREATE ENCRYPTED BLOBS FROM THE VALUES IN THE INPUT FIELDS ///////////////////////
            var __makeSecureField = function(pNode, pFieldType, pDateNode, pBrandObj){

                var errorObj = {};

                var data = DOM._getEncryptedData(pNode, pSfStateObj.fieldType, genTime);

                if(_b$dl && window.console && window.console.log){
                    window.console.log('### securedFields_interactions::__makeSecureField:: CLONE data = ',JSON.parse(JSON.stringify(data)) );
                }

                // c. Agents
                var encryptionError = function(){

                    errorObj.encryptionSuccess = false;

                    var luhnError = false;

                    var strLen = pNode.value.length;

                    if(data.hasOwnProperty('luhn')){

                        // Check we haven't just failed 'cos the field is empty
                        luhnError = (strLen !== 0);
                        errorObj.error = (luhnError)? 'luhn check failed' : '';

                    }else if(data.hasOwnProperty('cvc')){

                        errorObj.error = (strLen === 0)? '' : 'cvc check failed';

                    }else if(data.hasOwnProperty('date')){

                        errorObj.error = (strLen === 0)? '' : 'date check failed';
                    }

                    errorObj.action = 'encryption';
                    if(data.hasOwnProperty('error')){
                        errorObj.error = data.error;
                    }


                    // Currently don't propagate luhn check error - it can throw an error on the shortened versions of cc numbers:
                    // e.g. visa numbers can be 13 digits long - but if typing in a 16 digit visa number you can get a Luhn check error after the first 13 digits
                    // INSTEAD - we do the check on the blur event of the number field (if we have a card brand AND the number is at a valid length for that card)
//                if(luhnError){
//                    data = errorObj; data.type = pFieldType; return data;
//                }

                    var hasDate = data.hasOwnProperty('date');

                    // PASS ON THE ERROR DETAILS RATHER THAN THE FAILED ENCRYPTION DETAILS
                    data = errorObj;
                    data.type = pFieldType;

                    // Don't send errors on number luhn check - see above
                    // The cvc check currently doesn't do anything our validatons won't have caught
                    // BUT the encryption date check will throw an error if the date is more than 15 years in the future - which we don't catch in our validations
                    // NOTE: We do now catch this in our validations - but we'll keep this here in case the CSE changes it's criteria e.g. fail if date more than 12 years in future
                    var isDateError = (hasDate && data.error.length);

                    if(isDateError){
                        data.errorNode = pDateNode;

                        if(_b$dl && window.console && window.console.log){
                            window.console.log('\n@@@ securedFields_interactions::encryptionError:: CLONE ERROR OBJ=',JSON.parse(JSON.stringify(data)));
                        }
                        return data;
                    }


                    // Scenario:
                    // Card number is at valid length (possibly short version) & encryption has failed (luhn check)
                    // But we may have a change of brand / move to noBrand - so propagate any brand info
                    if(pBrandObj && pBrandObj.brand && pBrandObj.brand.length){
                        data = {};
                        data.type = pFieldType;
                        data.hasBrandInfo = true;
                        data.imageSrc = pBrandObj.imageSrc;
                        data.brand = pBrandObj.brand;
                        data.cvcText = pBrandObj.cvcText;
                        data.cvcIsOptional = pBrandObj.cvcIsOptional;
                        data.action = "encryption";
                        return data;
                    }

                    // No error that we wish to propagate to the main window (CSF)
//                return null;
                };

                var encryptionSuccess = function(){

                    data.action = 'encryption';
                    data.type = pFieldType;

                    // Generate the names that need to be used for sending in the encrypted blobs to the checkoutAPI
                    var encryptedFieldName = pFieldType;
                    if(pFieldType === 'month' || pFieldType === 'year'){
                        encryptedFieldName = 'encryptedExpiry' + Util._capitaliseFirstLetter(pFieldType);
                    }

                    // Store the data object's encrypted blob
                    var encryptedBlob = data[pSfStateObj.fieldType];

                    // Create an array holding an object containing the encrypted blob
                    var blobArray = [];
                    blobArray.push( {type : pFieldType, encryptedFieldName : encryptedFieldName, blob : encryptedBlob } );

                    // Overwrite the original, encrypted blob with the array holding the blob
                    data[pSfStateObj.fieldType] = blobArray;


                    // If user has pasted in a full, valid cc number - we also need to set the card brand.
                    // So add extra (brand) to the encryption data object that CSF can pick up on
                    if(pBrandObj){
                        data.hasBrandInfo = true;
                        data.imageSrc = pBrandObj.imageSrc;
                        data.brand = pBrandObj.brand;
                        data.cvcText = pBrandObj.cvcText;
                        data.cvcIsOptional = pBrandObj.cvcIsOptional;
                    }

                    return data;
                };

                // a. Situation & b. Decison using Agents(c)
                return (data.encryptionSuccess === true)? encryptionSuccess() : encryptionError();
            };
            //------------- END CREATE ENCRYPTED BLOBS... --------------------------------


            return that;
        };

        return secureFieldsInteractions;
    } );
/* global define, require, chckt, origin, originKey, _b$dl, checkoutShopperUrl, genTime */
define( 'securedFields_core',
    [ 'securedFields_config', 'securedFields_interactions'],
    function ( SecuredFieldsConfig, SecuredFieldInteractions) {

        "use strict";

        var secureFields = function(){

            // Object for sharing functionality between modules
            var __sharedScope = {};

            ////// POST MESSAGE BACK TO checkoutSecureFields (FILE LOADED ON MERCHANT SIDE) /////////
            __sharedScope.tellMainWindow = function(pCommObj, pFieldType){

                pCommObj.fieldType = pFieldType;
                pCommObj.txVariant = sfStateObject.txVariant;
            pCommObj.numKey = sfStateObject.numKey;

                // TODO check JSON support - might need shim for older browsers (caniuse says good from IE >= 8, BUT IE8 'requires document to be in IE8+ standards mode')
                var pCommObjStr = JSON.stringify(pCommObj);

                // POST MESSAGE - uses Window.postMessage
                sfStateObject.eventSource.postMessage(pCommObjStr, sfStateObject.eventOrigin);
            };
            //------ END POST MESSAGE BACK TO checkoutSecureFields... ---------------------------------------------------

            __sharedScope.storeFocus = function(pHasFocus){

                // if ( window.console && window.console.log ) {
                //     window.console.log( '### securedFields_core::storeFocus:: CURRENT STATE=',__sharedScope.hasFocus );
                //     window.console.log( '### securedFields_core::storeFocus:: SETTING STATE pHasFocus=',pHasFocus );
                // }

                __sharedScope.hasFocus = pHasFocus;
            };

            var sfStateObject = {};

            // Keys populated in config process
            sfStateObject.eventSource = null;
            sfStateObject.eventOrigin = null;
            sfStateObject.fieldType = null;// used in the interactions process
            sfStateObject.txVariant = null;// used in the interactions process


            // Set up fny to handle the processing of the validations feedback sent after user interactions with the inputs
            var sfInts = SecuredFieldInteractions(__sharedScope, sfStateObject);

            __sharedScope.processValidationsObj = sfInts.processValidationsObj;

            // Initalise, config & set up input fields with Key listeners
            SecuredFieldsConfig(__sharedScope, sfStateObject);
        };

        return secureFields;
    } );

    // INIT
    var sf = require('securedFields_core');
    sf();


    // IE8 Polyfills, for:  String.trim
    //                      Object.keys
    //                      Array.forEach
    //                      Array.map
    //                      Array.reduce
    //                      Array.filter
    //
    // IE Polyfill for:     Array.includes
    //                      Object.assign

    // IE8 Polyfills for Array.forEach
    if (!('forEach' in Array.prototype)) {
        Array.prototype.forEach= function(action, that) {
            for (var i= 0, n= this.length; i<n; i++){
                if (i in this){
                    action.call(that, this[i], i, this);
                }
             }
        };
    }

    // IE8 Polyfills for String.trim
    if (!String.prototype.trim) {
      String.prototype.trim = function () {
        return this.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, '');
      };
    }

    // IE8 Polyfill for Array.map
    if (!Array.prototype.map) {

      Array.prototype.map = function(callback/*, thisArg*/) {

        var T, A, k;

        if (this == null) {
          throw new TypeError('this is null or not defined');
        }

        // 1. Let O be the result of calling ToObject passing the |this|
        //    value as the argument.
        var O = Object(this);

        // 2. Let lenValue be the result of calling the Get internal
        //    method of O with the argument "length".
        // 3. Let len be ToUint32(lenValue).
        var len = O.length >>> 0;

        // 4. If IsCallable(callback) is false, throw a TypeError exception.
        // See: http://es5.github.com/#x9.11
        if (typeof callback !== 'function') {
          throw new TypeError(callback + ' is not a function');
        }

        // 5. If thisArg was supplied, let T be thisArg; else let T be undefined.
        if (arguments.length > 1) {
          T = arguments[1];
        }

        // 6. Let A be a new array created as if by the expression new Array(len)
        //    where Array is the standard built-in constructor with that name and
        //    len is the value of len.
        A = new Array(len);

        // 7. Let k be 0
        k = 0;

        // 8. Repeat, while k < len
        while (k < len) {

          var kValue, mappedValue;

          // a. Let Pk be ToString(k).
          //   This is implicit for LHS operands of the in operator
          // b. Let kPresent be the result of calling the HasProperty internal
          //    method of O with argument Pk.
          //   This step can be combined with c
          // c. If kPresent is true, then
          if (k in O) {

            // i. Let kValue be the result of calling the Get internal
            //    method of O with argument Pk.
            kValue = O[k];

            // ii. Let mappedValue be the result of calling the Call internal
            //     method of callback with T as the this value and argument
            //     list containing kValue, k, and O.
            mappedValue = callback.call(T, kValue, k, O);

            // iii. Call the DefineOwnProperty internal method of A with arguments
            // Pk, Property Descriptor
            // { Value: mappedValue,
            //   Writable: true,
            //   Enumerable: true,
            //   Configurable: true },
            // and false.

            // In browsers that support Object.defineProperty, use the following:
            // Object.defineProperty(A, k, {
            //   value: mappedValue,
            //   writable: true,
            //   enumerable: true,
            //   configurable: true
            // });

            // For best browser support, use the following:
            A[k] = mappedValue;
          }
          // d. Increase k by 1.
          k++;
        }

        // 9. return A
        return A;
      };
    }

    // IE8 Polyfill for Object.keys();
    // From https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/keys
    if (!Object.keys) {
      Object.keys = (function() {
        'use strict';
        var hasOwnProperty = Object.prototype.hasOwnProperty,
            hasDontEnumBug = !({ toString: null }).propertyIsEnumerable('toString'),
            dontEnums = [
              'toString',
              'toLocaleString',
              'valueOf',
              'hasOwnProperty',
              'isPrototypeOf',
              'propertyIsEnumerable',
              'constructor'
            ],
            dontEnumsLength = dontEnums.length;

        return function(obj) {
          if (typeof obj !== 'function' && (typeof obj !== 'object' || obj === null)) {
            throw new TypeError('Object.keys called on non-object');
          }

          var result = [], prop, i;

          for (prop in obj) {
            if (hasOwnProperty.call(obj, prop)) {
              result.push(prop);
            }
          }

          if (hasDontEnumBug) {
            for (i = 0; i < dontEnumsLength; i++) {
              if (hasOwnProperty.call(obj, dontEnums[i])) {
                result.push(dontEnums[i]);
              }
            }
          }
          return result;
        };
      }());
    }

    // IE8 polyfill for Array.reduce
    // Production steps of ECMA-262, Edition 5, 15.4.4.21
    // Reference: http://es5.github.io/#x15.4.4.21
    // https://tc39.github.io/ecma262/#sec-array.prototype.reduce
    // NOTE: IE8 HAS AN IMPLEMENTATION OF Object.defineProperty BUT IT ONLY WORKS WITH DOM OBJECTS
    if (!Array.prototype.reduce) {
//        Object.defineProperty(Array.prototype, 'reduce', {
//            value: function(callback /*, initialValue*/) {

        Array.prototype.reduce = function(callback /*, initialValue*/) {
                if (this === null) {
                    throw new TypeError( 'Array.prototype.reduce ' +
                        'called on null or undefined' );
                }
                if (typeof callback !== 'function') {
                    throw new TypeError( callback +
                        ' is not a function');
                }

                // 1. Let O be ? ToObject(this value).
                var o = Object(this);

                // 2. Let len be ? ToLength(? Get(O, "length")).
                var len = o.length >>> 0;

                // Steps 3, 4, 5, 6, 7
                var k = 0;
                var value;

                if (arguments.length >= 2) {
                    value = arguments[1];
                } else {
                    while (k < len && !(k in o)) {
                        k++;
                    }

                    // 3. If len is 0 and initialValue is not present,
                    //    throw a TypeError exception.
                    if (k >= len) {
                        throw new TypeError( 'Reduce of empty array ' +
                            'with no initial value' );
                    }
                    value = o[k++];
                }

                // 8. Repeat, while k < len
                while (k < len) {
                    // a. Let Pk be ! ToString(k).
                    // b. Let kPresent be ? HasProperty(O, Pk).
                    // c. If kPresent is true, then
                    //    i.  Let kValue be ? Get(O, Pk).
                    //    ii. Let accumulator be ? Call(
                    //          callbackfn, undefined,
                    //          « accumulator, kValue, k, O »).
                    if (k in o) {
                        value = callback(value, o[k], k, o);
                    }

                    // d. Increase k by 1.
                    k++;
                }

                // 9. Return accumulator.
                return value;
            };
//        });
    }


    // IE8 Polyfill for Array.filter from: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter
    if (!Array.prototype.filter) {
        Array.prototype.filter = function(fun/*, thisArg*/) {
            'use strict';

            if (this === void 0 || this === null) {
                throw new TypeError();
            }

            var t = Object(this);
            var len = t.length >>> 0;
            if (typeof fun !== 'function') {
                throw new TypeError();
            }

            var res = [];
            var thisArg = arguments.length >= 2 ? arguments[1] : void 0;
            for (var i = 0; i < len; i++) {
                if (i in t) {
                    var val = t[i];

                    // NOTE: Technically this should Object.defineProperty at
                    //       the next index, as push can be affected by
                    //       properties on Object.prototype and Array.prototype.
                    //       But that method's new, and collisions should be
                    //       rare, so use the more-compatible alternative.
                    if (fun.call(thisArg, val, i, t)) {
                        res.push(val);
                    }
                }
            }

            return res;
        };
    }

    // General IE polyfill for Array.includes
    // https://tc39.github.io/ecma262/#sec-array.prototype.includes
    // NOTE: IE8 HAS AN IMPLEMENTATION OF Object.defineProperty BUT IT ONLY WORKS WITH DOM OBJECTS
    if (!Array.prototype.includes) {
//        Object.defineProperty(Array.prototype, 'includes', {
//            value: function(searchElement, fromIndex) {

            Array.prototype.includes = function(searchElement, fromIndex) {
                // 1. Let O be ? ToObject(this value).
                if (this == null) {
                    throw new TypeError('"this" is null or not defined');
                }

                var o = Object(this);

                // 2. Let len be ? ToLength(? Get(O, "length")).
                var len = o.length >>> 0;

                // 3. If len is 0, return false.
                if (len === 0) {
                    return false;
                }

                // 4. Let n be ? ToInteger(fromIndex).
                //    (If fromIndex is undefined, this step produces the value 0.)
                var n = fromIndex | 0;

                // 5. If n ≥ 0, then
                //  a. Let k be n.
                // 6. Else n < 0,
                //  a. Let k be len + n.
                //  b. If k < 0, let k be 0.
                var k = Math.max(n >= 0 ? n : len - Math.abs(n), 0);

                function sameValueZero(x, y) {
                    return x === y || (typeof x === 'number' && typeof y === 'number' && isNaN(x) && isNaN(y));
                }

                // 7. Repeat, while k < len
                while (k < len) {
                    // a. Let elementK be the result of ? Get(O, ! ToString(k)).
                    // b. If SameValueZero(searchElement, elementK) is true, return true.
                    // c. Increase k by 1.
                    if (sameValueZero(o[k], searchElement)) {
                        return true;
                    }
                    k++;
                }

                // 8. Return false
                return false;
            };
//        });
    }

    // General IE polyfill for Object.assign
    // NOTE: IE8 HAS AN IMPLEMENTATION OF Object.defineProperty BUT IT ONLY WORKS WITH DOM OBJECTS
    if (typeof Object.assign != 'function') {
        // Must be writable: true, enumerable: false, configurable: true
//        Object.defineProperty(Object, "assign", {
//            value: function assign(target, varArgs) { // .length of function is 2

        Object.assign = function assign(target, varArgs) {
                'use strict';
                if (target == null) { // TypeError if undefined or null
                    throw new TypeError('Cannot convert undefined or null to object');
                }

                var to = Object(target);

                for (var index = 1; index < arguments.length; index++) {
                    var nextSource = arguments[index];

                    if (nextSource != null) { // Skip over if undefined or null
                        for (var nextKey in nextSource) {
                            // Avoid bugs when hasOwnProperty is shadowed
                            if (Object.prototype.hasOwnProperty.call(nextSource, nextKey)) {
                                to[nextKey] = nextSource[nextKey];
                            }
                        }
                    }
                }
                return to;
            };//,
//            writable: true,
//            configurable: true
//        });
    }

    /* THE END */
})( this );
