const myObject = {
    js: 'javascript',
    cpp: 'C++',
    rb: 'ruby',
    py: 'pyhton'
}

for (const key in myObject) {
    console.log(key);
}

for (const key in myObject) {
    console.log(myObject[key]);
} 