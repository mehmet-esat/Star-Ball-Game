const canvas = document.getElementById('gameCanvas');
const ctx = canvas.getContext('2d');

const goalAudio = new Audio('goal.mp3');
let fadeAudioInterval;

function playGoalSound() {
    goalAudio.currentTime = 0; goalAudio.volume = 1.0;
    goalAudio.play().catch(e => console.log("Müzik çalınamadı."));
    clearInterval(fadeAudioInterval);
    let fadeDuration = 5000; let fadeSteps = 50; let intervalTime = fadeDuration / fadeSteps; let volumeDrop = 1.0 / fadeSteps; 
    fadeAudioInterval = setInterval(() => {
        let newVolume = goalAudio.volume - volumeDrop;
        if (newVolume <= 0.05) { goalAudio.volume = 0; goalAudio.pause(); clearInterval(fadeAudioInterval); } else { goalAudio.volume = newVolume; }
    }, intervalTime);
}

// Gerçek Zamanlı Saat
function updateRealTimeClock() {
    const clockEl = document.getElementById('clock-display');
    if (clockEl) {
        const now = new Date();
        clockEl.innerText = now.toLocaleTimeString('tr-TR');
    }
}
setInterval(updateRealTimeClock, 1000);
updateRealTimeClock();

const rawHbsData = {"name":"Hheheh [\u029c\u1d00x\u1d0d\u1d0f\u1d05s.\u1d04\u1d0f\u1d0d]","width":420,"height":230,"spawnDistance":180,"bg":{"type":"grass","width":0,"height":0,"cornerRadius":0,"color":"2B2A3A","kickOffRadius":0},"vertexes":[{"x":0,"y":230,"trait":"kickOffBarrier"},{"x":0,"y":80,"trait":"kickOffBarrier","color":"00ff00"},{"x":0,"y":-80,"trait":"kickOffBarrier","color":"00ff00"},{"x":0,"y":-230,"trait":"kickOffBarrier"},{"x":-373.5,"y":-64,"cMask":["ball"],"trait":"goalNet","curve":0,"color":"ffffff","pos":[-700,-80],"bias":12},{"x":-400,"y":-64,"cMask":["ball"],"trait":"goalNet","curve":0,"color":"ffffff","pos":[-700,-80],"bias":12},{"x":-400,"y":64,"cMask":["ball"],"trait":"goalNet","curve":0,"color":"ffffff","pos":[-700,80],"bias":12},{"x":-373.5,"y":64,"cMask":["ball"],"trait":"goalNet","curve":0,"color":"ffffff","pos":[-700,80],"bias":12},{"x":373.5,"y":64,"cMask":["ball"],"trait":"goalNet","curve":0,"color":"ffffff","pos":[-700,-80],"bias":12},{"x":400,"y":64,"cMask":["ball"],"trait":"goalNet","curve":0,"color":"ffffff","pos":[-700,-80],"bias":12},{"x":400,"y":-64,"cMask":["ball"],"trait":"goalNet","curve":0,"color":"ffffff","pos":[-700,80],"bias":12},{"x":373.5,"y":-64,"cMask":["ball"],"trait":"goalNet","curve":0,"color":"ffffff","pos":[-700,80],"bias":12},{"x":-368,"y":-142.37229643041,"bCoef":0.1,"trait":"line","color":"ff4b44","curve":-90},{"x":-260.90035258157,"y":-50.168480548544,"bCoef":0.1,"trait":"line","color":"ff4b44","curve":0},{"x":-368,"y":-160.81305960678,"bCoef":0.1,"trait":"line","curve":-90,"color":"ff4b44"},{"x":-358.5379338963,"y":-171,"bCoef":0.1,"trait":"line","curve":-90,"color":"ff4b44"},{"x":-368,"y":141.33175243687,"bCoef":0.1,"trait":"line","color":"ff4b44","curve":90},{"x":-260.90035258157,"y":49.127936555002,"bCoef":0.1,"trait":"line","color":"ff4b44","curve":0},{"x":-368,"y":159.77251561324,"bCoef":0.1,"trait":"line","curve":90,"color":"ff4b44"},{"x":-358.5379338963,"y":171,"bCoef":0.1,"trait":"line","curve":90,"color":"ff4b44"},{"x":368,"y":159.77251561324,"bCoef":0.1,"trait":"line","curve":-90,"color":"ff4b44"},{"x":358.36266315432,"y":171,"bCoef":0.1,"trait":"line","curve":-90,"color":"ff4b44"},{"x":368,"y":-160.81305960678,"bCoef":0.1,"trait":"line","curve":90,"color":"ff4b44"},{"x":358.36266315432,"y":-171,"bCoef":0.1,"trait":"line","curve":90,"color":"ff4b44"},{"x":368,"y":-142.37229643041,"bCoef":0.1,"trait":"line","color":"ff4b44","curve":90},{"x":260.72508183959,"y":-50.168480548544,"bCoef":0.1,"trait":"line","color":"ff4b44","curve":0},{"x":368,"y":141.33175243687,"bCoef":0.1,"trait":"line","color":"ff4b44","curve":-90},{"x":260.72508183959,"y":49.127936555002,"bCoef":0.1,"trait":"line","color":"ff4b44","curve":0},{"x":-250.86909422732,"y":-2,"bCoef":0.1,"trait":"line","curve":180,"color":"ff4b44"},{"x":-250.86909422732,"y":2,"bCoef":0.1,"trait":"line","curve":180,"color":"ff4b44"},{"x":250.69382348534,"y":-1.2295321189394,"bCoef":0.1,"trait":"line","curve":180,"color":"ff4b44"},{"x":250.69382348534,"y":2,"bCoef":0.1,"trait":"line","curve":180,"color":"ff4b44"},{"x":-185.66591492467,"y":-2,"bCoef":0.1,"trait":"line","curve":180,"color":"ff4b44"},{"x":-185.66591492467,"y":2,"bCoef":0.1,"trait":"line","curve":180,"color":"ff4b44"},{"x":185.49064418269,"y":-1.2295321189394,"bCoef":0.1,"trait":"line","curve":180,"color":"ff4b44"},{"x":185.49064418269,"y":2,"bCoef":0.1,"trait":"line","curve":180,"color":"ff4b44"},{"x":-160.58776903904,"y":-159.39453936245,"bCoef":0.1,"trait":"line","color":"ffffff"},{"x":-160.58776903904,"y":-182.09086327183,"bCoef":0.1,"trait":"line","color":"ffffff"},{"x":-80.337702205015,"y":-159.39453936245,"bCoef":0.1,"trait":"line","color":"ffffff"},{"x":-80.337702205015,"y":-182.09086327183,"bCoef":0.1,"trait":"line","color":"ffffff"},{"x":160.41249829706,"y":-159.39453936245,"bCoef":0.1,"trait":"line","color":"ffffff"},{"x":160.41249829706,"y":-182.09086327183,"bCoef":0.1,"trait":"line","color":"ffffff"},{"x":80.162431463036,"y":-159.39453936245,"bCoef":0.1,"trait":"line","color":"ffffff"},{"x":80.162431463036,"y":-182.09086327183,"bCoef":0.1,"trait":"line","color":"ffffff"},{"x":-254.88159756902,"y":-171,"bCoef":0.1,"trait":"line","color":"ffffff"},{"x":-254.88159756902,"y":-182.09086327183,"bCoef":0.1,"trait":"line","color":"ffffff"},{"x":-371.91294503531,"y":-87.759267023458,"bCoef":0.1,"trait":"line","color":"ffffff"},{"x":-384.61920561736,"y":-87.759267023458,"bCoef":0.1,"trait":"line","color":"ffffff"},{"x":371.73767429333,"y":-87.759267023458,"bCoef":0.1,"trait":"line","color":"ffffff"},{"x":384.44393487538,"y":-87.759267023458,"bCoef":0.1,"trait":"line","color":"ffffff"},{"x":-371.91294503531,"y":86.718723029916,"bCoef":0.1,"trait":"line","color":"ffffff"},{"x":-384.61920561736,"y":86.718723029916,"bCoef":0.1,"trait":"line","color":"ffffff"},{"x":371.73767429333,"y":86.718723029916,"bCoef":0.1,"trait":"line","color":"ffffff"},{"x":384.44393487538,"y":86.718723029916,"bCoef":0.1,"trait":"line","color":"ffffff"},{"x":-254.88159756902,"y":171,"bCoef":0.1,"trait":"line","color":"ffffff"},{"x":-254.88159756902,"y":181.05031927829,"bCoef":0.1,"trait":"line","color":"ffffff"},{"x":254.70632682704,"y":-171,"bCoef":0.1,"trait":"line","color":"ffffff"},{"x":254.70632682704,"y":-182.09086327183,"bCoef":0.1,"trait":"line","color":"ffffff"},{"x":254.70632682704,"y":171,"bCoef":0.1,"trait":"line","color":"ffffff"},{"x":254.70632682704,"y":181.05031927829,"bCoef":0.1,"trait":"line","color":"ffffff"},{"x":-368,"y":171,"bCoef":1,"cMask":["ball"],"trait":"ballArea","vis":true,"color":"ffffff","bias":12},{"x":368,"y":171,"bCoef":1,"cMask":["ball"],"trait":"ballArea","vis":true,"color":"ffffff","bias":12},{"x":368,"y":64,"bCoef":1,"cMask":["ball"],"trait":"ballArea","vis":true,"color":"ffffff","bias":12,"pos":[368,64]},{"x":368,"y":-64,"bCoef":1,"cMask":["ball"],"trait":"ballArea","vis":true,"color":"ffffff","bias":12,"pos":[368,-64]},{"x":368,"y":-171,"bCoef":1,"cMask":["ball"],"trait":"ballArea","vis":true,"color":"ffffff","bias":12},{"x":-368,"y":-171,"bCoef":1,"cMask":["ball"],"trait":"ballArea","vis":true,"color":"ffffff","bias":12},{"x":-368,"y":-64,"bCoef":1,"cMask":["ball"],"trait":"ballArea","vis":true,"color":"ffffff","bias":12},{"x":-368,"y":64,"bCoef":1,"cMask":["ball"],"trait":"ballArea","color":"ffffff","vis":true,"bias":-12,"pos":[-368,64]},{"x":-368,"y":64,"bCoef":0,"trait":"line","color":"ff4b44","pos":[-368,64]},{"x":-368,"y":-64,"bCoef":0,"trait":"line","color":"ff4b44"},{"x":368,"y":64,"bCoef":0,"trait":"line","color":"ff4b44","pos":[368,64]},{"x":368,"y":-64,"bCoef":0,"trait":"line","color":"ff4b44","pos":[368,-64]},{"x":0,"y":80,"bCoef":0,"trait":"line","color":"ff4b44"},{"x":0,"y":171,"bCoef":0,"trait":"line","color":"ff4b44"},{"x":0,"y":-171,"bCoef":0,"trait":"line","color":"ff4b44"},{"x":0,"y":-80,"bCoef":0,"trait":"line","color":"ff4b44"},{"x":0,"y":80,"trait":"kickOffBarrier","color":"ff4b44","vis":true},{"x":0,"y":-80,"trait":"line","color":"ff4b44","vis":true},{"x":-26.162990048728652,"y":-43.725334858263096,"trait":"line","color":"ff4b44"},{"x":-2.8256065808263386,"y":-43.725334858263096,"trait":"line","color":"ff4b44"},{"x":-33.830987473896556,"y":0.28230253835271757,"trait":"line","color":"ff4b44"},{"x":-12.994037948983777,"y":-0.21778425024518988,"trait":"line","color":"ff4b44"},{"x":-44.1661144382533,"y":15.28490619628992,"trait":"line","color":"ff4b44"},{"x":-52.500894248218415,"y":4.616388039534577,"trait":"line","color":"ff4b44"},{"x":-52.16750305581981,"y":-6.05213011722077,"trait":"line","color":"ff4b44"},{"x":17.84464734788714,"y":-43.725334858263096,"trait":"line","color":"ff4b44"},{"x":43.18237797018108,"y":-43.725334858263096,"trait":"line","color":"ff4b44"},{"x":-7.826474466805408,"y":28.953945084632704,"trait":"line","color":"ff4b44"},{"x":14.844126616299704,"y":28.953945084632704,"trait":"line","color":"ff4b44"},{"x":-19.82855739315517,"y":46.290287089360135,"trait":"line","color":"ff4b44"},{"x":-29.8302931651133,"y":33.28803058581457,"trait":"line","color":"ff4b44"},{"x":-27.496554818323073,"y":20.9525564670662,"trait":"line","color":"ff4b44"},{"x":-53.01949358444867,"y":-2.758612001090324,"bCoef":0.1,"trait":"line","color":"ff4b44"},{"x":-25.4177429839234,"y":-43.072505858208515,"bCoef":0.1,"trait":"line","color":"ff4b44"},{"x":-52.935408267791786,"y":-1.1434612200673215,"bCoef":0.1,"trait":"line","color":"ff4b44"},{"x":-23.951195076037862,"y":-43.21604711683827,"bCoef":0.1,"trait":"line","color":"ff4b44"},{"x":-53.22940974540417,"y":1.1130617029774514,"bCoef":0.1,"trait":"line","color":"ff4b44"},{"x":-22.201639954765575,"y":-43.44408300909677,"bCoef":0.1,"trait":"line","color":"ff4b44"},{"x":-52.67438958285632,"y":2.373562247055782,"bCoef":0.1,"trait":"line","color":"ff4b44"},{"x":-21.080605365444235,"y":-43.74561927075837,"bCoef":0.1,"trait":"line","color":"ff4b44"},{"x":-52.810396057436876,"y":4.042082214875762,"bCoef":0.1,"trait":"line","color":"ff4b44"},{"x":-20.073588722252158,"y":-43.27163426166284,"bCoef":0.1,"trait":"line","color":"ff4b44"},{"x":-52.29589347161519,"y":4.641079434326203,"bCoef":0.1,"trait":"line","color":"ff4b44"},{"x":-18.85706523507641,"y":-43.23865146898589,"bCoef":0.1,"trait":"line","color":"ff4b44"},{"x":-51.71888478061605,"y":5.188564812824842,"bCoef":0.1,"trait":"line","color":"ff4b44"},{"x":-17.357534534513928,"y":-43.41517552029259,"bCoef":0.1,"trait":"line","color":"ff4b44"},{"x":-51.27739352773271,"y":5.583633826481911,"bCoef":0.1,"trait":"line","color":"ff4b44"},{"x":-15.809881035825201,"y":-43.51768668661448,"bCoef":0.1,"trait":"line","color":"ff4b44"},{"x":-50.80820697931239,"y":6.109736437746891,"bCoef":0.1,"trait":"line","color":"ff4b44"},{"x":-14.570805521391044,"y":-43.38749967888107,"bCoef":0.1,"trait":"line","color":"ff4b44"},{"x":-50.20509487690629,"y":7.027178908063375,"bCoef":0.1,"trait":"line","color":"ff4b44"},{"x":-13.125280144001788,"y":-43.2403526987178,"bCoef":0.1,"trait":"line","color":"ff4b44"},{"x":-49.76737705353479,"y":7.551266340261053,"bCoef":0.1,"trait":"line","color":"ff4b44"},{"x":-11.813384483724546,"y":-43.371164921794346,"bCoef":0.1,"trait":"line","color":"ff4b44"},{"x":-48.892360676737525,"y":8.555837130297567,"bCoef":0.1,"trait":"line","color":"ff4b44"},{"x":-10.327491795957686,"y":-43.633208637893176,"bCoef":0.1,"trait":"line","color":"ff4b44"},{"x":-48.49824692772489,"y":8.949531609364461,"bCoef":0.1,"trait":"line","color":"ff4b44"},{"x":-9.40929061474736,"y":-43.327141577489726,"bCoef":0.1,"trait":"line","color":"ff4b44"},{"x":-48.147737253071085,"y":10.128518696836364,"bCoef":0.1,"trait":"line","color":"ff4b44"},{"x":-8.272230521851258,"y":-43.63278936794741,"bCoef":0.1,"trait":"line","color":"ff4b44"},{"x":-47.74106093420218,"y":11.117001943768962,"bCoef":0.1,"trait":"line","color":"ff4b44"},{"x":-7.134595873844303,"y":-43.67740279587939,"bCoef":0.1,"trait":"line","color":"ff4b44"},{"x":-46.92641942959409,"y":11.4003041989694,"bCoef":0.1,"trait":"line","color":"ff4b44"},{"x":-6.406696662458651,"y":-43.434769725417496,"bCoef":0.1,"trait":"line","color":"ff4b44"},{"x":-46.19852021820843,"y":11.885570339893173,"bCoef":0.1,"trait":"line","color":"ff4b44"},{"x":-5.193531310149201,"y":-43.434769725417496,"bCoef":0.1,"trait":"line","color":"ff4b44"},{"x":-45.713254077284645,"y":12.856102621740732,"bCoef":0.1,"trait":"line","color":"ff4b44"},{"x":-3.737732887377871,"y":-43.192136654955604,"bCoef":0.1,"trait":"line","color":"ff4b44"},{"x":-44.985354865898984,"y":13.826634903588282,"bCoef":0.1,"trait":"line","color":"ff4b44"},{"x":-14.898854128624755,"y":0.4818160281843946,"bCoef":0.1,"trait":"line","color":"ff4b44"},{"x":-44.25745565451332,"y":14.554534114973947,"bCoef":0.1,"trait":"line","color":"ff4b44"},{"x":-16.264788451225023,"y":0.21222372767118625,"bCoef":0.1,"trait":"line","color":"ff4b44"},{"x":-43.619420543298716,"y":12.658401601364375,"bCoef":0.1,"trait":"line","color":"ff4b44"},{"x":-29.317211078928803,"y":25.74416208507095,"bCoef":0.1,"trait":"line","color":"ff4b44"},{"x":19.154616195942516,"y":-43.37869702251591,"bCoef":0.1,"trait":"line","color":"ff4b44"},{"x":-30.454542436374066,"y":29.2617529766101,"bCoef":0.1,"trait":"line","color":"ff4b44"},{"x":20.360036445975158,"y":-43.3814019410181,"bCoef":0.1,"trait":"line","color":"ff4b44"},{"x":-30.183742500385804,"y":30.661217668328714,"bCoef":0.1,"trait":"line","color":"ff4b44"},{"x":21.5336686798139,"y":-43.370035688073756,"bCoef":0.1,"trait":"line","color":"ff4b44"},{"x":-29.96927629545029,"y":32.56571506020646,"bCoef":0.1,"trait":"line","color":"ff4b44"},{"x":22.989467102585234,"y":-43.40660285989112,"bCoef":0.1,"trait":"line","color":"ff4b44"},{"x":-29.5151429667062,"y":33.877713208692654,"bCoef":0.1,"trait":"line","color":"ff4b44"},{"x":24.360764928777495,"y":-43.34730318218509,"bCoef":0.1,"trait":"line","color":"ff4b44"},{"x":-28.77884344902952,"y":34.66491209778437,"bCoef":0.1,"trait":"line","color":"ff4b44"},{"x":25.486463737854514,"y":-43.14123728354056,"bCoef":0.1,"trait":"line","color":"ff4b44"},{"x":-28.09047735611455,"y":35.11361106689077,"bCoef":0.1,"trait":"line","color":"ff4b44"},{"x":27.076667061282027,"y":-43.67740279587939,"bCoef":0.1,"trait":"line","color":"ff4b44"},{"x":-27.51577379264297,"y":35.906244315620185,"bCoef":0.1,"trait":"line","color":"ff4b44"},{"x":28.047199343129588,"y":-43.192136654955604,"bCoef":0.1,"trait":"line","color":"ff4b44"},{"x":-27.030507651719198,"y":36.876776597467725,"bCoef":0.1,"trait":"line","color":"ff4b44"},{"x":29.745630836362796,"y":-43.434769725417496,"bCoef":0.1,"trait":"line","color":"ff4b44"},{"x":-26.54524151079543,"y":37.6046758088534,"bCoef":0.1,"trait":"line","color":"ff4b44"},{"x":31.44406232959602,"y":-43.67740279587939,"bCoef":0.1,"trait":"line","color":"ff4b44"},{"x":-25.81734229940975,"y":38.575208090700954,"bCoef":0.1,"trait":"line","color":"ff4b44"},{"x":32.65722768190547,"y":-43.43476972541751,"bCoef":0.1,"trait":"line","color":"ff4b44"},{"x":-24.8468100175622,"y":39.54574037254851,"bCoef":0.1,"trait":"line","color":"ff4b44"},{"x":33.87039303421491,"y":-43.434769725417496,"bCoef":0.1,"trait":"line","color":"ff4b44"},{"x":-24.11891080617654,"y":40.758905724857954,"bCoef":0.1,"trait":"line","color":"ff4b44"},{"x":35.32619145698625,"y":-43.43476972541751,"bCoef":0.1,"trait":"line","color":"ff4b44"},{"x":-23.391011594790868,"y":41.72943800670551,"bCoef":0.1,"trait":"line","color":"ff4b44"},{"x":36.781989879757575,"y":-43.192136654955604,"bCoef":0.1,"trait":"line","color":"ff4b44"},{"x":-22.663112383405203,"y":42.45733721809117,"bCoef":0.1,"trait":"line","color":"ff4b44"},{"x":38.23778830252891,"y":-43.192136654955604,"bCoef":0.1,"trait":"line","color":"ff4b44"},{"x":-21.886686557927167,"y":43.45698546839415,"bCoef":0.1,"trait":"line","color":"ff4b44"},{"x":39.36360574947207,"y":-43.395948434143605,"bCoef":0.1,"trait":"line","color":"ff4b44"},{"x":-21.061734118356746,"y":44.214000648235256,"bCoef":0.1,"trait":"line","color":"ff4b44"},{"x":40.411780613867435,"y":-43.78416134688263,"bCoef":0.1,"trait":"line","color":"ff4b44"},{"x":-20.654110559980765,"y":45.640683102551165,"bCoef":0.1,"trait":"line","color":"ff4b44"},{"x":41.18820643934548,"y":-43.19213665495562,"bCoef":0.1,"trait":"line","color":"ff4b44"},{"x":11.86400622232241,"y":29.397420823229634,"bCoef":0.1,"trait":"line","color":"ff4b44"},{"x":-19.54682508747287,"y":43.9587333509493,"bCoef":0.1,"trait":"line","color":"ff4b44"},{"x":9.159762467174472,"y":29.605439573625635,"bCoef":0.1,"trait":"line","color":"ff4b44"},{"x":-17.46663758351292,"y":42.08656459738535,"bCoef":0.1,"trait":"line","color":"ff4b44"},{"x":6.455518712026533,"y":29.397420823229634,"bCoef":0.1,"trait":"line","color":"ff4b44"},{"x":-16.842581332324933,"y":40.422414594217386,"bCoef":0.1,"trait":"line","color":"ff4b44"},{"x":4.167312457670587,"y":29.605439573625635,"bCoef":0.1,"trait":"line","color":"ff4b44"},{"x":-15.178431329156973,"y":38.55024584065343,"bCoef":0.1,"trait":"line","color":"ff4b44"},{"x":1.8791062033146382,"y":29.813458324021628,"bCoef":0.1,"trait":"line","color":"ff4b44"},{"x":-14.762393828364983,"y":37.094114587881464,"bCoef":0.1,"trait":"line","color":"ff4b44"},{"x":0.4229749505426712,"y":29.813458324021628,"bCoef":0.1,"trait":"line","color":"ff4b44"},{"x":-18.8688380491452,"y":0.3518397494184482,"bCoef":0.1,"trait":"line","color":"ff4b44"},{"x":-42.17464249165948,"y":10.945387223288577,"bCoef":0.1,"trait":"line","color":"ff4b44"},{"x":-21.18015749798958,"y":0.5444497034888149,"bCoef":0.1,"trait":"line","color":"ff4b44"},{"x":-41.21159272130764,"y":9.404507590725649,"bCoef":0.1,"trait":"line","color":"ff4b44"},{"x":-23.298866992763614,"y":0.5444497034888114,"bCoef":0.1,"trait":"line","color":"ff4b44"},{"x":-40.05593299688546,"y":7.478408050021988,"bCoef":0.1,"trait":"line","color":"ff4b44"},{"x":-25.610186441608,"y":0.9296696116295458,"bCoef":0.1,"trait":"line","color":"ff4b44"},{"x":-38.515053364322526,"y":5.7449184633886965,"bCoef":0.1,"trait":"line","color":"ff4b44"},{"x":-27.53628598231165,"y":0.7370596575591799,"bCoef":0.1,"trait":"line","color":"ff4b44"},{"x":-37.93722350211142,"y":4.0114288767553985,"bCoef":0.1,"trait":"line","color":"ff4b44"},{"x":-30.23282533929679,"y":0.7370596575591799,"bCoef":0.1,"trait":"line","color":"ff4b44"},{"x":-33.1145767371644,"y":0.4847379756151522,"bCoef":0.1,"trait":"line","color":"ff4b44"},{"x":-13.09824382519702,"y":35.4299645847135,"bCoef":0.1,"trait":"line","color":"ff4b44"},{"x":-0.8383269742025581,"y":29.40419519802025,"bCoef":0.1,"trait":"line","color":"ff4b44"},{"x":-12.301340616597729,"y":34.45034348882079,"bCoef":0.1,"trait":"line","color":"ff4b44"},{"x":-3.825910804446603,"y":29.772949465094225,"bCoef":0.1,"trait":"line","color":"ff4b44"},{"x":-10.88168107584205,"y":32.96617414506673,"bCoef":0.1,"trait":"line","color":"ff4b44"},{"x":-5.078419780945655,"y":29.682779471781284,"bCoef":0.1,"trait":"line","color":"ff4b44"},{"x":-10.409926720297852,"y":32.05034419774846,"bCoef":0.1,"trait":"line","color":"ff4b44"},{"x":-7.2616073733758295,"y":29.017855034453934,"bCoef":0.1,"trait":"line","color":"ff4b44"},{"x":-10.856020885527489,"y":34.235550363634175,"bCoef":0.1,"trait":"line","color":"ff4b44"},{"x":-36.23834558075002,"y":3.0499643735152597,"bCoef":0.1,"trait":"line","color":"ff4b44"},{"x":-36.73374155315322,"y":0.9032484931013727,"bCoef":0.1,"trait":"line","color":"ff4b44"},{"x":-10.477755015783384,"y":30.461874846492574,"bCoef":0.1,"trait":"line","color":"ff4b44"}],"segments":[{"v0":0,"v1":1,"trait":"kickOffBarrier"},{"v0":2,"v1":3,"trait":"kickOffBarrier"},{"v0":4,"v1":5,"curve":0,"color":"ffffff","cMask":["ball"],"trait":"goalNet","bias":12,"pos":[-700,-80],"y":-64},{"v0":5,"v1":6,"color":"ffffff","cMask":["ball"],"trait":"goalNet","bias":12,"x":-400},{"v0":6,"v1":7,"curve":0,"color":"ffffff","cMask":["ball"],"trait":"goalNet","bias":12,"pos":[-700,80],"y":64},{"v0":8,"v1":9,"curve":0,"color":"ffffff","cMask":["ball"],"trait":"goalNet","bias":12,"pos":[-700,-80],"y":64},{"v0":9,"v1":10,"color":"ffffff","cMask":["ball"],"trait":"goalNet","bias":12,"x":-590},{"v0":10,"v1":11,"curve":0,"color":"ffffff","cMask":["ball"],"trait":"goalNet","bias":12,"pos":[-700,80],"y":-64},{"v0":12,"v1":13,"curve":94.0263701017,"vis":true,"color":"ff4b44","bCoef":0.1,"trait":"line"},{"v0":15,"v1":14,"curve":86.632306418889,"vis":true,"color":"ff4b44","bCoef":0.1,"trait":"line"},{"v0":16,"v1":17,"curve":-94.026370101699,"vis":true,"color":"ff4b44","bCoef":0.1,"trait":"line"},{"v0":13,"v1":17,"curve":0,"vis":true,"color":"ff4b44","bCoef":0.1,"trait":"line"},{"v0":19,"v1":18,"curve":-86.632306418888,"vis":true,"color":"ff4b44","bCoef":0.1,"trait":"line"},{"v0":21,"v1":20,"curve":86.632306418884,"vis":true,"color":"ff4b44","bCoef":0.1,"trait":"line"},{"v0":23,"v1":22,"curve":-86.632306418899,"vis":true,"color":"ff4b44","bCoef":0.1,"trait":"line"},{"v0":24,"v1":25,"curve":-94.026370101699,"vis":true,"color":"ff4b44","bCoef":0.1,"trait":"line"},{"v0":26,"v1":27,"curve":94.026370101699,"vis":true,"color":"ff4b44","bCoef":0.1,"trait":"line"},{"v0":29,"v1":28,"curve":-180.00692920292,"vis":true,"color":"ff4b44","bCoef":0.1,"trait":"line","x":-375},{"v0":28,"v1":29,"curve":-180.00218240614,"vis":true,"color":"ff4b44","bCoef":0.1,"trait":"line","x":-375},{"v0":31,"v1":30,"curve":-179.99869069543,"vis":true,"color":"ff4b44","bCoef":0.1,"trait":"line","x":375},{"v0":30,"v1":31,"curve":-179.99939258776,"vis":true,"color":"ff4b44","bCoef":0.1,"trait":"line","x":375},{"v0":33,"v1":32,"curve":-180.04715562398,"vis":true,"color":"ff4b44","bCoef":0.1,"trait":"line","x":-277.5},{"v0":32,"v1":33,"curve":-179.95294709391,"vis":true,"color":"ff4b44","bCoef":0.1,"trait":"line","x":-277.5},{"v0":35,"v1":34,"curve":-180.00086646359,"vis":true,"color":"ff4b44","bCoef":0.1,"trait":"line","x":277.5},{"v0":34,"v1":35,"curve":-180.01965986376,"vis":true,"color":"ff4b44","bCoef":0.1,"trait":"line","x":277.5},{"v0":36,"v1":37,"curve":0,"vis":true,"color":"ffffff","bCoef":0.1,"trait":"line","x":-240},{"v0":38,"v1":39,"curve":0,"vis":true,"color":"ffffff","bCoef":0.1,"trait":"line","x":-120},{"v0":40,"v1":41,"curve":0,"vis":true,"color":"ffffff","bCoef":0.1,"trait":"line","x":240},{"v0":42,"v1":43,"curve":0,"vis":true,"color":"ffffff","bCoef":0.1,"trait":"line","x":120},{"v0":44,"v1":45,"curve":0,"vis":true,"color":"ffffff","bCoef":0.1,"trait":"line","x":-381},{"v0":46,"v1":47,"curve":0,"vis":true,"color":"ffffff","bCoef":0.1,"trait":"line","x":-240,"y":123},{"v0":48,"v1":49,"curve":0,"vis":true,"color":"ffffff","bCoef":0.1,"trait":"line","x":-240,"y":123},{"v0":50,"v1":51,"curve":0,"vis":true,"color":"ffffff","bCoef":0.1,"trait":"line","x":-240,"y":-123},{"v0":52,"v1":53,"curve":0,"vis":true,"color":"ffffff","bCoef":0.1,"trait":"line","x":-240,"y":-123},{"v0":54,"v1":55,"curve":0,"vis":true,"color":"ffffff","bCoef":0.1,"trait":"line","x":-381},{"v0":56,"v1":57,"curve":0,"vis":true,"color":"ffffff","bCoef":0.1,"trait":"line","x":381},{"v0":58,"v1":59,"curve":0,"vis":true,"color":"ffffff","bCoef":0.1,"trait":"line","x":381},{"v0":27,"v1":25,"curve":0,"vis":true,"color":"ff4b44","bCoef":0.1,"trait":"line"},{"v0":60,"v1":61,"vis":true,"color":"ffffff","bCoef":1,"cMask":["ball"],"trait":"ballArea","bias":12,"y":171},{"v0":61,"v1":62,"vis":true,"color":"ffffff","bCoef":1,"cMask":["ball"],"trait":"ballArea","bias":12,"x":368},{"v0":63,"v1":64,"vis":true,"color":"ffffff","bCoef":1,"cMask":["ball"],"trait":"ballArea","bias":12,"x":368},{"v0":64,"v1":65,"vis":true,"color":"ffffff","bCoef":1,"cMask":["ball"],"trait":"ballArea","bias":12,"y":-171},{"v0":65,"v1":66,"vis":true,"color":"ffffff","bCoef":1,"cMask":["ball"],"trait":"ballArea","bias":12,"x":-368},{"v0":60,"v1":67,"vis":true,"color":"ffffff","bCoef":1,"cMask":["ball"],"trait":"ballArea","bias":-12,"x":-368},{"v0":68,"v1":69,"curve":0,"vis":true,"color":"ff4b44","bCoef":0,"trait":"line","x":-368},{"v0":70,"v1":71,"curve":0,"vis":true,"color":"ff4b44","bCoef":0,"trait":"line","x":368},{"v0":72,"v1":73,"curve":0,"vis":true,"color":"ff4b44","bCoef":0,"trait":"line","x":0},{"v0":74,"v1":75,"curve":0,"vis":true,"color":"ff4b44","bCoef":0,"trait":"line","x":0},{"v0":76,"v1":77,"curve":180,"color":"ffffff","cGroup":["blueKO"],"trait":"kickOffBarrier"},{"v0":76,"v1":77,"curve":-180,"vis":true,"color":"ff4b44","cGroup":["redKO"],"trait":"kickOffBarrier"},{"v0":77,"v1":76,"curve":-180,"vis":true,"color":"ff4b44","bCoef":0,"trait":"line"},{"v0":78,"v1":79,"color":"ff4b44","trait":"line"},{"v0":79,"v1":80,"color":"ff4b44","trait":"line"},{"v0":80,"v1":81,"color":"ff4b44","trait":"line"},{"v0":81,"v1":82,"color":"ff4b44","trait":"line"},{"v0":82,"v1":83,"color":"ff4b44","trait":"line"},{"v0":83,"v1":84,"curve":49.76654966308893,"color":"ff4b44","trait":"line"},{"v0":84,"v1":78,"color":"ff4b44","trait":"line"},{"v0":85,"v1":86,"color":"ff4b44","trait":"line","y":-134},{"v0":86,"v1":87,"color":"ff4b44","trait":"line"},{"v0":87,"v1":88,"color":"ff4b44","trait":"line","y":84},{"v0":88,"v1":89,"color":"ff4b44","trait":"line"},{"v0":89,"v1":90,"color":"ff4b44","trait":"line"},{"v0":90,"v1":91,"curve":52.02696859556354,"color":"ff4b44","trait":"line"},{"v0":91,"v1":85,"color":"ff4b44","trait":"line"},{"v0":78,"v1":92,"vis":true,"color":"ff4b44","bCoef":0.1,"trait":"line"},{"v0":92,"v1":93,"vis":true,"color":"ff4b44","bCoef":0.1,"trait":"line"},{"v0":93,"v1":94,"vis":true,"color":"ff4b44","bCoef":0.1,"trait":"line"},{"v0":94,"v1":95,"vis":true,"color":"ff4b44","bCoef":0.1,"trait":"line"},{"v0":95,"v1":96,"vis":true,"color":"ff4b44","bCoef":0.1,"trait":"line"},{"v0":96,"v1":97,"vis":true,"color":"ff4b44","bCoef":0.1,"trait":"line"},{"v0":97,"v1":98,"vis":true,"color":"ff4b44","bCoef":0.1,"trait":"line"},{"v0":98,"v1":99,"vis":true,"color":"ff4b44","bCoef":0.1,"trait":"line"},{"v0":99,"v1":100,"vis":true,"color":"ff4b44","bCoef":0.1,"trait":"line"},{"v0":100,"v1":101,"vis":true,"color":"ff4b44","bCoef":0.1,"trait":"line"},{"v0":101,"v1":102,"vis":true,"color":"ff4b44","bCoef":0.1,"trait":"line"},{"v0":102,"v1":103,"vis":true,"color":"ff4b44","bCoef":0.1,"trait":"line"},{"v0":103,"v1":104,"vis":true,"color":"ff4b44","bCoef":0.1,"trait":"line"},{"v0":104,"v1":105,"vis":true,"color":"ff4b44","bCoef":0.1,"trait":"line"},{"v0":105,"v1":106,"vis":true,"color":"ff4b44","bCoef":0.1,"trait":"line"},{"v0":106,"v1":107,"vis":true,"color":"ff4b44","bCoef":0.1,"trait":"line"},{"v0":107,"v1":108,"vis":true,"color":"ff4b44","bCoef":0.1,"trait":"line"},{"v0":108,"v1":109,"color":"ff4b44","bCoef":0.1,"trait":"line"},{"v0":109,"v1":110,"vis":true,"color":"ff4b44","bCoef":0.1,"trait":"line"},{"v0":110,"v1":111,"vis":true,"color":"ff4b44","bCoef":0.1,"trait":"line"},{"v0":111,"v1":112,"vis":true,"color":"ff4b44","bCoef":0.1,"trait":"line"},{"v0":112,"v1":113,"vis":true,"color":"ff4b44","bCoef":0.1,"trait":"line"},{"v0":113,"v1":114,"vis":true,"color":"ff4b44","bCoef":0.1,"trait":"line"},{"v0":114,"v1":115,"vis":true,"color":"ff4b44","bCoef":0.1,"trait":"line"},{"v0":115,"v1":116,"vis":true,"color":"ff4b44","bCoef":0.1,"trait":"line"},{"v0":116,"v1":117,"vis":true,"color":"ff4b44","bCoef":0.1,"trait":"line"},{"v0":117,"v1":118,"vis":true,"color":"ff4b44","bCoef":0.1,"trait":"line"},{"v0":118,"v1":119,"vis":true,"color":"ff4b44","bCoef":0.1,"trait":"line"},{"v0":119,"v1":120,"vis":true,"color":"ff4b44","bCoef":0.1,"trait":"line"},{"v0":120,"v1":121,"vis":true,"color":"ff4b44","bCoef":0.1,"trait":"line"},{"v0":121,"v1":122,"vis":true,"color":"ff4b44","bCoef":0.1,"trait":"line"},{"v0":122,"v1":123,"vis":true,"color":"ff4b44","bCoef":0.1,"trait":"line"},{"v0":123,"v1":124,"vis":true,"color":"ff4b44","bCoef":0.1,"trait":"line"},{"v0":124,"v1":125,"vis":true,"color":"ff4b44","bCoef":0.1,"trait":"line"},{"v0":125,"v1":126,"vis":true,"color":"ff4b44","bCoef":0.1,"trait":"line"},{"v0":126,"v1":127,"vis":true,"color":"ff4b44","bCoef":0.1,"trait":"line"},{"v0":127,"v1":128,"vis":true,"color":"ff4b44","bCoef":0.1,"trait":"line"},{"v0":128,"v1":129,"vis":true,"color":"ff4b44","bCoef":0.1,"trait":"line"},{"v0":129,"v1":130,"vis":true,"color":"ff4b44","bCoef":0.1,"trait":"line"},{"v0":130,"v1":131,"vis":true,"color":"ff4b44","bCoef":0.1,"trait":"line"},{"v0":131,"v1":132,"vis":true,"color":"ff4b44","bCoef":0.1,"trait":"line"},{"v0":85,"v1":133,"color":"ff4b44","bCoef":0.1,"trait":"line"},{"v0":133,"v1":134,"vis":true,"color":"ff4b44","bCoef":0.1,"trait":"line"},{"v0":134,"v1":135,"vis":true,"color":"ff4b44","bCoef":0.1,"trait":"line"},{"v0":135,"v1":136,"vis":true,"color":"ff4b44","bCoef":0.1,"trait":"line"},{"v0":136,"v1":137,"vis":true,"color":"ff4b44","bCoef":0.1,"trait":"line"},{"v0":137,"v1":138,"vis":true,"color":"ff4b44","bCoef":0.1,"trait":"line"},{"v0":138,"v1":139,"vis":true,"color":"ff4b44","bCoef":0.1,"trait":"line"},{"v0":139,"v1":140,"vis":true,"color":"ff4b44","bCoef":0.1,"trait":"line"},{"v0":141,"v1":142,"vis":true,"color":"ff4b44","bCoef":0.1,"trait":"line"},{"v0":142,"v1":143,"vis":true,"color":"ff4b44","bCoef":0.1,"trait":"line"},{"v0":143,"v1":144,"vis":true,"color":"ff4b44","bCoef":0.1,"trait":"line"},{"v0":144,"v1":145,"vis":true,"color":"ff4b44","bCoef":0.1,"trait":"line"},{"v0":141,"v1":140,"vis":true,"color":"ff4b44","bCoef":0.1,"trait":"line"},{"v0":145,"v1":146,"vis":true,"color":"ff4b44","bCoef":0.1,"trait":"line"},{"v0":146,"v1":147,"vis":true,"color":"ff4b44","bCoef":0.1,"trait":"line"},{"v0":147,"v1":148,"vis":true,"color":"ff4b44","bCoef":0.1,"trait":"line"},{"v0":148,"v1":149,"vis":true,"color":"ff4b44","bCoef":0.1,"trait":"line"},{"v0":149,"v1":150,"vis":true,"color":"ff4b44","bCoef":0.1,"trait":"line"},{"v0":150,"v1":151,"vis":true,"color":"ff4b44","bCoef":0.1,"trait":"line"},{"v0":151,"v1":152,"vis":true,"color":"ff4b44","bCoef":0.1,"trait":"line"},{"v0":152,"v1":153,"vis":true,"color":"ff4b44","bCoef":0.1,"trait":"line"},{"v0":153,"v1":154,"vis":true,"color":"ff4b44","bCoef":0.1,"trait":"line"},{"v0":154,"v1":155,"vis":true,"color":"ff4b44","bCoef":0.1,"trait":"line"},{"v0":155,"v1":156,"vis":true,"color":"ff4b44","bCoef":0.1,"trait":"line"},{"v0":156,"v1":157,"vis":true,"color":"ff4b44","bCoef":0.1,"trait":"line"},{"v0":157,"v1":158,"vis":true,"color":"ff4b44","bCoef":0.1,"trait":"line"},{"v0":158,"v1":159,"vis":true,"color":"ff4b44","bCoef":0.1,"trait":"line"},{"v0":159,"v1":160,"vis":true,"color":"ff4b44","bCoef":0.1,"trait":"line"},{"v0":160,"v1":161,"vis":true,"color":"ff4b44","bCoef":0.1,"trait":"line"},{"v0":161,"v1":162,"vis":true,"color":"ff4b44","bCoef":0.1,"trait":"line"},{"v0":162,"v1":163,"vis":true,"color":"ff4b44","bCoef":0.1,"trait":"line"},{"v0":163,"v1":164,"vis":true,"color":"ff4b44","bCoef":0.1,"trait":"line"},{"v0":164,"v1":165,"vis":true,"color":"ff4b44","bCoef":0.1,"trait":"line"},{"v0":165,"v1":166,"vis":true,"color":"ff4b44","bCoef":0.1,"trait":"line"},{"v0":166,"v1":167,"vis":true,"color":"ff4b44","bCoef":0.1,"trait":"line"},{"v0":167,"v1":168,"vis":true,"color":"ff4b44","bCoef":0.1,"trait":"line"},{"v0":167,"v1":169,"color":"ff4b44","bCoef":0.1,"trait":"line"},{"v0":169,"v1":170,"vis":true,"color":"ff4b44","bCoef":0.1,"trait":"line"},{"v0":170,"v1":171,"vis":true,"color":"ff4b44","bCoef":0.1,"trait":"line"},{"v0":171,"v1":172,"vis":true,"color":"ff4b44","bCoef":0.1,"trait":"line"},{"v0":172,"v1":173,"vis":true,"color":"ff4b44","bCoef":0.1,"trait":"line"},{"v0":173,"v1":174,"vis":true,"color":"ff4b44","bCoef":0.1,"trait":"line"},{"v0":174,"v1":175,"vis":true,"color":"ff4b44","bCoef":0.1,"trait":"line"},{"v0":175,"v1":176,"vis":true,"color":"ff4b44","bCoef":0.1,"trait":"line"},{"v0":176,"v1":177,"vis":true,"color":"ff4b44","bCoef":0.1,"trait":"line"},{"v0":177,"v1":178,"vis":true,"color":"ff4b44","bCoef":0.1,"trait":"line"},{"v0":178,"v1":179,"vis":true,"color":"ff4b44","bCoef":0.1,"trait":"line"},{"v0":132,"v1":180,"color":"ff4b44","bCoef":0.1,"trait":"line"},{"v0":180,"v1":181,"vis":true,"color":"ff4b44","bCoef":0.1,"trait":"line"},{"v0":181,"v1":182,"vis":true,"color":"ff4b44","bCoef":0.1,"trait":"line"},{"v0":182,"v1":183,"vis":true,"color":"ff4b44","bCoef":0.1,"trait":"line"},{"v0":183,"v1":184,"vis":true,"color":"ff4b44","bCoef":0.1,"trait":"line"},{"v0":184,"v1":185,"vis":true,"color":"ff4b44","bCoef":0.1,"trait":"line"},{"v0":185,"v1":186,"vis":true,"color":"ff4b44","bCoef":0.1,"trait":"line"},{"v0":186,"v1":187,"vis":true,"color":"ff4b44","bCoef":0.1,"trait":"line"},{"v0":187,"v1":188,"vis":true,"color":"ff4b44","bCoef":0.1,"trait":"line"},{"v0":188,"v1":189,"vis":true,"color":"ff4b44","bCoef":0.1,"trait":"line"},{"v0":189,"v1":190,"vis":true,"color":"ff4b44","bCoef":0.1,"trait":"line"},{"v0":190,"v1":191,"vis":true,"color":"ff4b44","bCoef":0.1,"trait":"line"},{"v0":192,"v1":193,"vis":true,"color":"ff4b44","bCoef":0.1,"trait":"line"},{"v0":193,"v1":194,"vis":true,"color":"ff4b44","bCoef":0.1,"trait":"line"},{"v0":194,"v1":195,"vis":true,"color":"ff4b44","bCoef":0.1,"trait":"line"},{"v0":195,"v1":196,"vis":true,"color":"ff4b44","bCoef":0.1,"trait":"line"},{"v0":196,"v1":197,"vis":true,"color":"ff4b44","bCoef":0.1,"trait":"line"},{"v0":197,"v1":198,"vis":true,"color":"ff4b44","bCoef":0.1,"trait":"line"},{"v0":198,"v1":199,"vis":true,"color":"ff4b44","bCoef":0.1,"trait":"line"},{"v0":199,"v1":200,"vis":true,"color":"ff4b44","bCoef":0.1,"trait":"line"},{"v0":191,"v1":201,"vis":true,"color":"ff4b44","bCoef":0.1,"trait":"line"},{"v0":131,"v1":202,"vis":true,"color":"ff4b44","bCoef":0.1,"trait":"line"},{"v0":88,"v1":203,"vis":true,"color":"ff4b44","bCoef":0.1,"trait":"line"}],"goals":[{"p0":[-376.95,-62.053454903872],"p1":[-376.95,64.043361696331],"team":"red"},{"p0":[376.95,62],"p1":[376.95,-62],"team":"blue"}],"discs":[{"radius":6.4,"invMass":1.5,"pos":[0,0],"color":"ffbf00","bCoef":0.4,"cGroup":["ball","kick","score"],"damping":0.99},{"radius":1.0e-10,"invMass":1.0e+300,"pos":[-5,-1],"color":"0","cMask":[],"cGroup":[]},{"radius":1.0e-10,"invMass":1.0e+300,"pos":[5,-1],"color":"0","cMask":[],"cGroup":[]},{"radius":1.0e-10,"invMass":1.0e+300,"pos":[0,-5],"color":"0","cMask":[],"cGroup":[]},{"radius":1.0e-10,"invMass":1.0e+300,"pos":[-3,4],"color":"0","cMask":[],"cGroup":[]},{"radius":1.0e-10,"invMass":1.0e+300,"pos":[3,4],"color":"0","cMask":[],"cGroup":[]},{"radius":1.0e-10,"invMass":1.0e+300,"pos":[0,0],"color":"0","cMask":[],"cGroup":[]},{"radius":3.9405255187564,"pos":[-368,64],"color":"ff4b44","trait":"goalPost","y":64,"x":-368},{"radius":3.9405255187564,"pos":[-368,-64],"color":"ff4b44","trait":"goalPost","y":-64,"x":-368},{"radius":3.9405255187564,"pos":[368,-64],"color":"ff4b44","trait":"goalPost","y":-64,"x":368},{"radius":3.9405255187564,"pos":[368,64],"color":"ff4b44","trait":"goalPost","y":64,"x":368},{"radius":3,"invMass":0,"pos":[-368,-171],"color":"ff4b44","bCoef":0.1,"trait":"line"},{"radius":3,"invMass":0,"pos":[-368,171],"color":"ff4b44","bCoef":0.1,"trait":"line"},{"radius":3,"invMass":0,"pos":[368,171],"color":"ff4b44","bCoef":0.1,"trait":"line"},{"radius":3,"invMass":0,"pos":[368,-171],"color":"ff4b44","bCoef":0.1,"trait":"line"}],"planes":[{"normal":[0,1],"dist":-171,"trait":"ballArea"},{"normal":[0,-1],"dist":-171,"trait":"ballArea"},{"normal":[0,1],"dist":-230,"bCoef":0.2,"cMask":["all"]},{"normal":[0,-1],"dist":-230,"bCoef":0.2,"cMask":["all"]},{"normal":[1,0],"dist":-420,"bCoef":0.2,"cMask":["all"]},{"normal":[-1,0],"dist":-420,"bCoef":0.2,"cMask":["all"]}],"traits":{"ballArea":{"vis":false,"bCoef":1,"cMask":["ball"]},"goalPost":{"radius":8,"invMass":0,"bCoef":1},"goalNet":{"vis":true,"bCoef":0.1,"cMask":["all"]},"kickOffBarrier":{"vis":false,"bCoef":0.1,"cGroup":["redKO","blueKO"],"cMask":["red","blue"]},"line":{"vis":true,"bCoef":0,"cMask":[""]},"arco":{"radius":2,"cMask":["n\/d"],"color":"cccccc"}},"playerPhysics":{"acceleration":0.11,"kickingAcceleration":0.083,"kickStrength":5,"bCoef":0},"ballPhysics":"disc0","joints":[{"d0":0,"d1":1,"length":5.0990195135927845,"color":"transparent"},{"d0":0,"d1":2,"length":5.0990195135927845,"color":"transparent"},{"d0":0,"d1":3,"length":5,"color":"transparent"},{"d0":0,"d1":4,"length":5,"color":"transparent"},{"d0":0,"d1":5,"length":5,"color":"transparent"},{"d0":0,"d1":6,"length":0,"color":"transparent"},{"d0":1,"d1":2,"length":10,"color":"transparent"},{"d0":1,"d1":3,"length":6.4031242374328485,"color":"transparent"},{"d0":1,"d1":4,"length":5.385164807134504,"color":"transparent"},{"d0":1,"d1":5,"length":9.433981132056603,"color":"transparent"},{"d0":1,"d1":6,"length":5.0990195135927845,"color":"transparent"},{"d0":2,"d1":3,"length":6.4031242374328485,"color":"transparent"},{"d0":2,"d1":4,"length":9.433981132056603,"color":"transparent"},{"d0":2,"d1":5,"length":5.385164807134504,"color":"transparent"},{"d0":2,"d1":6,"length":5.0990195135927845,"color":"transparent"},{"d0":3,"d1":4,"length":9.486832980505138,"color":"transparent"},{"d0":3,"d1":5,"length":9.486832980505138,"color":"transparent"},{"d0":3,"d1":6,"length":5,"color":"transparent"},{"d0":4,"d1":5,"length":6,"color":"transparent"},{"d0":4,"d1":6,"length":5,"color":"transparent"},{"d0":5,"d1":6,"length":5,"color":"transparent"}],"canBeStored":true};

