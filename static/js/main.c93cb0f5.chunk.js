(this.webpackJsonpspeedster=this.webpackJsonpspeedster||[]).push([[0],[,,,,,,,,,,,,,,,function(e,t,a){},,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},,function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var s=a(1),A=a.n(s),r=a(4),n=a.n(r),i=a(8),o=a(2),c=a(5),h=a(6),l=a(10),d=a(9),m=(a(15),a(0)),u=function(e){var t=e.words,a=e.characters,s=e.wpm,A=e.startAgain;return Object(m.jsxs)("div",{className:"try-again-container",children:[Object(m.jsx)("h1",{children:"Test Result"}),Object(m.jsxs)("div",{className:"result-container",children:[Object(m.jsxs)("p",{children:[Object(m.jsx)("b",{children:"characters:"}),a]}),Object(m.jsxs)("p",{children:[Object(m.jsx)("b",{children:"words:"}),t]}),Object(m.jsxs)("p",{children:[Object(m.jsx)("b",{children:"speed:"}),s," wpm"]})]}),Object(m.jsxs)("div",{children:[Object(m.jsx)("button",{onClick:function(){return A()},className:"all-buttons re-try",children:"Re-Try"}),Object(m.jsx)("button",{className:"all-buttons fb-share",onClick:function(){window.open("https://www.facebook.com/share.php?u=www.google.com","facebook-share-dialog","width=800,height=600")},children:"Share on fb"}),Object(m.jsx)("button",{className:"all-buttons tweet",onClick:function(){window.open("https://twitter.com/intent/tweet?text=hey","Twitter","width=800,height=600")},children:"Share on twitter"})]})]})},b=(a(17),function(e){var t=e.cardName,a=e.cardValue;return Object(m.jsxs)("div",{className:"detail-card-container",children:[Object(m.jsx)("div",{className:"card-name",children:t}),Object(m.jsx)("div",{className:"card-value",children:a})]})}),f=(a(18),function(e){var t=e.individualLetterInfo,a={correct:"test-letter-correct",incorrect:"test-letter-incorrect",notAttempted:"test-letter-not-attempted"}[t.status];return Object(m.jsx)("span",{className:"test-letter ".concat(a),children:t.testLetter})}),p=(a(19),function(e){var t=e.timeRemaining,a=e.timerStarted,s=e.testInfo,A=e.onInputChange;return Object(m.jsxs)("div",{className:"typing-challenge",children:[Object(m.jsxs)("div",{className:"timer-container",children:[Object(m.jsxs)("p",{className:"timer",children:["00:",t>10?t:"0 ".concat(t)]}),Object(m.jsx)("p",{className:"timer-info",children:!a&&"Start Typing To Start The Test.."})]}),Object(m.jsxs)("div",{className:"textarea-container",children:[Object(m.jsx)("div",{className:"textarea-left",children:Object(m.jsx)("div",{className:"textarea test-paragraph",children:s.map((function(e,t){return Object(m.jsx)(f,{individualLetterInfo:e},t)}))})}),Object(m.jsx)("div",{className:"textarea-right",children:Object(m.jsx)("textarea",{onChange:function(e){return A(e.target.value)},className:"textarea",placeholder:"Start Typing.."})})]})]})}),g=(a(20),function(e){var t=e.selectedParagraph,a=e.words,s=e.characters,A=e.wpm,r=e.timeRemaining,n=e.timerStarted,i=e.testInfo,o=e.onInputChange;return Object(m.jsxs)("div",{className:"typing-container",children:[Object(m.jsxs)("div",{className:"details-container",children:[Object(m.jsx)(b,{cardName:"Words",cardValue:a}),Object(m.jsx)(b,{cardName:"Characters",cardValue:s}),Object(m.jsx)(b,{cardName:"Speed",cardValue:A})]}),Object(m.jsx)("div",{className:"typewriter-container",children:Object(m.jsx)(p,{testInfo:i,selectedParagraph:t,timeRemaining:r,timerStarted:n,onInputChange:o})})]})}),w=(a(21),function(e){var t=e.selectedParagraph,a=e.words,s=e.characters,A=e.wpm,r=e.timeRemaining,n=e.timerStarted,i=e.testInfo,o=e.onInputChange,c=e.startAgain;return Object(m.jsx)("div",{className:"test-container",children:r>0?Object(m.jsx)("div",{"data-aos":"fade-up",className:"typing-challenge",children:Object(m.jsx)(g,{words:a,wpm:A,characters:s,timeRemaining:r,timerStarted:n,selectedParagraph:t,testInfo:i,onInputChange:o})}):Object(m.jsx)("div",{className:"try-again",children:Object(m.jsx)(u,{words:a,characters:s,wpm:A,startAgain:c})})})}),j=(a(22),function(e){var t=e.selectedParagraph,a=e.words,s=e.characters,A=e.wpm,r=e.timeRemaining,n=e.timerStarted,i=e.testInfo,o=e.onInputChange,c=e.startAgain;return Object(m.jsxs)("div",{className:"challenge-container",children:[Object(m.jsx)("h1",{"data-aos":"fade-down",className:"challenge-header",children:"Take a speed test!"}),Object(m.jsx)(w,{selectedParagraph:t,words:a,characters:s,wpm:A,timeRemaining:r,timerStarted:n,testInfo:i,onInputChange:o,startAgain:c})]})}),v=(a(23),a.p+"static/media/fblogo.197aa76b.png"),y=function(){return Object(m.jsxs)("div",{className:"footer-container",children:[Object(m.jsx)("div",{className:"footer-text",children:"Enjoy Speedster!!"}),Object(m.jsxs)("div",{className:"footer-image",children:[Object(m.jsx)("a",{className:"footer-image-one",target:"_blank",href:"https://www.facebook.com/",rel:"noreferrer",children:Object(m.jsx)("img",{src:v,alt:"facebook"})}),Object(m.jsx)("a",{className:"footer-image-two",target:"_blank",href:"https://www.linkedin.com/",rel:"noreferrer",children:Object(m.jsx)("img",{src:"data:image/png;base64,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",alt:"Linkedin"})})]}),Object(m.jsx)("div",{className:"copyright",children:Object(m.jsx)("p",{children:"\xa9 Copyright Content Robin920.cc"})})]})},k=(a(24),a.p+"static/media/TypingImage.308cf918.jpg"),O=a(7),I=a.n(O),N=function(){return Object(m.jsxs)("div",{className:"landing-container",children:[Object(m.jsxs)("div",{"data-aos":"fade-right",className:"landing-left",children:[Object(m.jsx)("h1",{className:"landing-header",children:"Can you Type...."}),Object(m.jsx)("div",{className:"typewriter",children:Object(m.jsx)(I.a,{options:{strings:["Fast?","Quick?","Correct?"],autoStart:!0,loop:!0}})})]}),Object(m.jsx)("div",{"data-aos":"fade-left",className:"landing-right",children:Object(m.jsx)("img",{className:"typing-image",src:k,alt:"Fast Typing"})})]})},x=(a(26),a.p+"static/media/logo.f8d89de0.svg"),C=function(){return Object(m.jsxs)("div",{className:"nav-container",children:[Object(m.jsxs)("div",{className:"nav-left",children:[Object(m.jsx)("img",{className:"top-logo",src:x,alt:"superhero"}),Object(m.jsx)("p",{className:"logo-text",children:"SpeedSter!"})]}),Object(m.jsx)("div",{className:"nav-right",children:Object(m.jsx)("a",{className:"link",target:"_blank",href:"https://github.com/Robin920?tab=repositories",rel:"noreferrer",children:"My Repository"})})]})},P=["An airbus is a leg from the right perspective. Before pantries, harmonies were only baritones. Few can name a serene mistake that isn't a stockinged sword. Casebook nodes show us how pinks can be houses. This is not to discredit the idea that a key is a distrait interest. A step-grandfather of the carp is assumed to be an algal sunflower. A sneaking pine is a swing of the mind. Some ocher coins are thought of simply as slashes. Though we assume the latter, one cannot separate lines from pausal bails.","This could be, or perhaps a collar is the pamphlet of a kimberly. A dad of the design is assumed to be a patent june. A teeny chief is a james of the mind. A deborah can hardly be considered a saintly flesh without also being a daffodil. Those ministers are nothing more than cathedrals. Though we assume the latter, a market of the cracker is assumed to be an okay confirmation. The literature would have us believe that a mirthless t-shirt is not but a clock. The headlong carol comes from a puddly whistle. The olives could be said to resemble upbound ethernets.","As far as we can estimate, their hat was, in this moment, a towered pakistan. Recent controversy aside, the first unsquared wrinkle is, in its own way, a sphynx. The lutes could be said to resemble cystoid lipsticks. However, before jennifers, attacks were only irans. The rubbers could be said to resemble broadloom cards. Though we assume the latter, one cannot separate firs from princely boats. As far as we can estimate, the slapstick dash reveals itself as a dotted trouble to those who look. A street is the trail of a daniel. They were lost without the hoyden pasta that composed their stove.","A grudging grouse's desk comes with it the thought that the wooded shark is a quality. Before commas, times were only harmonicas. A gum is a wasp's drop. Stopsigns are flabby insects. Fortnights are premorse celestes. A handless observation's toothpaste comes with it the thought that the equine donna is a wilderness. What we don't know for sure is whether or not a berry sees a chief as a prefab gear. The zeitgeist contends that those barges are nothing more than taxes. Framed in a different way, a leopard is a supply's chin.","One cannot separate kohlrabis from bobtail trails. Their jail was, in this moment, a yearling belief. The pint of a rowboat becomes a venous scarecrow. In recent years, the orchid of a harbor becomes a jointed lake. They were lost without the bogus trunk that composed their adult. A bifid jar's cappelletti comes with it the thought that the unleased cord is a cultivator. They were lost without the mouthless museum that composed their backbone. Far from the truth, a zoning soprano's maria comes with it the thought that the reborn play is a price. A kick sees a reindeer as a stolen archaeology.","To be more specific, few can name a blameful shelf that isn't an unborn airbus. Some assert that a balding tv without rings is truly a barometer of pseudo snows. As far as we can estimate, the verist earthquake reveals itself as a footworn pet to those who look. In modern times they were lost without the chunky save that composed their knowledge. Authors often misinterpret the calf as a themeless pine, when in actuality it feels more like a schmalzy interviewer. We know that the octopi could be said to resemble sparry baseballs. The gutless gray reveals itself as an unfiled flood to those who look. An oyster sees a motorcycle as a neuron pharmacist. However, the literature would have us believe that a sweptwing appeal is not but a yard.","We can assume that any instance of a stool can be construed as a funest handle. In recent years, we can assume that any instance of a cloakroom can be construed as a topfull leather. Far from the truth, a turnip sees a man as a churlish poison. A plate can hardly be considered a farming rat without also being a lumber. Some posit the cissoid pastor to be less than shamefaced. This is not to discredit the idea that a season of the selection is assumed to be an absurd jaw. As far as we can estimate, the time of a level becomes a prolate october. If this was somewhat unclear, a time sees a representative as an anguished ox. In modern times authors often misinterpret the popcorn as a sternmost kendo, when in actuality it feels more like a battered step-brother.","Some posit the thickset timer to be less than shaken. A methane of the deodorant is assumed to be a snappish cold. The toeless blanket comes from a learned clover. A hollow command is an island of the mind. In recent years, the whity snowboard comes from a bijou cause. If this was somewhat unclear, a discoid pig without trials is truly a bulb of smacking zephyrs. Few can name a luscious honey that isn't a deuced guilty. Before undercloths, siameses were only capitals. Some assert that few can name a sunfast edger that isn't a smectic laura.","The montane peripheral comes from a hoggish security. Nowhere is it disputed that the palms could be said to resemble pinnate bombers. This could be, or perhaps a grenade is a keyboard from the right perspective. Extending this logic, the japans could be said to resemble centrist brackets. Their Friday was, in this moment, a phatic helmet. A systemless gondola without attentions is truly a wolf of spermic edwards. The literature would have us believe that a willful cuticle is not but a geese. If this was somewhat unclear, one cannot separate coaches from brilliant plows. A dish is an olden baritone.","Some chairborne fronts are thought of simply as routes. One cannot separate hamsters from crackbrained journeies. As far as we can estimate, some increased stopsigns are thought of simply as changes. Few can name an uncalled doctor that isn't a ledgy kendo. Some posit the dendroid buffet to be less than surgy. The literature would have us believe that a rollneck growth is not but a sand. They were lost without the vying bulb that composed their blouse. A heat is a watchmaker's white. The fitchy bush reveals itself as a briny share to those who look.","To be more specific, the grades could be said to resemble latish plasterboards. The first strawless grain is, in its own way, an undercloth. A sheep is the time of a step-son. Some assert that authors often misinterpret the poppy as an unslung lycra, when in actuality it feels more like a kacha ex-husband. We can assume that any instance of an encyclopedia can be construed as an undyed asia. We know that feathers are humdrum reactions. It's an undeniable fact, really; before communities, ashes were only ATMS. The first dicky delete is, in its own way, a cross. They were lost without the arranged string that composed their paint.","Extending this logic, the basses could be said to resemble zippy sugars. A secund lobster's iris comes with it the thought that the throaty Vietnam is an alligator. A toad is the kitchen of a production. Some posit the notour chef to be less than morish. To be more specific, a moonlit pumpkin's sea comes with it the thought that the fiercest cub is a measure. Recent controversy aside, a slimsy downtown without perches is truly a grandson of spiry sousaphones. The bowl of a couch becomes a daring archeology. A kayak is a chill from the right perspective. If this was somewhat unclear, few can name a bifid Wednesday that isn't a loveless icicle.","Framed in a different way, a nimble insurance is a rise of the mind. A rice of the aftershave is assumed to be a contained sink. As far as we can estimate, the unkind fiction comes from a seasick latex. The literature would have us believe that a routed pedestrian is not but a ground. The velate anteater reveals itself as an unstriped cardboard to those who look. The musician of a train becomes an upward ease. It's an undeniable fact, really; a snugger toy is a romanian of the mind. Some fleshy raies are thought of simply as selections. An oval of the baby is assumed to be a shiny room.","The literature would have us believe that an upgrade workshop is not but a tabletop. A sissy liquor without bails is truly a school of awheel dungeons. Shaded landmines show us how violets can be augusts. A soda can hardly be considered an oozing otter without also being an august. One cannot separate bottoms from wrinkly periods. A math is the kilogram of a centimeter. To be more specific, a hyena is the name of a stretch. However, the bridgeless fan comes from an elapsed cucumber. Before faucets, waitresses were only parties."],B=(a(27),"http://metaphorpsum.com/paragraphs/1/9"),D={selectedParagraph:"",timerStarted:!1,timeRemaining:60,words:0,characters:0,wpm:0,testInfo:[]},R=function(e){Object(l.a)(a,e);var t=Object(d.a)(a);function a(){var e;Object(c.a)(this,a);for(var s=arguments.length,A=new Array(s),r=0;r<s;r++)A[r]=arguments[r];return(e=t.call.apply(t,[this].concat(A))).state=D,e.fetchNewParagraphFallback=function(){var t=P[Math.floor(Math.random()*P.length)],a=t.split("").map((function(e){return{testLetter:e,status:"notAttempted"}}));e.setState(Object(o.a)(Object(o.a)({},D),{},{testInfo:a,selectedParagraph:t}))},e.fetchNewParagraph=function(){fetch(B).then((function(e){return e.text()})).then((function(t){var a=t.split("").map((function(e){return{testLetter:e,status:"notAttempted"}}));e.setState(Object(o.a)(Object(o.a)({},D),{},{testInfo:a,selectedParagraph:t}))}))},e.startAgain=function(){e.fetchNewParagraphFallback()},e.handleUserInput=function(t){e.state.timerStarted||e.startTimer();var a=t.length,s=t.split(" ").length,A=a-1;if(A<0)e.setState({testInfo:[{testLetter:e.state.testInfo[0].testLetter,status:"notAttempted"}].concat(Object(i.a)(e.state.testInfo.slice(1))),characters:a,words:s});else if(A>e.state.selectedParagraph.length)e.setState({characters:a,words:s});else{var r=e.state.testInfo;A!=e.state.selectedParagraph.length-1&&(r[A+1].status="notAttempted");var n=t[A]==r[A].testLetter;r[A].status=n?"correct":"incorrect",e.setState({testInfo:r,words:s,characters:a})}},e.startTimer=function(){e.setState({timerStarted:!0});var t=setInterval((function(){if(e.state.timeRemaining>0){var a=60-e.state.timeRemaining,s=a>0?e.state.words/a*60:0;e.setState({timeRemaining:e.state.timeRemaining-1,wpm:parseInt(s)})}else clearInterval(t)}),1e3)},e}return Object(h.a)(a,[{key:"componentDidMount",value:function(){this.fetchNewParagraphFallback()}},{key:"render",value:function(){return Object(m.jsxs)("div",{className:"app",children:[Object(m.jsx)(C,{}),Object(m.jsx)(N,{}),Object(m.jsx)(j,{selectedParagraph:this.state.selectedParagraph,words:this.state.words,characters:this.state.characters,wpm:this.state.wpm,timeRemaining:this.state.timeRemaining,timerStarted:this.state.timerStarted,testInfo:this.state.testInfo,onInputChange:this.handleUserInput,startAgain:this.startAgain}),Object(m.jsx)(y,{})]})}}]),a}(A.a.Component),T=R;n.a.render(Object(m.jsx)(T,{}),document.getElementById("root"))}],[[28,1,2]]]);
//# sourceMappingURL=main.c93cb0f5.chunk.js.map