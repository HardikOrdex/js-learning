let doors = {1: false,2: false,3: false,4: false,5: false,6: false,7: false,8: false,9: false,10: false,
    11: false,12: false,13: false,14: false,15: false,16: false,17: false,18: false,19: false,20: false
}
for (let monkey = 1; monkey <= 20; monkey++){
    // console.log("MONKEY: "+monkey);
    for(const door in doors){
        if((door)%monkey == 0){
            // console.log(`Before: ${door}`);
            doors[door] = !doors[door];
            // console.log(`After: ${door}`);
        }
    }
    // console.log(`DOORS: ${JSON.stringify(doors)}\n`)
}
console.log(doors)