const MAP_SCALE = 1.75; 

function loadScaledCustomMap() {
    let map = JSON.parse(JSON.stringify(rawHbsData));
    map.width *= MAP_SCALE; map.height *= MAP_SCALE;
    if (map.vertexes) map.vertexes.forEach(v => { if (v.x !== undefined) v.x *= MAP_SCALE; if (v.y !== undefined) v.y *= MAP_SCALE; });
    if (map.discs) map.discs.forEach(d => { if (d.pos) { d.pos[0] *= MAP_SCALE; d.pos[1] *= MAP_SCALE; } if (d.radius && d.trait !== "ballArea") { d.radius *= MAP_SCALE; } });
    if (map.goals) map.goals.forEach(g => { g.p0[0] *= MAP_SCALE; g.p0[1] *= MAP_SCALE; g.p1[0] *= MAP_SCALE; g.p1[1] *= MAP_SCALE; });
    return map;
}

let customMapData = loadScaledCustomMap();

const CONSTANTS = { frictionPlayer: 0.975, frictionBall: 0.997, playerAccel: 0.045, maxSpeed: 0.85, kickForce: 3.7, kickRadius: 22, restitution: 0.40, centerCircleRadius: 110 };
const L_WIDTH = 1600; const L_HEIGHT = 900;
let STADIUM_BOUNDS = { left: 0, right: L_WIDTH, top: 0, bottom: L_HEIGHT };
let FIELD_BOUNDS = { left: 0, right: L_WIDTH, top: 0, bottom: L_HEIGHT };
let GOAL_BACK_BOUNDS = { left: 0, right: L_WIDTH };
let GOAL_BOUNDS = { top: 0, bottom: L_HEIGHT };

