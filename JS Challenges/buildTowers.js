


function towerBuilder(nFloors) {
    let tower = [];
    let space = 0;

    for (let i = nFloors; i > 0; i--) {
        tower.push(" ".repeat(space) + "*".repeat(i) + "*".repeat(i - 1) + " ".repeat(space));
        space++;
    }

    return tower.reverse();
}