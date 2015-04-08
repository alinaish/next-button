/**
 * Created by alina on 4/8/15.
 */


function appendButton() {

}

function goToNext() {
    var url = window.location.href;
    var parts = url.split('/');

    parts[parts.length - 1] = parseInt(parts[parts.length - 1]) + 1;
    url = parts.join('/');

    window.document.location = url;
}