// === OYUNCU VE ODA STATE YÖNETİMİ ===
let players = [
    { id: 1, name: "oyuncu", team: "spectator", isKicked: false, goals: 0, avatar: '7' }
];
let localPlayerId = 1; 

let score = { red: 0, blue: 0 };
let gameTime = 0; 
let targetScore = 3;
let targetTimeSeconds = 180;

let isKicking = false; let isPassing = false; 
let isGameActive = false; let isPaused = false; 
let isGoldenGoal = false; let isGoalScored = false; 
let isLocked = false;
let isAdmin = false; 
let kickoffState = { active: false, concedingTeam: null };
let announcementTimeout;

let isChatFocused = false;
const chatInput = document.getElementById('chat-input');
const chatWrapper = document.getElementById('chat-input-wrapper');
const chatMessages = document.getElementById('chat-messages');

let zoomLevel = 1;
const ZOOM_LEVELS = { 1: 1, 2: 1.25, 3: 1.5, 4: 1.75 };
const keys = { w: false, a: false, s: false, d: false, space: false, f: false };

const menuBtn = document.getElementById('menu-btn');
const setupMenu = document.getElementById('setup-menu');
const lockBtn = document.getElementById('lock-btn');
const startStopBtn = document.getElementById('start-stop-btn');
const contextMenu = document.getElementById('context-menu');
let targetedPlayerId = null;

