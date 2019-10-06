var yourName = ""

btnNameEnter.onclick=function(){
  yourName = inptName.value
}

lblNoun.value = yourName + "Click 7 Nouns"

let nounListing = []

var noun1 = ""
btnNoun1.onclick=function(){
  noun1 = btnNoun1.value
  nounListing.push(noun1)
}


var noun2 = ""
btnNoun2.onclick=function(){
  noun2 = btnNoun2.value
  nounListing.push(noun2)
}

var noun3 = "house"
btnNoun3.onclick=function(){
  noun3 = btnNoun3.value
  nounListing.push(noun3)
  
}

var noun4 = "car"
btnNoun4.onclick=function(){
  noun4 = btnNoun4.value
  nounListing.push(noun4)
}

var noun5 = "french fries"
btnNoun5.onclick=function(){
  noun5 = btnNoun5.value
  nounListing.push(noun5)
}

lblVerb.value = yourName + "Click 4 Verbs"

let verbListing = []

var verb1 = ""
btnVerb1.onclick=function(){
  verb1 = btnVerb1.value
  verbListing.push(verb1)
}

var verb2 = ""
btnVerb2.onclick=function(){
  verb2 = btnVerb2.value
  verbListing.push(verb2)
}

var verb3 = ""
btnVerb3.onclick=function(){
  verb3 = btnVerb3.value
  verbListing.push(verb3)
}

var verb4 = ""
btnVerb4.onclick=function(){
  verb4 = btnVerb4.value
  verbListing.push(verb4)
}

var verb5 = ""
btnVerb5.onclick=function(){
  verb5 = btnVerb5.value
  verbListing.push(verb5)
}
  
let adjListing = []

lblAdj.value = yourName + "Click 3 Adjectives"

var adj1 = ""
btnAdj1.onclick=function(){
  adj1 = btnAdj1.value
  adjListing.push(adj1)
}

var adj2 = ""
btnAdj2.onclick=function(){
  adj2 = btnAdj2.value
  adjListing.push(adj2)
}

var adj3 = ""
btnAdj3.onclick=function(){
  adj3 = btnAdj3.value
  adjListing.push(adj3)
  
}

var adj4 = ""
btnAdj4.onclick=function(){
  adj4 = btnAdj4.value
  adjListing.push(adj4)
}

var adj5 = ""
btnAdj5.onclick=function(){
  adj5 = btnAdj5.value
  adjListing.push(adj5)
}

btnAllDone.onclick=function(){
NSB.MsgBox(`A ${nounListing[0]} in Nebraska was arrested this morning after ${verbListing[0]}ing in front of a ${nounListing[1]} ${adjListing[0]}. The perpetrator had a history of ${verbListing[1]}, but no one - not even her ${nounListing[2]} - ever imaginged she'd ${verbListing[2]} with a ${nounListing[3]}.

Even her ${nounListing[4]} was surprised. I always thought she was ${adjListing[1]}, but I hever thought she'd do something like this.

Either way, we imagine that after witnessing her ${verbListing[2]}ing with a ${adjListing[2]} ${nounListing[5]}, there are probably a whole lot of ${nounListing[6]}s that are going to need therapy.`)
}