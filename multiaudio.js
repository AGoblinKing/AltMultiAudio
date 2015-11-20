var MultiAudio = (function() {
    "use strict";
    
    var sync = altspace.utilities.sync.getInstance({
            appId : "MultiAudio",
            authorId: "Galvus"
        }),
        rate = 24/1000,
        audioCtx = new (window.AudioContext || window.webkitAudioContext)(),
        receiveBuffer = audioCtx.createBuffer(1, 
            audioCtx.sampleRate * rate, 
            audioCtx.sampleRate),
        receivePlayer = audioCtx.createBufferSource();
        
    receivePlayer.buffer = receiveBuffer;
    receivePlayer.connect(audioCtx.destination);
    
    function HostMA(sourceBuffer) {
        this.source = sourceBuffer;
        this.interval = setInterval(this.send.bind(this), rate);
    };
    
    HostMA.prototype.stop = function() {
        clearInterval(this.interval);
        return this;
    };
    
    HostMA.prototype.send = function() { 
    };
    
    // make it work like MultiCanvas
    return function(sourceBuffer) {
        return new HostMA(sourceBuffer);
    };
} ());