function resizeCanvas() { canvas.width = window.innerWidth; canvas.height = window.innerHeight; }
window.addEventListener('resize', resizeCanvas); resizeCanvas();

function applyRoleUI() {
    const adminOnlyBtns = document.querySelectorAll('.admin-only-btn');
    const adminOnlySections = document.querySelectorAll('.admin-only-section');
    const adminBadge = document.getElementById('admin-badge');

    const btnRed  = document.querySelector('.col-header.bg-red');
    const btnGray = document.querySelector('.col-header.bg-gray');
    const btnBlue = document.querySelector('.col-header.bg-blue');

    // Eski listener'ları temizle (clone trick)
    function reclone(el) {
        if (!el) return el;
        const clone = el.cloneNode(true);
        el.parentNode.replaceChild(clone, el);
        return clone;
    }
    const freshRed  = reclone(btnRed);
    const freshGray = reclone(btnGray);
    const freshBlue = reclone(btnBlue);

    if (isAdmin) {
        adminOnlyBtns.forEach(el => el.classList.remove('disabled-for-player'));
        adminOnlySections.forEach(el => el.classList.remove('disabled-for-player'));
        adminBadge.style.display = 'block';
        // Admin için takum butonlarına tıklama ekle
        if (freshRed)  freshRed.addEventListener('click',  () => joinTeam('red'));
        if (freshGray) freshGray.addEventListener('click', () => joinTeam('spectator'));
        if (freshBlue) freshBlue.addEventListener('click', () => joinTeam('blue'));
        [freshRed, freshGray, freshBlue].forEach(el => { if(el) { el.style.cursor = 'pointer'; el.style.opacity = '1'; el.style.pointerEvents = 'auto'; } });
    } else {
        adminOnlyBtns.forEach(el => el.classList.add('disabled-for-player'));
        adminOnlySections.forEach(el => el.classList.add('disabled-for-player'));
        adminBadge.style.display = 'none';
        // Yetkisiz için takum butonları tamamen pasif
        [freshRed, freshGray, freshBlue].forEach(el => {
            if (!el) return;
            el.style.cursor = 'default';
            el.style.opacity = '0.6';
            el.style.pointerEvents = 'none';
        });
    }
}

