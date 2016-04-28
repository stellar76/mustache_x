var get_data = function(api_url) {
    var json = null;
    $.ajax({
        'async': false,
        'global': false,
        'url': api_url,
        'dataType': "json",
        'success': function(data) {
            json = data;
        }
    });
    return json;
}
lastestStories = function(api, template, view) {
    var data = get_data(api);
    c_template = document.querySelector(template).innerHTML;
    result = document.querySelector(view);
    i = 0, len = data.length;
    temp = '';
    for (; i < len; i++) {
        temp += c_template
            .replace(/\{\{title\}\}/, data[i].title.rendered)
            .replace(/\{\{href\}\}/, data[i].excerpt.rendered)
            .replace(/\{\{postid\}\}/, data[i].id)
            .replace(/\{\{safelink\}\}/, data[i].title.rendered.replace(/\s+/g, '_'));
    }
    result.innerHTML = temp;
}

//
loadArticle = function(api, template, view) {
        console.log(api, template, view)
        var data = get_data(api);
        var c_template = document.querySelector(template).innerHTML;
        result = document.querySelector(view);
        temp = '';
        temp = c_template.replace(/\{\{title\}\}/, data.title.rendered ).replace(/\{\{content\}\}/, data.content.rendered);
        console.log(temp);
        result.innerHTML = temp;
    }
    //
