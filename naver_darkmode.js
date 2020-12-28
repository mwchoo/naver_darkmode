// ==UserScript==
// @name         Naver Darkmode
// @namespace    https://github.com/mwchoo/naver_darkmode
// @version      0.1
// @description  Darkmode for Naver
// @author       Minwoo Choo
// @match        https://www.naver.com/
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    const elem = document.getElementsByTagName('html')[0];
    elem.setAttribute('data-dark', true);
})();
