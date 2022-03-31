// Track user and get as much data as we can about the user and vistor o n web pages.
//
// generate cookie 
// 
function generatCookies() {
    var d = new Date();
    d.setTime(d.getTime() + (365*24*60*60*1000));
    var expires = "expires="+ d.toUTCString();
    document.cookie = "trackd_user=" + trackd_user + ";" + expires + ";path=/";
    document.cookie = "trackd_visitor=" + trackd_visitor + ";" + expires + ";path=/";
}
// get cookie
function getCookie(cname) {
    var name = cname + "=";
    var decodedCookie = decodeURIComponent(document.cookie);
    var ca = decodedCookie.split(';');
    for(var i = 0; i <ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}
// get user cookie
function getUserCookie() {
    var user_cookie = getCookie("trackd_user");
    if (user_cookie != "") {
        trackd_user = user_cookie;
    }
}
// get visitor cookie
function getVisitorCookie() {
    var visitor_cookie = getCookie("trackd_visitor");
    if (visitor_cookie != "") {
        trackd_visitor = visitor_cookie;
    }
}



// get user data and track them 
function setCookie(a, b, c) {
    var d;
    if (c) {
      var e = new Date;
      e.setTime(e.getTime() + 24 * c * 60 * 60 * 1000),
      d = '; expires=' + e.toGMTString()
    } else d = '';
    document.cookie = a + '=' + escape(b) + d + '; path=/; SameSite=None; Secure'
  }
  function deleteCookie(a) {
    document.cookie = a + '=; Path=/; Expires=Thu, 01 Jan 1970 00:00:01 GMT; SameSite=None; Secure'
  }
  function readCookie(a) {
    for (var b = a + '=', c = document.cookie.split(';'), d = 0; d < c.length; d++) {
      for (var e = c[d]; ' ' == e.charAt(0); ) e = e.substring(1, e.length);
      if (0 == e.indexOf(b)) return unescape(e.substring(b.length, e.length))
    }
    return null
  }

  function getCountry() {
    return (navigator.language || navigator.userLanguage || '').substr( - 2).toLowerCase()
  }
  function getRegion(a) {
    if (a) for (var b in regionCountries) if (regionCountries.hasOwnProperty(b) && regionCountries[b].indexOf(a) > - 1) return b;
    return ''
  }

 const goog= function () {
    for (var a = [
    ], b = 0; b < this.C.length; b++) this.C[b] && (a[Math.floor(b / 6)] ^= 1 << b % 6);
    for (b = 0; b < a.length; b++) a[b] = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_'.charAt(a[b] || 0);
    return a.join('') + '~'
  };
//   pass image to params 
  image = function (a) {
    var b = M.createElement('img');
    b.width = 1;
    b.height = 1;
    b.src = a;
    return b
  }

  