
function isValidWalk(walk) {
    const north = walk.filter(item => { return item === "n" }).length;
    const south = walk.filter(item => { return item === "s" }).length;
    const east = walk.filter(item => { return item === "e" }).length;
    const west = walk.filter(item => { return item === "w" }).length;
    
    return walk.length === 10 && north === south && east === west;
  }



function isValidWalk(walk) {
    return walk.length == 10 && !walk.reduce(function(w,step){ return w + {"n":-1,"s":1,"e":99,"w":-99}[step]},0)
  }