function handleAuthLogin() {
    const pwd = document.getElementById('auth-password').value;
    const errEl = document.getElementById('auth-error');
    if (pwd === 'esatmete1954') {
        isAdmin = true;
        document.getElementById('auth-modal').classList.add('hidden');
        showNicknameModal();
    } else {
        errEl.textContent = 'Yanlış şifre! Tekrar dene veya geç.';
        document.getElementById('auth-password').value = '';
        document.getElementById('auth-password').focus();
        setTimeout(() => { errEl.textContent = ''; }, 3000);
    }
}

function handleAuthSkip() {
    isAdmin = false;
    document.getElementById('auth-modal').classList.add('hidden');
    showNicknameModal();
}

function showNicknameModal() {
    const modal = document.getElementById('nickname-modal');
    modal.style.display = 'flex';
    modal.classList.remove('hidden');
    setTimeout(() => document.getElementById('nickname-input').focus(), 100);
}

function handleNicknameSubmit() {
    const input = document.getElementById('nickname-input');
    const errEl = document.getElementById('nickname-error');
    const nick = input.value.trim();

    if (nick.length < 2) {
        errEl.textContent = 'Nickname en az 2 karakter olmalı!';
        input.focus();
        setTimeout(() => { errEl.textContent = ''; }, 3000);
        return;
    }

    let p = players.find(x => x.id === localPlayerId);
    if (p) p.name = nick;

    document.getElementById('nickname-modal').style.display = 'none';
    applyRoleUI();
    updateLobbyUI();

    if (isAdmin) { addChatMessage('Sistem', `Admin olarak katıldın: ${nick}`, '#f1c40f'); } 
    else { addChatMessage('Sistem', `Odaya katıldın: ${nick}`, '#8b949e'); }
}

document.addEventListener('DOMContentLoaded', () => {
    const nicknameInput = document.getElementById('nickname-input');
    if (nicknameInput) {
        nicknameInput.addEventListener('keydown', function(e) { if (e.key === 'Enter') handleNicknameSubmit(); });
    }
});

document.getElementById('auth-password').addEventListener('keydown', function(e) {
    if (e.key === 'Enter') handleAuthLogin();
});

function updateLobbyUI() {
    const listRed = document.getElementById('list-red');
    const listBlue = document.getElementById('list-blue');
    const listSpec = document.getElementById('list-spectators');
    
    listRed.innerHTML = ""; listBlue.innerHTML = ""; listSpec.innerHTML = "";
    
    players.forEach(p => {
        if(p.isKicked) return;
        let li = document.createElement('li');
        li.innerText = p.name + (p.goals > 0 ? ` ( ${p.goals})` : '');
        li.dataset.playerId = p.id;
        li.oncontextmenu = (e) => openContextMenu(e, p.id);
        
        // Admin ise drag özelliği ekle
        if (isAdmin) {
            li.draggable = true;
            li.style.cursor = 'grab';
            li.addEventListener('dragstart', (e) => {
                e.dataTransfer.setData('text/plain', p.id);
                li.style.opacity = '0.5';
            });
            li.addEventListener('dragend', () => {
                li.style.opacity = '1';
            });
        }
        
        if (p.team === 'red') listRed.appendChild(li);
        else if (p.team === 'blue') listBlue.appendChild(li);
        else listSpec.appendChild(li);
    });

    lockBtn.innerText = isLocked ? " Locked" : " Lock";
    lockBtn.className = isLocked ? "sidebar-btn locked" : "sidebar-btn";

    // Drop zone'ları aktifleştir (her updateLobbyUI'da yeniden bağla)
    setupDropZones();
}

function setupDropZones() {
    if (!isAdmin) return;
    const zones = [
        { el: document.getElementById('list-red'), team: 'red' },
        { el: document.getElementById('list-spectators'), team: 'spectator' },
        { el: document.getElementById('list-blue'), team: 'blue' },
    ];
    // col-header butonları da drop kabul etsin
    const colHeaders = [
        { el: document.querySelector('.col-header.bg-red'), team: 'red' },
        { el: document.querySelector('.col-header.bg-gray'), team: 'spectator' },
        { el: document.querySelector('.col-header.bg-blue'), team: 'blue' },
    ];
    const allZones = [...zones, ...colHeaders];

    allZones.forEach(({ el, team }) => {
        if (!el) return;
        el.ondragover = (e) => { e.preventDefault(); el.style.outline = '2px dashed #58a6ff'; };
        el.ondragleave = () => { el.style.outline = ''; };
        el.ondrop = (e) => {
            e.preventDefault();
            el.style.outline = '';
            const pid = parseInt(e.dataTransfer.getData('text/plain'));
            const p = players.find(x => x.id === pid);
            if (p) {
                const oldTeam = p.team;
                p.team = team;
                // Oyun aktifse entity oluştur/güncelle
                if (isGameActive) {
                    if (team === 'spectator') {
                        delete playerEntities[pid];
                        if (pid === localPlayerId) { player.x = L_WIDTH/2; player.y = L_HEIGHT/2; player.vx = 0; player.vy = 0; }
                    } else {
                        let color = team === 'red' ? '#f2504b' : '#5784f2';
                        if (!playerEntities[pid]) playerEntities[pid] = new CircleEntity(L_WIDTH/2, L_HEIGHT/2, 22, 2, color, false);
                        else playerEntities[pid].color = color;
                        if (pid === localPlayerId) { player.color = color; }
                    }
                }
                updateLobbyUI();
                addChatMessage('Sistem', `${p.name} → ${team === 'red' ? 'Kırmızı' : team === 'blue' ? 'Mavi' : 'Spectators'} takımına taşındı.`, '#f1c40f');
            }
        };
    });
}

