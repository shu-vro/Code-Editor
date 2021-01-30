function showPreview() {
    let html = document.getElementById("html").innerText;
    let css = `<style> ${document.getElementById("css").innerText} </style>`;
    let js = `<script> ${document.getElementById("js").innerText}</script>`;

    let iframe = document.getElementById("preview_window").contentWindow
        .document;
    iframe.open();
    iframe.write(html, css, js);
    iframe.close();
}

function text_content() {
    let a = `
<title>Document</title>
<textarea style="width: 100vw; height: 100vh; resize: none; border: none;" readonly>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <meta name="keywords" content="Document">
    <meta name="description" content="Your Description...">
    <title>Document</title>
    <link rel="shortcut icon" href="favicon.ico" type="image/x-icon">
<style>
    ${document.getElementById("css").innerText}
</style>
</head>
<body>

${document.getElementById("html").innerText}
<script>
${document.getElementById("js").innerText}
</script>

</body>
</html>
</textarea>
`;
    return a;
}

function external() {
    let a = window.open(
        "",
        "_blank",
        "width: 500px, height: 300px, left: 500px, top: 200px"
    );
    a.document.write(text_content());
}

let copyPreview = document.querySelector(".copyPreview");
function copy() {
    let textArea = document.createElement("textarea");
    textArea.value = `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <meta name="keywords" content="Document">
    <meta name="description" content="Your Description...">
    <title>Document</title>
    <link rel="shortcut icon" href="favicon.ico" type="image/x-icon">
<style>
    ${document.getElementById("css").innerText}
</style>
</head>
<body>

${document.getElementById("html").innerText}
<script>
${document.getElementById("js").innerText}
</script>

</body>
</html>
    `;
    document.body.appendChild(textArea);
    textArea.select();
    document.execCommand("copy");
    copyPreview.classList.add("active");
    setTimeout(() => {
        copyPreview.classList.remove("active");
    }, 2000);
}
