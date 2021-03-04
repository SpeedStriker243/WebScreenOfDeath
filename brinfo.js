var parser = new UAParser();
var device = parser.getResult();

function SetBrInfo()
{
    var browser = get_browser_info();
    document.getElementById('browsername').innerHTML = "Your current browser is " + browser.name + ".";
    document.getElementById('browserversion').innerHTML = "Your " + browser.name + " version is " + browser.version + ".";
    //Check if browser is IE
    if (navigator.userAgent.search("MSIE") >= 0) {
        document.getElementById('ext5').innerHTML = "If problems continue, check your browser settings to see if your browser is misconfigured. If you need to use InPrivate, click the gear icon near the top right of the window, click Safety, and then click InPrivate Browsing.\nConsider moving to a different browser -- Internet Explorer is no longer supported.";
    }
    //Check if browser is Chrome
    else if (navigator.userAgent.search("Chrome") >= 0) {
        document.getElementById('ext5').innerHTML = "If problems continue, disable or remove any newly installed extensions. Check your browser settings to see if your browser is misconfigured. If you need to use incognito mode to browse the web without extensions, click the triple dot icon near the top right of the window, and then click New incognito window.";    }
    //Check if browser is Firefox 
    else if (navigator.userAgent.search("Firefox") >= 0) {
        document.getElementById('ext5').innerHTML = "If problems continue, disable or remove any newly installed add-ons. Check your browser settings to see if your browser is misconfigured. If you need to use Private Browsing to browse the web without add-ons, click the hamburger icon near the top right of the window, and then click New Private Window.";
    }
    //Check if browser is Safari
    else if (navigator.userAgent.search("Safari") >= 0) {
        if (device.os.name === "iOS")
        {
            document.getElementById('ext5').innerHTML = "If problems continue, check your browser settings to see if your browser is misconfigured. If you need to use Private Browsing, tap the tabs button (the layered squares), tap Private, and then tap the new tab button in the centre of the screen.";
        }
        else
        {
            document.getElementById('ext5').innerHTML = "If problems continue, disable or remove any newly installed extensions. Check your browser settings to see if your browser is misconfigured. If you need to use Private Browsing to browse the web without extensions, click File in the top bar, and then click New Private Window.";
        }
    }
    //Check if browser is Opera
    else if (navigator.userAgent.search("Opera") >= 0) {
        document.getElementById('ext5').innerHTML = "If problems continue, disable or remove any newly installed add-ons. Check your browser settings to see if your browser is misconfigured. If you need to use private mode to browse the web without add-ons, click Menu (File on macOS), and then click New private window.";
    }
}

function get_browser_info(){
    var ua=navigator.userAgent,tem,M=ua.match(/(opera|chrome|safari|firefox|msie|trident(?=\/))\/?\s*(\d+)/i) || []; 
    if(/trident/i.test(M[1])){
        tem=/\brv[ :]+(\d+)/g.exec(ua) || []; 
        return {name:'Internet Explorer',version:(tem[1]||'')};
        }   
    if(M[1]==='Chrome'){
        tem=ua.match(/\bOPR\/(\d+)/)
        if(tem!=null)   {return {name:'Opera', version:tem[1]};}
        }   
    M=M[2]? [M[1], M[2]]: [navigator.appName, navigator.appVersion, '-?'];
    if((tem=ua.match(/version\/(\d+)/i))!=null) {M.splice(1,1,tem[1]);}
    return {
      name: M[0],
      version: M[1]
    };
}