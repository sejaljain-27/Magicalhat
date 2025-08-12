function assignHouses() {
    const input = document.getElementById("students").value;
    const students = input.split(",").map(s => s.trim()).filter(s => s.length > 0);
    const houses = {
        Gryffindor: [],
        Hufflepuff: [],
        Ravenclaw: [],
        Slytherin: []
    };

    for (let student of students) {
        if (student.length < 6) {
            houses.Gryffindor.push(student);
        } else if (student.length < 8) {
            houses.Hufflepuff.push(student);
        } else if (student.length < 12) {
            houses.Ravenclaw.push(student);
        } else {
            houses.Slytherin.push(student);
        }
    }

    let html = "";
    for (let house in houses) {
        html += `<div class="house"><span>${house}:</span> ${houses[house].join(", ") || "None"}</div>`;
    }
    document.getElementById("result").innerHTML = html;
}