
var members = ["Mary","Sam","Joey","Paul","Mike","Char","Jenny","Kennedy","Kaden","Kurt","Anne"]

btnConfirm.onclick=function(){
  accountName = inptFirstName.value
  if ((accountName == "Smith")) {
    NSB.MsgBox( "You are a member")
    members.push("Smith")
    }
  else {
    NSB.MsgBox("You are not a member")
}
}