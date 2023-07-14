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
    const rocket = document.getElementById("rocket");
   
    let rocketPosX = 0;
    let rocketPosY = 0;
    let altitude = 0;
    
    takeoff.addEventListener("click", function(){
        window.confirm("Confirm the shuttle is ready for takeoff")
        if (takeoff){
            flightStatus.innerHTML = "Shuttle in Flight";
            shuttleBackground.style.backgroundColor = 'blue';
            altitude = 10000;
            spaceShuttleHeight.innerHTML = altitude;
            rocketPosY += 10;
            rocket.style.marginBottom = rocketPosY + "px";
        }
        
    });

    landing.addEventListener("click", function(){
        window.alert("The shuttle is landing. Landing gear engaged.")
        
            flightStatus.innerHTML =  "The shuttle has landed.";
            resetRocket();
        });

        missionAbort.addEventListener("click", function(){
            window.confirm("Confirm that you want to abort the mission.")
            if (missionAbort){
                flightStatus.innerHTML = "Mission aborted.";
                resetRocket();
            }
            
        });

        document.addEventListener("click", function(event){
           let backgrounddWidth = parseInt(window.getComputedStyle(shuttleBackground).getPropertyValue("width"));
           console.log('background width is',backgrounddWidth);

                if (event.target.id === "left" && rocketPosX > -(backgrounddWidth / 2 - 40)){
                    rocketPosX -= 10;
                    rocket.style.marginLeft = rocketPosX + "px";
                }

                if (event.target.id === "right" && rocketPosX < (backgrounddWidth / 2 - 40)){
                    rocketPosX += 10;
                    rocket.style.marginLeft = rocketPosX + "px";
                }

                if (event.target.id === "up" && altitude < 250000){
                    rocketPosY += 10;
                    rocket.style.marginBottom = rocketPosY + "px";
                    altitude += 10000;
                    spaceShuttleHeight.innerHTML = altitude;
                }

                if (event.target.id === "down" && altitude > 0){
                    rocketPosY -= 10;
                    rocket.style.marginBottom = rocketPosY + "px";
                    altitude -= 10000;
                    spaceShuttleHeight.innerHTML = altitude;

                }
            
            
        });
        function resetRocket(){
            shuttleBackground.style.backgroundColor = 'green';
                altitude = 0;
                spaceShuttleHeight.innerHTML = altitude;
                rocketPosX = 0;
                rocketPosY = 0;
                rocket.style.marginLeft = 0 + "px";
                rocket.style.marginBottom = 0 + "px";

        }
        
});
