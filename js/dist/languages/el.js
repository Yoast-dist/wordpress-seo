window.yoast=window.yoast||{},window.yoast.Researcher=function(e){var t={};function r(n){if(t[n])return t[n].exports;var s=t[n]={i:n,l:!1,exports:{}};return e[n].call(s.exports,s,s.exports,r),s.l=!0,s.exports}return r.m=e,r.c=t,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var s in e)r.d(n,s,function(t){return e[t]}.bind(null,s));return n},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="",r(r.s=32)}({0:function(e,t){e.exports=window.yoast.analysis},1:function(e,t){e.exports=window.lodash},32:function(e,t,r){"use strict";r.r(t),r.d(t,"default",(function(){return C}));var n=r(0),s={firstWords:["o","του","τον ","ο","των","τους","η","της","την","τις","το","τα","ένας","ενός","έναν","μία","μίας","μία","ένα","μια","μιας","μια","ένα","δύο","τρία","τέσσερα","πέντε ","έξι","επτά","εφτά","οκτώ","οχτώ","εννέα","εννιά","δέκα","αυτός","αυτού","αυτόν","αυτοί","αυτών","αυτούς","αυτή","αυτής","αυτή","αυτό","αυτά","εκείνος","εκείνου","εκείνον","εκείνοι","εκείνων","εκείνη","εκείνης","εκείνη","εκείνες","εκείνο","εκείνα","τέτοιος","τέτοιου","τέτοιον","τέτοιοι","τέτοιων","τέτοιους","τέτοια","τέτοιας","τέτοιαν","τέτοιες","τέτοιο","τέτοια","τόσος","τόσου","τόσον","τόσοι","τόσων","τόσους","τόση","τόσης","τόσες","τόσο","τόσα","τούτος","τούτου","τούτον","τούτοι","τούτων","τούτους","τούτη ","τούτης","τούτην ","τούτες","τούτο","τούτα","εδώ","εκεί"],secondWords:["o","του","τον ","ο","των","τους","η","της","την","τις","το","τα","που","τον","οι"]};const o=["εξαιτίας","επειδή","γιατί","διότι","καθώς","ώστε","λοιπόν","αλλά","μα","όμως ","παρά","μόνο","μόλο","ωστόσο","εντούτοις","έπειτα","μολαταύτα","μάλιστα","εξάλλου","αντίθετα","απεναντίας","διαφορετικά","ειδάλλως ","ειδεμή","αλλιώς ","αλλιώτικα","πάλι","ενώ","μολονότι","αντίστροφα","αρχικά","προγουμένως","πρώτα","ύστερα","πριν","εντωμεταξύ","τέλος","όταν","καθ΄ψς","όποτε","μόλις","αργότερα","αν","δηλαδή","ειδικότερα","ήτοι","συγκεκριμένα","ειδικά","καταρχήν","κατόπιν","πρωταρχικα","συγκεφαλαιωτικά","συγκεφαλαιώνοντας","συγκεντρωτικά","συνοπτικά","επιλογικά","ανακεφαλαιώνοντας","τελικά","γενικά","ευρύτερα","επιπλέον","επιπρόσθετα","επίσης","ακόμη","πρόσθετα","όπως","ομοίως","σαν","επομένως","συνεπώς","πράγματι","βέβαια","όντως","αφού","αφότου","καταρχάς","ακολούθως","εφόσον","κυρίως","φυσικά","ασφαλώς","οπωσδήποτε","αναντίρρητα","προφανώς"];var g=o.concat(["παρόλο που","ένας ακόμα λόγος","αυτό οφείλεται","αυτό εξηγείται","αυτό δικαιλογείται","η αιτία είναι","ο λόγος είναι","γι'αυτό τον λόγο","παρόλα ταύτα","ως επακόλουθο","ως αποτέλεσμα","κατά συνέπεια","έτσι που","και όμως","και γι'αυτό","σε αντίθεση","από την άλλη πλευρά","αν και","και αν","στον αντίποδα","ακόμη κι αν","παρ'όλα αυτά","στη συνέχεια","είναι γεγονός ότι","αξίζει να σημειωθεί","με άλλα λόγια","αυτό σημαίνει ότι","για παράδειγμα","παραδείγματος χάριν","λόγου χάριν","σε περίπτωση που","εκτός κι αν","εξαιτίας αυτού","με τον ίδιο τρόπο","με παρόμοιο τρόπο","με την προϋπόθεση να","υπό τον όρο να","εν κατακλείδι ","χάρη σε αυτό","από την στιγμή που","έχει μεγάλη σημασία να","είναι απαραίτητο να","είναι αναγκαίο να","είναι αξιοσημείωτο","στο μεταξύ","στην αρχή","με δεδομένο"]),c=[["όχι μόνο","αλλά και"],["όχι μόνο να μην","αλλά ούτε και να"],["από την μία","από την άλλη"],["αφενός","αφετέρου"],["μεν","δε"],["είτε","είτε"]],l=[].concat(["μιανής","στους","στον","στου","στην","στης","ένας","ενός","έναν","μίας","μιάς","την","του","τον","των","τις","της","στο","στα","μία","μια","ένα","το","η ","τα","οι","τη","ο"],["ένα","δύο ","τρία ","τέσσερα","πέντε","έξι","εφτά","οχτώ","εννιά","οκτώ","εννέα","δέκα","εκατό","χίλια","εκατομμύριο","εκατομμύρια","δισεκατομμύριο","δισεκατομμύρια","έντεκα","ένδεκα","δώδεκα","δεκατρία","δεκατέσσερα","δεκαπέντε","δεκαέξι","δεκαεπτά","δεκαοκτώ","δεκαεννέα","είκοσι"],["πρώτος","δεύτερος","τρίτος","τέταρτος","πέμπτος","έκτος","έβδομος","όγδοος","ένατος","δέκατος","πρώτη","δεύτερη","τρίτη","τέταρτη","πέμπτη","έκτη","έβδομη","όγδοη","ένατη","δέκατη","πρώτο ","δεύτερο","τρίτο","τέταρτο","πέμπτο","έκτο","έβδομο","όγδοο","ένατο","δέκατο","διπλάσιος","διπλάσια","διπλάσιο","τριπλάσιος","τριπλάσια","τριπλάσιο","διπλός","διπλή","τριπλός","τριπλή","χίλιοι","χίλιες","εκατοντάδες","χιλιάδες"],["μισός","μισή","μισό","τέταρτο","τρίτο","ολόκληρο","ολόκληρος"],["εγώ","εσύ","αυτός","αυτή","αυτό","εμείς","εσείς","αυτοί","αυτές","αυτά","αυτούς","εμένα","εσένα","αυτών","μένα","σένα","εμάς","εσάς","μου","σου","μας","σας","με","σε"],["τέτοιους","εκείνος","εκείνου","εκείνον","εκείνοι","εκείνων","εκείνης","εκείνες","τέτοιος","τέτοιου","τέτοιον","τέτοιοι","τέτοιων","τέτοιας","τέτοιαν","τέτοιες","τούτους","τούτην ","εκείνη","εκείνη","εκείνο","εκείνα","τέτοια","τέτοιο","τέτοια","τόσους","τούτος","τούτου","τούτον","τούτοι","τούτων","τούτη ","τούτης","τούτες","αυτού","αυτόν","αυτής","τόσος","τόσου","τόσον","τόσοι","τόσων","τόσης","τόσες","τούτο","τούτα","τόση","τόσο","τόσα","εκεί","εδώ"],["ποιανού","ποιανής","ποιανών","ποιους","πόσους","ποιος","ποιου","ποιον","ποιας","πόσος","πόσου","πόσον","πόσης","ποιοι","ποιων","ποιες","πόσοι","πόσων","πόσες","ποια","ποιο","πόση","πόσα","τί","τι"],["πώς","πού","πόσο","πότε"],["περισσότερο","λιγότερο","ελάχιστα","καθόλου","αρκετά","εξίσου","κάπως","τόσο ","πολύ","τόσο","πιο","όσο"],["εαυτός","εαυτού","εαυτό","εαυτούς"],["δικός","δικού","δικό","δική","δικής","τους","δικοί","δικών","δικούς","δικές","δικά"],["κάμποσου","κάμποσον","κάμποση","κάμποσης ","κάμποσο","τίποτε","καθένας","καθενός","καθένα ","καθεμία","καθεμιά","καθεμίας","καθεμιάς","καθέναν","δείνα","τάδε","μερικοί","μερικών","μερικούς","μερικές","μερικά","κάποιοι","κάποιων","κάποιους","κάποιες","κάποια","άλλοι","άλλων","αλλονών","άλλους","άλλες","άλλα","κάμποσοι","κάμποσων","κάμποσες","κάμποσα"],["σε","με","από","για","ως","πριν","προς","σαν","αντί","δίχως","έως","κατά","μετά","μέχρι","χωρίς","παρά","εναντίον","εξαιτίας","μεταξύ","ίσαμε","άνευ","αμφί","ανά","διά","εκ","εις","εξ","εκτός","εν","ένεκα","εντός","επί","λόγω","περί","πρό","συν","υπέρ","υπό","χάριν","χάρη"],["δεν","θα","δεν","μη","μην","όχι","ναι","ας","για","μα"],["να","και","που","ότι","αν","αλλά","ούτε","ουδέ","μηδέ","μήτε","ή","είτε","μα","παρά","όμως","ωστόσο","ενώ","μολονότι","μόνο","μόνο που","λοιπόν","ώστε","άρα","επομένως","οπότε","δηλαδή","πως","μην","μήπως","άμα","όταν","καθώς","αφού","αφότου","πριν","μόλις","προτού","ώσπου","ωσότου","σαν","γιατί","επειδή"],["συνηθίζεται","μπορούσαμε","ενδέχεται","εξαρτάται","εννοείται","παίρνουμε","είθισται","μπορούμε","μπορείτε","υπάρχουν","παίρνεις","παίρνετε","παίρνουν","βασικούς","μπορούμε","είμαστε","είσαστε","υπάρχει","μπορείς","μπορούν","κάνουμε","υπήρχαν","γίνεται","γινόταν","παίρνει","βάζουμε","δίνουμε","μπορεί","παίρνω","πρέπει","έχουμε","πήγαμε","πήγατε","κάνεις","κάνετε","κάνουν","έκανες","κάναμε","κάνατε","έκαναν","υπήρχε","πήραμε","πήρατε","πήρανε","ρίχνει","φάγαμε","βάζεις","βάζετε","βάζουν","έβαλες","βάλαμε","βάλατε","έβαλαν","βάλανε","δίνεις","δίνεις","δίνετε","δίνουν","έδωσες","έδωσες","δώσαμε","δώσατε","έδωσαν","δώσανε","έδινες","δίναμε","δίνατε","δίνανε","έδιναν","είχαμε","είχατε","είναι","είμαι","είσαι","είστε","ρίχνω","μπορώ","πήγες","πήγαν","κάνει","έκανα","έκανε","πήρες","πήραν","έριξα","έριξε","τρώει","τρώμε","έφαγε","βάζει","έβαλα","έβαλε","έδωσα","έδινα","έδινε","έχεις","έχετε","έχουν","είχες","είχαν","κάνω","τρώω","βάζω","δίνω","πάμε","πάει","πάμε","πάτε","πάνε","πήγα","πήγε","πήρε","έχει","είχα","είχε","πάω","έχω","πας"],["πολύ","παρά ","παρα","απίστευτα","εκπληκτικά","αναπάντεχα","αφάνταστα","πραγματικά","εντελώς","απόλυτα","καθολικά","τελείως"],["συνηθίζεται","ενδέχεται","εξαρτάται","εννοείται","είθισται","είμαστε","είσαστε","υπάρχει","μπορεί","παίρνω","πρέπει","έχουμε","είναι","είμαι","είσαι","είστε","ρίχνω","μπορώ","κάνω","τρώω","βάζω","δίνω","πάμε","πάω","έχω"],["καλός","καλά","καλή","καλύτερος","καλύτερη","σοβαρά","ωραίος","ωραία","ωραίο","απλός","απλή","απλό","περίπλοκος","περίπλοκη","περίπλοκο","μεγάλο","μεγαλύτερος","βασική","βασικός","βασικό","ουσιαστικός","κανονικός","κανονική","κανονικό","άσχημο","τρομερό","απαίσιο","αδιανόητο","μέσος","πραγματικός","πραγματική","πραγματικό","πρώην","σπάνιος","σπάνια","συνηθισμένος ","συνηθισμένη","συνηθισμένο","σχετικός","σχετική","σχετικό","καλύτερα","τέλεια","υπέροχα","έντονα","παραλίγο","απλά","κυρίως","συνήθως","ευθέως","συνεχώς","αδιάκοπα","ασταμάτητα","ατελείωτα","ατέρμονα","βασικά","ουσιαστικά","κανονικά","άσχημα","εντάξει","τελικά","φυσικά","μπροστά","πίσω","επάνω","κάτω","ευτυχώς","δυστυχώς","ξαφνικά","ειλικρινά","απροσδόκητα","απότομα","ανάμεσα","κοντά","σιμά","μακριά","δίπλα","σχετικά"],["α","αα","αχ","αι","αλί","αλίμονο","αμάν","αμέ","αμποτε","άιντε","άντε","άου","άχου","αχού","βαχ","βουρ ","βρε","ε","ει","εμ","επ","ζήτω","εύγε","μμμ","μπα","μπαμ","μπράβο","μωρέ","μωρή","ω","ου","ούου","ουστ","οιμέ","οϊμέ","ωπ","οπ","πωπω","ποπο","απαπα","ουφ","ώπα","ώπατης","όπα","όπατης","ωχ","οχ","όχου","ώχου","όφου","ποπό","πωπώ","πουφ","πριτς","πφ","ρε","σουτ","τσου","τσα","φτου","χα","χαχαχα","χμ","ωω","ωωω","ωχού","ουάου"],["γραμ.","γραμμ.","γραμμάρια","κ/γ","κ.γ.","κ.σ.","γρ.","ματσ.","κιλό","φλ.","φλυτζάνι","κούπα","ποτ.","ποτήρι","σκ.","ξύσμα","φλούδα","λίτρο","λίτρα"],["δευτερόλεπτο","δευτερόλεπτα","δεύτερα","ώρα","ώρας","τέταρτο","μισάωρο","ώρες","μέρα","μέρας","μέρες","ημέρα","ημέρες","σήμερα","αύριο","εχθές","χθές","βδομάδα","βδομάδες","βδομάδας","εβδομάδα","εβδομάδες","μισαωράκι","τεταρτάκι","δεκάλεπτο","πεντάλεπτο","φέτος","πέρσι","χρόνος","πέρυσι","χρόνου","πρόπερσι","προχθές"],["πράγμα","πράγματα","υπόθεση","περίπτωση","πρόβλημα","προβλήματα","αντικείμενο","αντικείμενα","θέμα","θέματα","περίσταση","συνθήκες","περιστάσεις","ζήτημα","ζητήματα","ζητημάτων","υποθέσεις","γεγονός","γεγονότα","κατάσταση","καταστάσεις","ουσία","τρόπος","μέθοδος","παράγοντας","παράγοντες","αιτία","επίπτωση","αιτίες","επιπτώσεις","μέρος","μέρη","άποψη","απόψεις","γνώμη","γνώμες","άτομο","άτομα","ομάδα","πραγματικότητα","διαφορά","διαφορές","ομοιότητες"],["δεσποινίς","καθηγητής","διδάκτωρ","κύριος","κύριοι","κυρίες","καθηγ","κυρία","διδα","καθ","κος","δρ","κα"],o),x=r(1);function a(e,t,r,n){let s;for(let o=0;o<t.length;o++)null!==(s=new RegExp(t[o]).exec(e))&&(e=s[1],new RegExp(r[o]).test(e)&&(e+=n[o]));return e}function u(e,t){let r;return null!==(r=new RegExp(t).exec(e))&&(e=r[1]),e}function i(e,t,r,n,s){let o;return null!==(o=new RegExp(t).exec(e))&&(e=o[1],(new RegExp(r).test(e)||new RegExp(n).test(e))&&(e+=s)),e}const{baseStemmer:p}=n.languageProcessing;function d(e){const t=Object(x.get)(e.getData("morphology"),"el",!1);return t?e=>function(e,t){const r=e=(e=e.replace(/[ΆΑά]/g,"α").replace(/[ΈΕέ]/g,"ε").replace(/[ΉΗή]/g,"η").replace(/[ΊΪΙίΐϊ]/g,"ι").replace(/[ΌΟό]/g,"ο").replace(/[ΎΫΥύΰϋ]/g,"υ").replace(/[ΏΩώ]/g,"ω").replace(/[Σς]/g,"σ")).toLocaleUpperCase("el"),n=t.externalStemmer.doNotStemWords;if(e.length<3||n.includes(e))return e.toLocaleLowerCase("el");e=function(e,t){const r=t.externalStemmer.regexesStep5;let n;return null!==(n=new RegExp(r.regex5a).exec(e))&&(e=n[1]+"Μ",new RegExp(r.regex5b).test(n[1])?e+="Α":new RegExp(r.regex5c).test(n[1])&&(e+="ΑΤ")),null!==(n=new RegExp(r.regex5d).exec(e))&&(e=n[1]+"ΟΥ"),e}(e=function(e,t){const r=t.externalStemmer.regexesStep4,n=r.regexesArrays,s=t.externalStemmer.vowelRegex1,o=t.externalStemmer.vowelRegex2;let g;return"ΑΓΑΜΕ"===e?"ΑΓΑΜ":(e=u(e,r.regex4a),e=u(e=i(e=a(e,n.arrays1[0],n.arrays1[1],n.arrays1[2]),r.regex4b,o,r.regex4c,"ΑΝ"),r.regex4d),null!==(g=new RegExp(r.regex4e).exec(e))&&(e=g[1],(new RegExp(o).test(e)||new RegExp(r.regex4f).test(e)||new RegExp(r.regex4g).test(e))&&(e+="ΕΤ")),null!==(g=new RegExp(r.regex4h).exec(e))&&(e=g[1],new RegExp(r.regex4i).test(g[1])?e+="ΟΝΤ":new RegExp(r.regex4j).test(g[1])&&(e+="ΩΝΤ")),e=i(e=u(e=a(e,n.arrays2[0],n.arrays2[1],n.arrays2[2]),r.regex4k),r.regex4l,r.regex4m,r.regex4n,"ΗΚ"),null!==(g=new RegExp(r.regex4o).exec(e))&&(e=g[1],(new RegExp(s).test(e)||new RegExp(r.regex4p).test(g[1])||new RegExp(r.regex4q).test(g[1]))&&(e+="ΟΥΣ")),null!==(g=new RegExp(r.regex4r).exec(e))&&(e=g[1],(new RegExp(r.regex4s).test(e)||new RegExp(r.regex4t).test(e)&&!new RegExp(r.regex4u).test(e))&&(e+="ΑΓ")),e=a(e,n.arrays3[0],n.arrays3[1],n.arrays3[2]))}(e=function(e,t){const r=new RegExp(t.externalStemmer.vowelRegex1),n=t.externalStemmer.regexesStep3;let s;return null!==(s=new RegExp(n.regex3a).exec(e))&&(e=s[1],(r.test(e)||new RegExp(n.regex3b).test(e)||new RegExp(n.regex3c).test(e))&&(e+="ΙΚ")),e}(e=function(e,t){const r=t.externalStemmer.regexesStep2,n=new RegExp(t.externalStemmer.vowelRegex1);let s;return null!==(s=new RegExp(r.regex2a).exec(e))&&s[1].length>4&&(e=s[1]),null!==(s=new RegExp(r.regex2b).exec(e))&&(e=s[1],(n.test(e)||e.length<2||new RegExp(r.regex2c).test(s[1]))&&(e+="Ι"),new RegExp(r.regex2d).test(s[1])&&(e+="ΑΙ")),e}(e=function(e,t){const r=t.externalStemmer.regexesStep1,n=r.regexesArrays;let s;return null!==(s=new RegExp(r.regex1a).exec(e))&&(e=s[1],new RegExp(r.regex1b).test(e)||(e+="ΑΔ")),a(e,n[0],n[1],n[2])}(e=function(e,t){const r=t.externalStemmer.step1Exceptions,n=new RegExp("(.*)("+Object.keys(r).join("|")+")$").exec(e);return null!==n&&(e=n[1]+r[n[2]]),e}(e,t),t),t),t),t),t);const s=t.externalStemmer.longWordRegex;return r.length===e.length&&(e=u(e,s)),(e=function(e,t){const r=t.externalStemmer.regexesStep6;let n;return null!==(n=new RegExp(r.regex6a).exec(e))&&(new RegExp(r.regex6b).test(n[1])||(e=n[1]),new RegExp(r.regex6c).test(n[1])&&(e+="ΥΤ")),e}(e,t)).toLocaleLowerCase("el")}(e,t):p}const{getWords:f}=n.languageProcessing,{values:w}=n.languageProcessing,{Clause:R}=w;const{getClausesSplitOnStopWords:E,createRegexFromArray:m}=n.languageProcessing,y={Clause:class extends R{constructor(e,t){super(e,t),this._participles=function(e){return f(e).filter(e=>new RegExp("(ούμενους|ημένους|ούμενος|ούμενου|ούμενον|ούμενης|ούμενοι|ούμενων|ούμενες|μένους|ημένος|ημένου|ημένον|ημένοι|ημένων|ημένης|ημένες|ούμενη|ούμενο|ούμενα|μένος|μένου|μένον|μένοι|μένης|μένες|μένων|ημένη|ημένο|ημένα|μένη|μένο|μένα)$").test(e))}(this.getClauseText()),this.checkParticiples()}checkParticiples(){const e=this.getParticiples();this.setPassive(e.length>0)}},regexes:{auxiliaryRegex:m(["είμαι","είσαι","είναι","είμαστε","είστε","είσαστε","ήμουν","ήσουν","ήταν","ήμαστε","ήμασταν","ήσαστε","ήσασταν"]),stopwordRegex:m(["ένα","έναν","ένας","αι","ακομα","ακομη","ακριβως","αληθεια","αληθινα","αλλα","αλλαχου","αλλες","αλλη","αλλην","αλλης","αλλιως","αλλιωτικα","αλλο","αλλοι","αλλοιως","αλλοιωτικα","αλλον","αλλος","αλλοτε","αλλου","αλλους","αλλων","αμα","αμεσα","αμεσως","αν","ανα","αναμεσα","αναμεταξυ","ανευ","αντι","αντιπερα","αντις","ανω","ανωτερω","αξαφνα","απ","απεναντι","απο","αποψε","από","αρα","αραγε","αργα","αργοτερο","αριστερα","αρκετα","αρχικα","ας","αυριο","αυτα","αυτες","αυτεσ","αυτη","αυτην","αυτης","αυτο","αυτοι","αυτον","αυτος","αυτοσ","αυτου","αυτους","αυτουσ","αυτων","αφοτου","αφου","αἱ","αἳ","αἵ","αὐτόσ","αὐτὸς","αὖ","α∆ιακοπα","βεβαια","βεβαιοτατα","γάρ","γα","γα^","γε","γι","για","γοῦν","γρηγορα","γυρω","γὰρ","δ'","δέ","δή","δαί","δαίσ","δαὶ","δαὶς","δε","δεν","δι","δι'","διά","δια","διὰ","δὲ","δὴ","δ’","εαν","εαυτο","εαυτον","εαυτου","εαυτους","εαυτων","εγκαιρα","εγκαιρως","εγω","ειθε","ειμαι","ειμαστε","ειναι","εις","εισαι","εισαστε","ειστε","ειτε","ειχα","ειχαμε","ειχαν","ειχατε","ειχε","ειχες","ει∆εμη","εκ","εκαστα","εκαστες","εκαστη","εκαστην","εκαστης","εκαστο","εκαστοι","εκαστον","εκαστος","εκαστου","εκαστους","εκαστων","εκει","εκεινα","εκεινες","εκεινεσ","εκεινη","εκεινην","εκεινης","εκεινο","εκεινοι","εκεινον","εκεινος","εκεινοσ","εκεινου","εκεινους","εκεινουσ","εκεινων","εκτος","εμας","εμεις","εμενα","εμπρος","εν","ενα","εναν","ενας","ενος","εντελως","εντος","εντωμεταξυ","ενω","ενός","εξ","εξαφνα","εξης","εξισου","εξω","επ","επί","επανω","επειτα","επει∆η","επι","επισης","επομενως","εσας","εσεις","εσενα","εστω","εσυ","ετερα","ετεραι","ετερας","ετερες","ετερη","ετερης","ετερο","ετεροι","ετερον","ετερος","ετερου","ετερους","ετερων","ετουτα","ετουτες","ετουτη","ετουτην","ετουτης","ετουτο","ετουτοι","ετουτον","ετουτος","ετουτου","ετουτους","ετουτων","ετσι","ευγε","ευθυς","ευτυχως","εφεξης","εχει","εχεις","εχετε","εχθες","εχομε","εχουμε","εχουν","εχτες","εχω","εως","εἰ","εἰμί","εἰμὶ","εἰς","εἰσ","εἴ","εἴμι","εἴτε","ε∆ω","η","ημασταν","ημαστε","ημουν","ησασταν","ησαστε","ησουν","ηταν","ητανε","ητοι","ηττον","η∆η","θα","ι","ιι","ιιι","ισαμε","ισια","ισως","ισωσ","ι∆ια","ι∆ιαν","ι∆ιας","ι∆ιες","ι∆ιο","ι∆ιοι","ι∆ιον","ι∆ιος","ι∆ιου","ι∆ιους","ι∆ιων","ι∆ιως","κ","καί","καίτοι","καθ","καθε","καθεμια","καθεμιας","καθενα","καθενας","καθενος","καθετι","καθολου","καθως","και","κακα","κακως","καλα","καλως","καμια","καμιαν","καμιας","καμποσα","καμποσες","καμποση","καμποσην","καμποσης","καμποσο","καμποσοι","καμποσον","καμποσος","καμποσου","καμποσους","καμποσων","κανεις","κανεν","κανενα","κανεναν","κανενας","κανενος","καποια","καποιαν","καποιας","καποιες","καποιο","καποιοι","καποιον","καποιος","καποιου","καποιους","καποιων","καποτε","καπου","καπως","κατ","κατά","κατα","κατι","κατιτι","κατοπιν","κατω","κατὰ","καὶ","κι","κιολας","κλπ","κοντα","κτλ","κυριως","κἀν","κἂν","λιγακι","λιγο","λιγωτερο","λογω","λοιπα","λοιπον","μέν","μέσα","μή","μήτε","μία","μα","μαζι","μακαρι","μακρυα","μαλιστα","μαλλον","μας","με","μεθ","μεθαυριο","μειον","μελει","μελλεται","μεμιας","μεν","μερικα","μερικες","μερικοι","μερικους","μερικων","μεσα","μετ","μετά","μετα","μεταξυ","μετὰ","μεχρι","μη","μην","μηπως","μητε","μη∆ε","μιά","μια","μιαν","μιας","μολις","μολονοτι","μοναχα","μονες","μονη","μονην","μονης","μονο","μονοι","μονομιας","μονος","μονου","μονους","μονων","μου","μπορει","μπορουν","μπραβο","μπρος","μἐν","μὲν","μὴ","μὴν","να","ναι","νωρις","ξανα","ξαφνικα","ο","οι","ολα","ολες","ολη","ολην","ολης","ολο","ολογυρα","ολοι","ολον","ολονεν","ολος","ολοτελα","ολου","ολους","ολων","ολως","ολως∆ιολου","ομως","ομωσ","οποια","οποιαν","οποιαν∆ηποτε","οποιας","οποιας∆ηποτε","οποια∆ηποτε","οποιες","οποιες∆ηποτε","οποιο","οποιοι","οποιον","οποιον∆ηποτε","οποιος","οποιος∆ηποτε","οποιου","οποιους","οποιους∆ηποτε","οποιου∆ηποτε","οποιο∆ηποτε","οποιων","οποιων∆ηποτε","οποι∆ηποτε","οποτε","οποτε∆ηποτε","οπου","οπου∆ηποτε","οπως","οπωσ","ορισμενα","ορισμενες","ορισμενων","ορισμενως","οσα","οσα∆ηποτε","οσες","οσες∆ηποτε","οση","οσην","οσην∆ηποτε","οσης","οσης∆ηποτε","οση∆ηποτε","οσο","οσοι","οσοι∆ηποτε","οσον","οσον∆ηποτε","οσος","οσος∆ηποτε","οσου","οσους","οσους∆ηποτε","οσου∆ηποτε","οσο∆ηποτε","οσων","οσων∆ηποτε","οταν","οτι","οτι∆ηποτε","οτου","ου","ουτε","ου∆ε","οχι","οἱ","οἳ","οἷς","οὐ","οὐδ","οὐδέ","οὐδείσ","οὐδεὶς","οὐδὲ","οὐδὲν","οὐκ","οὐχ","οὐχὶ","οὓς","οὔτε","οὕτω","οὕτως","οὕτωσ","οὖν","οὗ","οὗτος","οὗτοσ","παλι","παντοτε","παντου","παντως","παρ","παρά","παρα","παρὰ","περί","περα","περι","περιπου","περισσοτερο","περσι","περυσι","περὶ","πια","πιθανον","πιο","πισω","πλαι","πλεον","πλην","ποια","ποιαν","ποιας","ποιες","ποιεσ","ποιο","ποιοι","ποιον","ποιος","ποιοσ","ποιου","ποιους","ποιουσ","ποιων","πολυ","ποσες","ποση","ποσην","ποσης","ποσοι","ποσος","ποσους","ποτε","που","πουθε","πουθενα","ποῦ","πρεπει","πριν","προ","προκειμενου","προκειται","προπερσι","προς","προσ","προτου","προχθες","προχτες","πρωτυτερα","πρόσ","πρὸ","πρὸς","πως","πωσ","σαν","σας","σε","σεις","σημερα","σιγα","σου","στα","στη","στην","στης","στις","στο","στον","στου","στους","στων","συγχρονως","συν","συναμα","συνεπως","συνηθως","συχνα","συχνας","συχνες","συχνη","συχνην","συχνης","συχνο","συχνοι","συχνον","συχνος","συχνου","συχνους","συχνων","συχνως","σχε∆ον","σωστα","σόσ","σύ","σύν","σὸς","σὺ","σὺν","τά","τήν","τί","τίς","τίσ","τα","ταυτα","ταυτες","ταυτη","ταυτην","ταυτης","ταυτο,ταυτον","ταυτος","ταυτου","ταυτων","ταχα","ταχατε","ταῖς","τα∆ε","τε","τελικα","τελικως","τες","τετοια","τετοιαν","τετοιας","τετοιες","τετοιο","τετοιοι","τετοιον","τετοιος","τετοιου","τετοιους","τετοιων","τη","την","της","τησ","τι","τινα","τιποτα","τιποτε","τις","τισ","το","τοί","τοι","τοιοῦτος","τοιοῦτοσ","τον","τος","τοσα","τοσες","τοση","τοσην","τοσης","τοσο","τοσοι","τοσον","τοσος","τοσου","τοσους","τοσων","τοτε","του","τουλαχιστο","τουλαχιστον","τους","τουτα","τουτες","τουτη","τουτην","τουτης","τουτο","τουτοι","τουτοις","τουτον","τουτος","τουτου","τουτους","τουτων","τούσ","τοὺς","τοῖς","τοῦ","τυχον","των","τωρα","τό","τόν","τότε","τὰ","τὰς","τὴν","τὸ","τὸν","τῆς","τῆσ","τῇ","τῶν","τῷ","υπ","υπερ","υπο","υποψη","υποψιν","υπό","υστερα","φετος","χαμηλα","χθες","χτες","χωρις","χωριστα","ψηλα","ω","ωραια","ως","ωσ","ωσαν","ωσοτου","ωσπου","ωστε","ωστοσο","ωχ","ἀλλ'","ἀλλά","ἀλλὰ","ἀλλ’","ἀπ","ἀπό","ἀπὸ","ἀφ","ἂν","ἃ","ἄλλος","ἄλλοσ","ἄν","ἄρα","ἅμα","ἐάν","ἐγώ","ἐγὼ","ἐκ","ἐμόσ","ἐμὸς","ἐν","ἐξ","ἐπί","ἐπεὶ","ἐπὶ","ἐστι","ἐφ","ἐὰν","ἑαυτοῦ","ἔτι","ἡ","ἢ","ἣ","ἤ","ἥ","ἧς","ἵνα","ὁ","ὃ","ὃν","ὃς","ὅ","ὅδε","ὅθεν","ὅπερ","ὅς","ὅσ","ὅστις","ὅστισ","ὅτε","ὅτι","ὑμόσ","ὑπ","ὑπέρ","ὑπό","ὑπὲρ","ὑπὸ","ὡς","ὡσ","ὥς","ὥστε","ὦ","ᾧ","∆α","∆ε","∆εινα","∆εν","∆εξια","∆ηθεν","∆ηλα∆η","∆ι","∆ια","∆ιαρκως","∆ικα","∆ικο","∆ικοι","∆ικος","∆ικου","∆ικους","∆ιολου","∆ιπλα","∆ιχως"])}};function h(e){return E(e,y)}var S=["διαπραγματεύ","αισθάν","ανέχ","ανταγωνίζ","αντιλαμβάν","αντιστρατεύ","απεχθάν","αρν","αφουγκράζ","βαριέμαι","γεύ","δέχ","διανο","διηγ","εγγυ","καταριέμαι","λιγουρεύ","λυπάμαι","μάχ","μέμφ","μεταχειρίζ","μιμ","νυμφεύ","ονειρεύ","οραματίζ","οσμίζ","περιποι","προασπίζ","προοιωνίζ","προφασίζ","ειρωνεύ","εισηγ","εκδικ","εκμεταλλεύ","εμπιστεύ","επιβουλεύ","επικαλ","επισκέπτ","επωμίζ","ερωτεύ","ευαγγελίζ","εχθρεύ","θυμάμαι","καπηλεύ","καρπών","σέβ","σιχαίν","σκαρφίζ","σκέφτ","σπλαχνίζ","συλλογίζ","συμμερίζ","υπαινίσσ","υποκρίν","υποπτεύ","υπόσχ","υποψιάζ","φοβάμαι","χειρίζ","χρειάζ","πραγματεύ","μαθεύ","ξαναγίν","ξεκαρδίζ","ξεκουμπίζ","ξεχύν","ξημεροβραδιάζ","οδύρ","παραιτ","παραλογίζ","παραστέκ","παρεκτρέπ","πειραματίζ","περιπλαν","πολιτεύ","αγωνίζ","αθλ","ακροβολίζ","αμιλλ","αμύν","αναδιπλών","αναδύ","αναρωτιέμαι","αντιστέκ","γεύ","γκρεμοτσακίζ","διαπληκτίζ","εισέρχ","εκρήγνυμαι","εμφορ","προπορεύ","ρεύ","σκυλοβαριέμαι","σοβαρεύ","συγκρού","συμπαρατάσσ","συμπεριφέρ","συνδικαλίζ","συνεννο","συνεργάζ","υπεισέρχ","υπερηφανεύ","φαγών","φύ","χαμοκυλιέμαι","εναντιών","ενίσταμαι","επαίρ","επιτίθεμαι","ευθύν","ηγ","ηττ","ίπταμαι","καμών","καταγίν","κατάγ","κλυδωνίζ","κοκορεύ","λογοδίν","μαίν","ανεβαιν","ανεβηκα","κατεβαιν","κατέβηκα","συγχαίρ","συγχάρκα"];const b=["ιόμασταν","ιόσασταν","ούμασταν","ούσασταν","ομασταν","οσασταν","όμασταν","όσασταν","ιόμαστε","ιούνται","ιόσαστε","ηθήκαμε","ηθήκατε","ιούνταν","ούμαστε","θήκαμε","θήκατε","τήκαμε","τήκατε","όμαστε","όσαστε","ηθούμε","ηθείτε","ήθηκες","ήθηκαν","ιόμουν","ιόσουν","ούνται","ούμουν","ούσουν","ούνταν","μαστε","σαστε","θούμε","θείτε","τούμε","τείτε","θηκες","θηκαν","τηκες","τηκαν","ονται","όμουν","όσουν","ονταν","ιέμαι","ιέσαι","ιέται","ιέστε","ηθείς","ηθούν","ήθηκα","ήθηκε","ιόταν","ούμαι","είσαι","είται","είστε","θείς","θούν","τείς","τούν","θηκα","θηκε","τηκα","τηκε","μουν","σουν","νταν","ομαι","εσαι","εται","εστε","όταν","ηθεί","μαι","σαι","ται","στε","θεί","τεί","ταν","ηθώ","θώ","τώ"],{getWords:v,directPrecedenceException:P}=n.languageProcessing,W=["να"];function j(e){const t=v(e);for(const r of t)for(const t of b)if(r.endsWith(t)&&r.length>4){const n=r.slice(0,-t.length);return/^(θεί|τεί)$/.test(t)?!S.includes(n)&&!P(e,r,W):!S.includes(n)}return!1}const{AbstractResearcher:O}=n.languageProcessing;class C extends O{constructor(e){super(e),delete this.defaultResearches.getFleschReadingScore,delete this.defaultResearches.wordComplexity,Object.assign(this.config,{language:"el",functionWords:l,passiveConstructionType:"morphologicalAndPeriphrastic",transitionWords:g,twoPartTransitionWords:c,firstWordExceptions:s.firstWords,secondWordExceptions:s.secondWords}),Object.assign(this.helpers,{getStemmer:d,getClauses:h,isPassiveSentence:j})}}}});