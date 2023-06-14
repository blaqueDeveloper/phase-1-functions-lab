// Code your solution in this file!
function distanceFromHqInBlocks(location){
    let distance
    if (location > 42){
        distance = location - 42
        return distance
    }
    else{
        distance = 42 - location
        return distance
    }
}

function distanceFromHqInFeet(location){
    let feet = distanceFromHqInBlocks(location) * 264
    return feet
}

function distanceTravelledInFeet(start, destination){
    let distance
    if (destination > start){
        distance = (destination - start) * 264
        return distance
    }
    else{
        distance = (start - destination) * 264
        return distance
    }
}

function calculatesFarePrice(start, destination){
    let fare
    let howFar = distanceTravelledInFeet(start, destination)

    if (howFar <= 400){
        return fare = 0
    }
    else if (howFar > 400 && howFar <= 2000){
        let fare = (howFar - 400) * 0.02
        return fare
    }
    else if(howFar > 2000 && howFar <= 2500){
        return 25
    }
    else{
        return 'cannot travel that far'
    }
}