updateLobbyUI(); 

menuBtn.addEventListener('click', () => { 
    setupMenu.classList.add('visible'); 
    isPaused = true; 
    startStopBtn.innerText = isGameActive ? "⏹ Stop game" : "▶ Start game";
    startStopBtn.className = isGameActive ? "start-game-btn stop" : "start-game-btn";
});

function copyRoomLink() { navigator.clipboard.writeText(window.location.href); addChatMessage("Sistem", "Oda linki kopyalandı!", "lightgreen"); }

function autoAssignTeams() {
    if (!isAdmin) { addChatMessage("Sistem", "Bu işlem için admin yetkisi gerekli.", "#f85149"); return; }
    let specs = players.filter(p => p.team === 'spectator' && !p.isKicked);
    let switchFlag = true;
    specs.forEach(p => { p.team = switchFlag ? 'red' : 'blue'; switchFlag = !switchFlag; });
    updateLobbyUI();
    addChatMessage("Sistem", "Oyuncular otomatik olarak takımlara dağıtıldı.", "yellow");
}

function toggleRoomLock() {
    if (!isAdmin) { addChatMessage("Sistem", "Bu işlem için admin yetkisi gerekli.", "#f85149"); return; }
    isLocked = !isLocked; updateLobbyUI();
    addChatMessage("Sistem", isLocked ? "Oda KİLİTLENDİ." : "Oda kilidi AÇILDI.", "yellow");
}

function joinTeam(teamName) {
    if (!isAdmin) { addChatMessage("Sistem", "Takım seçimi sadece admin tarafından yapılabilir.", "#f85149"); return; }
    let p = players.find(x => x.id === localPlayerId);
    if (p.isKicked) { alert("Bu odadan atıldın, takıma katılamazsın!"); return; }
    if (isLocked && p.team !== teamName) { alert("Oda kilitli! Takım değiştiremezsin."); return; }
    
    if (isGameActive && p.team === 'spectator' && teamName !== 'spectator') {
        // Entity oluştur ve resetPositions halleder
        let color = teamName === 'red' ? '#f2504b' : '#5784f2';
        if (!playerEntities[localPlayerId]) {
            playerEntities[localPlayerId] = new CircleEntity(L_WIDTH/2, L_HEIGHT/2, 22, 2, color, false);
        }
    }

    p.team = teamName;
    if(teamName === 'red') player.color = '#f2504b'; else if(teamName === 'blue') player.color = '#5784f2';
    updateLobbyUI();
}

function toggleGameState() {
    if (!isAdmin) { addChatMessage("Sistem", "Oyunu sadece admin başlatabilir/durdurabilir.", "#f85149"); return; }
    if (isGameActive) {
        isGameActive = false; setupMenu.classList.remove('visible'); isPaused = false;
        addChatMessage("Sistem", "Oyun admin tarafından durduruldu.", "red");
        score = { red: 0, blue: 0 }; gameTime = 0; updateHeaderUI();
    } else {
        targetScore = parseInt(document.getElementById('input-score').value) || 3;
        targetTimeSeconds = (parseInt(document.getElementById('input-time').value) || 3) * 60;
        document.activeElement.blur(); 
        setupMenu.classList.remove('visible'); isPaused = false;
        
        score = { red: 0, blue: 0 }; gameTime = 0; kickoffState = { active: true, concedingTeam: 'red' }; zoomLevel = 1; 
        isGoldenGoal = false; isPaused = false; document.getElementById('timer-display').style.color = '#ddd'; 
        
        players.forEach(p => p.goals = 0); updateLobbyUI();

        // Tüm entity'leri sıfırla ve yeniden oluştur
        playerEntities = {};
        players.forEach(p => {
            if (p.isKicked || p.team === 'spectator') return;
            let color = p.team === 'red' ? '#f2504b' : '#5784f2';
            playerEntities[p.id] = new CircleEntity(0, 0, 22, 2, color, false);
        });
        // Local player entity'yi de güncelle
        let locP = players.find(x => x.id === localPlayerId);
        if (locP && locP.team !== 'spectator') {
            player.color = locP.team === 'red' ? '#f2504b' : '#5784f2';
        }

        posts = [];
        if (customMapData.discs) {
            for (let i = 1; i < customMapData.discs.length; i++) {
                let disc = customMapData.discs[i];
                if (!disc || disc.radius < 2 || disc.color === 'transparent') continue;
                let color = disc.color ? '#' + disc.color : '#ffffff';
                let px = (L_WIDTH / 2) + (disc.pos ? disc.pos[0] : 0);
                let py = (L_HEIGHT / 2) + (disc.pos ? disc.pos[1] : 0);
                posts.push(new CircleEntity(px, py, disc.radius || 10, 0, color));
            }
        }

        let stadiumW = 420 * MAP_SCALE; let stadiumH = 230 * MAP_SCALE;
        STADIUM_BOUNDS.left = (L_WIDTH / 2) - stadiumW; STADIUM_BOUNDS.right = (L_WIDTH / 2) + stadiumW;
        STADIUM_BOUNDS.top = (L_HEIGHT / 2) - stadiumH; STADIUM_BOUNDS.bottom = (L_HEIGHT / 2) + stadiumH;

        let fieldW = 368 * MAP_SCALE; let fieldH = 171 * MAP_SCALE;
        FIELD_BOUNDS.left = (L_WIDTH / 2) - fieldW; FIELD_BOUNDS.right = (L_WIDTH / 2) + fieldW;
        FIELD_BOUNDS.top = (L_HEIGHT / 2) - fieldH; FIELD_BOUNDS.bottom = (L_HEIGHT / 2) + fieldH;

        let goalBackW = 400 * MAP_SCALE;
        GOAL_BACK_BOUNDS.left = (L_WIDTH / 2) - goalBackW; GOAL_BACK_BOUNDS.right = (L_WIDTH / 2) + goalBackW;

        if (customMapData.goals && customMapData.goals.length >= 2) {
            let g1 = customMapData.goals[0]; let g2 = customMapData.goals[1];
            GOAL_BOUNDS.top = (L_HEIGHT / 2) + Math.min(g1.p0[1], g1.p1[1]);
            GOAL_BOUNDS.bottom = (L_HEIGHT / 2) + Math.max(g1.p0[1], g1.p1[1]);
        }

        ball.radius = 10; ball.color = '#ffed4f'; ball.lastTouchId = null;
        resetPositions(); addChatMessage("Sistem", "Oyun başladı!", "lightgreen");
        isGameActive = true;
    }
}

function openContextMenu(e, id) { e.preventDefault(); targetedPlayerId = id; contextMenu.style.top = e.clientY + 'px'; contextMenu.style.left = e.clientX + 'px'; contextMenu.classList.add('visible'); }
window.addEventListener('click', () => { contextMenu.classList.remove('visible'); });
setupMenu.addEventListener('click', (e) => { if (e.target === setupMenu) { setupMenu.classList.remove('visible'); if (isGameActive) isPaused = false; } });

function kickSelectedPlayer() {
    if (!isAdmin) { addChatMessage("Sistem", "Bu işlem için admin yetkisi gerekli.", "#f85149"); return; }
    let p = players.find(x => x.id === targetedPlayerId);
    if (p) { p.isKicked = true; p.team = 'spectator'; updateLobbyUI(); addChatMessage("Sistem", `${p.name} odadan atıldı (Kick).`, "red"); }
}

// TAB & KEY KONTROLLERİ
window.addEventListener('keydown', (e) => {
    if (e.key === 'Tab') {
        e.preventDefault();
        if (!isChatFocused) {
            setupMenu.classList.add('visible');
            isPaused = true;
            startStopBtn.innerText = isGameActive ? "⏹ Stop game" : "▶ Start game";
            startStopBtn.className = isGameActive ? "start-game-btn stop" : "start-game-btn";
        }
        return;
    }

    if (isChatFocused) {
        if (e.key === 'Enter') handleChatSubmit();
        if (e.key === 'Escape') closeChat();
        return; 
    }
    if (e.key === ' ' || e.code === 'Space') e.preventDefault(); 
    if (e.key === 'Enter') { openChat(); e.preventDefault(); return; }
    if (e.key === 'Escape') { setupMenu.classList.add('visible'); isPaused = true; return; }
    
    let k = e.key.toLowerCase();
    
    if (k === 'p') {
        if (isGameActive && !isGoalScored) {
            isPaused = !isPaused;
            addChatMessage("Sistem", isPaused ? "Oyun Duraklatıldı." : "Oyun Devam Ediyor.", isPaused ? "yellow" : "lightgreen");
        }
        return;
    }
    if (ZOOM_LEVELS[e.key]) { zoomLevel = ZOOM_LEVELS[e.key]; return; }

    if (!isGameActive || isPaused) return; 

    if(k === 'w' || e.key === 'ArrowUp') keys.w = true;
    if(k === 'a' || e.key === 'ArrowLeft') keys.a = true;
    if(k === 's' || e.key === 'ArrowDown') keys.s = true;
    if(k === 'd' || e.key === 'ArrowRight') keys.d = true;
    
    if((k === ' ' || k === 'x' || k === '0' || e.code === 'Numpad0') && !keys.space) { keys.space = true; isKicking = true; }
    if((k === 'f') && !keys.f) { keys.f = true; isPassing = true; }
});

window.addEventListener('keyup', (e) => {
    if (e.key === 'Tab') {
        e.preventDefault();
        if (!isChatFocused) {
            setupMenu.classList.remove('visible');
            if (isGameActive) isPaused = false;
        }
        return;
    }

    if (isChatFocused) return;
    let k = e.key.toLowerCase();
    if(k === 'w' || e.key === 'ArrowUp') keys.w = false;
    if(k === 'a' || e.key === 'ArrowLeft') keys.a = false;
    if(k === 's' || e.key === 'ArrowDown') keys.s = false;
    if(k === 'd' || e.key === 'ArrowRight') keys.d = false;
    if(k === ' ' || k === 'x' || k === '0' || e.code === 'Numpad0') keys.space = false;
    if(k === 'f') keys.f = false; 
});

function openChat() { isChatFocused = true; chatWrapper.classList.add('visible'); chatInput.focus(); keys.w = false; keys.a = false; keys.s = false; keys.d = false; keys.space = false; keys.f = false; }
function closeChat() { isChatFocused = false; chatWrapper.classList.remove('visible'); chatInput.blur(); chatInput.value = ''; }

function addChatMessage(sender, text, color) {
    const msg = document.createElement("div"); msg.className = "chat-msg";
    msg.innerHTML = "<span style=\"color:" + (color || "white") + "\">" + sender + ":</span> " + text;
    chatMessages.appendChild(msg); chatMessages.scrollTop = chatMessages.scrollHeight;
    setTimeout(function() { if (msg.parentNode) msg.parentNode.removeChild(msg); }, 8000);
}

function handleChatSubmit() {
    const text = chatInput.value.trim();
    if (text !== '') {
        let p = players.find(x => x.id === localPlayerId);

        // --- AVATAR KOMUTU KONTROLÜ ---
        if (text.startsWith('/avatar')) {
            let parts = text.split(' ');
            if (parts.length > 1) {
                let val = parts[1];
                if (/^\d{1,2}$/.test(val)) {
                    p.avatar = val;
                    addChatMessage("Sistem", `Avatarın '${val}' olarak güncellendi.`, "lightgreen");
                } else {
                    addChatMessage("Sistem", "Geçersiz avatar! Sadece 1 veya 2 haneli rakam girin.", "#f85149");
                }
            } else {
                addChatMessage("Sistem", "Kullanım: /avatar <numara>", "#f85149");
            }
            closeChat();
            return;
        }

        let color = p.team === 'red' ? '#f2504b' : (p.team === 'blue' ? '#5784f2' : 'gray');
        addChatMessage(p.name, text, color);
    }
    closeChat();
}

