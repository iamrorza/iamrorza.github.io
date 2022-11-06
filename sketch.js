function SmallRAnimation(){
    
    let projectLetters = ['P','o','j','e','c','t','s']
    let textsize = mainNameTextSize
    let offset = 85

    switch(screenSize){
        case "small":
            offset = 40
            break
        case "med":
            offset = 50
            break
    }

    let pcDivided = 0.11
    if(millis() < clickedOnTime + r.animationTime){
        let percent = (millis()-clickedOnTime)/r.animationTime
        for(var i = 1; i <=projectLetters.length; ++i){
            if(percent > (i-1) * pcDivided && percent < i * pcDivided)fill(0, 255 * (percent%pcDivided)/pcDivided)
            else if(percent > (i-1) * pcDivided )fill(0)
            else noFill()
            let y
            
            if(i === 1)y = -offset 
            else y = offset * (i-1)
            text(projectLetters[i-1],r.x, r.y + y)
        }
        finishedTime = millis()
    }
    else{
        text("P", r.x, r.y -offset)
        for(var i = 1; i < projectLetters.length; ++i)text(projectLetters[i], r.x, r.y + offset * i)
        project(offset)
    }
}

function project(offset){
    
    let ani1Time = 400
    let ani2Time = 600

    let textsize = mainNameTextSize * 0.3
    let projects = ['DarkPixel', 'GameOfLife2D']
    let divide = 1/projects.length
    let lineX = (r.x - R.x) * 0.8
    let numLines = 6
    let lineOffsetTime = 20

    let lineColour = color(170,170,250)

    textSize(textsize)
    textAlign(LEFT)
    if(millis() < finishedTime + ani1Time){
        stroke(lineColour)
        for(var i = 0; i < numLines; ++i){
            let xMultiplier = (millis()-finishedTime)/(ani1Time-((numLines-i) * lineOffsetTime))
            xMultiplier = constrain(xMultiplier, 0, 1)
            let y = R.y + offset * 0.5 + i
            line(R.x, y, R.x + lineX * xMultiplier, y)
        }      
    }
    else if(millis() < finishedTime + ani1Time + ani2Time){
        let percent = (millis() - finishedTime - ani1Time)/(ani2Time) 

        noStroke()
        for(var i = 1; i <=projects.length; ++i){
            let x
            if(percent > divide * (i-1) && percent > divide * i)
                x = R.x
            else if(percent > divide * (i-1) && percent < divide * (i))
                x = R.x + windowWidth * (1 - (percent % divide)/divide)
            else 
                x = windowWidth *100
            let y = R.y + offset * i
            text("- " + projects[i-1],x, y) 
        }
        stroke(lineColour)
        for(var i = 0; i < numLines; ++i)line(R.x, R.y + offset * 0.5 + i, R.x + lineX, R.y + offset * 0.5 + i)
    }
    else{
        stroke(lineColour)
        for(var i = 0; i < numLines; ++i)line(R.x, R.y + offset * 0.5 + i, R.x + lineX, R.y + offset * 0.5 + i)
        noStroke()
        for(var i = 1; i <=projects.length; ++i){
            text("- " + projects[i-1],R.x, R.y + offset * (i))
        }
    }



}
