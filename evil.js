{
  console.log("window.opener: ", window.opener);
  window.opener.location = "./evil.html";
}
