// Write your JavaScript code here.
// Remember to pay attention to page loading!
window.addEventListener('load',function(){
    const takeoff = document.getElementById("takeoff");
    const flightStatus = document.getElementById('flightStatus');
    const shuttleBackground = document.getElementById("shuttleBackground");
    const spaceShuttleHeight = document.getElementById("spaceShuttleHeight");
    const landing = document.getElementById("landing");
    const missionAbort = document.getElementById("missionAbort");
    const up = document.getElementById("up");
    const down = document.getElementById("down");
    const right = document.getElementById("right");
    const left = document.getElementById("left");


    
    takeoff.addEventListener("click", function(){
        window.confirm("Confirm the shuttle is ready for takeoff")
        if (takeoff){
            flightStatus.innerHTML = "Shuttle in Flight";
            shuttleBackground.style.backgroundColor = 'blue';
            spaceShuttleHeight.innerHTML = "10,000"
        }
        
    });

    landing.addEventListener("click", function(){
        window.alert("The shuttle is landing. Landing gear engaged.")
        
            flightStatus.innerHTML =  "The shuttle has landed.";
            shuttleBackground.style.backgroundColor = 'green';
            spaceShuttleHeight.innerHTML = "0"
        });

        missionAbort.addEventListener("click", function(){
            window.confirm("Confirm that you want to abort the mission.")
            if (missionAbort){
                flightStatus.innerHTML = "Mission aborted.";
                shuttleBackground.style.backgroundColor = 'green';
                spaceShuttleHeight.innerHTML = "0"
            }
            
        });

        up.addEventListener("click", function(){
            
            
            
            
        });

        up.addEventListener("click", function(){
            
            
            
            
        });


});