function restrictKickoff(entity, teamName) {
    if (!kickoffState.active || entity.isBall) return;
    const midX = L_WIDTH / 2; const midY = L_HEIGHT / 2;
    let isDefending = (kickoffState.concedingTeam !== teamName);

    if (isDefending) {
        if (teamName === 'blue') { if (entity.x - entity.radius < midX) { entity.x = midX + entity.radius; if (entity.vx < 0) entity.vx = 0; } } 
        else if (teamName === 'red') { if (entity.x + entity.radius > midX) { entity.x = midX - entity.radius; if (entity.vx > 0) entity.vx = 0; } }

        let dx = entity.x - midX; let dy = entity.y - midY; let dist = Math.sqrt(dx * dx + dy * dy); let minDist = CONSTANTS.centerCircleRadius + entity.radius;

        if (dist < minDist) {
            if (dist === 0) { dx = (teamName === 'blue' ? 1 : -1); dy = 0; dist = 1; }
            let nx = dx / dist; let ny = dy / dist;
            entity.x = midX + nx * minDist; entity.y = midY + ny * minDist;
            let dotProduct = entity.vx * nx + entity.vy * ny;
            if (dotProduct < 0) { entity.vx -= dotProduct * nx; entity.vy -= dotProduct * ny; }
        }
    } else {
        let dx = entity.x - midX; let dy = entity.y - midY; let dist = Math.sqrt(dx * dx + dy * dy);
        if (dist >= CONSTANTS.centerCircleRadius) {
            if (teamName === 'red') { if (entity.x + entity.radius > midX) { entity.x = midX - entity.radius; if (entity.vx > 0) entity.vx = 0; } } 
            else if (teamName === 'blue') { if (entity.x - entity.radius < midX) { entity.x = midX + entity.radius; if (entity.vx < 0) entity.vx = 0; } }
        }
    }
}

class CircleEntity {
    constructor(x, y, radius, mass, color, isBall = false) {
        this.x = x; this.y = y; this.vx = 0; this.vy = 0;
        this.radius = radius; this.mass = mass; this.color = color;
        this.isBall = isBall; this.invMass = mass === 0 ? 0 : 1 / mass;
        this.lastTouchId = null;
    }
    update() {
        if (this.mass === 0) return;
        this.x += this.vx; this.y += this.vy;
        const friction = this.isBall ? CONSTANTS.frictionBall : CONSTANTS.frictionPlayer;
        this.vx *= friction; this.vy *= friction;
        if (Math.abs(this.vx) < 0.001) this.vx = 0;
        if (Math.abs(this.vy) < 0.001) this.vy = 0;
    }
    draw(ctx) {
        ctx.beginPath(); ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        ctx.fillStyle = this.color; ctx.fill();
        ctx.lineWidth = 3; ctx.strokeStyle = '#000'; ctx.stroke();
    }
}

// Tüm oyuncu karakterleri için map: playerId -> CircleEntity
let playerEntities = {};
// Local oyuncunun karakterine kısa erişim (geriye dönük uyumluluk)
let player = new CircleEntity(0, 0, 22, 2, '#f2504b', false);
const ball = new CircleEntity(0, 0, 13, 1, '#ffed4f', true); 
let posts = [];

// Oyuncuya ait entity'yi al veya oluştur
function getOrCreateEntity(p) {
    if (!playerEntities[p.id]) {
        let color = p.team === 'red' ? '#f2504b' : (p.team === 'blue' ? '#5784f2' : '#888888');
        playerEntities[p.id] = new CircleEntity(0, 0, 22, 2, color, false);
    }
    return playerEntities[p.id];
}

// Takım dizilişi için spawn pozisyonları (iç içe girmeden)
function getSpawnPositions(team, count) {
    const positions = [];
    const midX = L_WIDTH / 2;
    const midY = L_HEIGHT / 2;
    // Takımlara göre X tarafı
    const side = team === 'red' ? -1 : 1;
    // Saha genişliğinin %25-%45 arasında dağıt
    const fieldHalfW = (FIELD_BOUNDS.right - FIELD_BOUNDS.left) / 2;
    const fieldHalfH = (FIELD_BOUNDS.bottom - FIELD_BOUNDS.top) / 2;

    // Diziliş şablonları (kişi sayısına göre)
    const layouts = {
        1: [[0.35, 0]],
        2: [[0.35, -0.3], [0.35, 0.3]],
        3: [[0.42, 0], [0.28, -0.35], [0.28, 0.35]],
        4: [[0.42, 0], [0.28, -0.4], [0.28, 0.4], [0.36, 0]],
        5: [[0.42, 0], [0.28, -0.45], [0.28, 0.45], [0.38, -0.25], [0.38, 0.25]],
        6: [[0.44, 0], [0.32, -0.45], [0.32, 0.45], [0.22, -0.25], [0.22, 0.25], [0.22, 0]],
        7: [[0.44, 0], [0.33, -0.5], [0.33, 0.5], [0.24, -0.3], [0.24, 0.3], [0.24, 0], [0.44, 0.0]],
        8: [[0.44, 0], [0.33, -0.5], [0.33, 0.5], [0.24, -0.35], [0.24, 0.35], [0.24, 0], [0.35, -0.2], [0.35, 0.2]],
    };

    const safeCount = Math.min(count, 8);
    const layout = layouts[safeCount] || layouts[8];

    layout.forEach(([xRatio, yRatio]) => {
        const px = midX + side * fieldHalfW * xRatio;
        const py = midY + fieldHalfH * yRatio;
        positions.push({ x: px, y: py });
    });
    return positions;
}

function resolveCollision(c1, c2) {
    const dx = c2.x - c1.x; const dy = c2.y - c1.y;
    const distance = Math.sqrt(dx * dx + dy * dy);
    const minDist = c1.radius + c2.radius;

    if (distance < minDist && distance > 0) {
        if ((c1 === player && c2 === ball) || (c1 === ball && c2 === player)) { ball.lastTouchId = localPlayerId; }

        if (kickoffState.active) {
            if ((c1 === player && c2 === ball) || (c1 === ball && c2 === player)) {
                let locPlayer = players.find(p => p.id === localPlayerId);
                if (locPlayer && locPlayer.team === kickoffState.concedingTeam) { kickoffState.active = false; }
            }
        }
        
        const overlap = minDist - distance; const nx = dx / distance; const ny = dy / distance; const totalInvMass = c1.invMass + c2.invMass;
        if (totalInvMass === 0) return; 

        c1.x -= nx * overlap * (c1.invMass / totalInvMass); c1.y -= ny * overlap * (c1.invMass / totalInvMass);
        c2.x += nx * overlap * (c2.invMass / totalInvMass); c2.y += ny * overlap * (c2.invMass / totalInvMass);

        const rvx = c2.vx - c1.vx; const rvy = c2.vy - c1.vy; const velAlongNormal = rvx * nx + rvy * ny;
        if (velAlongNormal > 0) return;
        const j = -(1 + CONSTANTS.restitution) * velAlongNormal / totalInvMass;
        const impulseX = nx * j; const impulseY = ny * j;

        c1.vx -= impulseX * c1.invMass; c1.vy -= impulseY * c1.invMass;
        c2.vx += impulseX * c2.invMass; c2.vy += impulseY * c2.invMass;
    }
}

function checkWallCollisions(entity) {
    if (!entity.isBall) {
        if (entity.x - entity.radius < STADIUM_BOUNDS.left) { entity.x = STADIUM_BOUNDS.left + entity.radius; entity.vx *= -CONSTANTS.restitution; }
        else if (entity.x + entity.radius > STADIUM_BOUNDS.right) { entity.x = STADIUM_BOUNDS.right - entity.radius; entity.vx *= -CONSTANTS.restitution; }
        if (entity.y - entity.radius < STADIUM_BOUNDS.top) { entity.y = STADIUM_BOUNDS.top + entity.radius; entity.vy *= -CONSTANTS.restitution; }
        else if (entity.y + entity.radius > STADIUM_BOUNDS.bottom) { entity.y = STADIUM_BOUNDS.bottom - entity.radius; entity.vy *= -CONSTANTS.restitution; }
        return; 
    }

    const isInsideGoalY = entity.y > GOAL_BOUNDS.top + entity.radius && entity.y < GOAL_BOUNDS.bottom - entity.radius;

    if (entity.y - entity.radius < FIELD_BOUNDS.top) { entity.y = FIELD_BOUNDS.top + entity.radius; entity.vy *= -0.50; } 
    else if (entity.y + entity.radius > FIELD_BOUNDS.bottom) { entity.y = FIELD_BOUNDS.bottom - entity.radius; entity.vy *= -0.50; }

    if (entity.x - entity.radius < FIELD_BOUNDS.left) {
        if (!isInsideGoalY) { entity.x = FIELD_BOUNDS.left + entity.radius; entity.vx *= -0.50; } 
        else if (entity.x - entity.radius < GOAL_BACK_BOUNDS.left) { entity.x = GOAL_BACK_BOUNDS.left + entity.radius; entity.vx *= -0.50; }
    }
    
    if (entity.x + entity.radius > FIELD_BOUNDS.right) {
        if (!isInsideGoalY) { entity.x = FIELD_BOUNDS.right - entity.radius; entity.vx *= -0.50; } 
        else if (entity.x + entity.radius > GOAL_BACK_BOUNDS.right) { entity.x = GOAL_BACK_BOUNDS.right - entity.radius; entity.vx *= -0.50; }
    }

    if (entity.x < FIELD_BOUNDS.left) {
        if (entity.y - entity.radius < GOAL_BOUNDS.top) { entity.y = GOAL_BOUNDS.top + entity.radius; entity.vy *= -0.50; }
        if (entity.y + entity.radius > GOAL_BOUNDS.bottom) { entity.y = GOAL_BOUNDS.bottom - entity.radius; entity.vy *= -0.50; }
    }
    if (entity.x > FIELD_BOUNDS.right) {
        if (entity.y - entity.radius < GOAL_BOUNDS.top) { entity.y = GOAL_BOUNDS.top + entity.radius; entity.vy *= -0.50; }
        if (entity.y + entity.radius > GOAL_BOUNDS.bottom) { entity.y = GOAL_BOUNDS.bottom - entity.radius; entity.vy *= -0.50; }
    }
}

function drawCustomMap() {
    const midX = L_WIDTH / 2; const midY = L_HEIGHT / 2;
    if (customMapData.bg && customMapData.bg.color) { ctx.fillStyle = '#' + customMapData.bg.color; ctx.fillRect(0, 0, L_WIDTH, L_HEIGHT); } 
    else { ctx.fillStyle = '#2b2c3a'; ctx.fillRect(0, 0, L_WIDTH, L_HEIGHT); }

    if (customMapData.segments && customMapData.vertexes) {
        customMapData.segments.forEach(seg => {
            if (seg.vis === false || seg.color === 'transparent') return;
            const v0 = customMapData.vertexes[seg.v0]; const v1 = customMapData.vertexes[seg.v1];
            if (!v0 || !v1) return;

            ctx.strokeStyle = seg.color ? '#' + seg.color : '#ffffff'; ctx.lineWidth = 3; ctx.beginPath();
            let p0x = midX + (v0.x || 0); let p0y = midY + (v0.y || 0); let p1x = midX + (v1.x || 0); let p1y = midY + (v1.y || 0);

            if (!seg.curve || seg.curve === 0) { ctx.moveTo(p0x, p0y); ctx.lineTo(p1x, p1y); } 
            else {
                let curveRad = seg.curve * Math.PI / 180; let dx = p1x - p0x; let dy = p1y - p0y; let d = Math.hypot(dx, dy);
                if (d > 0) {
                    let r = Math.abs((d / 2) / Math.sin(curveRad / 2)); let h = (d / 2) / Math.tan(curveRad / 2);
                    let cx = p0x + dx / 2 - h * dy / d; let cy = p0y + dy / 2 + h * dx / d;
                    let startAngle = Math.atan2(p0y - cy, p0x - cx); let endAngle = Math.atan2(p1y - cy, p1x - cx);
                    ctx.arc(cx, cy, r, startAngle, endAngle, seg.curve < 0);
                }
            }
            ctx.stroke();
        });
    }
}

