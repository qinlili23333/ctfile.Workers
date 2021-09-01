addEventListener("fetch", (event) => {
    event.respondWith(
        handleRequest(event.request).catch(
            (err) => new Response(err.stack, { status: 500 })
        )
    );
});
password=547873715
async function handleRequest(request) {
    let url = new URL(request.url);
    const { pathname } = new URL(request.url);
    if(url.searchParams.get("pass")){
        password=url.searchParams.get("pass")
    }
    if (pathname.startsWith("/directlink")) {
        var fileid = url.searchParams.get("file");
        var link = await fileToLink(fileid);
        if (link) {
            return Response.redirect(link, 302)
        } else {
            return new Response('文件不存在', { status: 404 })
        }
    }
    if (pathname.startsWith("/proxylink")) {
        var fileid = url.searchParams.get("file");
        var link = await fileToLink(fileid);
        if (link) {
            return fetch(link)
        } else {
            return new Response('文件不存在', { status: 404 })
        }
    }
    return new Response('不支持的URL请求', { status: 404 })
}

async function fileToLink(fileid) {
    jsonurl = "https://webapi.ctfile.com/getfile.php?path=f&f=" + fileid + "&passcode="+password+"&token=false&r=" + Math.random() + "&ref=https://ctfile.qinlili.workers.dev"
    const response = await fetch(jsonurl, {
        "headers": {
            "origin": "https://ctfile.qinlili.workers.dev",
            "referer": "https://ctfile.qinlili.workers.dev"
        },
    });
    jsonFile = await response.text()
    jsonText = JSON.parse(jsonFile);
    jsonurl2 = "https://webapi.ctfile.com/get_file_url.php?uid=" + jsonText.userid + "&fid=" + jsonText.file_id + "&file_chk=" + jsonText.file_chk + "&app=0&acheck=2&rd=" + Math.random()
    const response2 = await fetch(jsonurl2, {
        "headers": {
            "origin": "https://ctfile.qinlili.workers.dev",
            "referer": "https://ctfile.qinlili.workers.dev"
        },
    });
    jsonFile2 = await response2.text()
    jsonText2 = JSON.parse(jsonFile2);
    return jsonText2.downurl;
}
