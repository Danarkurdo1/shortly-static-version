

$(".btn-copy").on("click", ()=>{
    const shortenUrlValue = $(".shorten-url").text();
    navigator.clipboard.writeText(shortenUrlValue);
    $(".btn-copy").addClass("btn-copied");
    $(".btn-copy").text("copied");
});