function update() {
    if (!isGameActive || isChatFocused || isPaused) return;

    let locPlayer = players.find(p => p.id === localPlayerId);
    let isPlaying = (locPlayer.team === 'red' || locPlayer.team === 'blue');

    // Local oyuncunun entity'sini her zaman senkronize et
    if (playerEntities[localPlayerId]) {
        playerEntities[localPlayerId].x = player.x;
        playerEntities[localPlayerId].y = player.y;
        playerEntities[localPlayerId].vx = player.vx;
        playerEntities[localPlayerId].vy = player.vy;
    }

    if (isPlaying) {
        let inputX = 0; let inputY = 0;
        if (keys.w) inputY -= 1; if (keys.s) inputY += 1;
        if (keys.a) inputX -= 1; if (keys.d) inputX += 1;

        let currentMaxSpeed = CONSTANTS.maxSpeed; let currentAccel = CONSTANTS.playerAccel;
        if (keys.space || keys.f) { currentMaxSpeed *= 0.93; currentAccel *= 0.93; }

        if (inputX !== 0 || inputY !== 0) {
            let length = Math.sqrt(inputX * inputX + inputY * inputY);
            let accelX = (inputX / length) * currentAccel; let accelY = (inputY / length) * currentAccel;
            if (inputX !== 0 && Math.sign(inputX) !== Math.sign(player.vx) && Math.abs(player.vx) > 0.1) { player.vx *= 0.85; }
            if (inputY !== 0 && Math.sign(inputY) !== Math.sign(player.vy) && Math.abs(player.vy) > 0.1) { player.vy *= 0.85; }
            player.vx += accelX; player.vy += accelY;
        }

        const speed = Math.sqrt(player.vx * player.vx + player.vy * player.vy);
        if (speed > currentMaxSpeed) { player.vx = (player.vx / speed) * currentMaxSpeed; player.vy = (player.vy / speed) * currentMaxSpeed; }

        if (isKicking || isPassing) {
            let canKick = true;
            if (kickoffState.active && kickoffState.concedingTeam !== locPlayer.team) { canKick = false; }
            if (canKick) {
                const dx = ball.x - player.x; const dy = ball.y - player.y; const dist = Math.sqrt(dx * dx + dy * dy);
                if (dist < player.radius + ball.radius + CONSTANTS.kickRadius) {
                    const nx = dx / dist; const ny = dy / dist;
                    let appliedForce = isKicking ? CONSTANTS.kickForce : 1.8; 
                    ball.vx += nx * appliedForce; ball.vy += ny * appliedForce;
                    ball.lastTouchId = localPlayerId; 
                    if (kickoffState.active) { kickoffState.active = false; }
                }
            }
            isKicking = false; isPassing = false;
        }

        player.update(); 
        // Diğer oyuncu entity'leriyle çarpışma
        players.forEach(p => {
            if (p.id === localPlayerId || p.isKicked || p.team === 'spectator') return;
            let ent = playerEntities[p.id];
            if (ent) resolveCollision(player, ent);
        });
        resolveCollision(player, ball); 
        posts.forEach(post => { resolveCollision(player, post); });
        checkWallCollisions(player); restrictKickoff(player, locPlayer.team);

        // Local entity'yi güncelle
        if (playerEntities[localPlayerId]) {
            playerEntities[localPlayerId].x = player.x;
            playerEntities[localPlayerId].y = player.y;
            playerEntities[localPlayerId].vx = player.vx;
            playerEntities[localPlayerId].vy = player.vy;
        }
    }

    // Diğer oyuncuların fiziklerini çalıştır (topla çarpışma dahil)
    players.forEach(p => {
        if (p.id === localPlayerId || p.isKicked || p.team === 'spectator') return;
        let ent = playerEntities[p.id];
        if (!ent) return;
        ent.update();
        resolveCollision(ent, ball);
        posts.forEach(post => { resolveCollision(ent, post); });
        checkWallCollisions(ent);
        restrictKickoff(ent, p.team);
    });

    ball.update(); posts.forEach(post => { resolveCollision(ball, post); }); checkWallCollisions(ball); checkGoal();
}

function creditGoal(scoringTeam) {
    if (ball.lastTouchId !== null && ball.lastTouchId !== undefined) {
        let p = players.find(x => x.id === ball.lastTouchId);
        if (p && p.team === scoringTeam) { p.goals = (p.goals || 0) + 1; updateLobbyUI(); }
    }
}

function checkGoal() {
    if (isGoalScored) return; 
    const isInsideGoalY = ball.y > GOAL_BOUNDS.top + ball.radius && ball.y < GOAL_BOUNDS.bottom - ball.radius;
    
    if (isInsideGoalY) {
        if (ball.x + ball.radius < FIELD_BOUNDS.left) {
            isGoalScored = true; score.blue++; kickoffState.concedingTeam = 'red'; playGoalSound(); 
            creditGoal('blue'); processGoalEvent("Blue Scores!", "#5784f2");
        }
        else if (ball.x - ball.radius > FIELD_BOUNDS.right) {
            isGoalScored = true; score.red++; kickoffState.concedingTeam = 'blue'; playGoalSound(); 
            creditGoal('red'); processGoalEvent("Red Scores!", "#f2504b");
        }
    }
}

function processGoalEvent(teamText, color) {
    if (isGoldenGoal || score.red >= targetScore || score.blue >= targetScore) { handleEvent("MAÇ BİTTİ", teamText, color, true); } 
    else { handleEvent(teamText, "", color, false); }
}

function handleEvent(mainText, subText, color, isMatchEnd = false) {
    const overlay = document.getElementById('announcement-overlay'); const textEl = document.getElementById('announcement-text'); const subEl = document.getElementById('sub-announcement');
    textEl.innerText = mainText; textEl.style.color = color; subEl.innerText = subText || "";
    overlay.classList.add('visible'); clearTimeout(announcementTimeout);
    
    if (isMatchEnd) {
        isGameActive = false; setTimeout(() => { overlay.classList.remove('visible'); setupMenu.classList.add('visible'); startStopBtn.innerText = "▶ Start game"; startStopBtn.className = "start-game-btn"; }, 3000);
    } else {
        announcementTimeout = setTimeout(() => { overlay.classList.remove('visible'); resetPositions(); kickoffState.active = true; addChatMessage("Sistem", "Santra vuruşu bekleniyor...", "yellow"); }, 2500);
    }
    updateHeaderUI();
}

function checkTimeEnd() {
    if (!isGameActive || isPaused || isGoldenGoal) return;
    if (gameTime >= targetTimeSeconds) {
        if (score.red === score.blue) {
            isGoldenGoal = true; targetScore = score.red + 1; 
            handleEvent("SÜRE BİTTİ", "UZATMALAR: ALTIN GOL!", "#f1c40f", false); addChatMessage("Sistem", "Süre bitti. İLK GOLÜ ATAN KAZANIR!", "#f1c40f");
            document.getElementById('timer-display').style.color = '#f1c40f';
        } else {
            let winnerName = score.red > score.blue ? "Kırmızı Takım Kazandı!" : "Mavi Takım Kazandı!"; let color = score.red > score.blue ? "#f2504b" : "#5784f2";
            handleEvent("SÜRE BİTTİ", winnerName, color, true); 
        }
    }
}

function resetPositions() {
    isGoalScored = false; ball.lastTouchId = null;
    ball.x = L_WIDTH / 2; ball.y = L_HEIGHT / 2; ball.vx = 0; ball.vy = 0;

    // Her iki takım için aktif oyuncuları grupla
    const redPlayers  = players.filter(p => p.team === 'red'  && !p.isKicked);
    const bluePlayers = players.filter(p => p.team === 'blue' && !p.isKicked);

    const redPositions  = getSpawnPositions('red',  redPlayers.length);
    const bluePositions = getSpawnPositions('blue', bluePlayers.length);

    redPlayers.forEach((p, i) => {
        let ent = getOrCreateEntity(p);
        let pos = redPositions[i] || { x: FIELD_BOUNDS.left + 100, y: L_HEIGHT / 2 };
        ent.x = pos.x; ent.y = pos.y; ent.vx = 0; ent.vy = 0;
        ent.color = '#f2504b';
        if (p.id === localPlayerId) { player.x = ent.x; player.y = ent.y; player.vx = 0; player.vy = 0; }
    });

    bluePlayers.forEach((p, i) => {
        let ent = getOrCreateEntity(p);
        let pos = bluePositions[i] || { x: FIELD_BOUNDS.right - 100, y: L_HEIGHT / 2 };
        ent.x = pos.x; ent.y = pos.y; ent.vx = 0; ent.vy = 0;
        ent.color = '#5784f2';
        if (p.id === localPlayerId) { player.x = ent.x; player.y = ent.y; player.vx = 0; player.vy = 0; }
    });

    updateHeaderUI();
}

function updateHeaderUI() { 
    document.getElementById('score-red').innerText = score.red; document.getElementById('score-blue').innerText = score.blue; 
    const m = String(Math.floor(gameTime / 60)).padStart(2, '0'); const s = String(gameTime % 60).padStart(2, '0');
    document.getElementById('timer-display').innerText = `${m}:${s}`;
}

setInterval(() => { if (!isGameActive || isPaused || kickoffState.active) return; gameTime++; updateHeaderUI(); checkTimeEnd(); }, 1000);

function draw() {
    ctx.fillStyle = '#2b2c3a'; ctx.fillRect(0, 0, canvas.width, canvas.height); ctx.save(); 

    const scale = Math.min(canvas.width / L_WIDTH, canvas.height / L_HEIGHT);
    const offsetX = (canvas.width - L_WIDTH * scale) / 2; const offsetY = (canvas.height - L_HEIGHT * scale) / 2;
    ctx.translate(offsetX, offsetY); ctx.scale(scale, scale);

    let locPlayer = players.find(p => p.id === localPlayerId);
    
    if (zoomLevel > 1) { 
        ctx.translate(L_WIDTH / 2, L_HEIGHT / 2); ctx.scale(zoomLevel, zoomLevel); 
        if (locPlayer.team === 'spectator') { ctx.translate(-L_WIDTH/2, -L_HEIGHT/2); } else { ctx.translate(-player.x, -player.y); }
    }

    drawCustomMap();

    // Tüm oyuncuların karakterlerini çiz
    players.forEach(p => {
        if (p.isKicked || p.team === 'spectator') return;
        let ent = (p.id === localPlayerId) ? player : playerEntities[p.id];
        if (!ent) return;

        // Yerel oyuncuya halka efekti
        if (p.id === localPlayerId && (keys.space || keys.f) && isGameActive && !isChatFocused && !isPaused) {
            ctx.beginPath(); ctx.arc(ent.x, ent.y, ent.radius + 6, 0, Math.PI * 2);
            ctx.lineWidth = 3; ctx.strokeStyle = 'rgba(255, 255, 255, 0.7)'; ctx.stroke();
        }

        // Karakteri çiz
        let entColor = p.team === 'red' ? '#f2504b' : '#5784f2';
        ctx.beginPath(); ctx.arc(ent.x, ent.y, ent.radius, 0, Math.PI * 2);
        ctx.fillStyle = entColor; ctx.fill();
        ctx.lineWidth = 3; ctx.strokeStyle = '#000'; ctx.stroke();

        // Avatar numarası
        ctx.fillStyle = '#fff'; ctx.font = 'bold 18px Arial'; ctx.textAlign = 'center'; ctx.textBaseline = 'middle';
        ctx.fillText(p.avatar || '7', ent.x, ent.y + 2);

        // İsim etiketi
        const isOutOfPitch = ent.x < FIELD_BOUNDS.left || ent.x > FIELD_BOUNDS.right || ent.y < FIELD_BOUNDS.top || ent.y > FIELD_BOUNDS.bottom;
        ctx.fillStyle = p.team === 'red' ? '#f2504b' : '#5784f2';
        ctx.font = 'bold 16px Arial'; ctx.textAlign = 'center'; ctx.textBaseline = 'top';
        let dynamicLabel = `${p.name}${p.goals > 0 ? ' (' + p.goals + ')' : ''}`;
        if (isOutOfPitch) { ctx.fillStyle = 'rgba(255,255,255,0.7)'; dynamicLabel += " (Dışarıda)"; }
        ctx.fillText(dynamicLabel, ent.x, ent.y + ent.radius + 15);
    });

    posts.forEach(post => post.draw(ctx)); ball.draw(ctx);

    ctx.restore(); 

    if (isPaused && isGameActive) {
        ctx.fillStyle = 'rgba(0, 0, 0, 0.6)'; ctx.fillRect(0, 0, canvas.width, canvas.height);
        ctx.fillStyle = 'white'; ctx.font = 'bold 64px Arial'; ctx.textAlign = 'center'; ctx.textBaseline = 'middle'; ctx.fillText('GAME PAUSED', canvas.width / 2, canvas.height / 2);
    }
}

function gameLoop() { update(); draw(); requestAnimationFrame(gameLoop); }
requestAnimationFrame(gameLoop);