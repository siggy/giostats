GAME_SIZE = 8;

var gameCount = 0;
var user = document.getElementsByTagName("input")[0].value;
var games;

document.getElementById("replaylist-button").onclick = waitForReplays;

// wait for replay window to open
function waitForReplays() {
  games = document.getElementsByClassName("replay-col-result");
  if (games.length !== 0) {
    loadMore();
  } else {
    setTimeout(function() { waitForReplays() }, 100);
  }
}

// load all replays
function loadMore() {
  var btn = document.getElementsByClassName("small inverted center-horizontal")[0];
  if (btn.innerText !== "Load More") {
    dumpData();
  } else {
    btn.click();
    setTimeout(function() { loadMore() }, 100);
  }
}

function dumpData() {
  var places = new Array(GAME_SIZE).fill(0);
  for (i = 0; i < games.length; i++) {
    var spans = [].filter.call(games[i].childNodes,
      function(node) {
        return node.nodeName === 'SPAN';
      }
    );
    if (spans.length != GAME_SIZE) {
      continue;
    }
    gameCount++;
    for (j = 0; j < spans.length; j++) {
      if (spans[j].innerText.indexOf(user) !== -1) {
        places[j]++;
        break;
      }
    }
  }

  var container = document.getElementById("replays-table-container");
  var div = container.insertBefore(document.createElement("div"), container.firstChild);
  div.style.fontSize = "xx-large";
  div.style.textAlign ="left";
  div.style.width = "400px";
  div.style.padding = "10px";

  var span = document.createElement("span");
  span.appendChild(document.createTextNode("total games: " + gameCount));
  span.style.fontFamily = '"Lucida Console",Monaco,monospace';
  div.appendChild(span);
  div.appendChild(document.createElement("br"));
  div.appendChild(document.createElement("br"));

  for (i = 0; i < places.length; i++) {
    var span = document.createElement("span");
    span.appendChild(
      document.createTextNode(
        i+1 +
        ": " +
        places[i] +
        " (" +
        (100*places[i]/gameCount).toFixed(2) +
        "%)"
      )
    );
    span.style.fontFamily = '"Lucida Console",Monaco,monospace';
    div.appendChild(span);
    div.appendChild(document.createElement("br"));
  }
}
