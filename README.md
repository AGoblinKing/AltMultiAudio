# MultiAudio
Uses firebase to stream audio to remote slaves.

## Quick Start
Just include multiaudio on your page to set it up as a slave.

Otherwise to stream audio: 
```javascript
    MultiAudio(AudioBufferSource);
```

A key will be appended to the URL which you can append to the slave URL to use.

## Example

host.html?key=bloop
slave.html?key=bloop
